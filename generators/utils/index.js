
module.exports = {

  capitalize: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  camelCase: function (string) {
    return string.replace(/^([A-Z])|\s(\w)/g, (match, p1, p2) => {
      if ( p2 ) {
        return p2.toUpperCase();
      }
      return p1.toLowerCase();
    });
  },

  //kebabCase: function (string) {
  //  return string;
  //},

  isUndefined: function (string) {
    return typeof string === "undefined";
  },

  isPlainObject: function (value) {
    if ( typeof value === 'object' && value !== null) {

      if (typeof Object.getPrototypeOf === 'function') {
        var proto = Object.getPrototypeOf(value);
        return proto === Object.prototype || proto === null;
      }

      return Object.prototype.toString.call(value) === '[object Object]';
    }

    return false;
  }

};
