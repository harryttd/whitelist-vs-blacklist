'use strict';

const whitelist = {
  // Don't allow script tags
  noScriptTags: (input) => {
    if (/<\s*\/?\s*s\s*c\s*r\s*i\s*p\s*t\s*>/gi.test(input)) {
      return 'invalid input';
    }
    return input;
  }

};

whitelist.noScriptTags.title = "Don't allow script tags";

module.exports = { whitelist };
