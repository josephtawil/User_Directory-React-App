import React,{useContext} from 'react'
import UserContext from '../utils/UserContext';

const List = () => {
    
    const users = useContext(UserContext);
console.log(users.name)
    const names = ["Joseph","John","Jack","Jacob","Josh"];

    return (
            <div className="row" style={{padding: '20px'}}>
                    <div className="col-3" style={{border: '1px solid', width: '100px'}}>
                        <h4 style={{'marginLeft': '35px'}}>Employees</h4>
                    <ul>
              {names.filter((filteredName)=> filteredName.includes(users.name.value)).map((name, index) =>{
                  return(<li style={{'listStyleType': 'none'}} key={index}>{name}</li>)
              })}
            </ul>
                    </div>
            </div>
    )
}

export default List
