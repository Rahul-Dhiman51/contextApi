async function foo(){
    return 'Hello World'
}



const result = foo().then((val)=>{
    console.log(val);
})