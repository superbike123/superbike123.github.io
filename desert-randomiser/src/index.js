/**
* 
* @source: https://raw.githubusercontent.com/superbike123/superbike123.github.io/main/desert-randomiser/src/index.js
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
////////////////////////////////////////////////////////////

const version = 2.1

// Sets are now imported as JSON files. See the sets/ directory.
const regular = require('../sets/default.json');
const alternative = require('../sets/alternative.json');
const james = require('../sets/james.json'); // lol

// File for getting the correct emojis to place next to the selection
const status = require('./status.json');

// Store symbols for the identifications.
const symbols = ["✅", "🌳"]


// Import all sets into cookies



function getStand()
{
    
}