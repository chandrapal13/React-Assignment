// create and insert document in mongoose....

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chandrapaul",{ useNewUrlParser: true, useUnifiedTopology: true })
.then( () => console.log("connection successfull...."))
.catch((err) => console.log(err)); 

const playlistSchema = new mongoose.Schema({
name:{ String,
type: String,
required: true,
},
ctype: String,
videos: Number,
author: String,
active: Boolean,
Date: {

type : Date,
default: Date.now

}



})
//Collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema);


// create and insert document...


const createDocument = async () => {


  try {
const reactPlaylist = new Playlist({


    name : "Node Js",
    ctype : "Back End",   
    videoes : 40,
    author : "Chandrapaul ",
    active : true
    
    })
   
    const result = await reactPlaylist.save();
    console.log(result); 
  

  } catch(err){

   console.log(err);

  }


  }

// createDocument();



const getDocument = async () => {

const result = await playlists.find({ctype: "Front"});

console.log(result);


} 
getDocument();
