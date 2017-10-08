// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to Mongo database server");
  }
  console.log('connected to Mongo db server');
  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //     console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Error while fecthing docs');
  // });

  db.collection('Todos').find().count().then((count)=>{
      console.log(`Todos count ${count}`);
  },(err)=>{
    console.log('Error while fecthing docs');
  });

  //db.close();
});
