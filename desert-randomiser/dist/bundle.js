var desertRandomiser;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
*
* @source: https://raw.githubusercontent.com/superbike123/superbike123.github.io/main/desert-generator/index.ts
*
* @licstart  The following is the entire license notice for the JavaScript code in this page.
*
* desert & sbr test Randomiser
* Copyright (C) 2023 superbike
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*
* @licend  The above is the entire license notice for the JavaScript code in this page.








*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moreLess = exports.getBoth = exports.clearText = exports.switchGame = exports.getHorse = exports.getSpec = exports.getStand = void 0;
////////////////////////////////////////////////////////////
//              desert & sbr test Randomiser              //
//                      Version 2.0                       //
////////////////////////////////////////////////////////////
// Sets are now imported as JSON files. See the sets/ directory.
var regular = __webpack_require__(54);
var alternative = __webpack_require__(358);
var james = __webpack_require__(120); // lol
var status = __webpack_require__(355);
// Define the sets that come by default, this is used for the dropdown HTML object.
var defaultSets = "<option>Regular</option><option>Alternative</option>";
var dropdown = document.getElementById("setsDropdown");
// Add the default sets to the dropdown.
dropdown.innerHTML = defaultSets;
// Store symbols for the identifications.
var symbols = ["✅", "🌳"];
console.log("---- Source code for this website can be found on the git repository here: https://github.com/superbike123/superbike123.github.io/tree/main/desert-randomiser");
// Cookie stuff
var gameButton = document.getElementById("gameButton");
if (gameButton !== null) {
    console.log("-- gameButton HTML element found in the DOM");
    if (document.cookie === "") {
        console.log("-- No cookie found... trying to create one");
        document.cookie = "selectedGame=desert";
        console.log("-- Created a cookie with value: " + document.cookie);
        document.getElementById("gameButton").innerHTML = "<strong>" + "Current Game: desert" + "</strong>";
        console.log("-- Set the text on gameButton as: '" + document.getElementById("gameButton").textContent + "'");
        document.getElementById("horse").style.display = "none";
    }
    else {
        console.log("-- Found a cookie with value: " + document.cookie);
        document.getElementById("gameButton").innerHTML = "<strong>" + "Current Game: " + document.cookie.replace(/selectedGame=/g, "") + "</strong>";
        if (document.cookie.replace(/selectedGame=/g, "") === "desert") {
            document.getElementById("horse").style.display = "none";
        }
    }
}
else {
    console.error("-- error: gameButton HTML element not found in the DOM");
}
// Function to get a Stand
var getStand = function (type) {
    if (type === 0) {
        (0, exports.clearText)();
    }
    if (dropdown.value === "Alternative") {
        var standNo = Math.floor(Math.random() * alternative.stands.length);
        var generatedStand = alternative.stands[standNo];
        if (status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField").textContent = "Stand: " + generatedStand + " ( " + symbols[0] + symbols[1] + " )";
        }
        else if (status["completed"].includes(generatedStand) && !status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField").textContent = "Stand: " + generatedStand + " ( " + symbols[0] + " )";
        }
        else if (!status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField").textContent = "Stand: " + generatedStand + " ( " + symbols[1] + " )";
        }
        else {
            // Display the Stand
            document.getElementById("standField").textContent = "Stand: " + generatedStand;
            return generatedStand;
        }
    }
    else { // Regular set
        var standNo = Math.floor(Math.random() * regular.stands.length);
        var generatedStand = regular.stands[standNo];
        if (status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField").textContent = "Stand: " + generatedStand + " ( " + symbols[0] + symbols[1] + " )";
        }
        else if (status["completed"].includes(generatedStand) && !status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField").textContent = "Stand: " + generatedStand + " ( " + symbols[0] + " )";
        }
        else if (!status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField").textContent = "Stand: " + generatedStand + " ( " + symbols[1] + " )";
        }
        else {
            // Display the Stand
            document.getElementById("standField").textContent = "Stand: " + generatedStand;
            return generatedStand;
        }
    }
};
exports.getStand = getStand;
// Function to get a Spec
var getSpec = function (type) {
    if (type === 0) {
        (0, exports.clearText)();
    }
    if (dropdown.value === "Alternative") {
        var specNo = Math.floor(Math.random() * alternative.specs.length);
        var generatedSpec = alternative.specs[specNo];
        if (status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField").textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + symbols[1] + " )";
        }
        else if (status["completed"].includes(generatedSpec) && !status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField").textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + " )";
        }
        else if (!status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField").textContent = "Spec: " + generatedSpec + " ( " + symbols[1] + " )";
        }
        else {
            // Display the Stand
            document.getElementById("specField").textContent = "Spec: " + generatedSpec;
            return generatedSpec;
        }
    }
    else {
        var specNo = Math.floor(Math.random() * regular.specs.length);
        var generatedSpec = regular.specs[specNo];
        if (status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField").textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + symbols[1] + " )";
        }
        else if (status["completed"].includes(generatedSpec) && !status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField").textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + " )";
        }
        else if (!status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField").textContent = "Spec: " + generatedSpec + " ( " + symbols[1] + " )";
        }
        else {
            // Display the Stand
            document.getElementById("specField").textContent = "Spec: " + generatedSpec;
            return generatedSpec;
        }
    }
};
exports.getSpec = getSpec;
var getHorse = function (type) {
    if (type === 0) {
        (0, exports.clearText)();
    }
    if (dropdown.value === "Alternative") {
        var horseNo = Math.floor(Math.random() * alternative.horses.length);
        var generatedHorse = alternative.horses[horseNo];
        // Display the Spec
        document.getElementById("horseField").textContent = "Horse: " + generatedHorse;
        return generatedHorse;
    }
    else {
        var horseNo = Math.floor(Math.random() * regular.horses.length);
        var generatedHorse = regular.horses[horseNo];
        // Display the Spec
        document.getElementById("horseField").textContent = "Horse: " + generatedHorse;
        return generatedHorse;
    }
};
exports.getHorse = getHorse;
var switchGame = function () {
    var desertText = "Current Game: desert";
    var sbrText = "Current Game: sbr test";
    var buttonText = document.querySelector("#gameButton");
    if (buttonText.textContent === desertText) {
        buttonText.innerHTML = "<strong>" + sbrText + "</strong>";
        document.cookie = "selectedGame=sbr test";
        document.getElementById("horse").style.display = "inline";
    }
    else {
        buttonText.innerHTML = "<strong>" + desertText + "</strong>";
        document.cookie = "selectedGame=desert";
        document.getElementById("horse").style.display = "none";
    }
};
exports.switchGame = switchGame;
// Function to clear all of the text in the Stand, Spec and Horse fields
var clearText = function () {
    var fields = document.querySelectorAll('#fields h3');
    fields.forEach(function (element) {
        element.textContent = "";
    });
};
exports.clearText = clearText;
// Function to get a Stand, Spec and a Horse
var getBoth = function () {
    if (document.cookie === "selectedGame=desert") { // desert
        (0, exports.clearText)();
        (0, exports.getStand)(1);
        (0, exports.getSpec)(1);
    }
    else if (document.cookie === "selectedGame=sbr test") { // sbr test
        (0, exports.getStand)(1);
        (0, exports.getSpec)(1);
        (0, exports.getHorse)(1);
    }
};
exports.getBoth = getBoth;
var showingMore = false;
var moreLess = function () {
    var line0 = '<strong>desert & sbr test Randomiser</strong> is a tool used to create randomised selections of Stands, Specs and Horses for <a href="https://www.roblox.com/games/8823151085/desert">desert</a> and <a href="https://www.roblox.com/games/9245024720/sbr-test">sbr test</a>...';
    var line0_alt = '<strong>desert & sbr test Randomiser</strong> is a tool used to create randomised selections of Stands, Specs and Horses for <a href="https://www.roblox.com/games/8823151085/desert">desert</a> and <a href="https://www.roblox.com/games/9245024720/sbr-test">sbr test</a>';
    var line1 = "Use the <strong>'Select All'</strong> button to generate all of them.";
    var line2 = 'Using the <strong>alternative set</strong> disables some stands, specs and horses. For more information, <a href="https://github.com/superbike123/superbike123.github.io/blob/main/desert-randomiser/AltSet.md">see the list of changes';
    var line3 = "If something has a tick (✅) next to it, then it is complete. If something has a tree (🌳) then it has a skilltree.";
    var line4 = "desert & sbr test Randomiser: Version 2.0";
    var moreLessText = document.getElementById("moreLessText");
    var line0Html = document.getElementById("text_0");
    var line1Html = document.getElementById("text_1");
    var line2Html = document.getElementById("text_2");
    var line3Html = document.getElementById("text_3");
    var line4Html = document.getElementById("text_4");
    if (moreLessText.textContent === "Show More") {
        showingMore = false;
    }
    else if (moreLessText.textContent === "Show Less") {
        showingMore = true;
    }
    if (showingMore === false) {
        line0Html.innerHTML = line0_alt;
        line1Html.innerHTML = line1;
        line2Html.innerHTML = line2;
        line3Html.innerHTML = line3;
        line4Html.innerHTML = line4;
        moreLessText.textContent = "Show Less";
    }
    else {
        line0Html.innerHTML = line0;
        line1Html.innerHTML = "";
        line2Html.innerHTML = "";
        line3Html.innerHTML = "";
        line4Html.innerHTML = "";
        moreLessText.textContent = "Show More";
    }
};
exports.moreLess = moreLess;


/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = JSON.parse('{"stands":["The World","Star Platinum - Prime","Hierophant Green","Sticky Fingers","Magicians Red","Gold Experience","Whitesnake","King Crimson","Silver Chariot","The World Over Heaven","The Hand","Star Platinum","Cream","Crazy Diamond","Killer Queen"],"specs":["Hamon","Vampire","Joseph\'s Hamon","Spin"],"horses":["Basic","Blitz","Vital","Bullet","Precise","Simple"]}');

/***/ }),

/***/ 54:
/***/ ((module) => {

module.exports = JSON.parse('{"stands":["The World","Star Platinum - Prime","Made In Heaven","Hierophant Green","Sticky Fingers","Magicians Red","Gold Experience","Whitesnake","C-Moon","King Crimson","Silver Chariot","The World Over Heaven","The Hand","Star Platinum","Cream","Crazy Diamond","Killer Queen"],"specs":["Basic","Hamon","Vampire","Joseph\'s Hamon","Witch","Spin"],"horses":["Basic","Blitz","Vital","Bullet","Precise","Difficult","Simple"]}');

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = JSON.parse('{"stands":["C-Moon"],"specs":[],"horses":[]}');

/***/ }),

/***/ 355:
/***/ ((module) => {

module.exports = JSON.parse('{"completed":["The World","Star Platinum - Prime","Made In Heaven","Magicians Red","Gold Experience","C-Moon","King Crimson","Silver Chariot","The Hand","Hamon","Vampire","Joseph\'s Hamon","Spin"],"skilltree":["The World","Star Platinum - Prime","Made In Heaven","Gold Experience","C-Moon"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	desertRandomiser = __webpack_exports__;
/******/ 	
/******/ })()
;