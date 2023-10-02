import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const Login = () => {
    return (
        <div>
        

 
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Adresse Mail</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Button variant="dark">Valider</Button>

    </Form>


        </div>
    );
};

export default Login;