# polymer-tile

A tile container for [Polymer](http://www.polymer-project.org/).

## Demo

[Check it live!](http://teaegg.github.io/polymer-tile)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install teaegg/polymer-tile --save
```

Or [download as ZIP](https://github.com/teaegg/polymer-tile/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import polymer-tile:

    ```html
    <link rel="import" href="bower_components/polymer-tile/polymer-tile.html">
    ```

3. Start using it!

    ```html
    <style>
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

    <polymer-tile fit>
      <div class="tile-2">
        <div class="tile-1" style="background: yellow;"></div>
        <div class="tile-1" style="background: red;"></div>
      </div>
      <div class="tile-2" style="background: orange;"></div>
      <div class="tile-4" style="background: purple;"></div>
    </polymer-tile>
    ```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`orient`   | *string*                  | `h`                 | Orientation of the scroller to be observed (`v` for vertical, `h` for horizontal)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](https://github.com/teaegg/polymer-tile/blob/master/LICENSE)
