import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// class HornedBeast extends React.Component {
//   render() {
//     return(
//       <>
//         <h2>{this.props.title}</h2>
//         <img src={this.props.image_url} alt={this.props.title}/>
//         <p>{this.props.description}</p>
//       </>
//     );
//   }
// }



class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      favCounter: 0
    };
  }

  addToFavorites = () => {
    this.setState({favCounter: this.state.favCounter +1});
  }

  deleteFavorites = () => {
    this.setState({favCounter: this.state.favCounter -1});
  }

  render() {
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Img onClick={this.addToFavorites} variant="top" src={this.props.image_url} alt={this.props.title} />
            <Card.Text>
              <p>{this.props.description}</p>
            </Card.Text>
            <Button onClick={this.addToFavorites} variant="primary">Add to Favorites</Button>
            <Button onClick={this.deleteFavorites} variant="primary">Delete Favorites</Button>
            <Card.Text>
            ❤️ Favorites: {this.state.favCounter}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;

// constructor(props){
//     super(constructor);
//     this.state= {
//         'status': "yay"
//     }

// handleClick =()=> {
//     const newStatus = this.state.status === 'Nay' ? 'Yay' :  'Nay';
//     this.setState({
//         status: newStatus
//     })
// }

// }

// render() {
//     return
//     <div onClick=(this.handleClick)>
//     <img src= {this.props.image_url />
//     <p>{this.state.status}</p>
//     </div>
//     }
// }
