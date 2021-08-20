import React from 'react';
import Form from 'react-bootstrap/Form';



class FormBeasts extends React.Component {
  render() {
    return (
      <Form style={{ width: '18rem'}}>
        <Form.Select aria-label="Default select example">
          <option>How Many Horns do you Want?</option>
          <option value="1">1 HORN</option>
          <option value="2">2 HORNS</option>
          <option value="3">3 HORNS</option>
          <option value="3">100 HORNS</option>
        </Form.Select>
      </Form>
    );
  }
}



export default FormBeasts;
