var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var http = require('http');

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
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === url) {
        callback(true);
      }
    }
    callback(false);
  });
};

exports.addUrlToList = function(url, callback) {
  fs.appendFile(this.paths.list, url+'\n', callback);
};

exports.isUrlArchived = function(url, callback) {
  callback(fs.existsSync(this.paths.archivedSites+'/'+url));
};

exports.downloadUrls = function(urls) {

  // for (var i = 0;i<urls.length;i++) {
  //   console.log(urls[i]);
  //   var file = fs.createWriteStream(this.paths.archivedSites + '/' + urls[i]);
  //   var request = http.get('http://' + urls[i], function(response) {
  //     response.pipe(file);
  //     file.on('finish', function() {
  //       file.close();  // close() is async, call cb after close completes.
  //     });
  //   });

  var tasksToGo = urls.length;
  urls.forEach((url) => {
    var file = fs.createWriteStream(this.paths.archivedSites + '/' + urls[i]);
    http.get('http://' + urls[i], function(response) {
      response.pipe(file);
      if (--tasksToGo === 0) {
        response.end();
      }
    });
  });
    //
    // keys.forEach(function(key) {
    //         var query = config[key].query;
    //         search(query, function(result) {
    //             results.push(result);
    //             if (--tasksToGo === 0) {
    //                 // No tasks left, good to go
    //                 onComplete();
    //             }
    //         });
    //     });


    // http.get('http://' + urls[i], (res) => {
    //   let rawData = '';
    //   res.on('data', (chunk) => {
    //     rawData += chunk;
    //     console.log('rawData: ', rawData)
    //   });
    //   res.on('end', () => {
    //     console.log('rawData: ', rawData);
    //     ////
    //     v);
    //     });
    //     /////
    //     fs.writeFile(this.paths.archivedSites+'/'+ urls[i], rawData, (err) => {
    //       console.log('rawData: ', rawData);
    //       console.log('path: ', this.paths.archivedSites+'/'+ urls[i]+'/index.html');
    //     });
    //   })
    // });

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
