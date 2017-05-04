This is a simple app that will control a value's state(type: switch) using roundslider lib.
First of all we should start by creating our view. In this app, the view is very simple since all we want to do is to create a roundslider for a switch value, so our HTML will look like:
```
<div id="slider"></div>
```

Now we should start creating our javacsript. Since we want to create a round slider to show the value's state, we will first start by trying to get the value, for that, all we have to do is use the function "getValue" with the type of the value:
```
var value = getValue({"type": "switch"});
```

Now that we have our value, we can start controlling it, so I'm going to get the control and report states to start actually doing some changes:
```
var controlState = value.get("state").findWhere({type: "Control"});
var reportState = value.get("state").findWhere({type: "Report"});
```

As we explained before(or somewhere), the reportState contains the current state of the value, and the controlState is actually what the user is sending to the server.
Everything is now ready to create this simple app, so let's start by changing our html div to a slider using the lib:
```
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
```

And that's it! now we have a slider app that controls switch values! but we are still missing one small step... when the user or someone that have this value change its state from another app, we want to update the value in our app too! yeah... that sounds hard... but don't worry, nothing is difficult here by a simple code, we can do that! we are going to listen to reportState changeData event, and when we receive that, we update our slider state:
```
reportState.on("change:data", function(){
  $("#slider").roundSlider('setValue', reportState.get("data")+"");
});
```

We don't even have to worry about our models, they will be automaticly updated.
Now, we are really done!
