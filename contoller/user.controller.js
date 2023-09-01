var mysql = require("mysql");
var config = require("../ormconfig.json")
var user = require("../model/users.model")
export class userController{
    constructor()
    static connection = mysql.connection(config)
    checkconnect(){
        connection.connect(function(err){
            if(err) throw err;
            console.log("Connected!")
        });
    }
    getUserAll(){
        checkconnect();
        var query = "Select * from user"
        connection.query(query, function(err, result){
            if (err) throw err;
            console.log("User list in database", result)
        })
    }
    updateUser(){

    }
    insertUser(){

    }
    deleteUser(){

    }
}
