const Encoder = require('node-html-encoder').Encoder;

// entity type encoder
const entityEncoder = new Encoder('entity');

// console.log(entityEncoder.htmlEncode('<foo /> "bar"'));
// prints &lt;foo /&gt; &quot;bar&quot;

// console.log(entityEncoder.htmlDecode('&lt;foo /&gt; &quot;bar&quot;'));
// prints <foo /> "bar"

// numerical type encoder
const numericalEncoder = new Encoder('numerical');

// console.log(numericalEncoder.htmlEncode('<foo /> "bar"'));
// prints &#60;foo /&#62; &#34;bar&#34;

// console.log(numericalEncoder.htmlDecode('&#60;foo /&#62; &#34;bar&#34;'));
// prints <foo /> "bar"

module.exports = { entityEncoder, numericalEncoder };
