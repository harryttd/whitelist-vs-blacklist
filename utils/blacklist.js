'use strict';

const blacklist = {
  // Remove first occurence of script tag angle brackets
  firstAngleBrackets: (input) => input.replace(/<(script)>(.*)(?:<\/)(script)>/g, (_, a, b, c) =>  c ? a + b + c : a + b),
  // Remove script tags entirely (lowercase sensitive)
  removeScriptTags: (input) => input.replace(/<+script>+([^<]*)(?:<*\/*script>*)?/g, (_, a) =>  a)
};

blacklist.firstAngleBrackets.title = "Remove first occurence angle brackets of script tag";
blacklist.removeScriptTags.title = "Remove script tags";

module.exports = { blacklist };
