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
const STANDS: string[] = [
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

// Array of Specs
const SPECS: string[] = [
    "Basic",
    "Hamon",
    "Vampire",
    "Joseph's Hamon",
    "Witch",
    "Spin"
];


// Function to get a Stand
let getStand = () => {
    let standNo: number = Math.floor(Math.random() * STANDS.length);
    let generatedStand: string = STANDS[standNo];

    // Display the Stand
    document.getElementById("standField")!.textContent = "Stand: " + generatedStand;
}

// Function to get a Spec
let getSpec = () => {
    let specNo: number = Math.floor(Math.random() * SPECS.length);
    let generatedSpec: string = SPECS[specNo];

    // Display the Spec
    document.getElementById("specField")!.textContent = "Spec: " + generatedSpec;
}