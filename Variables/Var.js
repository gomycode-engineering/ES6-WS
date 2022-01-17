/**
 * variables
 */
function testVar() {
  // var x
  var x = 10;
  // var x =15

  if (true) {
    var x = 11;
    console.log('in block : ' + x);
  }

  // function test() {
  //   var x = 12;
  // }

  console.log(x);
  //  x = 50;
}

testVar();


/** 
 * Showing errors for undefined var, let and const
 */
// console.log(fruit);
// console.log(gender);
console.log(country)

// let fruit = "apple";
// const gender = "male"
var country = "Nigeria"
