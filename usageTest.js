// Import the module
const { LaMetric, LaMetricModel, LaMetricFrame } = require('./lametric');

// Use the local network address of your LaMetric Time.
// You can find this using the offical LaMetric app.
const address = '0.0.0.0';

// Local dev API key your LaMetric device.
// Can be found at: https://developer.lametric.com/user/devices
// For security, I suggest using dotenv: https://www.npmjs.com/package/dotenv
const apiKey = 'abcdefgh12345678';

// Create a LaMetric object
const lm = new LaMetric(address, apiKey);

// Create a few frames
// Parameters are text and icon.
// Icon ID's can be found at: https://developer.lametric.com/icons
let frameHello = new LaMetricFrame('hello', 87);
let frameWorld = new LaMetricFrame('world', 4612);

// Create a model
// Parameter is an array of frames
let model = new LaMetricModel([frameHello, frameWorld]);

// Send the model. Returns a Promise
lm.send(model.build())
	.then(console.log)
	.catch(console.err);
