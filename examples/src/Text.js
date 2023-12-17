(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Text = PIXI.Text;

    lib.Text = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance3 = new Text("One More Thing")
            .setStyle({
                fontFamily: "Times-Roman",
                fontSize: 20,
                fill: "#f00",
                leading: 2
            })
            .setTransform(145, 116);
        var instance2 = new Text("Something")
            .setStyle({
                fontFamily: "Times-Bold",
                fontSize: 40,
                fill: "#f00",
                letterSpacing: 7,
                leading: 2
            })
            .setTransform(145, 70);
        var instance1 = new Text("Something")
            .setStyle({
                fontFamily: "Arial",
                fontSize: 40,
                fontStyle: "italic",
                letterSpacing: 10,
                leading: 2
            })
            .setAlign("center")
            .setTransform(273, 166);
        this[instance1.name = "someText"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.Text.assets = {};
})(PIXI, lib = lib || {});
var lib;