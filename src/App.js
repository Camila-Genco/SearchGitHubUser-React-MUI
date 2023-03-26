import './App.css';
import { Container, Typography } from '@mui/material';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import getUser from "./services/users"
import { UserCard } from './containers/UserCard';

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (userName) => {
    const userResponse = await getUser(userName);
    
    if(userResponse.message === "Not Found"){
      setNotFound(true);
    }else{
      setUserState(userResponse);
      setNotFound(false);
    }
  }

  useEffect(() => {
    gettingUser(inputUser)
  }, [inputUser])
  
  return (
    <div>
      <Container sx={{
        background: 'whitesmoke',
        width: {xs:"90vw", md: "80vw"},
        height: {xs:"100%", md: "80vh", lg:"500px"},
        borderRadius: '16px',
        marginTop: {xs:"15px", md: "30px", lg:"40px"},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"}
      }}>
        <Search inputUser={inputUser} setInputUser={setInputUser} notFound={notFound}/>
        <UserCard userState={userState}/>       
      </Container>
    </div>
  );
}

export default App;
