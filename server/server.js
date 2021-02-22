const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session');
const morgan = require('morgan')
const path = require('path')

const app = express();
const port = 3000

//define routers
const entryRouter = require('./routes/entry');
const accountRouter = require('./routes/account')

app.use('/', express.static(path.join(__dirname,'../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 60 * 60 * 24 * 1000
	}
}))

app.use(morgan('dev'))


app.use('/api/entry', entryRouter)
app.use('/api/accounts', accountRouter)

app.use(function(err,req,res,next){
	res.json({success:false,error: err.message})
})


app.listen(port,  () => console.log(`app running on port ${port}`))