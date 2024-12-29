//always use proptypes

import PropTypes from 'prop-types'
// const UserGreeting = (props) =>{

//     if(props.isLoggedIn){
//         return (
//             <>
//                 <h2 className="font-sans  text-2xl bg-slate-600 text-white p-10 rounded-lg">Hello {props.name}</h2>
//             </>
//         )
//     }
//     else{
//         return(
//             <h2 className="font-sans text-2xl bg-black text-white p-10 rounded-lg">Log In Please</h2>
//         )
//     }


// }

//another way 

const UserGreeting = (props)=>{
    const welcomeMessage = <h2 className="font-sans  text-2xl bg-slate-600 text-white p-10 rounded-lg">
                            Hello {props.name}</h2>
    
    const loginPrompt =  <h2 className="font-sans text-2xl bg-black text-white p-10 rounded-lg">
                            Log In Please</h2>

    
    return(
        props.isLoggedIn ? welcomeMessage : loginPrompt
    )                   
}

UserGreeting.propTypes = {//p should be smaller here because it 
// how react looks for it towrds the components where you define type chheckking
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps ={
    name: "Guest",
    isLoggedIn: false,
}


export default UserGreeting