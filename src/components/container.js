import React from 'react';
import PropTypes from '../utils/prop_types';
import ComponentEnhance from 'ComponentEnhance';
class Container extends React.Component {
  constructor (props) {
    super(props);
    // this.context = this.context || {};
  }
  static propTypes = {
    /**
     * Children passed into the paper element.
     */
    children: React.PropTypes.node,

    /**
     * 是否是圆型(需设置width与height一致)
     */
    circle: React.PropTypes.bool,

    /**
     * By default, the paper container will have a border radius.
     * Set this to false to generate a container with sharp corners.
     */
    rounded: React.PropTypes.bool,

    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,

  };
  static defaultProps = {
    circle: false,
    rounded: true,
  };
  state = {
  };
  render() {
    const {
      children,
      circle,
      rounded,
      style,
      transitionEnabled,
      zDepth,
      ...other,
      theme
    } = this.props;
    const styles = {
      backgroundColor: theme.container.backgroundColor,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      borderRadius: circle ? '50%' : rounded ? '2px' : '0px',
    };
    return (
      <div {...other} style={this.props.prepareStyles(styles, style)}>
        {children}
      </div>
    );
  }
}

export default ComponentEnhance(Container);
