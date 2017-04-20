'use strict';

// BLACKLIST

// Remove first occurence of angle brackets
const firstAngleBrackets = (input) => input.replace(/<(script)>([^<]*)(?:<\/)?(script)?>?/g, (_, a, b, c) =>  c ? a + b + c : a + b);
// console.log(firstAngleBrackets('<script>faf</script>hello<script>bybyby</script>'));

// Remove script tags entirely (case sensitive)
const removeScriptTags = (input) => input.replace(/<script>([^<]*)(?:<\/script>)?/g, (_, a) =>  a);
// console.log(removeScriptTags('<script>faf</script>'));

module.exports = { firstAngleBrackets, removeScriptTags };
