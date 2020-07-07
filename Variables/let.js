function testLet() {
  let x = 10;
  //  var x=12

  if (true) {
    let x = 5;
    console.log('in block : ' + x);
  }

  console.log(x);
  // let x = 3;
}

testLet();
