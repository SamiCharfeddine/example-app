var value = getValue({"type": "switch"});
var controlState = value.get("state").findWhere({type: "Control"});
var reportState = value.get("state").findWhere({type: "Report"});

$("#slider").roundSlider({
  radius: 85,
  sliderType: "min-range",
  min: 0,
  max: 1,
  value: reportState.get("data"),
  change: function(e){
    controlState.save({data: e.value+""});
  }
});

reportState.on("change:data", function(){
	$("#slider").roundSlider('setValue', reportState.get("data")+"");
});
