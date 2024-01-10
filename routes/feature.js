const express = required('expess');
const featurerouter  = express.Router();

featurerouter.route('/feature').get();
featurerouter.route('/feature').post();
featurerouter.route('/feature/:id').put();
featurerouter.route('/feature/:id').delete();

module.exports = featurerouter;
