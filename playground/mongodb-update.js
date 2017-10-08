// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to Mongo database server");
  }
  console.log('connected to Mongo db server');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('59da260aaca4209189f27ef1')
  },{
    $set:{
      name:'kamal'
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  })
  //db.close();
});
