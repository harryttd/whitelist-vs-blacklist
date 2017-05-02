'use strict';

const blacklist = {
  // Remove first occurence of script tag angle brackets
  firstAngleBrackets: (input) => input.replace(/<(\/?script)>/g, '$1'),
  // Remove script tags entirely (lowercase sensitive)
  removeScriptTags: (input) => input.replace(/<*\/?script>*/g, '')
};

blacklist.firstAngleBrackets.title = "Remove first occurence of script tag angle brackets";
blacklist.removeScriptTags.title = "Remove script tags completely lowercase sensitive";

module.exports = { blacklist };
