import React from 'react';
import beastImages from './data.json';

class HornedBeast extends React.Component {
  render() {
    return(
      <>  
        <h2>This Beast</h2>
        <img src={beastImages[5].image_url} alt='' title='' />
        <p>About the animal</p>
      </>
    );
  }
}

export default HornedBeast;
