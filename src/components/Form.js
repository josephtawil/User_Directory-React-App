import React,{useContext} from 'react'
import UserContext from '../utils/UserContext';

const Form = () => {

    const users = useContext(UserContext);

    const names = ["Joseph","John","Jack","Jacob","Josh"];
    
    const filterName = () => {
        names.filter((name)=>name.includes("Jos")).map((filterName)=>(
            <li>{filterName}</li>
        ))
    }

    return (
        <div>
            <h1>Enter name</h1>
            <form className="form-group">
                <label htmlFor="name">Name:</label>
                <input  className="form-control" id="name" placeholder="Enter employee name" {...users.name} />
                
            </form>
        </div>
    )
}

export default Form
