const ProfilePic = () =>{

    const imageURL = './src/assets/pfp.jpeg'

    const revealImage =  (target) =>{
        setTimeout(()=>{
            target.style.display = "initial"
        },2000)

    }

    const handleClick = async (e) =>{
        console.log(e);
        const target = e.target;
        target.style.display = "none"
        await revealImage(target)
        // setTimeout(()=>{
        //     target.style.display = "initial";
        // },500)
        
    }

    return(<img onClick={(e)=>handleClick(e)}src={imageURL}></img>)

}

export default ProfilePic