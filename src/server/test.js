var mogons = require('./db.js');
var scamew = mogons.Schema;
var testApi = new scamew({
    A: { type: String },
    B: { type: String },
    C: { type: String }

});

module.exports = mogons.model('testApiS', testApi);