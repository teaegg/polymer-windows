# polymer-tile

A tile component using [Polymer](http://www.polymer-project.org/).

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
    <polymer-tile fit>
      <div tile>
        <div tile style="background: yellow;"></div>
        <div tile style="background: red;"></div>
      </div>
      <div tile style="background: orange;"></div>
      <div tile double style="background: purple;"></div>
      <div tile style="background: orange;"></div>
    </polymer-tile>
    ```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`autosize` | *bool*                    | `true`              | when autosize is false, tileSize and gutter will not work. you can controll the tile size and position by css
`tileSize` | *string*                  | `120px`             | Default size of a "&lt;tile&gt;&lt;/tile&gt;"
`gutter`   | *string*                  | `4px`               | The `gutter` attribute sets the margin between each tile
`orient`   | *string*                  | `h`                 | Orientation of the scroller to be observed (`v` for vertical, `h` for horizontal)
`tiles`    | *array*                   | `null`              | `tiles` is a property that contains all tile nodes

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](https://github.com/teaegg/polymer-tile/blob/master/LICENSE)
