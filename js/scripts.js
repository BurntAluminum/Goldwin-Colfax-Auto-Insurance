$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#DOB").val());
    console.log(age);
    var gender = $("select#Gender").val();
    console.log(gender);
    var cardnumber = parseInt($("input#CardNumber").val());
    var pin = parseInt ($("input#Pin").val());
    var ssnumber = parseInt($("input#SSNumber").val());

    var quote = (100 - age) * 3;
    var quote2 = (quote * 30);
    if (gender == "Male" && age < 26) {
      quote *= 200;
    }
    if (gender == "Female" && age < 26) {
      quote *= 100;
    }

    $("#rate").text(quote);
    $("#quote").show()

    event.preventDefault();
  });
});
