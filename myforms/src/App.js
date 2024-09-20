import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {

 return (
   <div>
     <h1>Ejemplo de formularios!</h1>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email"/>
       <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
       <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Label>Favorite Class</Form.Label>
       <Form.Select>
         <option value="1">ISIS3710</option>
         <option value="2">Programación con tecnologias web</option>
       </Form.Select>
     </Form.Group>
     <Button variant="primary">
       Submit
     </Button>
   </Form>
   </div>
 );
}

export default App;