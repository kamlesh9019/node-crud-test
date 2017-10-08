// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log("Unable to connect to Mongo database server");
  }
  console.log('connected to Mongo db server');
  //deleteMany

  // db.collection('Users').deleteMany({name:'kamlesh'}).then((result)=>{
  //   console.log(result);
  // });

  //DeleteOne

  // db.collection('Users').deleteOne({name:'kamlesh'}).then((result)=>{
  //   console.log(result);
  // });

  //FindandDeleteOne

  db.collection('Users').findOneAndDelete({name:'kamal'}).then((result)=>{
    console.log(result);
  })
  //db.close();
});
