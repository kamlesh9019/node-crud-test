// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);


//Object destructuring
// var user={name:'kamlesh'};
// var {name}=user;
//
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to Mongo database server");
  }
  console.log('connected to Mongo db server');

  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed:false
  // },(err,results)=>{
  //   if(err){
  //     return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(results.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'kamlesh',
  //   age:27,
  //   location:'pune'
  // },(err,results)=>{
  //   if(err){
  //     return console.log('Unable to insert user');
  //   }
  //   //console.log(JSON.stringify(results.ops,undefined,2));
  //   console.log(results.ops[0]._id.getTimestamp());
  //
  // });


  db.close();
});
