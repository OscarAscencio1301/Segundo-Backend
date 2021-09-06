const mongoose  = require("mongoose")

const dbConnect = async() => {
   try {
    await mongoose.connect(process.env.URL)
    console.log('Conextado con MongoDB')
   } catch (error) {
       console.log("Error al Conectar")
       
   }
}

module.exports = {dbConnect}