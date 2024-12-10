var sliders = [];

var angle = 0;

function setup() {
  noCanvas();
  //createCanvas(200,200);
  for (var i = 0; i < 200; i++) {
    // for(var i = 0; i < 10;i++){}
    sliders[i] = createSlider(0, 255, 50);
  }

  //sliders[0].input(adjustSliders);
}

//function adjustSliders() {
//for (var i = 1; i < sliders.length; i++) {
//sliders[i].value(sliders[0].value());
//}
//}

function draw() {
  var offset = 0;
  for (var i = 0; i < sliders.length; i++) {
    var x = map(sin(angle + offset), -1, 1, 0, 255);
    sliders[i].value(x);
    offset += 0.01;
  }

  angle += 0.1;
}
