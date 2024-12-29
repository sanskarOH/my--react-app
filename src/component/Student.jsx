//Props are a way to pass data from a parent component to a child component. 
//Props allow components to be dynamic and reusable by customizing their behavior 
//and appearance based on the data passed.





const Student = (props)=>{
    return(
        <div className="font-sans font-serif text-xl p-10 border-solid border border-black">
            <p className="m-0">Name: {props.name}</p>
            <p className="m-0">Age: {props.age}</p>
            <p className="m-0">IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>

    );

}

export default Student;