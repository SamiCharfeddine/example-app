This is a basic app that will control a "switch" value using [roundslider](http://roundsliderui.com/) lib.
If you are not used to [Backbonejs](http://backbonejs.org/), you might want to take a look at [Backbonejs Model](http://backbonejs.org/#Model).

First of all we should start by creating our view. In this app, since all we want to do is to create a roundslider for a switch value, our HTML will be:
```html
<div id="slider"></div>
```

Now we should start creating our javascript. Since we want to create a roundslider to show the value's state, we will first start by trying to get the value, for that, all we have to do is use the function "getValue" with the type of the value as an argument:
```javascript
var value = getValue({"type": "switch"});
```

Now that we have our value, we can start controlling it, so we are going to get the control and report states to start actually doing some changes:
```javascript
var controlState = value.get("state").findWhere({type: "Control"});
var reportState = value.get("state").findWhere({type: "Report"});
```

As we [explained before](https://github.com/Samislx/example-app/blob/master/README.md), the reportState contains the current state of the value, and the controlState is used by the user to change the state of the value.<br/>
Everything is now ready, so let's start by changing our html div to a slider using the lib:
```javascript
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

And that's it, now we have a slider app that controls switch values, but we are still missing one small step. When the user or someone that have this value changes its state from another app, we want to update the value in our app too. That sounds hard but don't worry. We can do that just by listening to reportState "change:data" event, and when we receive that, we update our slider state:
```javascript
reportState.on("change:data", function(){
  $("#slider").roundSlider('setValue', reportState.get("data")+"");
});
```

We don't even have to worry about our models, they will be automatically updated.
Now, we are really done!
