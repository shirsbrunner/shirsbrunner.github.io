// 11ty configuration
const
  dev  = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date() /*,/*comma only needed during upgrades*/
  /*UpgradeHelper = require('@11ty/eleventy-upgrade-help');/* Only needed during upgrades */




module.exports = config => {

  /* --- PLUGINS ---*/
  
  //navigation
  config.addPlugin( require('@11ty/eleventy-navigation') );
  
  
  //add other plugins here...
  /*config.addPlugin(UpgradeHelper);/* Only needed during upgrades */

  /* local server-options*/
  config.setServerOptions({
    showAllHosts: true, 
  });

  /* --- SHORTCODES --- */

  // page navigation
  config.addShortcode('navlist', require('./lib/shortcodes/navlist.js'));

  /* --- collections ---*/
  // post collection (in src/articles)
  config.addCollection('posts', collection =>

    collection
      .getFilteredByGlob('./src/articles/**/article.md')
      .filter(p => dev || (!p.data.draft && p.data.date <= now)) //need to change this filter to move updated content to the front
      .sort((b,a) => 
        // this assigns a pair b,a (change to a,b if reverse sorting) the following function
        // the function picks the bigger of the updateDate and data.date and sorts accordingly
        Math.max(
          isNaN(b.data.date) ? 0 : b.data.date, 
          isNaN(b.data.updateDate) ? 0 : b.data.updateDate) 
          - 
        Math.max(
          isNaN(a.data.date) ? 0 : a.data.date, 
          isNaN(a.data.updateDate) ? 0 : a.data.updateDate) 
        )
  );

  // typeface-collection (in src/typetester)
  config.addCollection('typefaces', collection =>
    collection
      .getFilteredByGlob('./src/articles/**/*typetester.md')
      .filter(p => dev || (!p.data.draft && p.data.date <= now)) //need to change this filter to move updated content to the front
      .sort((b,a) => 
        // this assigns a pair b,a (change to a,b if reverse sorting) the following function
        // the function picks the bigger of the updateDate and data.date and sorts accordingly
        Math.max(
          isNaN(b.data.date) ? 0 : b.data.date, 
          isNaN(b.data.updateDate) ? 0 : b.data.updateDate) 
          - 
        Math.max(
          isNaN(a.data.date) ? 0 : a.data.date, 
          isNaN(a.data.updateDate) ? 0 : a.data.updateDate) 
        )
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
  const dateformat = require('./lib/filters/dateformat.js');
  config.addFilter('datefriendly', dateformat.friendly);
  config.addFilter('dateymd', dateformat.ymd);

  // format word count and reading time
  config.addFilter('readtime', require('./lib/filters/readtime.js')); 
  
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
  
  /* --- CSS-Stuff - adding everything in webApps --- */
  config.addPassthroughCopy('src/webApps');

  /*--- images - adding everything in images-folder ---*/
  config.addPassthroughCopy('src/images');

  /*--- images - adding images from a blog-entry folder. 
  This allows a file of the described file-ending to pass---*/
  config.addPassthroughCopy('./src/articles/**/*.jpg')
  config.addPassthroughCopy('./src/articles/**/*.png')


  /*--- fonts - adding global fonts ---*/
  config.addPassthroughCopy('src/fonts');
  /*--- fonts - adding local fonts in blogposts ---*/
  config.addPassthroughCopy('./src/articles/**/*.woff');
  config.addPassthroughCopy('./src/articles/**/*.woff2');
  
  /*-- favicons & manifest --*/
  /*-- the following moves from a to b using {a:b} --*/
  config.addPassthroughCopy({'./src/images/structural/icon.svg' : './icon.svg'});
  config.addPassthroughCopy({'./src/images/structural/favicon.ico' : './favicon.ico'});
  config.addPassthroughCopy('./src/manifest.webmanifest'); //mainly used for fonts

  /*-- CNAME-file-Copy --*/ 
  config.addPassthroughCopy({'./src/assets/CNAME/CNAME' : './CNAME'});
  // 11ty defaults - where to take files and where to put them
  return {

    dir: {
      input: 'src',
      output: 'docs', /*changed for github*/
      includes: '_includes' /*added during update*/
    }

  };
};

