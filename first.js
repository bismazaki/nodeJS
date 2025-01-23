//  console.log("Hello Node js start hogayi")
//  var , let, const
// Built in Module

// os , url, path ,  querystring, time

//  ----------------------------- OS -----------------------------
const os_info = require("os");
console.log(`${os_info.arch()}`);
console.log(`${os_info.cpus}`);
console.log(`${os_info.freemem()}`);
console.log(`${os_info.homedir()}`);
console.log(`${os_info.hostname()}`);
console.log(`${os_info.networkInterfaces()}`);
console.log(`${os_info.platform()}`);
console.log(`${os_info.totalmem()}`);
console.log(`${os_info.version()}`);

console.log("---------------------------- URL ----------------------")
const url_info = require("url");
const link = new URL("https://www.google.com/search?q=register+form+app+template&rlz=1C1GCEU_enPK864PK864&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkxNzQ1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8")


console.log(`${link.hash}`);
console.log(`${link.href}`);
console.log(`${link.pathname}`);
console.log(`${link.port}`);
console.log(`${link.protocol}`);
console.log(`${link.search}`);
console.log(`${link.searchParams.get('q')}`);

console.log("---------------------------- path ----------------------")


const path_info = require("path")
const file_info = "SAR Month DECEMBER 2024.xlsx";

console.log(`${path_info.basename(file_info)}`)
console.log(`${path_info.extname(file_info)}`)
console.log(`${path_info.dirname(file_info)}`)



console.log("---------------------------- TimeOut ----------------------")

setTimeout(()=>{
    console.log("Bhoooooooooooooooooooooooooom");
    console.log("Time End");

},5000)


console.log("---------------------------- Interval ----------------------")
let count = 0
const a = setInterval(()=>{
    count = count+1;
    console.log(`Timer : ${count}`)
    if (count === 10) {
        console.log(" -------------- Stop --------------")
        clearInterval(a)
    }
},1000)


console.log("---------------------------- Query String ----------------------")
console.log("---------------------------- PARSE ----------------------")


const qs = require("querystring");
const data = {name:"lala",id:2,fees:9000};
const convert = qs.stringify(data);
console.log(convert)