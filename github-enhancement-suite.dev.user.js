// ==UserScript==
// @name         GitHub Enhancement Suite (Dev)
// @namespace    http://tampermonkey.net/
// @version      1.0-dev
// @description  Development version - loads github-enhancement-suite.user.js from local filesystem
// @author       https://github.com/collinstevens
// @match        https://*.github.com/*
// @require      file://wsl.localhost/Ubuntu/home/collin/projects/collinstevens/github-enhancement-suite/github-enhancement-suite.user.js
// @grant        none
// ==/UserScript==

// This script loads github-enhancement-suite.user.js via @require, so you can edit
// github-enhancement-suite.user.js and refresh the page to see changes without
// updating Tampermonkey.
//
// NOTE: You may need to enable "Allow access to file URLs" for Tampermonkey
// in your browser's extension settings (chrome://extensions or about:addons).
