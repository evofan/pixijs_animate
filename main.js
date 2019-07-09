let scene = new PIXI.animate.Scene(384, 384, {
    view: document.getElementById("stage"),
    backgroundColor: 0xffffff,
    antialias: true
});
scene.load(lib.fall_leaf_04_pixianimate);

let scene2 = new PIXI.animate.Scene(384, 384, {
    view: document.getElementById("stage2"),
    backgroundColor: 0x0,
    antialias: true
});
scene2.load(lib.fish_08_PixiAnimate);