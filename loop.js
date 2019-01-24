function loop (times = 0, callback = null) {
  if (callback) {
    for (let i = 0; i < times; i++) {
      callback ('hello');
    }
  }
}

function callback (name) {
    console.log(name);
}

loop(10, callback);