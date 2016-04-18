# &lt;example-web-componet&gt;

> awesome-element

## Demo

[Check it live!](http://eromano.github.io/example-web-componet)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install example-web-componet --save
```

Or [download as ZIP](https://github.com/eromano/example-web-componet/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/example-web-componet/dist/awesome-element.html">
    ```

3. Start using it!

    ```html
    <awesome-element></awesome-element>
    ```

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```
    
* To test your project

    ```sh
    $ grunt test
    ```
    
* To view your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/eromano/example-web-componet/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
