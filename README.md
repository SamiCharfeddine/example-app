# Introduction
Q is an app based website that allows you to create web application, like smartphones

# Models

### Network
Basically, a Network is a container of devices, it doesn't have any specific things.
```json
{
  ":id": "8e9c8a3f-cd3c-41be-9a52-a2c6d0f3c82a",
  ":type": "urn:seluxit:xml:bastard:network-1.2",
  "name": "example network",
  "device": []
}
```

### Device
Device is a representation of a real device. One device can contain multiple values like (on/off, light...)
```json
{
  ":id": "8e9c8a3f-cd3c-41be-9a52-a2c6d0f3c82b",
  ":type": "urn:seluxit:xml:bastard:device-1.2",
  "name": "light device",
  "type": "light",
  "serial": "23B7",
  "manufacturer": "Seluxit",
  "communication": "always",
  "protocol": "hue",
  "included": "1",
  "product": "SeluxitLight",
  "value": []
}
```

### Value
Value is a service of the device, for example: a device type:light can have value:on/off, value:brightness and value:color. A value can assign some limit to the states: as min, max or steps.
The attribute permission represent the actions that you can do to the value. If permission is "r"(read) then you can access only reportState, if permission: "w"(write) then will be able to use only controlState and if the permission: "rw" then you can use both
```json
{
  ":id": "8e9c8a3f-cd3c-41be-9a52-a2c6d0f3c82c",
  ":type": "urn:seluxit:xml:bastard:value-1.2",
  "name": "switch",
  "type": "on/off",
  "permission": "rw",
  "status": "ok",
  "state": []
}
```

### State
```json
{
  ":id": "8e9c8a3f-cd3c-41be-9a52-a2c6d0f3c82d",
  ":type": "urn:seluxit:xml:bastard:state-1.2",
  "type": "Report",
  "data": "1",
  "status": "ok",
  "timestamp": "2016-02-15T10:52:45.561090Z"
}
```

# Example
Every Network is composed of different Devices.

Suppose that, for example, we have a Halloween pumpkin with red lights as eyes, a camera as nose and a mouth provided of some led that we can use to write some messages. Then we have the following structure:

* our pumpking is our Network
* the eyes of the pumking are two Devices under our Network pumpkin
* the camera in the nose is another Device
* the leds in the mouth are another Devices.

In conclusion we have a Network with four Devices.

Every Device is composed of different components, these components are colled Values.

Consider one of the eyes of our pumpkin. These are very smart light where we can provide different colours (RGB), a different intensity or if the device is on or off. This means that for this light we have the following structure:

* our light is our Device
* the colour of the light are three different values (Red, Green or Blue)
* the intensity of the light is another value
* the possibility to turn the light on or off is another value

In short we have a Device with five Values.

Every Value can have one or two States in relation if we can write or read.

Consider the intensity of the light: clearly we wants to be able to check the actual intensity, and we want to be able to modify the intensity of the light. For this reason we have the following two States:

* a Report State: used to read the actual State of our Value
* a Control State: used to modify the State of our Value

In short this Value is provided of two States.

