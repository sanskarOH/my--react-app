//Event Handler - to handle events , responded by passing a call back


const Button = () => {

    // const handleClick = () =>{

    //     console.log("Ouchhh")
    // }
    //if the function has parameters
    //using it like andleclick2("name" executes it write away so we pass it like)

    // const handleClick2 = (name)=> {
    //     console.log(`${name} stop clicking me!!!`)

    // }

    //now we use conditions
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} , you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} Stop Clicking Me!!`)
    //     }
    // }

    //with clic events we already are given with event argumenmt ( event is an objec that tells te event occured)
    //often shortened with e
    //print e gives a lot of objects and one is target.textContent
    //We can also use onDoubleClick Handler
    let count =0;
    const handleClick = (e) =>{
        
        // console.log(e)
        if(count < 3){
            e.target.textContent = "Click again"
            count++;
            console.log(count)
            }
        else{
                    e.target.textContent = "Successfully clicked"
            }
        
    }
    return(<button className="bg-blue-400 hover:bg-blue-200 p-2 font-bold font-mono rounded-full m-2 " onClick={(e) => {handleClick(e)}}>Click Me</button>)



}

export default Button