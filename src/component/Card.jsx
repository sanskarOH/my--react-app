import profile from '../assets/react.svg' 

const Card = () =>{
    return(
        <div className="border border-solid border-black rounded-xl">
            <img alt="profile-pic" src={profile}></img>
            <h2>Sanskar Diwedi</h2>
            <p>I am coder and I love to code</p>

        </div>
    );
}

export default Card;
