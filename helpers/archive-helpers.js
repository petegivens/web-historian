var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt'),
  index: path.join(__dirname, '../web/public/index.html')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!




exports.readListOfUrls = function(callback) {
  fs.readFile(this.paths.list, (err, data) => {
    if (err) {
      throw err;
    }
    var results = data.toString().split('\n');
    callback(results);
  });
};

exports.isUrlInList = function(url, callback) {

  this.readListOfUrls((arr) => {
    console.log('arr: ', arr);
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === url) {
        callback(true);
      }
    }
    callback(false);
  });
};

exports.addUrlToList = function(url, callback) {
};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};






// exports.readListOfUrls = function(callback) {
//   results = [];
//
//   fs.readFile(this.paths.list, (err, data) => {
//     if (err) {
//       throw err;
//     }
//     var results = data.split('\n');
//     end(callback(results));
//   });
// };
//
// exports.isUrlInList = function(url, array) {
//   for (var i = 0;i<array.length;i++) {
//     if (url === array[i]) {
//       return true;
//     }
//     return false;
//     addUrlToList(url, );
//   }
// };
//
// exports.addUrlToList = function(url, callback) {
//
// };
//
// exports.isUrlArchived = function(url, callback) {
// };
//
// exports.downloadUrls = function(urls) {
// };
//
