let foo = () => {
  let x = 1
  if (false) {
    console.log('never reached');
  }
  let a = 3
  return a
}

let baz = () => {
  var x = 1
  console.log('x:', x);
  function unused() { }
  return x
  let c = x + 3;
  return c
}

baz()