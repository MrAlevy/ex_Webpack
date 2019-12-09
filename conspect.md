https://www.valentinog.com/blog/babel/

npm i webpack --save-dev
npm i webpack-cli --save-dev

./src/package.json
  "scripts": {
    "build": "webpack --mode production"
  }

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

./.babelrc
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }

./webpack.config.js

npm i react react-dom

npm i html-webpack-plugin html-loader --save-dev

npm run build

// webpack dev server
npm i webpack-dev-server --save-dev
./src/package.json
  "scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack --mode production"
  }