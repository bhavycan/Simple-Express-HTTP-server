const http = require('http');
        //built in Node module
        //allows to response the incoming request and many more work
const PORT = 3000;
const server = http.createServer()
const scientist = [
    {
        id: 0,
        name: 'Sir Nicola Tesla'
    },
    {
        id: 1,
        name: 'Sir Issac Newton'
    }

]

//Server is event emitter so you can use .on
server.on('request', (req,res) => {
    //req----> we can listen the request
    //res----> response to web
    const item = req.url.split('/');
    console.log(item[1])
    if (item[1] === 'friends'){
        //what we call url ---> Post/ message/ in her the url is message/ which we also call the end point when it is called, our server have to give the answer

        res.writeHead(200, {
            'Content-Type' : 'application/json',
        })
        res.end(JSON.stringify({
            //why we use the JSON.stringify?
            //   --Because the res,end is expecting the string from us
            id: 1,
            name: 'Sir Issac Newton'
        }))
    }

    else if (item[1] === 'messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello Booss I heard you have message for me?")
        //what you need to response? 
            // --> statuscode, header and body
     
    }

    else if (item[1] === 'page'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        // res.end("Hello Booss I heard you have message for me?")
        //what id i want to respond more replies or more dat , in that case we use res.write() instead on res.end()
        res.write('<html>')
        res.write('<body>')
        res.write("<h1>Hello There</h1>")
        res.write("</body>")
        res.write("</html>")
        res.end()
        
     
    }

    else if(req.method === 'GET' && item[1] === 'scientist'){
        if(item.length === 3){
            res.statusCode = 200
            res.setHeader = ('Content-Type', 'application/json')
            res.end(JSON.stringify(scientist[+item[2]]))
        }
        else{
            res.statusCode = 200
            res.setHeader = ('Content-Type', 'application/json')
            res.end(JSON.stringify(scientist))
            // Remember, res.end need string viersion
        }

    }else if(req.method === 'POST' && item[1] === 'scientist'){
        //req is the readeable stream object 
        req.on('data',(data) => {
            // data which is give by the browser to server is raw buffer you have to convert it in string
            const scienti = data.toString()
            console.log('Request:'. scienti)
            //out scientist object is in the json formet to add the data into it we have to convert it into json object
            scientist.push(JSON.parse(scienti))
        })



        //To submit the data on console
//         fetch('http://localhost:3000/scientist', {
//     method : 'POST',
//     body: JSON.stringify({ id: 3, name: "Ryan Dahl" })
// });
    }

     else{
         res.statusCode = 404
         res.end()
     }
     
   

    

})

server.listen(3000, ()=> {
    console.log("Listening on 3000!")
});
    // 127.0.0.1 ---> LocalHost
