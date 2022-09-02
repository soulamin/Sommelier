var fs = require("fs");
var https = require("https");
request = require("request");
const axios = require("axios");
var { format } = require("date-fns");

function fileNameFromUrl(url) {
  var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
  if (matches.length > 1) {
    return matches[1];
  }
  return null;
}

module.exports = function saveImageToDisk(uri, localPath) {
  request.head(uri, function (err, res, body) {
    // console.log("content-type:", res.headers["content-type"]);
    // console.log("content-length:", res.headers["content-length"]);
    var day = format(new Date(), "yyyy-MM-dd-HH-mm-ss");

    if (process.env.NODE_ENV !== "development") {
      request(uri)
        .pipe(fs.createWriteStream(localPath + fileNameFromUrl(uri)))
        .on("close", () => {
          console.log(uri);
        });
    }
  });
  return (
    process.env.BASE_URL_APP + "/sommelier/imagens/" + fileNameFromUrl(uri)
  );
};
