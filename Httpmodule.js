let http_module = require("http");

http_module.createServer(function(request , response){
    if(request.url === "/"){
        response.writeHead(200, {"content-type":"text/html"})
        response.write("<h1>Home Page</h1>");
        http_module.get("http://67768c0e12a55a9a7d0c1cac.mockapi.io/crud/Product",(answers)=>{
            let mydata = "";
            answers.on("data",(a)=>{
                mydata += a
            })
            answers.on("end",()=>{
                let convert =JSON.parse(mydata);
                console.log(convert);
                let structure = "";
                structure = ` <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>`;
                convert.forEach(element => {
                    structure += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td>${element.category}</td>
                </tr>`
                });
                structure += `</table>`;
                response.write(structure);
                response.end();
            })
        })
       
    }
    else if(request.url === "/about"){
        response.writeHead(200, {"content-type":"text/html"})
        response.write("<h1>About Page</h1>");
        response.end()
    }
    else if(request.url === "/c"){
        response.writeHead(200, {"content-type":"text/html"})
        response.write("<h1>Contact Page</h1>");
        response.end()
    }
    else if(request.url === "/login"){
        response.writeHead(200, {"content-type":"text/html"})
        response.write("<h1>Login Page</h1>");
        response.end()
    }
    else{
        response.writeHead(404, {"content-type":"text/html"})
        response.write("<h1>Page Not Found</h1>");
        response.end()
    }
}).listen(8011,()=>{
    console.log(`Server Started at http://localhost:8011`)
})