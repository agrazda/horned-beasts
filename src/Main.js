

class Main extends Component {
  render()  {
    return (
    <>  
      <h1>Message here: {this.props.message}</h1>;
      <BeastImage image_url={beastImages[1].image_url} /> 
      <BeastImage />
      <BeastImage />
      <BeastImage />
    </>
  })
}

class BeastImage extends Component {

    constructor(props){
        super(constructor);
        this.state= {
            'status': "yay"
        }

    handleClick =()=> {
        const newStatus = this.state.status === 'Nay' ? 'Yay' :  'Nay';
        this.setState({
            status: newStatus
        })
    }

    }
    render() {
        return 
        <div onClick=(this.handleClick)>
        <img src= {this.props.image_url />
        <p>{this.state.status}</p>
        </div>
    }
}



export default Main;
