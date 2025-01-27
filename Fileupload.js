var server = require("http");
var formidable = require("formidable");
var fs = require('fs')

server.createServer(function(req,res){
    if(req.url === "/data" && req.method.toLowerCase() == "post"){
        var file = new formidable.IncomingForm();
        file.parse(req , function(error,fields,files){
            if(error){
                res.writeHead(500 ,{"content-type" : "text/html"})
                res.write("Uploading Error");
                res.end();
                return;
            }
            var Uploading = files.upload[0];
            if(!Uploading){
                res.writeHead(500 ,{"content-type" : "text/html"})
                res.write("Something Went Wrong");
                res.end();
                return;
            }
            var temp_location = Uploading.filepath;
            var new_location = "C:/Users/Bisma/Desktop/Node/demo/" + Uploading.originalFilename;

            fs.rename(temp_location ,new_location , function(error){
                if(error){
                    res.writeHead(500 ,{"content-type" : "text/html"})
                res.write("Not Work");
                res.end();
                return;
                }
                res.writeHead(200 ,{"content-type" : "text/html"})
                res.write("File Upload to Your Folder")
                res.end();
            })
        })
    }
    else{
        res.writeHead(200,{"content-type" : "text/html"})
        res.write('<form action="/data" method="post" enctype="multipart/form-data">');
        res.write(' <p>Choose File</p>');
        res.write('<input type="file" name="upload" />');
        res.write(' <br/>');
        res.write(' <input type="submit" value="Upload">');
        res.write(' </form>');

    }
}).listen(8000,function(){
    console.log("Server Started at \thttp://localhost:8000")
})