require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
//获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

//领自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr){
  for(let i=0; i<imageDatasArr.length;i++){
    let singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section class="stage">
        <section class="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
