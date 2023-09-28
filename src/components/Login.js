import React from 'react';
import Form from 'react-bootstrap/Form';
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
    </Form>


        </div>
    );
};

export default Login;