(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Graphic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("images"));
        this.addChild(instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("images"));
        this.addChild(instance1);
    });

    lib.Shape = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ColorTransforms[0]);
        this.addChild(instance1);
    });

    lib.ColorTransforms = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance6 = new lib.Shape()
            .setTransform(160, 30)
            .setColorTransform(0.43, 0.57, 0.43, 0.57, 0.43, 0.57);
        var instance5 = new lib.Shape()
            .setTransform(35, 30)
            .setColorTransform(0, 0, 0, 0.6, 0, 0);
        var instance4 = new lib.Shape()
            .setTransform(280, 30)
            .setAlpha(0.5)
            .setColorTransform(0.51, 0.11, -0.43, 1, 1, 1);
        var instance3 = new lib.Shape()
            .setTransform(409.95, 30)
            .setColorTransform(0.3, 0, 0.3, 0, 0.3, 0);
        var instance2 = new lib.Graphic2()
            .setTransform(16.45, 174.95)
            .setColorTransform(0.51, 0, 0.51, 0, 0.51, 0);
        var instance1 = new lib.Graphic1()
            .setTransform(281, 174.95)
            .setColorTransform(0.51, 0.11, -0.43, 0.44, 1, -1);
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.ColorTransforms.assets = {
        "images": "images/images.jpg",
        "ColorTransforms": "images/ColorTransforms.shapes.json"
    };
})(PIXI, lib = lib || {});
var lib;