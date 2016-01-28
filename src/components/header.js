import React, { Component, PropTypes } from 'react';
import ComponentEnhance from 'ComponentEnhance';

/**
 * 头部组件
 * <header
 * 	title="车次查询"
 * 	zDepth={2},
 * 	transitionEnabled={true},
 * 	style={display: block}
 * />
 */
class Header extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired
  };
  render() {
    const {
      theme,
      style
    } = this.props;
    const styles = {
      backgroundColor: theme.palette.primary1Color,
      paddingLeft: '1rem'
    };
    const titleStyle = {
      margin: 0,
      padding: '.5rem',
      color: theme.palette.alternateTextColor,
      fontSize: 16,
      fontWeight: 400
    };
    return (
      <header style={this.props.prepareStyles(styles, style)}>
        <h3 style={titleStyle}>{this.props.title}</h3>
      </header>
    );
  }
}

export default ComponentEnhance(Header);
