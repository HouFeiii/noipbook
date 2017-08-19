var CONFIG = {
  // your website's title
  document_title: "NoipBook",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "SUMMARY.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://coding.net/u/Rainboy/p/noipbook/git",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

