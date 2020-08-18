import {useState} from 'react'

const useUserModel = () => {
    
    const [nameState, setNameState] = useState("Joseph");

    return {
        error: nameState === "" ? "Please enter a name value" : "",

        name: {
            value: nameState,
            onChange: (e) => setNameState(e.target.value),
        }
    }
}

export default useUserModel;
