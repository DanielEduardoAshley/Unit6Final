const { app } = require('./app');
const port = 3300;

app.listen(port,(req,res)=>{


    console.log(`listening at ${port}`)
})