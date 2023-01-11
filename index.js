//csv write and readFile get from user
var fs =require('fs');
var csv =require('csv-parser');
var prompt=require('prompt-sync')();
const { parse } = require("csv-parse");
const { toNamespacedPath } = require('path');





   /////user input
   function one(){
      var names = prompt('enter your name:  ');
     console.log(names);
     var year = prompt ('enter your age:  ');
     console.log(names)
     var contry = prompt ('your contry name is:');
   // console.log(names,"your age is ",year,'you from',contry);
  const v = [names, year, contry]
    console.log(v)
   return v   
   };

  
 

 fs.writeFile("./m.csv" ,one(), (err)=>{
   

   if (err)
     console.log(err);
   else {
     console.log("File written successfully\n");
     console.log("The written has the following contents:");
    console.log(fs.readFileSync("cloudlem.csv", "utf8")) ;
  }
 


 } )


