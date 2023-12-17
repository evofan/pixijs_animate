(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 20, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.DepthOrder[3]);
        this.addTimedChild(instance1);
    });

    lib.DepthOrder = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 20,
            framerate: 24
        });
        var instance4 = new Graphic1(MovieClip.SYNCHED);
        var instance3 = new Graphics()
            .drawCommands(shapes.DepthOrder[2]);
        var instance2 = new Graphics()
            .drawCommands(shapes.DepthOrder[1]);
        var instance1 = new Graphics()
            .drawCommands(shapes.DepthOrder[0]);
        this.addTimedChild(instance4, 0, 20, {
                "0": {
                    x: 22,
                    y: 157
                },
                "1": {
                    x: 44.35
                },
                "2": {
                    x: 66.75
                },
                "3": {
                    x: 89.1
                },
                "4": {
                    x: 111.45
                },
                "5": {
                    x: 133.85
                },
                "6": {
                    x: 156.2
                },
                "7": {
                    x: 178.55
                },
                "8": {
                    x: 200.95
                },
                "9": {
                    x: 223.3
                },
                "10": {
                    x: 245.65
                },
                "11": {
                    x: 268
                },
                "12": {
                    x: 290.4
                },
                "13": {
                    x: 312.75
                },
                "14": {
                    x: 335.1
                },
                "15": {
                    x: 357.5
                },
                "16": {
                    x: 379.85
                },
                "17": {
                    x: 402.2
                },
                "18": {
                    x: 424.6
                },
                "19": {
                    x: 446.95
                }
            })
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
    });

    lib.DepthOrder.assets = {
        "DepthOrder": "images/DepthOrder.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;