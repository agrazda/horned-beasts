import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      beastImages: beastImages, showModal: false,
    };
  }

  closeHandler = () => {
    this.setState({
      showModal: false,
    });
  }

  openHandler =(selection) => {
    this.setState({
      showModal:true,
      display: selection
    });
  }

  render(){
    return (
      <>
        <Header title='Horned Beasts' />
        <Main beastImages= {this.state.beastImages} openHandler={this.openHandler}/>
        {this.state.display ? <SelectedBeast show= {this.state.showModal} onHide={this.closeHandler} title={this.state.display.title} description={this.state.display.description} image_url={this.state.display.image_url}/> : null }
        <Footer />
      </>
    );
  }
}


export default App;
