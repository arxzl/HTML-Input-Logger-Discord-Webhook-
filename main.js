
var text = document.getElementById("INPUT ID GOES HERE");
var answer = "ANSWER";
var stay = "YOUR WEBSITE"
var redirect = "REDIRECT WEBSITE"
text.onkeyup = function() {
  if (text.value === answer) {
    alert("Nice!");
    right();
    window.location = redirect;
  }
};
function ifwrong() {
  if (text.value != answer) {
    alert("Try Again!");
    wrong();
    window.location = stay;
  }
  return true;
}


function wrong() {
  var content = $("#INPUT ID GOES HERE").val();
  var link =
    "WEBHOOK GOES HERE";

  $.post(link, {
    content: ":x: Someone has got it wrong saying " + "`" + content + "`"
  });
}

function right() {
  var content = $("#INPUT ID GOES HERE").val();
  var link =
    "WEBHOOK GOES HERE";

  $.post(link, {
    content:
      ":white_check_mark: Someone has got it right saying " +
      "`" +
      content +
      "`"
  });
}
