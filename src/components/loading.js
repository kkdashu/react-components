import React, {Component} from 'react';
import Dialog from './dialog';
var assign = require('react-kit/appendVendorPrefix');
var insertKeyframesRule = require('react-kit/insertKeyframesRule');

/**
 * @type {Object}
 */
var keyframes = {
    '50%': {
        transform: 'scale(0.75)',
        opacity: 0.2
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
};

var animationName = insertKeyframesRule(keyframes);

class Loading extends Component {
  static defaultProps = {
    color: '#000000',
    size: '15px',
    margin: '2px'
  };
  getBallStyle() {
    return {
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      margin: this.props.margin,
      borderRadius: '100%',
      verticalAlign: this.props.verticalAlign
    }
  }
  getAnimationStyle(i) {
    var animation = [animationName, '0.7s', i%2? '0s': '0.35s', 'infinite', 'linear'].join(' ');
    var animationFillMode = 'both';
    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  getStyle(i) {
    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i),
      {
          display: 'inline-block'
      }
    )
  }

  renderLoader() {
    return (
      <div id={this.props.id} className={this.props.className}>
        <div style={this.getStyle(1)}></div>
        <div style={this.getStyle(2)}></div>
        <div style={this.getStyle(3)}></div>
      </div>
    );
  }

  render() {
    return (
      <Dialog canClose={false}>
        {this.renderLoader()}
        <div>
          数据正加载中
        </div>
      </Dialog>
    )
  }
}

export default Loading;
