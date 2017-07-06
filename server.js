const express=require("express");
const hbs=require("hbs");

const port=process.env.PORT || 5000; //for heroku we need to convert to a env variable
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

app.get('/projects',(req,res)=>{
  res.render('project.hbs',{
    pageTitle:'Project',
  });
});

/*app.listen(5000,() =>{
  console.log('server is up on port 5000');
});*/

//for heroku
app.listen(port,() =>{
  console.log('server is up on port '+port);
});
