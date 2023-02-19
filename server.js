const express = require('express');
const path = require('path')
const friendsController = require('./controllers/friends.controller')
//set up your application (app object) with express function , exported from the express package module
const messagesController = require('./controllers/messages.controller')

const friendsRouter = require('./routes/friends.route')
const messagesRouter = require('./routes/messages.route')
const app = express();

app.set('view engine','hbs')
app.set('views', path.join(__dirname,'views'))

const PORT = 3000;


app.get('/',(req,res)=>{
    res.render('index',{
        title: "My friends are good",
        caption: "Lets go"
    })
})
app.use((req,res,next) =>{
    const start = Date.now()
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}`)
})

path.join(__dirname,'public')
app.use('/site',express.static('public'))
app.use(express.json());

app.use('/friends', friendsRouter )
app.use('/messages', messagesRouter)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

// TO run the server you have to give the command npm start but for that you must check yr script in package.json
//But by default if your name of the file is "server" express will automatically run that file