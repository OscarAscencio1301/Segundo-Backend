const express = require('express')
const cors =  require('cors');
const {dbConnect} = require('../database/config');



class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.connect();
        this.middlewares();
        this.routers();

    }
    async connect(){
        await dbConnect()
    }

    middlewares() {
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json())
    }

    routers() {
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen() {
       this.app.listen(this.port, () => {
           console.log(`Servidor Corriendo en: ${this.port}`)
       }) 
    }


}

module.exports = Server;