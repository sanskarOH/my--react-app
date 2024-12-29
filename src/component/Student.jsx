//Props are a way to pass data from a parent component to a child component. 
//Props allow components to be dynamic and reusable by customizing their behavior 
//and appearance based on the data passed.

import PropTypes from "prop-types";


//Prop Types = a mechanism that ensures that the passed
// vaule is of the correct datatype
// age: ProtoTypes.number


//defautl props are props passed when no input is provided
const Student = (props)=>{
    return(
        <div className="font-sans font-serif text-xl p-10 border-solid border border-black">
            <p className="m-0">Name: {props.name}</p>
            <p className="m-0">Age: {props.age}</p>
            <p className="m-0">IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>

    );

}

Student.propTypes ={
    name : PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student;