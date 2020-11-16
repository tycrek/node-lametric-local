require('dotenv').config();
const { LaMetric, LaMetricModel, LaMetricFrame } = require('./lametric');

let lm = new LaMetric(process.env.IP, process.env.API);

lm.send(new LaMetricModel([new LaMetricFrame('hello', 87), new LaMetricFrame('world', 4612)]).build())
	.then(console.log)
	.catch(console.err);
