import fs from 'fs'
//1
fs.readFile("note.txt","utf8",(err,data)=>{
    if(err){
        console.error(err);
    }else{
        console.log(data);
        fs.stat("note.txt",(err,status)=>{
            if(err){
                console.error(err);
            }else{
                console.log(status.size);
                console.log(status.birthtime);
            }
        })
    }
})
//2
fs.readdir("folder",(err,files)=>{
    files.forEach((f)=>{
        fs.lstat(`folder/${f}`,(err,status)=>{
            if (err){
                console.error(err);
            }else{
                if(status.isFile()){
                    console.log(f,": file");
                }
            }
        })
    })
})
//3
function timeRevers(num) {
    let num1 = num + 1
    for (let i = 0; i <= num; i++) {

        setTimeout(() => {
            num1 -= 1
            console.log(num1);
        }, i * 1000) 
    }
    setTimeout(() => {
        console.log("time out");
    }, 6000)
}
timeRevers(5)
//4
fs.readFile("quotes.txt","utf8",(err,data)=>{
   let list = data.split("\n")
   console.log(list[Math.floor(Math.random()*3)]);
})
//5
import os from 'os'
function memory() {
    let count = 0
    const run = setInterval((err) => {
        count += 1
        console.log("free memory:", os.freemem() / (os.totalmem() / 100) + "%")
    
    if (count === 5) {
        clearInterval(run)
        console.log("Memory logging complete");
    }

}, 2000)
}
memory()
