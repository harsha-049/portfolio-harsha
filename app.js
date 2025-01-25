const express = require('express');
const exhbs = require('express-handlebars');
const bodyParser=require('body-parser');
const app = express();
const dbo=require('./db');
const empmodel=require('./models/empModel')
const objid=dbo.objectId

dbo.getDatabase();
app.engine('hbs', exhbs.engine({layoutsDir:'viewsfold/',defaultLayout:'maincopy',extname:'hbs',}));
app.set ('view engine', 'hbs');
app.set('views','viewsfold');
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/',async(req, res)=> {
    let edit_id,edit_emp;
    // let database=await dbo.getDatabase();
    // const collection=database.collection('emp')
    // const cursur=collection.find({})
    // let datas=await cursur.toArray()
    const msg='';
    //console.log('the data',datas)
    if(req.query.edit_idd){
        edit_id=req.query.edit_idd
        edit_emp=await collection.findOne({_id:new objid(edit_id)})
    }
    if(req.query.delete_idd){
        delete_id=req.query.delete_idd
        console.log('Delete request for _id:',delete_id);
        await collection.deleteOne({_id: new objid(delete_id)})
        res.redirect('/?status=3');
    }
    if(req.query.status===1){
        msg='Inserted successfully'
    }
    res.render ('maincopy',{msg,edit_id,edit_emp});

});

app.post('/empinfo', async(req , res) =>{
    //const database = await dbo.getDatabase();
    //const collection = database.collection('emp');
    const employee = {empid: req.body.eid, empname: req.body.ename};
    //await collection.insertOne(employee);
    
    const newempDoc= new empmodel(employee)
    newempDoc.save()
    res.redirect('/?status=1');
});
    app.post('/updateinfo/:e_id', async(req , res) =>{
        const database = await dbo.getDatabase();
        const collection = database.collection('emp');
        const employee = {empid: req.body.eid, empname: req.body.ename};
        let ed_idd=req.params.e_id
        await collection.updateOne({_id:new objid(ed_idd)},{$set:employee});
    
        res.redirect('/?status=2');
});

app.listen(8000,()=>{
    console.log('Listening on port 8000...');
});