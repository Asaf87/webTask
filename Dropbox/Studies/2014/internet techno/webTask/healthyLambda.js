// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');
// var express = require('express');
// var app = express();
// var Jimp = require("jimp");


// //app.use(express.static(__dirname+'/page'));
// //app.get( '/', function( req, res ) {
// //    res.sendFile( path.join( __dirname, 'page', 'index.html' ));
// //    return res.end();
// //
// //});
// //app.listen(8010);


// http.createServer(function (req, res) {
//     if (req.url == '/fileupload') {

//         var form = new formidable.IncomingForm();

//         form.parse(req, function (err, fields, files) {

//             console.log(files);
//             var oldpath = files.filetoupload.path;

//             console.log("oldpath "+oldpath );
//             console.log("__dirname "+__dirname);

//             var path ="/";
//             Jimp.read(oldpath, function (err, lenna) {
//                 if (err) throw err;
//                 lenna.resize(256, 256)            // resize
//                     .quality(60)                 // set JPEG quality
//                     .greyscale()                 // set greyscale
//                     .write("lena-small-bw.jpg"); // save
//             });
//         });
//     } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         res.end();
//     }
// }). listen(8090);# webTask
\
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

module.exports = function (context, req, res) {
      if (req.url == '/fileupload') {
        // var form = new formidable.IncomingForm();
        // form.parse(req, function (err, fields, files) {
        //     var oldpath = files.filetoupload.path;
        //     var newpath = files.filetoupload.name;
        //     fs.rename(oldpath, newpath, function (err) {
        //         if (err) throw err;
        //         res.write('File uploaded and moved!');
        //         res.end();
        //     });
        // });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
      
        return res.end();
    }
} 
