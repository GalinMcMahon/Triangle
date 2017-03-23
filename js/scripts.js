$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var side1Input = parseFloat($("input#side1").val());
      // alert(side1Input);
    var side2Input = parseFloat($("input#side2").val());
      // alert(side2Input);
    var side3Input = parseFloat($("input#side3").val());
      // alert(side3Input);
    event.preventDefault();

    if (side1Input <=0 || side2Input <=0 || side3Input <=0) {
      alert("Please enter a positive, whole number.");
        return;
    } else if ((side2Input + side3Input) <= side1Input) {
      alert("This is not a triangle. Your first line is too long.");
        return;
    } else if (side1Input < side2Input || side1Input < side3Input) {
      alert("Hey, the first length is supposed to be the longest.  Try again.");
        return;
    } else if (side1Input && side2Input && side3Input) {
      alert("This is a triangle.");
    } else {
      alert("Please enter some inputs.");
      return
    }
    if (side1Input === side2Input && side2Input === side3Input && side3Input === side1Input) {
      alert("Equilateral triangle.");
    } else if (side1Input == side2Input || side2Input == side3Input || side3Input == side1Input) {
      alert("Isosceles triangle.");
      if ((side1Input)^(2) === ((side2Input)^2) + ((side3Input)^2)) {
        alert("Right triangle.");
      }
    } else {
      alert("Scalene triangle.");
      if ((side1Input)^(2) === ((side2Input)^2) + ((side3Input)^2)) {
        alert("Right triangle.");
      }
    }
  });
});
