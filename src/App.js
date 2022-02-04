
import './App.css';
import {Container, Row, Col} from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
           </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
