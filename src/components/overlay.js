/**
 * 遮罩层
 * <Overlay onTouchTap={() => console.log('touch')} />
 */

import React, {Component, PropTypes} from 'react';
import theme from 'styles/theme'
class Overlay extends Component {
  static propTypes = {
    onTouchTap: PropTypes.func.isRequired
  };
  static defaultProps = {
    isVisible: true //是否显示
  };
  handleTouchTap() {
    this.props.onTouchTap();
  }
  render() {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: theme.zIndex.dialogOverlay,
      backgroundColor: theme.overlay.backgroundColor
    }
    if(this.props.isVisible) {
      style.display = 'block';
    } else {
      style.display = 'none';
    }
    return (
      <div onTouchTap={this.handleTouchTap.bind(this)} style={style}>

      </div>
    )
  }
}
export default Overlay;
