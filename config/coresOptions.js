 const allowedOrigins = require ('./allowedOrgins')

 const corsOptions ={
    origin: (origin, callback) =>{
        if(allowedOrigins.indexOf(origin) !== -1|| !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed'))
        }
    },
    credentials: true,
    optionsSucessStatus: 200
 }

 module.exports =corsOptions