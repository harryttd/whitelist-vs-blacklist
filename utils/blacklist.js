'use strict';

const blacklist = {
  // Remove first occurence of script tag angle brackets
  // /<(script)>([^<]*)(?:<\/(script)>)?/g
  firstAngleBrackets: (input) => input.replace(/<\/?(script)>/g, (_, a) => a),
  // Remove script tags entirely (lowercase sensitive)
  removeScriptTags: (input) => input.replace(/<+script>+([^<]*)(?:<*\/*script>*)?/g, (_, a) =>  a)
};

blacklist.firstAngleBrackets.title = "Remove first occurence of script tag angle brackets";
blacklist.removeScriptTags.title = "Remove script tags completely";

module.exports = { blacklist };
