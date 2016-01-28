// import merge from 'object.assign';
// import Colors from './colors';
// import ColorManipulator from '../utils/color_manipulator';
import zIndex from './zIndex';
import palette from './palette';
import typography from './typography';
import spacing from './spacing';
import Colors from '../colors';

const theme = Object.assign({ },
  {
    zIndex: zIndex,
    typography: typography,
    spacing: spacing,
    palette: palette
  },
  {
    container: {
      backgroundColor: palette.canvasColor
    },
    button: {
      primaryBackgroundColor: palette.primary1Color,
      secondaryBackgroundColor: palette.primary3Color,
      primaryTextColor: Colors.fullWhite,
      secondaryTextColor: Colors.lightWhite
    },
    overlay: {
      backgroundColor: Colors.minBlack
    },
    dialog: {
      width: '50%',
      minWidth: '100px',
      // height: '400px',
      marginTop: '-200px',
      backgroundColor: Colors.fullWhite,
      borderRadius: '8px',
      padding: '15px'
    }
  }
);

export default theme;
