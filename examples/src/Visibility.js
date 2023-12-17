(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Shape = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Visibility[0]);
        this.addChild(instance1);
    });

    lib.Visibility = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 26,
            framerate: 24
        });
        var instance1 = new lib.Shape();
        this.addTimedChild(instance1, 0, 26, {
            "0": {
                x: 207.45,
                y: 123.1,
                v: 1
            },
            "9": {
                v: 0
            },
            "17": {
                v: 1
            }
        });
    });

    lib.Visibility.assets = {
        "Visibility": "images/Visibility.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;