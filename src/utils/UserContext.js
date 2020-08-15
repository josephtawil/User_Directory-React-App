import React from 'react'

const UserContext = React.createContext({
    name: {
        value: "",
        onChange: ()=>{},
    },
})

export default UserContext
