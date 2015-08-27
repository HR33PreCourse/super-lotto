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
  });

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
