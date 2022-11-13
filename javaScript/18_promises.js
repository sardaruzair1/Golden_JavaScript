// event loop
// promise
// asyn/await
// clauser


// this is call back
const main = (cmp_tut,callback) =>{
    console.log(`hi i am busy with ${cmp_tut}.i will sleep later`);
    callback()
}
const sleep = () =>{
    console.log("ohk! sleep letter...")
}
main("code",sleep)

 
// do this call back function using promise

const promise_obj = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let question1 = "ap ka laptop theek hua?";
    resolve(question1)
    reject("chalo allah kary jaldi ho jy theek")
    },2000);
    
});
promise_obj.then((question)=>{
    console.log(question)
}).catch((dua)=>{
    console.log(dua)
})






