var Js2Image = require("./index.js");
var path = require("path");
var source = "./resource/jquery.1.7.1.min.js";
var image = path.join(__dirname,"./resource/tree.png");
var out = source.replace(".js",".xmas.js");

Js2Image.writeToFile(source,image,out,{reverse:false}).then(function(code){

});

