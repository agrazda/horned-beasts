import React from 'react';


class HornedBeast extends React.Component {
  render() {
    return(
      <>  
        <h2>{this.props.title}</h2>
        <div onClick={this.handleClick}/>
        <img src={this.props.image_url} alt='' title='' />
        <p>{this.props.description}</p>
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
