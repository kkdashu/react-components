import React, {Component, PropTypes} from 'react';
import Overlay from './overlay';
import ComponentEnhance from 'ComponentEnhance';

class Dialog extends Component {
  static propTypes = {
    title: PropTypes.string,
    canClose: PropTypes.bool
  };
  static defaultProps = {
    canClose: true
  };
  touchOverlay() {
    console.log('touch');
  }
  render() {
    const {title, canClose, theme, style} = this.props;
    const dialogTheme= theme.dialog;
    const dialogStyle = {
      width: dialogTheme.width,
      minWidth: dialogTheme.minWidth,
      // height: dialogTheme.height,
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: dialogTheme.marginTop,
      marginLeft: '-25%',
      backgroundColor: dialogTheme.backgroundColor,
      borderRadius: dialogTheme.borderRadius,
      zIndex: theme.zIndex.dialog,
      padding: dialogTheme.padding,
      textAlign: 'center'
    }
    let closeBtn = null;
    const closeButtonStyle = {
      position: 'absolute',
      fontSize: '1.8em',
      right: 10,
      top: 0
    }
    if(canClose) {
      closeBtn = <a style={closeButtonStyle}>x</a>
    }
    return (
      <section>
        <Overlay onTouchTap={this.touchOverlay.bind(this)} />
        <div style={this.props.prepareStyles(style, dialogStyle)}>
          {closeBtn}
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default ComponentEnhance(Dialog);
