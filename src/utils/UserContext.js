import React from 'react'

const UserContext = React.createContext({
    name: {
        value: "",
        onChange: ()=>{},
    },
    image: {
        value: "",
        onChange: ()=>{},
    },
    email: {
        value: "",
        onChange: ()=>{},
    }
})

export default UserContext
