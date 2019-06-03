const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Nplify400!', // le mot de passe
database :  'movies_db' // le nom de la base de données
});
module.exports = connection;