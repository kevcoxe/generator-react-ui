
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
  }

};
