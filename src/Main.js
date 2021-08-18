import React from "react";
import HornedBeast from "./HornedBeasts";

class Main extends React.Component {
  render()  {
    return (
      <>  
        {
          this.props.beastImages.map((beast, idx)=>(
            <HornedBeast 
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              key={idx}
              index={idx}
            />
          ))
        }
        
      </>
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
