# Canvas with Agora
## Explanation: 
### Project structure:
```
    Canvas
    ├── AgoraRTCSDK-2.8.0.js
    ├── index.html
    ├── update.js
    ├── script.js
    └── Readme.md
```
### Purpose:
* `AgoraRTCSDK-2.8.0.js` - Agora SDK
* `index.html` - Contains the main application
* `update.js` - Updates the canvas continually with a gradient
* `script.js` - pushes the canvas to Agora
## Steps to run:
* Add appid in [`script.js`](https://github.com/technophilic/Canvas/blob/f88738fe50354c414ff460dba96811338cb82869/script.js#L17)
* Open index.html to start the application
* Open another window to view the feed on any other agora demo.
    * eg: https://sidsharma27.github.io/
    * use the same appid and channel name.
    * `<APP ID>` & `1000` respectively in this case

**Important :- use different windows to run broadcaster and receiver not different tabs. This is because gradient update in `update.js` won't occur if tab is not active.(this is because of `requestAnimationFrame`)**
