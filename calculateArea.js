function calculateArea(figure, x, y) {
  if (figure == 'rectangle') {
    let a = x * y;
    const area = {
      figure: figure,
      input : {
        x: x, 
        y: y
      },
      area: a
    }
    console.log(area);
  }
}

calculateArea('rectangle', 20, 10);