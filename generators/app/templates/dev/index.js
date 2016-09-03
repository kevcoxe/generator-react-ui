/**
 *  index.js, the starter.
 *
 *  @author  <%= author %>
 *
 */
'use strict';

require.ensure([
    'less/main.less',
    '../js/fw/Entrance'
], function(require) {

    require('less/main.less');

    var Entrance = require('../js/fw/Entrance').default;
    (new Entrance()).run();
});
