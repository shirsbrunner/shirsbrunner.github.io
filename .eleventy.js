// 11ty configuration
const
  dev  = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = config => {

  /* --- PLUGINS ---*/
  
  //navigation
  config.addPlugin( require('@11ty/eleventy-navigation') );
  
  
  //add other plugins here...

  /* --- SHORTCODES --- */

  // page navigation
  config.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));

  /* --- collections ---*/
  // post collection (in src/articles)
  config.addCollection('post', collection =>

    collection
      .getFilteredByGlob('./src/articles/*.md')
      .filter(p => dev || (!p.data.draft && p.date <= now))

  );
  
  // Get the first `n` elements of a collection.
  config.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });
  

  /* --- FILTERS --- */

  // format dates
  const dateformat = require('./lib/filters/dateformat');
  config.addFilter('datefriendly', dateformat.friendly);
  config.addFilter('dateymd', dateformat.ymd);

  // format word count and reading time
  config.addFilter('readtime', require('./lib/filters/readtime')); 
  
  /* --- CSS-Stuff --- */
  config.addPassthroughCopy('src/assets');
  
  /*--- images ---*/
  config.addPassthroughCopy('src/images');

  /*--- fonts ---*/
  config.addPassthroughCopy('src/fonts');

  // 11ty defaults
  return {

    dir: {
      input: 'src',
      output: 'docs' /*changed for github*/
    }

  };
};