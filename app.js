const express = require("express");
const request = require("request");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/signup.html')
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Port is getting started on 3000.")
}


    







const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
    apiKey: "ff873e3f34402c49c48c77faa3abb4d3-us2",
    server: "us2",
  });

  app.post('/', function(req,res){
    const firstName = req.body.fName;
    const email = req.body.email;

    res.sendFile(__dirname + '/success.html');

    console.log(email);


  
  const listId = "1ed148b005";
  
async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
        email_address:email,
        status: "subscribed",
        merge_fields: {
            FNAME :firstName,
            EMAIL :email,
           
      }

    
    })};
    run();
});
  
  
  

// API KEY ; MdrQF9UGhJioX-sn6tj81w
// AUDIENCE ID ; 1ed148b005