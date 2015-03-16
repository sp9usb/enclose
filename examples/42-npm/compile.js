#!/usr/bin/env node

/* eslint curly:0 */
/* eslint no-process-exit:0 */

var enclose = require("../../").exec;
var flags = [];
var windows = process.platform === "win32";
var wexe = windows ? ".exe" : "";
var x64 = process.arch === "x64";
if (x64) flags.push("--x64");

try {
  require.resolve("npm");
} catch(error) {
  console.log("Failed to require('npm')");
  console.log("Please run 'npm install' here");
  process.exit(1);
}

flags.push("--output", "./npm" + wexe);
flags.push("./index.js");
enclose(flags);
