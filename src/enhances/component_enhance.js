/**
 * 增强通用组件
 * es6不支持reactjs的mixins 使用Higher-order Components解决
 * https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775
 * http://segmentfault.com/a/1190000004034031
 */
import React, {Component} from 'react';
import PropTypes from '../utils/prop_types';
import theme from '../styles/theme';
import Transitions from '../styles/transitions';
import {mergeStyles,  prepareStyles as prepare} from '../utils/styles';

export default ComposedComponent => class extends Component {
  static propTypes = {
    style: React.PropTypes.object,
    /**
     * Set to false to disable CSS transitions for the paper element.
     */
    transitionEnabled: React.PropTypes.bool,

    /**
     * This number represents the zDepth of the paper shadow.
     */
    zDepth: PropTypes.zDepth,
  };
  static defaultProps = {
    theme: theme,
    zDepth: 0,
    transitionEnabled: false
  };
  getZindexShadows(zDepth) {
    const shadows = [
      null,
      '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
      '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)',
      '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
      '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)',
      '0 19px 60px rgba(0, 0, 0, 0.30), 0 15px 20px rgba(0, 0, 0, 0.22)',
    ];

    return shadows[zDepth];
  }
  // mergeStyles: mergeStyles
  prepareStyles(...args) {
    return prepare(...args);
  }
  render() {
    const {
      theme,
      zDepth,
      transitionEnabled
    } = this.props;
    const style = mergeStyles({
      boxShadow: this.getZindexShadows(zDepth),
      transition: transitionEnabled && Transitions.easeOut(),
      boxSizing: 'border-box',
      fontFamily: theme.typography.fontFamily,
    }, this.props.style);
    return <ComposedComponent {...this.props} style={style} getZindexShadows={this.getZindexShadows} prepareStyles={this.prepareStyles} />

  }
}
