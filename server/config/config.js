//================================
//puerto
//=================================

process.env.PORT = process.env.PORT || 3000;
//==========================
//=================entorno==
//=========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://strider:xERjCxlASXEP03ZA@cluster0-fknq4.mongodb.net/cafe';
}

process.env.URLDB = urlDB;