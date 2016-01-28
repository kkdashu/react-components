import Colors from '../colors';

class Typography {

  constructor() {

    this.fontFamily = 'Roboto, sans-serif',
    // text colors
    this.textFullBlack = Colors.fullBlack;
    this.textDarkBlack = Colors.darkBlack;
    this.textLightBlack = Colors.lightBlack;
    this.textMinBlack = Colors.minBlack;
    this.textFullWhite = Colors.fullWhite;
    this.textDarkWhite = Colors.darkWhite;
    this.textLightWhite = Colors.lightWhite;

    this.textLabelColor = Colors.lightBlack;
    this.textColor = Colors.fullBlack;
    // font weight
    this.fontWeightLight = 300;
    this.fontWeightNormal = 400;
    this.fontWeightMedium = 500;

    // font size
    this.fontSizeSmall = 12;
    this.fontSizeNormal = 16;
    this.fontSizeBig = 18;
    this.fontStyleButtonFontSize = 14;
  }
}

export default new Typography();
