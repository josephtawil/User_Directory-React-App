import React,{useContext} from 'react'
import UserContext from '../utils/UserContext';

const List = () => {
    
    const users = useContext(UserContext);
console.log(users.name)
    const names = ["Joseph","John","Jack","Jacob","Josh"];

    // const filterList = () => {
    //     names.filter((name) => {
    //         if(users.name.value === name){
    //           return (<li>hello</li>)
    //         }

    //     });
    // }

    return (
        <div>
            <ul>
              {names.filter((filteredName)=> filteredName.includes(users.name.value)).map((name, index) =>{
                  return(<li key={index}>{name}</li>)
              })}
            </ul>
        </div>
    )
}

export default List
