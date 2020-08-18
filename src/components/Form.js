import React,{useContext} from 'react'
import UserContext from '../utils/UserContext';

const Form = () => {


    const users = useContext(UserContext);

    return (
        <div>
            <h1>Enter name</h1>
            <form className="form-group">
                <label htmlFor="name">Name:</label>
                <input  className="form-control" name="name" placeholder="Enter employee name" {...users.name}/> 
            </form>
            
        </div>
    )
}

export default Form
