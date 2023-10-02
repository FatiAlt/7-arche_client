import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function contact() {
  return (
    <Form>
      <h1>Nous contacter pour tout problème rencontré</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Votre commentaire</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="dark">Valider</Button>

    </Form>
  );
}

export default contact;