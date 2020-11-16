const fetch = require('node-fetch');

class LaMetric {
	/**
	 * 
	 * @param {string} address Local IP address of the LaMetric Time
	 * @param {string} apiKey API key from https://developer.lametric.com/user/devices
	 */
	constructor(address, apiKey) {
		this.address = address;
		this.apiKey = apiKey;
	}

	/**
	 * Send a notification to a LaMetric Time
	 * @param {LaMetricModel} model Model to send to LaMetric Time
	 * @return {Promise} Promise that resolves after sending/failing to send
	 */
	send(model) {
		return new Promise((resolve, reject) => {
			fetch(...this.fetchOptions(model))
				.then((response) => response.json())
				.then(resolve)
				.catch(reject);
		});
	}

	/**
	 * Build the fetch options
	 * @param {LaMetricModel} model Model to send to LaMetric Time
	 * @returns {Array} Array including the local URL and node-fetch options.
	 * @example ...this.fetchOptions(model)
	 */
	fetchOptions(model) {
		return [
			`http://${this.address}:8080/api/v2/device/notifications`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
					'Authorization': 'Basic ' + Buffer.from(`dev:${this.apiKey}`).toString('base64')
				},
				body: JSON.stringify(model)
			}
		];
	}
}

class LaMetricModel {
	/**
	 * Build a model to send to a LaMetric Time
	 * @param {LaMetricFrame[]} frames Array of the frames to include in the model
	 */
	constructor(frames) {
		this.frames = frames;
	}

	/**
	 * Build the model
	 * @returns {LaMetricModel} The completed model
	 */
	build() {
		return {
			model: {
				frames: this.frames.map((frame) => frame.build())
			}
		};
	}
}

class LaMetricFrame {
	/**
	 * Build a Frame for LaMetricModel
	 * @param {string} text Text to display
	 * @param {number} icon Icon ID to display (from https://developer.lametric.com/icons)
	 */
	constructor(text, icon = 19368) {
		this.text = text;
		this.icon = icon;
	}

	/**
	 * Build the frame
	 * @returns {LaMetricFrame} The completed frame object
	 */
	build() {
		return {
			text: this.text,
			icon: this.icon
		};
	}
}

module.exports = {
	LaMetric,
	LaMetricModel,
	LaMetricFrame
};
