import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import { Button , Checkbox } from '@mantine/core';
// import '@mantine/core/styles.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import TeamSelection from './components/TeamSelection';
import LeagueStanding from './components/LeagueStanding';
import MyTeam from './components/MyTeam';
import Scoring from './components/Scoring';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className='bg-slate-100' style={{minHeight: "100vh"}}>
 
      <BrowserRouter>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn setLoggedIn={setLoggedIn}/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/scoring" element={<Scoring/>}/>

        <Route path="/select-team" element={<TeamSelection/>}/>
        <Route path="/select-team/:id" element={<null/>} />
        <Route path="/my-team/:id" element={<MyTeam/>} />
        <Route path="/league-standings/:id" element={<LeagueStanding/>} />
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
  
      </Routes>
    </BrowserRouter>

  

    </div>
  );
}

export default App;

