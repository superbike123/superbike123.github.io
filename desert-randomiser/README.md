# desert & sbr test Randomiser

![Banner](https://raw.githubusercontent.com/superbike123/superbike123.github.io/main/desert-randomiser/images/banner.png)

This is a randomiser for [desert](https://www.roblox.com/games/8823151085/desert)

You can use it [here](https://superbike123.github.io/desert-randomiser/pages/index.html).

## Compiling

1. Clone this repository

`git clone https://github.com/superbike123/superbike123.github.io.git`

2. Install [Node.js](https://nodejs.org/en/)

3. Use `cd` to get where you cloned the repository

`cd path/to/repo`

4. Use `npm` to install the required software

`npm install webpack webpack-cli ts-loader typescript`

5. Compile the code using webpack (in the `desert-randomiser` directory)

`npx webpack`

The resulting JavaScript file will be located in `dist/bundle.js`

6. Open `index.html` in a web browser