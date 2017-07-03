const express=require("express");
const hbs=require("hbs");


var app=express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();

});
app.use(express.static(__dirname+'/public'));
//app.use(express.static(__dirname+'/oosd-project-master'));
/*app.get('/',(req,res) =>{
  //res.send("<I>hello express!</I>")
  res.send({
    name:'oshadhi',
    favorites:[
      'movies',
      'novels'
    ]
  })
});*/
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About',

  });
});
app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'Home',

  });
});
app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:"request cant be handled"
  });
});

app.listen(5000);
