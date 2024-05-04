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

function App() {
  return (
    <div className='bg-slate-100' style={{minHeight: "100vh"}}>
 
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/select-team" element={<TeamSelection/>}/>
        <Route path="/select-team/:id" element={<null/>} />
        <Route path="/league-standing/:id" element={<LeagueStanding/>} />
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

