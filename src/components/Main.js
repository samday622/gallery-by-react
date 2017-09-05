require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

let imageDatas = require('../images/imageDatas.json');
function genImageURL(imageDatasArr){
  for(let i=0; i<imageDatasArr.length;i++){
    let singleImageData = imageDatasArr[i];
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>hello</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
