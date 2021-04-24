/**
 * Handle USER Actions.
 */

//var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs")
var moment = require("moment")
let db = require("../database");
var fs = require("fs");
let pool = db.getPool();




exports.create = (req, res) => {
  const {userid} = req.body;
  const {username} = req.body;
  const {password} = req.body;
  const {age} = req.body;
  const {address} = req.body;
  const {email} = req.body;
  const {phonenumber} = req.body;
  let sql = `INSERT INTO USERS (userid,username, password,age,address,email,phonenumber) VALUES ( "${userid}" ,"${username}", "${password}", "${age}", "${address}", "${email}", "${phonenumber}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'USER INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};

exports.getUsers = (req, res) => {
  let sql = `SELECT * FROM USERS`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch users'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
}


exports.registerUser = (req, res) => {
 //const {userid} = req.body;
  const {username} = req.body;
  const {password} = req.body;
  const {age} = req.body;
  const {address} = req.body;
  const {email} = req.body;
  const {phonenumber} = req.body;

  console.log(
    `username: ${username}\
  password: ${password}\
  age: ${age}\
  address: ${address}\
  email: ${email}
  phonenumber: ${phonenumber}`);
  let sql = `INSERT INTO USERS (username, password, age,address,email,phonenumber) VALUES ("${username}", "${password}", "${age}", "${address}", "${email}", "${phonenumber}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'USER INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};


exports.deleteUser = (req, res) => {
  console.log(req.body.id)
  const {userid} = req.body
  console.log(userid)
  console.log(req.body.userid)
  console.log(req.body.data)
  let sql = `DELETE FROM users
  \WHERE userid = "${userid}"`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, res)=>{
      if(err) throw err;
      connection.release();
      console.log(res);
    })
  })
};


exports.updateUser = (req, res) => {
  const {username} = req.body;
  const {password} = req.body;
  const {age} = req.body;
  const {address} = req.body;
  const {email} = req.body;
  const {phonenumber} = req.body;
  const {userid} = req.body;
  console.log(userid)
  // console.log(req.body.userid)
  // console.log(req.body.id)
  // console.log(req.body.data)
  let sql = `UPDATE USERS SET username = "${username}", password="${password}",age="${age}", address="${address}", email="${email}", phonenumber="${phonenumber}"
  \WHERE userid = "${userid}"`;
  console.log(sql);
  pool.getConnection((err,connection)=>{
    if(err) throw err;
  
  connection.query(sql, (err, result) =>{
    if (err) throw err;
    res.status(200).send({message: 'User updated successfuly'});
  })
  });
};

exports.updateMedOrder = (req, res) => {
  const {medicineid} = req.body;
  const {medicinename} = req.body;
  const{userid} = req.body;
  console.log(medicineid)
  let sql = `UPDATE MEDICINES SET medicinename = "${medicinename}",userid= "${userid}"
  \WHERE medicineid = "${medicineid}"`;
  console.log(sql);
  pool.getConnection((err,connection)=>{
    if(err) throw err;
  
  connection.query(sql, (err, result) =>{
    if (err) throw err;
    res.status(200).send({message: 'User updated successfuly'});
  })
  });
};


exports.addMedOrder = (req, res) => {
  //const {medicineid} = req.body;
  const {medicinename} = req.body;
  const {userid} = req.body;
  //console.log(medicineid);
  console.log(medicinename);
  console.log(userid);
  
  console.log(
    `medicinename: ${medicinename}\
  userid: ${userid}`);
  let sql = `INSERT INTO medicines (medicinename,userid) VALUES ("${medicinename}","${userid}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'medicine INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};

exports.getOrders = (req, res) => {
  let sql = `SELECT * FROM MEDICINES`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch orders'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.deleteMedOrder = (req, res) => {
  const {medicineid} = req.body;
  console.log(medicineid);
  let sql = `DELETE FROM medicines
  \WHERE medicineid = "${medicineid}"`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, res)=>{
      if(err) throw err;
      connection.release();
      console.log(res);
    })
  })
};

exports.logIn = (req,res) => {
  const {username} = req.body;
  const {password} = req.body;
  console.log(req.sessionID)
  console.log(username);
  var query1 = `SELECT * FROM users where username = "${username}" AND password = "${password}"`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
  console.log(query1);
  connection.query(query1, (err, result)=> {
    console.log(result.length);
    let auth = false;
    if (result.length >0) {
      auth = true;
    } else {
      auth = false;
 
    }
    res.send(auth);
  });
})
}


exports.addLabTest = (req, res) => {
  const {labtestdate} = req.body;
  const {userid} = req.body;
  console.log(labtestdate);
  console.log(userid);
  
  let sql = `INSERT INTO labtest (labtestdate,userid) VALUES ("${labtestdate}","${userid}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'lab test date INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};

exports.getLabTest = (req, res) => {
  let sql = `SELECT * FROM labtest`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch lab tests'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.deleteLabTest = (req, res) => {
  const {labtestid} = req.body;
  console.log(req.body.id);
  let sql = `DELETE FROM labtest
  \WHERE labtestid = "${labtestid}"`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, res)=>{
      if(err) throw err;
      connection.release();
      console.log(res);
    })
  })
};

exports.updateLabTest = (req, res) => {
  const {labtestid} = req.body;
  const {labtestdate} = req.body;
  const{userid} = req.body;
  let sql = `UPDATE labtest SET labtestdate = "${labtestdate}",userid= "${userid}"
  \WHERE labtestid = "${labtestid}"`;
  console.log(sql);
  pool.getConnection((err,connection)=>{
    if(err) throw err;
  
  connection.query(sql, (err, result) =>{
    if (err) throw err;
    res.status(200).send({message: 'lab test reservation updated successfuly'});
  })
  });
};

exports.addHealthcareProduct = (req, res) => {
  const {healthcareproduct} = req.body;
  const {healthcarequantity} = req.body;
  const{userid} = req.body;
  
  let sql = `INSERT INTO healthcare (healthcareproduct,healthcarequantity,userid) VALUES ("${healthcareproduct}","${healthcarequantity}","${userid}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'health care product INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};

exports.getHealthcareProduct = (req, res) => {
  let sql = `SELECT * FROM healthcare`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch product'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.deleteHealthcareProduct = (req, res) => {
  const {healthcareid} = req.body;
  console.log(healthcareid);
  let sql = `DELETE FROM healthcare
  \WHERE healthcareid = "${healthcareid}"`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, res)=>{
      if(err) throw err;
      connection.release();
      console.log(res);
    })
  })
};

exports.updateHealthcareProduct = (req, res) => {
  const {healthcareid} = req.body;
  const {healthcareproduct} = req.body;
  const {healthcarequantity} = req.body;
  const{userid} = req.body;
  let sql = `UPDATE healthcare SET healthcareproduct = "${healthcareproduct}", healthcarequantity = "${healthcarequantity}",userid= "${userid}"
  \WHERE healthcareid = "${healthcareid}"`;
  console.log(sql);
  pool.getConnection((err,connection)=>{
    if(err) throw err;
  
  connection.query(sql, (err, result) =>{
    if (err) throw err;
    res.status(200).send({message: 'healthcare product updated successfuly'});
  })
  });
};


exports.loadInfo = (req,res) => {
  const {tableName} = req.body;
  const{_id} = req.body;
  const{_name} = req.body;
console.log(tableName);
console.log(_id);
console.log(_name);
  let sql = `SELECT ${_id} as id, ${_name} as name from ${tableName}`;
console.log(sql);
pool.getConnection((err,connection)=>{
  if(err) throw err;
  connection.query(sql, (err,result)=>{
    if(err) throw err;
    console.log(result);
    res.status(200).send(result);
  })
})
}

exports.addImage = (req, res) => {
  const {image} = req.body;
  console.log(req.file)
  // console.log(JSON.stringify(image.data));
  console.log(image);
  console.log(req.body.image)
  console.log(req.body)
  console.log(req.body.data)
  console.log(req.file)
  // console.log(req.data)
  // console.log(req)

//   var dog = {
//     img: fs.readFileSync("C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/rmiex.jpg"),
//     file_name: 'Dog'
// };
// console.log(fs.readFile(dog));
//  console.log(fs.readFileSyng(dog));
//console.log(fs.readFile(image));
  let sql = `INSERT INTO image(image) VALUES("${image}")`;
  console.log(sql)
  //let sql = `INSERT INTO image(image) VALUES("${fs.readFile('C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/rmiex.jpg')}")`;
  //let sql = `INSERT INTO healthcare (healthcareproduct,healthcarequantity,userid) VALUES ("${healthcareproduct}","${healthcarequantity}","${userid}")`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    try{
      connection.query(sql, (err, result)=>{
        connection.release();
        if(err)
        {
          res.status(500).send({
            message: 'The query not OK',
            error: err,
          })
        }
        res.status(200).send({
          message: 'health care product INSERTED TO THE DATABASE',
          result: result,
        });
      })
    }catch(err)
    {
      res.status(500).send({message: 'An internal error occured.'});
    }
  })
};

exports.getImage = (req, res) => {
  let sql = `SELECT * FROM image`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch product'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.getDogs = (req, res) => {
  let sql = `SELECT * FROM DOGS`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch dogs'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.adoptDog = (req, res) => {
  //const {userid} = req.body;
   const {username} = req.body;
   const {address} = req.body;
   const {email} = req.body;
   const {phonenumber} = req.body;
   const {DOB} = req.body;
   const {house} = req.body;
   const {familyDescription} = req.body;
   const {animalAccess} = req.body;
   const {pastCare} = req.body;
   const {currentPets} = req.body;
   const {description} = req.body;
   const {dogid} = req.body;
 
   let sql = `INSERT INTO ADOPTDOG (username, address, email,phonenumber,DOB,house,familyDescription,animalAccess,pastCare,currentPets,description,dogid) VALUES ("${username}", "${address}", "${email}", "${phonenumber}", "${DOB}", "${house}", "${familyDescription}", "${animalAccess}", "${pastCare}", "${currentPets}", "${description}","${dogid}")`;
  console.log(sql)
   pool.getConnection((err, connection)=>{
     if(err) throw err;
     try{
       connection.query(sql, (err, result)=>{
         connection.release();
         if(err)
         {
           res.status(500).send({
             message: 'The query not OK',
             error: err,
           })
         }
         res.status(200).send({
           message: 'adoption INSERTED TO THE DATABASE',
           result: result,
         });
       })
     }catch(err)
     {
       res.status(500).send({message: 'An internal error occured.'});
     }
   })
 };

 exports.getCats = (req, res) => {
  let sql = `SELECT * FROM CATS`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch cats'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.adoptCat = (req, res) => {
  //const {userid} = req.body;
   const {username} = req.body;
   const {address} = req.body;
   const {email} = req.body;
   const {phonenumber} = req.body;
   const {DOB} = req.body;
   const {house} = req.body;
   const {familyDescription} = req.body;
   const {animalAccess} = req.body;
   const {pastCare} = req.body;
   const {currentPets} = req.body;
   const {description} = req.body;
   const {catid} = req.body;
 
   let sql = `INSERT INTO ADOPTCAT (username, address, email,phonenumber,DOB,house,familyDescription,animalAccess,pastCare,currentPets,description,catid) VALUES ("${username}", "${address}", "${email}", "${phonenumber}", "${DOB}", "${house}", "${familyDescription}", "${animalAccess}", "${pastCare}", "${currentPets}", "${description}","${catid}")`;
  console.log(sql)
   pool.getConnection((err, connection)=>{
     if(err) throw err;
     try{
       connection.query(sql, (err, result)=>{
         connection.release();
         if(err)
         {
           res.status(500).send({
             message: 'The query not OK',
             error: err,
           })
         }
         res.status(200).send({
           message: 'adoption INSERTED TO THE DATABASE',
           result: result,
         });
       })
     }catch(err)
     {
       res.status(500).send({message: 'An internal error occured.'});
     }
   })
 };

 exports.reportPet = (req, res) => {
  //const {userid} = req.body;
   const {breed} = req.body;
   const {petType} = req.body;
   const {DOB} = req.body;
   const {color} = req.body;
   const {appearanceDescription} = req.body;
   const {sex} = req.body;
   const {dateMissing} = req.body;
   const {circumstances} = req.body;
   const {locationLost} = req.body;
   const {username} = req.body;
   const {phonenumber} = req.body;
   const {email} = req.body;
   const {otherDescription} = req.body;
  
 
   let sql = `INSERT INTO PETSLOST (breed, petType, DOB, color,appearanceDescription, sex, dateMissing,circumstances,locationLost,username,phonenumber,email,otherDescription) VALUES ("${breed}", "${petType}", "${DOB}", "${color}", "${appearanceDescription}", "${sex}", "${dateMissing}", "${circumstances}", "${locationLost}", "${username}", "${phonenumber}", "${email}", "${otherDescription}")`;
  console.log(sql)
   pool.getConnection((err, connection)=>{
     if(err) throw err;
     try{
       connection.query(sql, (err, result)=>{
         connection.release();
         if(err)
         {
           res.status(500).send({
             message: 'The query not OK',
             error: err,
           })
         }
         res.status(200).send({
           message: 'pet lost INSERTED TO THE DATABASE',
           result: result,
         });
       })
     }catch(err)
     {
       res.status(500).send({message: 'An internal error occured.'});
     }
   })
 };

 exports.getLostPets = (req, res) => {
  let sql = `SELECT * FROM PETSLOST`;
  pool.getConnection((err, connection)=>{
    if(err) throw err;
    connection.query(sql, (err, result)=>{
      if(err)
      {
        res.status(500).send({message: 'could not fetch lost pets'})
      }else{
        res.status(200).send({data: result, message: 'success'});
      }
    });
  })
};

exports.feedback = (req, res) => {

   const {feedback} = req.body;
   let sql = `INSERT INTO FEEDBACK (feedback) VALUES ("${feedback}")`;
  console.log(sql)
   pool.getConnection((err, connection)=>{
     if(err) throw err;
     try{
       connection.query(sql, (err, result)=>{
         connection.release();
         if(err)
         {
           res.status(500).send({
             message: 'The query not OK',
             error: err,
           })
         }
         res.status(200).send({
           message: 'feedback INSERTED TO THE DATABASE',
           result: result,
         });
       })
     }catch(err)
     {
       res.status(500).send({message: 'An internal error occured.'});
     }
   })
 };