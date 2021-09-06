const { Router } = require('express');
const { usuarioGet, usuariPost, usuarioPut, usuarioDelete } = require('../controllers/usuarios.controllers');
const router = Router();


router.get('/', usuarioGet)
router.post('/', usuariPost)
router.put('/', usuarioPut)
router.delete('/', usuarioDelete)

module.exports = router;