var mysql = require('mysql');
var db_config = {
  host : '127.0.0.1',
  user : 'root',
  password : 'qwerty123456',
  database : 'webapp'
}

var connection;

function handDisconnect(){
  connection = mysql.createconnection(db_config);
  connection.connect(function(err){
    if(err){
      console.log('error when connecting to db :', err);
      setTimeout(handleDisconnect,2000);
    }
  });
    connnection.on('error',function(err){
      if(err.code === 'PROTOCOL_CONNECTION_LOST'){
        handleDisconnect();
      }else{
        throw err;
      }
    });
}

handDisconnect();

module.exports = connection;