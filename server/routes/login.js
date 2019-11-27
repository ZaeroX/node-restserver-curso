const express = require('express');
const Usuario = require('../models/usuario');
const app = express();


app.post('/login', (req, res) => {
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: '(usuario) o contraseña incorrectos'
                }
            });
        }

        if (!(body.password === usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario o (contraseña) incorrectos'
                }
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB,
            token: '123'
        });
    });

});


module.exports = app;