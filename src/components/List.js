import React,{useContext} from 'react'
import UserContext from '../utils/UserContext';

const List = () => {
    
    const users = useContext(UserContext);
console.log(users.name)
    const names = ["Joseph","John","Jack","Jacob","Josh"];
    const images = ["man1.jpg","MyImage.png"];
    const img = images.map((img)=>{
        return("../images/" + img);
   })
    return (
        
            <div className="container">

              <div className="row">
              {names.filter((filteredName)=> filteredName.includes(users.name.value)).map((name, index) =>{
                  return(
                    <div className="card" style={{width: "18rem"},{margin: "1em"}}>
                    <img src={"../images/man1.jpeg"} style= {{width: "90%"},{height: "550px"}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h4 style={{'listStyleType': 'none'}} key={index}>{name}</h4>
                      <p>Phone Number: 415-609-6690</p>
                      <p>Email: jtawil2015@gmail.com</p>

        
                    </div>
                  </div>
                  
                  
              )})}
              </div>
            
            </div>
    )
}

export default List
