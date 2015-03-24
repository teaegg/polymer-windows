# polymer-tile-window

A tile component using [Polymer](http://www.polymer-project.org/).

## Demo

[basic](http://teaegg.github.io/polymer-tile-window)  
[advanced](https://github.com/teaegg/polymer-windows)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install teaegg/polymer-tile-window --save
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
    <style>
      polymer-tile {
        padding: 5% 10% 5% 10%;background:blue;
      }

      .tile-1,
      .tile-2,
      .tile-4 {
        box-sizing: border-box;
        position: relative;
      }
      .tile-1 {
        width: 120px;
        height: 120px;
        float: left;
      }
      .tile-2 {
        width: 248px;
        height: 120px;
        margin: 4px;
      }
      .tile-2 .tile-1:nth-child(even) {
        margin-left: 8px;
      }
      .tile-4 {
        width: 248px;
        height: 248px;
        margin: 4px;
      }
    </style>

    <polymer-tile-window fit transitions="hero-transition">

      Do not set 'hero' attribute to any tag for first section, 
      the tile-window will automatically controll 'hero' for you.
      'linkto' attribute will make the tile links to a window in another section by id.
      clicking 'closeButton' will call the 'restore' method.

      <section>
        <polymer-tile fit> 
          <div class="tile-2">
            <div class="tile-1" style="background: yellow;"></div>
            <div class="tile-1" style="background: red;" linkto="popup2" hero-id="popup2">
              <button hero-id="btn2">click me</button>
            <div hero-i="popup"></div>
            </div>
          </div>
          <div class="tile-2" style="background: orange;" linkto="popup1" hero-id="popup1">
              <button hero-id="btn1">click me</button>
          </div>
          <div class="tile-2" double style="background: purple;"></div>
        </polymer-tile>
      </section>

      <section window id="popup1" >
        <div fit style="background: orange;" hero-id="popup1" hero>
          <button closeButton hero-id="btn1">click me</button>
        </div>
      </section>

      <section window id="popup2">
        <div fit style="background: red;" hero-id="popup2" hero>
          <button closeButton hero-id="btn2">click me</button>
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
