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
    let count = 0;
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} , you clicked me ${count} times`);
        }
        else{
            console.log(`${name} Stop Clicking Me!!`)
        }
    }

    return(<button className="bg-blue-400 hover:bg-blue-200 p-2 font-bold font-mono rounded-full m-2 " onClick={() => {handleClick('Sanskar')}}>Click Me</button>)



}

export default Button