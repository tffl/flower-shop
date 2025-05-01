Flower-shop  
==
The project is created for educational purposes.  
--
Technology stack:  
--
Webpack  
TypeScript  
ESLint  
Prettier  
Husky  
React  
Jest  


Instructions for setting up and running the project locally:
--

Installing Webpack and its plugins:  
>npm i  
>npm i -D webpack webpack-cli  
>npm i --save-dev html-webpack-plugin  
>npm install copy-webpack-plugin --save-dev  
>npm install --save-dev clean-webpack-plugin  
>npm i -D webpack-dev-server  

CSS:
>npm install --save-dev style-loader  
>npm install --save-dev css-loader  

TS:
>npm i -D typescript  
>npm i -D ts-loader  



Available scripts:  
--
Scripts for Webpack:  

"start": "webpack serve --open --mode=development"  
// development mode - Builds the project and runs it in the default browser  

"build": "webpack --mode=production --node-env=production"  
// production build mode - creates dist for deployment  