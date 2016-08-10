require('normalize.css/normalize.css');
require('styles/App.scss');

// 获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

import React from 'react';
import ReactDOM from 'react-dom';

/*
 * 利用自执行函数，将图片名信息转化为URL路径信息
 * @param imageDatasArr 传入的数据
 */
imageDatas = (function genImageURL(imageDatasArr) {
  for(var i=0; i<imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      /*<div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>*/

      <section className="stage">
        <section className="img-sec">

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
