const fs = require("fs")

// reading text asynchronously 

fs.readFile('./texts/read.txt',"utf-8", (err,data)=>{
    if(err){
        throw Error("Error read text")
    }
    

    // write file ---------------
    fs.writeFile('./texts/writeText3.txt',data,"utf-8",(err)=>{
        if(err){
            throw Error("Error write text")
        }
    })
})

console.log("test asynchronous")