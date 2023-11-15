const EventEmiter = require("events");
const myEmiter = new EventEmiter();

// first listener ------------

myEmiter.on("birthday",()=>{
    console.log("Happy Birthday To You")
})

myEmiter.on("birthday",(gift)=>{
    console.log(`I will send you a ${gift}`)
})


myEmiter.emit("birthday",'bike')