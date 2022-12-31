[//]: # (NPM centered badge template START --------------------------------------------------)

<div align="center">

lametric-notify-local
===

[![NPMCBT badge]][NPMCBT link]

*Send notifications to your LaMetric Time over a local network.*

</div>

[NPMCBT badge]: https://img.shields.io/npm/v/lametric-notify-local?color=CB3837&label=%20View%20on%20NPM&logo=npm&style=for-the-badge
[NPMCBT link]: https://www.npmjs.com/package/lametric-notify-local

[//]: # (NPM centered badge template END ----------------------------------------------------)

## Installation

Run `npm i lametric-notify-local` to install.

## Usage

Some things to note:

- The **IP address** of your LaMetric can be found in the official LaMetric app.
- Your **API Key** can be found [on the LaMetric developer site](https://developer.lametric.com/user/devices), under the **My Devices** tab.
- Available **icons** for frames can be found on the [LaMetric icon gallery](https://developer.lametric.com/icons).

```js
// Import the module
const { LaMetric } = require('lametric-notify-local');

// Create a LaMetric object
const lm = new LaMetric(IP_ADDRESS, API_KEY);

// Send the model. Returns a Promise with an Axios response.
lm.send({
    model: {
        frames: [
            { text: 'Hello' },
            { text: 'World', icon: 4612 }
        ]
    }
})
    .then(console.log)
    .catch(console.err);
```

See [test.js](https://github.com/tycrek/node-lametric-local/blob/master/test.js) for a complete example.
