import React, {Component, PropTypes} from 'react';
import ComponentEnhance from 'ComponentEnhance';
class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onTouchTap: PropTypes.func.isRequired
  };
  static defaultProps = {
    primary: true,
    secondary: false
  };
  render() {
    const {
      theme,
      style
    } = this.props;
    const styles = {
      border: 'none',
      width: '100%',
      padding: '10px',
      color: this.props.primary ? theme.button.primaryTextColor : theme.button.secondaryTextColor,
      backgroundColor: this.props.primary ? theme.button.primaryBackgroundColor : theme.button.secondaryBackgroundColor,
    }
    return(
      <button onTouchTap={this.props.onTouchTap} style={this.props.prepareStyles(styles, style)}>
        {this.props.label}
      </button>
    );
  }
}

export default ComponentEnhance(Button);
