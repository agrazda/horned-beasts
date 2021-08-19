import SelectedBeast from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
    render() {
      return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {this.props.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Modal.Img>{this.props.image_url}</Modal.Img>  
            <h4>Centered Modal</h4>
            <p>
                {this.props.description}
            </p>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
}
  
  function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default Modal
