const Usuario=require('../models/usuario');  
const usuarioCtrl={};
 /*
usuarioCtrl.getUsuario=async(req,res)=>{
   Usuario('usuario').where({estado:true}).andWhere(req.params)
   .select().first()
   .then((usuario)=>{  
        res.json(usuario);
    }).catch((err)=>{
        res.status(500).json({status:err});
    }); 
}*/
usuarioCtrl.signin=async(req,res)=>{
  var data=req.body;
  const usuario=await  Usuario('usuario').where({correo:data.correo})
    .select().first()
    .catch((err)=>{ 
        res.status(500).json(err);
    }); 
    
    if (usuario) { 
        data={};
        data.status=false;
        res.status(401).json(data);
    }else{
     
     await Usuario('usuario').insert(data).then((res)=>{
            data={};
            console.log(res);
           
            data.status=true; 
            res.status(200).json(data);    
        }).catch((err)=>{
            res.status(500).json(err);
        }); 
    }  
}
usuarioCtrl.signup=async(req,res)=>{
    var data=req.body;
    const usuario=await  Usuario('usuario')
    .where({correo:data.correo})
    .andWhere({clave:data.clave})
    .andWhere({estado:true})
      .select().first()
      .catch((err)=>{ 
          res.status(500).json(err);
      }); 
      data={};
      if (usuario) { 
          console.log(usuario); 
          data.id=usuario.id;
          data.status=true;
          res.status(200).json(data);
      }else{
        data.status=false; 
        res.status(401).json(data);   
      }  
  }
module.exports=usuarioCtrl;