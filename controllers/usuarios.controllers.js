const {request, response} = require('express')
const Usuario = require('../models/usuario')

const usuarioGet = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Get Ok'
    })

}

const usuariPost = async(req = request, res = response) => {
    const info = req.body;
    const usuario = Usuario(info);
    await usuario.save();
    res.status(201).json({
        ok: true,
        msg: 'Post Ok',
        usuario
    })

}


const usuarioPut = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Put Ok'
    })

}


const usuarioDelete = (req = request, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Delete Ok'
    })

}


module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioDelete,
    usuariPost
}