// 11ty configuration
const
  dev  = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date(),
  UpgradeHelper = require("@11ty/eleventy-upgrade-help"); /* NEW */

module.exports = function(eleventyConfig) {eleventyConfig.addPlugin(UpgradeHelper);};

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
      .getFilteredByGlob('./src/articles/**/*.md')
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
  
  //the following two are used to display tags on a blog entry. 
  config.addFilter("filterTagList", tags => {
    // should match the list in tags.njk
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  });

  // Create an array of all tags
  config.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return [...tagSet].sort((a, b) => a.localeCompare(b));
  });

  /* --- CSS-Stuff - adding everything in assets --- */
  config.addPassthroughCopy('src/assets');
  
  /*--- images - adding everything in images-folder ---*/
  config.addPassthroughCopy('src/images');

  /*--- images - adding images from a blog-entry folder. 
  This allows a file of the described file-ending to pass---*/
  config.addPassthroughCopy('./src/articles/**/*.jpg')

  /*--- fonts - adding global fonts ---*/
  config.addPassthroughCopy('src/fonts');
  /*--- fonts - adding local fonts in blogposts ---*/
  config.addPassthroughCopy('./src/articles/**/*.woff');
  config.addPassthroughCopy('./src/articles/**/*.woff2');


  // 11ty defaults - where to take files and where to put them
  return {

    dir: {
      input: 'src',
      output: 'docs' /*changed for github*/
    }

  };
};
