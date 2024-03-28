import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import { Button , Checkbox } from '@mantine/core';
import '@mantine/core/styles.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='bg-slate-100' style={{minHeight: "100vh"}}>
    <Nav/>
    <div className='grid grid-cols-12'>
      <div className='col-span-3 md:col-span-3'></div>
      <div className='col-span-3 md:col-span-6'>
          <SignUp/>
          {/* <Card content={
            <div>
              <h1>Sign In</h1>
              <div className='flex flex-col'>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <Button variant="filled" color="rgba(0, 0, 0, 1)">Button</Button>
                <Checkbox
                  defaultChecked
                  label="Remember me?"/>

              </div>
              <h5>New to Top 25 Showdown? <button>Sign Up</button></h5>
            </div>}/> */}
           
      </div>
      <div className='col-span-3 md:col-span-3'></div>
    </div>

    </div>
  );
}

export default App;
