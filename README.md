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
A value is a service of the device, for example: a device type:light can have value:on/off, value:brightness and value:color. A value can assign some limit to the states: as min, max or steps.
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
