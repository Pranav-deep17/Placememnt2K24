async function funName()
{
    setTimeout(()=>{
        console.log("hello")
    },5000)
    console.log(await "hello")
}
arrowFunName = async()=>
{
    setTimeout(()=>
    console.log("KEC"))
}