const ProfilePic = () => {
  const imageURL = "./src/assets/pfp.jpeg";

  const revealImage = (target) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        target.style.display = "initial";
        resolve();
      }, 2000);
    });
  };

  const handleClick = async (e) => {
    // console.log(e);
    const target = e.target;
    target.style.display = "none";
    console.log("Image hidden");

    await revealImage(target);
    console.log("image reveals");

    // setTimeout(()=>{
    //     target.style.display = "initial";
    // },500)
  };

  return <img onClick={(e) => handleClick(e)} src={imageURL}></img>;
};

export default ProfilePic;
