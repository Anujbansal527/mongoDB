const mongoose = require("mongoose");

//creating connection

                //url   //port      //databasename
mongoose.connect("mongodb://127.0.0.1:27017/recordsdb")
.then( ( ) => console.log("connected"))
.catch((err)=>console.log(err));


//schema creation
const courseSchema = new mongoose.Schema({
    name:{type:String,require:true},
    type:String,
    author:String,
    active:Boolean,
    date:{type:Date,default:Date.now}
});

//collection creation
const course = new mongoose.model("course",courseSchema);


/*

//creating Document or insert
const reactPL = new course({
    name:"React Js",
    type:"Front End",
    author:"xyz",
    active:false,
});
reactPL.save();

*/

/*

//creating document using async and await
const nodePL = async () => {
    try{
    const nodePL = new course({
    name:"Node Js",
    type:"Back End",
    author:"xyz",
    active:true})
    const result = await nodePL.save();
    console.log(result);
    }catch(err)
    {
        console.log(err);
    }
}
nodePL();

*/

/*
//creating document using async and await insert multiple data at a time
const coursePL = async () => {
    try{
    const nodePL = new course({
    name:"Node Js",
    type:"Back End",
    author:"xyz",
    active:true})

    const angularPL = new course({
        name:"Angular Js",
        type:"Front End",
        author:"xyz",
        active:true})
       
    const mongoPL = new course({
        name:"MongoDB", 
        type:"Database",
        author:"xyz",
        active:true})
             
    const result = await course.insertMany([nodePL,angularPL,mongoPL]);
    console.log(result);
    }catch(err)
    {
        console.log(err);
    }
}
coursePL();
*/

/*
//read the document 
const getDoc = async() =>{
    const result = await course.find();
    console.log(result);
}
getDoc();
*/

/*
//read the document with query
const getDoc = async() =>{
    const result = await course.find({type:"Front End"});
    console.log(result);
}
getDoc();
*/

/*
//read the document with query for specific data
const getDoc = async() =>{
    const result = await course.find({type:"Front End"}).select({name:1}).limit(1);
    console.log(result);
}
getDoc();
*/

/*
//read the document with query for specific data
const getDoc = async() =>{
    const result = await course.find({type:"Front End"}).select({_id:0,name:1}).limit(1);
    console.log(result);
}
getDoc();
*/

/*
//comparison operators

const getDoc = async() =>{
//eq 
const result = await course.find({type:{$eq:"Front End"}});
console.log(result);
//ne
const result2 = await course.find({type:{$ne:"Front End"}});
console.log(result2);
//similar to gt,gte,lt,lte

//in
const result3 = await course.find({type:{$in:["Front End","Back End"]}});
console.log(result3);
//nin
const result4 = await course.find({type:{$nin:["Front End","Back End"]}});
console.log(result4);
}
getDoc();
*/

/*
//logical query operators
const getDoc = async() =>{

    try{
//and    
const result1= await course.find({$and:[{type:"Front End"},{active:false}]});
console.log(result1);

//not
//const result2= await course.find({$not:{//there must be an expression}});
//console.log(result2);

//or
const result3= await course.find({$or:[{type:"Front End"},{active:false}]});
console.log(result3);
//nor
const result4= await course.find({$nor:[{type:"Front End"},{active:false}]});
console.log(result4);
    }catch(err){console.log(err);}
}
getDoc();
*/

/*
//sorting and counting
const countDoc=async() =>{
const result=await course.find({$and:[{type:"Back End"},{author:"xyz"}]}).select({name:1}).countDocuments();
console.log(result);
}
countDoc();

const sortDoc = async() =>{
    console.log("+1");
    const result=await course.find({author:"xyz"}).select({name:1}).sort({name:1});
    console.log(result);
    console.log("-1");
    const result2=await course.find({author:"xyz"}).select({name:1}).sort({name:-1});
    console.log(result2);
}
sortDoc();
*/

//update document
/*
const updateDoc = async(_id) =>{
    try{
        const result = await course.updateOne({_id},{
            $set:{
                name:"Vue Js"
            }
        });
        console.log(result);
    }catch(err){console.log(err)}
}
updateDoc("64e9ae5311090f630386ab95");

//findByIdAndUpdate
const updateDoc = async(_id) =>{
    try{
        const result = await course.findByIdAndUpdate({_id},{
            $set:{
                name:"Vue Js"
            }
        });
        console.log(result);
    }catch(err){console.log(err)}
}
updateDoc("64e9ae5311090f630386ab95");
*/
/*
//delete document
const updateDoc = async(_id) =>{
    try{
        const result = await course.deleteOne({_id},{
            $set:{
                name:"Vue Js"
            }
        });
        console.log(result);
    }catch(err){console.log(err)}
}
updateDoc("64ea39983235753bb1679a38");

//finsByIdAndDelete
const updateDoc = async(_id) =>{
    try{
        const result = await course.findByIdAndDelete({_id},{
            $set:{
                name:"Vue Js"
            }
        });
        console.log(result);
    }catch(err){console.log(err)}
}
updateDoc("64e9ae5311090f630386ab95");
*/
