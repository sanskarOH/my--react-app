const List = () => {

     const fruits = ["apple","banana","orange","Mango"]
     //use map to render lists
     //now use to render objects with atttributes
     const fruitsObj = [{id: 1,name :"rohit" , cast:"muslim"},
                        {id:2,name:"hrithik" , cast:"hindu"},
                        {id:3,name:"sameer" , cast:"jaadu"},
                        {id:4,name:"krushna" , cast:"govinda"}]

     fruitsObj.sort((a,b)=> {a.name.localeCompare(b.name)})

     const listItems = fruitsObj.map((fruit)=>{
      

        return <li key={fruit.id}>{fruit.name}&nbsp;:&nbsp;{fruit.cast}</li>
     })


    return(<ol>{listItems}</ol>)

}

export default List