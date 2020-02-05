0)   git config --global user.email "you@example.com"
     git config --global user.name "Your Name"

1) After adding project through spring initializer, we need to fix a dependency of spring boot starter web and spring boot starter test.Spring boot starter is basically dependency manager for spring boot.


2) Add your project to a git remote repo -> git remote set-url origin https://github.com/shivsony/DispatchManamgement.git


3) Babel - converts jsx to js so that browser can understand


4) yarn init - brings you package.json with initial format


5) Babel Loader in webpack- jsx to js(understandabe by browser)

6)css,scss,sass loader - to load css

7)saas loader converts scss to css

8)css loader injects css globally

9) const buildDirectory = path.join(__dirname, './src/main/webapp/v2/dist') -> bundle is created here

10) mode development -> determines the mode. its done in webpack


11)   entry: "./src/main/client/index.js", -> entry point for starting and creating bundle

12) output: {
        path: buildDirectory,
        filename: "bundle.js"
      },  -> place where bundle.js is created

13)   resolve: { extensions: ["*", ".js", ".jsx"] } -> resolves the import of modules eg. import {lodash} from 'lodash'.


14) "scripts": {
        "start": "webpack-dev-server --mode development",
        "build": "webpack",
        "build:prod": "webpack -p"
      }, -> we write scripts in package.json which determine what we run in command with yarn
      when we do yarn build, then webpack is compiled and a new bundle is created.
      when we do yarn start then webpack-dev-server(it is the server on which react runs, it is the internal server of webpack)

      start - each time in development mode a updated build is created
      build - webpack is compiled and a new bundle is created


 15) Patch releases: 1.0 or 1.0.x or ~1.0.4   - bug fixed backward compatible
    Minor releases: ^1.0.4    -> for minor releases as 1.0.6 or 1.2.0  - new feature backward compatible
 => it can update to this version and resolve the dependency.

 16) we also have to add .bablerc file.The .babelrc file is the configuration file for Babel

 17) es5 -> ecma script

 18) historyApiFallback need to be added to webpack server.. Reason - when we hit any api say /students it makes a get request on server side and it is not matched on server side.So it gives 404.If we set historyFallBack to true, if url dosent matches at server side, it fallsback to index.html(client side).Here we have routes to handle the component requested on client side.

 19) --config file of git should be made locally for a single directory and globally if you want to use multiple git accounts

 20) Setting up redux ->

 21) target file is like node-modules of front

 22) "rules": {
       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
     }
add this to .eslintrc.json file to allow jsx in js files

 23) eslint initializing comand -> npx eslint --init
 
 
 //For Backend
 
24) Main apllication class serves the pacxkage in which it is placed

25) 