import React from 'react';
import Form from './components/Form';
import './App.css';
import userModel from './utils/usersModel';
import UserContext from './utils/UserContext';

function App() {
  const users = userModel();
  return (
    <div className="App">

      <UserContext.Provider value ={users}>
        <Form/>
      </UserContext.Provider>

    </div>
  );
}

export default App;
