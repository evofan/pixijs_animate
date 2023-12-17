(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.FrameScripts = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 39,
            framerate: 24
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.FrameScripts[0]);
        this.addTimedChild(instance1)
            .addAction(function () {
                console.log("First frame");
            }, 0)
            .addAction(function () {
                console.log("Hello!");
            }, 18);
    });

    lib.FrameScripts.assets = {
        "FrameScripts": "images/FrameScripts.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;