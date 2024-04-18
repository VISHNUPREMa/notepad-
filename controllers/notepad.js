const User = require("../models/User");

const loadNotePad = (req, res) => {
  
  const demotitle = '';
  const democontent = '';

  res.render("login", { demotitle, democontent });
};

const notePadInsert = async (req, res) => {
  const { title, content } = req.body;

  try {
    await User.create({ title, content });
    res.render("login", { demotitle: title, democontent: content });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const getLibrary = async (req, res) => {
  try {
    const titles = await User.find({}, 'title'); 
 
    res.render("library", { title: titles }); 
  } catch (error) {
    console.log(error);
  }
};


const getcontent = async(req,res)=>{
  try{
   
    const titleData = req.body.search
    
    const result = await User.find({title:{$regex:new RegExp(titleData,'i')}});
   
  
    res.render("content",{result})
  }
  catch(error){

  }
}

const deleteIndex = async(req,res)=>{
  try{
    const itemId = req.params.id;
 ;
   
    const deleteOne = await User.deleteOne({_id:itemId});
    
    res.redirect("/notes/library");
   
    
    

  }catch(error){

  }

}
const getClicked = async (req, res) => {
  try {
    const id = req.params.id;
   
    const result = await User.findOne({ title: id });
    
    res.render("clicked", { result });
  } catch (error) {
    console.error(error);
   
    res.status(500).send("Server Error");
  }
};

const getEditContent = async(req,res)=>{
  try{
    const itemID = req.params.id;
    const result = await User.findById(itemID)
    res.render("edit",{result})

  }
  catch(error){
    console.log(error);
  }
}


const editContent = async(req,res)=>{
  try{
    const itemID = req.params.id;
    const {title,content} = req.body;
    await User.findByIdAndUpdate(itemID,{title,content});
    res.redirect("/notes/library")

  }
  catch(error){
    console.log(error);
  }
}





module.exports = { loadNotePad, notePadInsert ,getLibrary, getcontent , deleteIndex , getClicked ,getEditContent , editContent};
