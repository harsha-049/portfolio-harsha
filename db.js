// const mongodb=require('mongodb');
// const mongoClient= mongodb.MongoClient;

let database;
// let objectId=mongodb.ObjectId;
const mongse=require('mongoose');
async function getDatabase(){
    // const client= await mongoClient.connect('mongodb://127.0.0.1:27017');
    mongse.connect('mongodb://127.0.0.1:27017/t1')
    .then(()=>{
        console.log("Databse connected successfully")
    })
    .catch(()=>{
        console.log("db errrrrr......")
    })
}
//     database=client.db('t1');
//     if(database){
//         console.log('Database Connected successfully');

//     }
//     else{
//         console.log('Database connection failed:');
//     }
//         return database
//     }
// module.exports={getDatabase,objectId};
module.exports={getDatabase};