//buinsess logic
function Destination (state, landmark, season){
  this.state = state;
  this.landmark = landmark;
  this.season = season;
}

Destination.prototype.fullProperties = function() {
  return this.state + <br> + this.landmark + <br> + this.season;
}
//user logic
$(document).ready(function(){
  $("form#location-input").submit(event){
    event.preventDefault();


    var stateInput = $("input#new-state").val();
    var landmarkInput = $("input#new-landmark").val();
    var seasonInput = $("input#new-season").val();

    var newLocation = new Location(stateInput, landmarkInput, seasonInput);

    $("ul#show-properties").append("<li><span class ='show-properties'>" + newLocation.fullProperties() + "</span></li>");

    $("input#new-state").val("");
    $("input#new-landmark").val("");
    $("input#new-season").val("");

$("")
    $("#show-properties").show();


});

});
