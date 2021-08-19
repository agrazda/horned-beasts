import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import beastImages from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      beastImages: beastImages,
    };
  }
  render(){
    return (
      <>
        <Header title='Horned Beasts' />
        <Main beastImages= {this.state.beastImages}/>
        <Footer />
      </>
    );
  }
}

// Modal
// Modal is an Alert
// Modal must have show = Modal show={true} - to show on page

export default App;
