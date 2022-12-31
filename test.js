require('dotenv').config();
const { LaMetric } = require('./dist/lametric');

/**
 * Returns a random number between 1 and 51000
 * @returns {number}
 */
function randomIcon() {
	return Math.floor(Math.random() * 51000) + 1;
}

const lm = new LaMetric(process.env.IP, process.env.API);
lm.send({
	model: {
		frames: [
			{ text: 'Hello', icon: randomIcon() /* 693 */ },
			{ text: 'World', icon: randomIcon() /* 4612 */ }
		]
	}
})
	.then(({ data }) => console.log(data))
	.catch(console.err);
