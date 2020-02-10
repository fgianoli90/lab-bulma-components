import React from 'react';
// import logo from './logo.svg';
// import Welcome from './Welcome.js';
// import GoodBye from './GoodBye.js'
import './App.css';
import NavBar from './NavBar.js';
import FormField from './FormField';
import SignUp from "./SignUp"
import Container from "./Container"
//stateless or functional component



function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Welcome emoji=":)" />
      <button class="button is-rounded my-class is-danger is-small">Button 1</button>
      <GoodBye emoji=":(" />  */}
      {/* <showForm ? FormField: false show nothing> */}
      <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <SignUp/>
      <Container/>

    
    </div>
  );
}

export default App;
