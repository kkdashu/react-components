/**
 * https://github.com/rofrischmann/inline-style-prefixer
 * 自动生成浏览器前缀
 */
import InlineStylePrefixer from 'inline-style-prefixer';
import warning from 'warning';

const prefixers = {};

export default {
  getPrefixer() {
    if(typeof navigator === 'undefined') {
      warning(false, `need global navigator`);
      return null;
    }

    const userAgent = navigator.userAgent;
    let prefixer = prefixers[userAgent];
    if(!prefixer) {
      prefixer = new InlineStylePrefixer({userAgent: userAgent});
      prefixers[userAgent] = prefixer;
    }
    return prefixer;
  },
  all(style) {
    if(!style) {
      return {};
    }
    const prefixer = this.getPrefixer();
    if(prefixer) {
      return prefixer.prefix(style);
    } else {
      style = InlineStylePrefixer.prefixAll(style);
    }
  },
  set(style, key, value) {
    style[key] = value;
    this.all(style);
  },
  getPrefix(key) {
    let style = {};
    style[key] = true;
    const prefixer = this.getPrefixer();
    let prefixes;
    if(prefixer) {
      prefixes = Object.keys(prefixer.prefix(style));
    }
    else {
      prefixes = Object.keys(InlineStylePrefixer.prefixAll(style));
    }
    return prefixes ? prefixes[0] : key;
  }
};
