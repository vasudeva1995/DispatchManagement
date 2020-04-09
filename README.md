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