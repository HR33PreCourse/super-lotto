var checkNumbers = function(event) {

  event.preventDefault();

  var input1 = event.target.form[0].value;
  var input2 = event.target.form[1].value;
  var inputs = [+input1, +input2];

  var lotto1 = Math.floor(Math.random() * 10);
  var lotto2 = Math.floor(Math.random() * 10);
  var lottos = [lotto1, lotto2];

  var results = {};

  _.each(inputs, function(input) {
    results[input] = _.contains(lottos, input);

    for (var key in results) {
      if (results[key]) {
        console.log(key + " was a winning number!");
      } else {
        console.log(key + " was not a winning number...");
      }
    }

  });

 if(results[0] && results[1]) {
    $("#win-lose").html("<b>You've Won!</b>");
    console.log("winner");
  } else {
    $("#win-lose").html("<b>You are sadly not a winner!</b>");
    console.log("loser");
  }

  console.log("lottos: ", lottos);
  console.log("results: ", results);

  $("#show-num").text(
    "The numbers were " + lotto1 +  " and " + lotto2 + ". " +
    inputs[0] + " was " + results[inputs[0]] + "; " +
    inputs[1] + " was " + results[inputs[1]]
    );
};

$("#submit").click(function(event) {
  checkNumbers(event);
});
