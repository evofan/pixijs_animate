(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Masks = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 28,
            framerate: 24
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.Masks[0])
            .setRenderable(false);
        var instance3 = new Graphics()
            .drawCommands(shapes.Masks[2])
            .setRenderable(false);
        var instance2 = new Graphics()
            .drawCommands(shapes.Masks[1]);
        this.addTimedChild(instance1, 0, 12)
            .addTimedChild(instance3, 12, 11)
            .addTimedMask(instance2, {
                "0": instance1,
                "12": instance3,
                "23": null
            })
            .addTimedChild(instance2);
    });

    lib.Masks.assets = {
        "Masks": "images/Masks.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;