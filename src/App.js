import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
// import beastImages from './data.json';



class App extends React.Component {
  render(){
    return (
      <>
        <Header title='Horned Beasts' />
        <Main message= 'Add Something'/>
        <Footer />
      </>
    );
  }
}

export default App;
