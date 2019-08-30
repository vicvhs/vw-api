var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'vic',
    password : 'curso',
    database : 'visibilidad'
  });
}

