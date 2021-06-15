/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
const http = require('http'); //protocolo

const server = http.createServer(function (req, res) { //se crear el servidor y la funcion
    //Json del estudiante
    var json = {     
        'Universidad': 'UTPL',
        'Curso': 'Procesos de Ingeniería de Software',
        'Alumno': 'Carlos Xavier Hidalgo Paredes',
        'Período': 'Abr/Ago 2021',
        'Lenguaje de programación preferido': 'JAVA',
        'Aspiración PostGraduación': 'Aportar con mis conocimientos'
    }
    res.writeHead(200, {'content-type': 'application/json'}); // se da el tipo y formato
    var VAR = (JSON.stringify(json, null, 2));
    res.end(VAR); 
    
});
server.listen(8080); //servidor escucha en el puerto 8080
console.log ('* Servidor que se ejecuta en el puerto 8080');
//Ingresar al navegador y colocar http://localhost:8080/
