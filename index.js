const { faker } = require('@faker-js/faker');

// 1. initializing mysql2 as mysql
const mysql=require('mysql2');
const express=require("express");
const app=express();

app.set("view engine", "ejs");
app.use(express.static("public"));


const path=require("path");
app.set("views", path.join(__dirname, "/views"));


// 2. creating connection
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'music_player',
    password:'girishpg'
});
////////////// ending 2 ///////////

/// 3 } querying the backend (that is connection object)
try{
    connection.query("SELECT * FROM data", (err,result)=>{
        if (err) throw err;
     ///   console.log(result); 
    })
}
catch(err){
    console.log(err);
}
///// ending 3 ///////
let  createRandomUser= ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}


const port=8080;
app.listen(port, (req,res)=>{
  console.log(`Server is listening to `,port);
});

//// 7 . For HomeScreen///////////////
app.get("/", (req,res)=>{
  /// firstly getting all songs from the database
  let q='SELECT count(*) FROM data';
  try{
    connection.query(q, (err, result)=>{
      if (err) throw err;
      //console.log(result);
      let count = result[0]["count(*)"];
      res.render("splashscreen.ejs", { count });
    })
  } catch(err){
     console.log(err);
     res.send("Some error occured"); 
    }
  });
///////////// ending 7 ///////////   

/// 8. Gettong all songs//////////
app.get("/home", (req,res)=>{
    let q= `SELECT * FROM data`;
    try{
    connection.query(q, (err, songs)=>{
      if (err) throw err;
     res.render("homescreen.ejs", {songs});
    })
  } catch(err){
     console.log(err);
     res.send("Some error occured"); 
    }
     
});


/// 9. Edititng the route //////////////
app.get("/song/:id/musicplayer", (req,res)=>{
  let { id }=req.params;
  console.log(id);
  let q=`SELECT * FROM data where id ='${id}'`;
   try{
    connection.query(q, (err, result)=>{
      if (err) throw err;
      let song=result[0];
      res.render("musicplayer.ejs", {song});
    })
  } catch(err){
     console.log(err);
     res.send("Some error occured"); 
    }
   
  
})


//                     <img src="/images/play.png" alt="Logo">
