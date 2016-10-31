//business logic
function Location (state, landmark, season){
  this.state = state;
  this.landmark = landmark;
  this.season = season;
}

Location.prototype.fullProperties = function() {
  return this.state + " " + this.landmark + " " + this.season;
}


//user logic
$(document).ready(function() {
  $("form#location-input").submit(function(event) {
    event.preventDefault();


    var stateInput = $("input#new-state").val();
    var landmarkInput = $("input#new-landmark").val();
    var seasonInput = $("input#new-season").val();

    var newLocation = new Location(stateInput, landmarkInput, seasonInput);

    $("ul#show-properties").append("<li><span class ='property'>" + newLocation.state + "</span></li>");



  $(".property").last().click(function() {
    $("#show-properties").show();
    $("#show-state").text(newLocation.state);
    $(".stateName").text(newLocation.state);
    $(".landmarkName").text(newLocation.landmark);
    $(".seasonName").text(newLocation.season);
});
debugger;

    $("input#new-state").val("");
    $("input#new-landmark").val("");
    $("input#new-season").val("");

  });

});
