import React from 'react';
import HornedBeast from './HornedBeasts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {this.props.beastImages.map((beast, idx)=>(
            <Col>
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
                key={idx}
                index={idx}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}




// class BeastImage extends Component {

//     constructor(props){
//         super(constructor);
//         this.state= {
//             'status': "yay"
//         }

//     handleClick =()=> {
//         const newStatus = this.state.status === 'Nay' ? 'Yay' :  'Nay';
//         this.setState({
//             status: newStatus
//         })
//     }

//     }
//     render() {
//         return
//         <div onClick=(this.handleClick)>
//         <img src= {this.props.image_url />
//         <p>{this.state.status}</p>
//         </div>
//     }
// }



export default Main;
