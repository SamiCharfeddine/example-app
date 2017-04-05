var value = getValue("RL 1");
var controlState = value.get("state").findWhere({type: "Control"});
var reportState = value.get("state").findWhere({type: "Report"});
var number = value.get("number");

$("#slider").roundSlider({
  radius: 85,
  sliderType: "min-range",
  min: number.min,
  max: number.max,
  value: reportState.get("data"),
  change: function(e){
    controlState.save({data: e.value+""});
  }
});

reportState.on("change:data", function(){
	$("#slider").roundSlider('setValue', reportState.get("data")+"");
});

function myFunc(){
  if(controlState.get("data") == "1"){
  	controlState.save({data: "0"});
    $("#slider").roundSlider('setValue', "0");
  }else{
    controlState.save({data: "1"});
    $("#slider").roundSlider('setValue', "1");
  }
}
