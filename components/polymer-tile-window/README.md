# polymer-tile-window

A tile component using [Polymer](http://www.polymer-project.org/).

## Demo

[Check it live!](http://teaegg.github.io/polymer-tile-window)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install git://github.com/teaegg/polymer-tile-window.git --save
```

Or [download as ZIP](https://github.com/teaegg/polymer-tile-window/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import polymer-tile-window:

    ```html
    <link rel="import" href="bower_components/polymer-tile-window/polymer-tile-window.html">
    ```

3. Start using it!

    ```html
    <polymer-tile-window style="background: blue;" transitions="hero-transition">
    
      Do not set 'hero' attribute to any tag for first section, 
      the tile-window will automatically controll 'hero' for you.
      'linkto' attribute will make the tile links to a window in another section by id.
      clicking 'closeButton' will call the 'restore' method.

      <section>
        <polymer-tile fit> 
          <div tile>
            <div tile style="background: yellow;"></div>
            <div tile style="background: red;" linkto="popup2" hero-id="popup2">
            <div hero-i="popup"></div>
            </div>
          </div>
          <div tile style="background: orange;" linkto="popup1" hero-id="popup1">
              clickable
          </div>
          <div tile double style="background: purple;"></div>
        </polymer-tile>
      </section>

      <section window id="popup1" >
        <div fit style="background: orange;" hero-id="popup1" hero>
          <button closeButton>close</button>
        </div>
      </section>

      <section window id="popup2">
        <div fit style="background: red;" hero-id="popup2" hero>
          <button closeButton>close</button>
        </div>
      </section>
    </polymer-tile-window>
    ```

## Options

Method    | Params                   | return             | Description
---       | ---                      | ---                | ---
`restore` | none                     | none               | Navigate to the startup page.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](https://github.com/teaegg/polymer-tile-window/blob/master/LICENSE)
