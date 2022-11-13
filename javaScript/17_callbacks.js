const personOne = (friend) =>{
    console.log(`hi i am busy with ${friend}.i will call you later`);
}
const personTwo = () =>{
    console.log("ohk! call back me...")
}
personOne("sardar")
personTwo()

// now move on callbacks
const person1 = (friend,callback) =>{
    console.log(`hi i am busy with ${friend}.i will call you later`);
    callback()
}
const person2 = () =>{
    console.log("ohk! call back me...")
}
person1("sardar",person2)
// person2()