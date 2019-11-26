const routes=require('express').Router();
const usuarioCtrl=require('../controllers/usuario.controller'); 
//routes.get('/usuario/:id',usuarioCtrl.getUsuario);
routes.post('/usuario/signin',usuarioCtrl.signin);
routes.post('/usuario/signup',usuarioCtrl.signup);
module.exports=routes;