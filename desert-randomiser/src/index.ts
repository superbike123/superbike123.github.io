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

////////////////////////////////////////////////////////////
//              desert & sbr test Randomiser              //
//                      Version 2.0                       //
////////////////////////////////////////////////////////////


// Sets are now imported as JSON files. See the sets/ directory.
const regular = require('./sets/default.json');
const alternative = require('./sets/alternative.json');
const james = require('./sets/james.json'); // lol

const status = require('./status.json');

// Define the sets that come by default, this is used for the dropdown HTML object.
const defaultSets: string = "<option>Regular</option><option>Alternative</option>";
const dropdown: any = document.getElementById("setsDropdown")!;

// Add the default sets to the dropdown.
dropdown.innerHTML = defaultSets;

// Store symbols for the identifications.
const symbols: string[] = [ "✅", "🌳"]


console.log("---- Source code for this website can be found on the git repository here: https://github.com/superbike123/superbike123.github.io/tree/main/desert-randomiser");

// Cookie stuff
let gameButton: HTMLElement = document.getElementById("gameButton")!;
if (gameButton !== null) {
    console.log("-- gameButton HTML element found in the DOM");
    if (document.cookie === "") {
        console.log("-- No cookie found... trying to create one")
        document.cookie = "selectedGame=desert";
        console.log("-- Created a cookie with value: " + document.cookie)
        document.getElementById("gameButton")!.innerHTML = "<strong>" + "Current Game: desert" + "</strong>";
        console.log("-- Set the text on gameButton as: '" + document.getElementById("gameButton")!.textContent + "'")
        document.getElementById("horse")!.style.display = "none";
    } else {
        console.log("-- Found a cookie with value: " + document.cookie);
        document.getElementById("gameButton")!.innerHTML = "<strong>" + "Current Game: " + document.cookie.replace(/selectedGame=/g, "") + "</strong>";
        if (document.cookie.replace(/selectedGame=/g, "") === "desert") {
            document.getElementById("horse")!.style.display = "none";
        }
    }
} else {
    console.error("-- error: gameButton HTML element not found in the DOM");
}


// Function to get a Stand
export let getStand = (type: number) => { 
    if (type === 0) { clearText(); }

    if (dropdown.value === "Alternative") {
        let standNo: number = Math.floor(Math.random() * alternative.stands.length);
        let generatedStand: string = alternative.stands[standNo];

        if (status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand + " ( " + symbols[0] + symbols[1] + " )";
        } else if (status["completed"].includes(generatedStand) && !status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand + " ( " + symbols[0] + " )";
        } else if (!status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand + " ( " + symbols[1] + " )";
        } else {
            // Display the Stand
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand;
            return generatedStand;
        }
    } else { // Regular set
        let standNo: number = Math.floor(Math.random() * regular.stands.length);
        let generatedStand: string = regular.stands[standNo];

        if (status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand + " ( " + symbols[0] + symbols[1] + " )";
        } else if (status["completed"].includes(generatedStand) && !status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand + " ( " + symbols[0] + " )";
        } else if (!status["completed"].includes(generatedStand) && status["skilltree"].includes(generatedStand)) {
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand + " ( " + symbols[1] + " )";
        } else {
            // Display the Stand
            document.getElementById("standField")!.textContent = "Stand: " + generatedStand;
            return generatedStand;
        }
        
    }
}

// Function to get a Spec
export let getSpec = (type: number) => {
    if (type === 0) { clearText(); }

    if (dropdown.value === "Alternative") {
        let specNo: number = Math.floor(Math.random() * alternative.specs.length);
        let generatedSpec: string = alternative.specs[specNo];

        if (status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + symbols[1] + " )";
        } else if (status["completed"].includes(generatedSpec) && !status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + " )";
        } else if (!status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec + " ( " + symbols[1] + " )";
        } else {
            // Display the Stand
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec;
            return generatedSpec;
        }
    } else {
        let specNo: number = Math.floor(Math.random() * regular.specs.length);
        let generatedSpec: string = regular.specs[specNo];

        if (status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + symbols[1] + " )";
        } else if (status["completed"].includes(generatedSpec) && !status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec + " ( " + symbols[0] + " )";
        } else if (!status["completed"].includes(generatedSpec) && status["skilltree"].includes(generatedSpec)) {
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec + " ( " + symbols[1] + " )";
        } else {
            // Display the Stand
            document.getElementById("specField")!.textContent = "Spec: " + generatedSpec;
            return generatedSpec;
        }
    }
}

export let getHorse = (type: number) => {
    if (type === 0) { clearText(); }

    if (dropdown.value === "Alternative") {
        let horseNo: number = Math.floor(Math.random() * alternative.horses.length);
        let generatedHorse: string = alternative.horses[horseNo];

        // Display the Spec
        document.getElementById("horseField")!.textContent = "Horse: " + generatedHorse;
        return generatedHorse;
    } else {
        let horseNo: number = Math.floor(Math.random() * regular.horses.length);
        let generatedHorse: string = regular.horses[horseNo];

        // Display the Spec
        document.getElementById("horseField")!.textContent = "Horse: " + generatedHorse;
        return generatedHorse;
    }
}

export let switchGame = () => {
    let desertText: string = "Current Game: desert";
    let sbrText: string = "Current Game: sbr test";
    let buttonText: any = document.querySelector("#gameButton")!;
    if (buttonText.textContent === desertText) {
        buttonText.innerHTML = "<strong>" + sbrText + "</strong>";
        document.cookie = "selectedGame=sbr test";
        document.getElementById("horse")!.style.display = "inline";
    } else {
        buttonText.innerHTML = "<strong>" + desertText + "</strong>";
        document.cookie = "selectedGame=desert";
        document.getElementById("horse")!.style.display = "none";
    }
}

// Function to clear all of the text in the Stand, Spec and Horse fields
export let clearText = () => {
    const fields = document.querySelectorAll('#fields h3');
    fields.forEach(element => {
        element.textContent = "";
    });
}

// Function to get a Stand, Spec and a Horse
export let getBoth = () => {
    if (document.cookie === "selectedGame=desert") { // desert
        clearText()
        getStand(1);
        getSpec(1);
    } else if (document.cookie === "selectedGame=sbr test") { // sbr test
        getStand(1);
        getSpec(1);
        getHorse(1);
    }
}

let showingMore: boolean = false;

export let moreLess = () => {
    const line0: string = '<strong>desert & sbr test Randomiser</strong> is a tool used to create randomised selections of Stands, Specs and Horses for <a href="https://www.roblox.com/games/8823151085/desert">desert</a> and <a href="https://www.roblox.com/games/9245024720/sbr-test">sbr test</a>...';
    const line0_alt: string = '<strong>desert & sbr test Randomiser</strong> is a tool used to create randomised selections of Stands, Specs and Horses for <a href="https://www.roblox.com/games/8823151085/desert">desert</a> and <a href="https://www.roblox.com/games/9245024720/sbr-test">sbr test</a>';
    const line1: string = "Use the <strong>'Select All'</strong> button to generate all of them.";
    const line2: string = 'Using the <strong>alternative set</strong> disables some stands, specs and horses. For more information, <a href="https://github.com/superbike123/superbike123.github.io/blob/main/desert-randomiser/AltSet.md">see the list of changes';
    const line3: string = "If something has a tick (✅) next to it, then it is complete. If something has a tree (🌳) then it has a skilltree.";
    const line4: string = "desert & sbr test Randomiser: Version 2.0";

    const moreLessText: HTMLElement = document.getElementById("moreLessText")!;
    const line0Html: HTMLElement = document.getElementById("text_0")!;
    const line1Html: HTMLElement = document.getElementById("text_1")!;
    const line2Html: HTMLElement = document.getElementById("text_2")!;
    const line3Html: HTMLElement = document.getElementById("text_3")!;
    const line4Html: HTMLElement = document.getElementById("text_4")!;

    if (moreLessText.textContent === "Show More") { showingMore = false; }
    else if (moreLessText.textContent === "Show Less") { showingMore = true; }

    if (showingMore === false) {
        line0Html.innerHTML = line0_alt;
        line1Html.innerHTML = line1;
        line2Html.innerHTML = line2;
        line3Html.innerHTML = line3;
        line4Html.innerHTML = line4;
        moreLessText.textContent = "Show Less";
    } else {
        line0Html.innerHTML = line0;
        line1Html.innerHTML = "";
        line2Html.innerHTML = "";
        line3Html.innerHTML = "";
        line4Html.innerHTML = "";
        moreLessText.textContent = "Show More";
    }
}
