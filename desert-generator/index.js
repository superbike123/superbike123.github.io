/*
desert Stand and Spec generator
Copyright (C) 2023 superbike

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
// Array of Stands
var STANDS = [
    "The World",
    "Star Platinum - Prime",
    "Made In Heaven",
    "Hierophant Green",
    "Sticky Fingers",
    "Magicians Red",
    "Gold Experience",
    "Whitesnake",
    "C-Moon",
    "King Crimson",
    "Silver Chariot",
    "The World Over Heaven",
    "The Hand",
    "Star Platinum",
    "Cream",
    "Crazy Diamond"
];
// Alternative array of Stands
var STANDS_ALT = [
    "The World",
    "Star Platinum - Prime",
    "Sticky Fingers",
    "Gold Experience",
    "Whitesnake",
    "King Crimson",
    "Silver Chariot",
    "The World Over Heaven",
    "The Hand",
    "Star Platinum",
    "Cream",
    "Crazy Diamond"
];
// Array of Specs
var SPECS = [
    "Basic",
    "Hamon",
    "Vampire",
    "Joseph's Hamon",
    "Witch",
    "Spin"
];
// Alternative array of Specs
var SPECS_ALT = [
    "Hamon",
    "Vampire",
    "Joseph's Hamon",
    "Witch",
    "Spin"
];
// Function to get a Stand
var getStand = function () {
    var checkbox = document.getElementById("altSetCheckbox");
    if (checkbox.checked) {
        var standNo = Math.floor(Math.random() * STANDS_ALT.length);
        var generatedStand = STANDS_ALT[standNo];
        // Display the Stand
        document.getElementById("standField").textContent = "Stand: " + generatedStand;
    }
    else {
        var standNo = Math.floor(Math.random() * STANDS.length);
        var generatedStand = STANDS[standNo];
        // Display the Stand
        document.getElementById("standField").textContent = "Stand: " + generatedStand;
    }
};
// Function to get a Spec
var getSpec = function () {
    var checkbox = document.getElementById("altSetCheckbox");
    if (checkbox.checked) {
        var specNo = Math.floor(Math.random() * SPECS_ALT.length);
        var generatedSpec = SPECS_ALT[specNo];
        // Display the Spec
        document.getElementById("specField").textContent = "Spec: " + generatedSpec;
    }
    else {
        var specNo = Math.floor(Math.random() * SPECS.length);
        var generatedSpec = SPECS[specNo];
        // Display the Spec
        document.getElementById("specField").textContent = "Spec: " + generatedSpec;
    }
};
// Function to get both a Stand and a Spec
var getBoth = function () { getStand(); getSpec(); };
