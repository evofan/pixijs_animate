(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Drawing = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.Drawing[0]);
        this.addChild(instance1);
    });

    lib.Drawing.assets = {
        "Drawing": "images/Drawing.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;