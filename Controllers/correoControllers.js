const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;
    let userNombre = body.nombre;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'gabrieldeberes@gmail.com',
            pass: 'ektk mzyy fzmx jqsd'
        } 
     });

    
     const opciones = {
        from : body.correo,
        to: [body.correo ,"gabrieldeberes@gmail.com"],
        text: body.mensaje
    }

     config.sendMail(opciones, function(error, result){
        
        if (error) {
            console.error('Error al enviar correo electrónico:', error);
            return resp.json({ ok: false, msg: 'Error al enviar correo electrónico' });
        }
        return resp.json({ ok: true, msg: 'Correo electrónico enviado correctamente' });
    });


       /* if (error) return resp.json({ok: false, msg: error});
        return resp.json({     
            ok: true,
            msg: result
        });
        */
    
}

module.exports = {
    envioCorreo
}


