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

// Alternative array of Stands
const STANDS_ALT: string[] = [
    "The World",
    "Star Platinum - Prime",
    "Hierophant Green",
    "Sticky Fingers",
    "Magicians Red",
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
const SPECS: string[] = [
    "Basic",
    "Hamon",
    "Vampire",
    "Joseph's Hamon",
    "Witch",
    "Spin"
];

// Alternative array of Specs
const SPECS_ALT: string[] = [
    "Hamon",
    "Vampire",
    "Joseph's Hamon",
    "Spin"
];

const HORSES: string[] = [
    "Basic",
    "Blitz",
    "Vital",
    "Bullet",
    "Precise",
    "Difficult",
    "Simple"
]

const HORSES_ALT: string[] = [
    "Basic",
    "Blitz",
    "Vital",
    "Bullet",
    "Precise",
    "Simple"
]

// Function to get a Stand
let getStand = () => {
    let checkbox: HTMLInputElement = <HTMLInputElement> document.getElementById("altSetCheckbox")
    if (checkbox.checked) {
        let standNo: number = Math.floor(Math.random() * STANDS_ALT.length);
        let generatedStand: string = STANDS_ALT[standNo];

        // Display the Stand
        document.getElementById("standField")!.textContent = "Stand: " + generatedStand;
    } else {
        let standNo: number = Math.floor(Math.random() * STANDS.length);
        let generatedStand: string = STANDS[standNo];
        
        // Display the Stand
        document.getElementById("standField")!.textContent = "Stand: " + generatedStand;
    }
}

// Function to get a Spec
let getSpec = () => {
    let checkbox: HTMLInputElement = <HTMLInputElement> document.getElementById("altSetCheckbox")
    if (checkbox.checked) {
        let specNo: number = Math.floor(Math.random() * SPECS_ALT.length);
        let generatedSpec: string = SPECS_ALT[specNo];

        // Display the Spec
        document.getElementById("specField")!.textContent = "Spec: " + generatedSpec;
    } else {
        let specNo: number = Math.floor(Math.random() * SPECS.length);
        let generatedSpec: string = SPECS[specNo];

        // Display the Spec
        document.getElementById("specField")!.textContent = "Spec: " + generatedSpec;
    }
}

let getHorse = () => {
    let checkbox: HTMLInputElement = <HTMLInputElement>document.getElementById("altSetCheckbox")
    if (checkbox.checked) {
        let horseNo: number = Math.floor(Math.random() * HORSES_ALT.length);
        let generatedHorse: string = HORSES_ALT[horseNo];

        // Display the Spec
        document.getElementById("horseField")!.textContent = "Horse: " + generatedHorse;
    } else {
        let horseNo: number = Math.floor(Math.random() * HORSES.length);
        let generatedHorse: string = HORSES[horseNo];

        // Display the Spec
        document.getElementById("horseField")!.textContent = "Horse: " + generatedHorse;
    }
}

// Function to get a Stand, Spec and a Horse
let getBoth = (game: number) => {
    if (game === 0) {
        getStand();
        getSpec();
    } else if (game === 1) {
        getStand();
        getSpec();
        getHorse();
    }
}