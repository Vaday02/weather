## Info

For use files from original server, let uncomment in `app/core/url.js` original base url.
Currently, app use downloaded files from original server to demo server.
## Demo
Let's see the [demo][demo]

## Getting Started

To get you started you can simply clone the `weather` repository and install the dependencies:

### Clone `weather app`

Clone the `weather` repository using git:

```
git clone https://github.com/vista-54/weather.git
cd weather
```
### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`weather` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. You should to install the [npm live-server][live-server] 

```
live-server
```

#### Allow-Control-Allow-Origin

The app uses http request for access to files from the server. For correct access you should to allow access control original.
The easier way is install extension for your browser. The example for chrome: [Allow-Control-Allow-Origin][cors-origin]



## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
[live-server]:https://www.npmjs.com/package/live-server
[cors-origin]:https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
[demo]:http://svm.biz.ua/weather/app