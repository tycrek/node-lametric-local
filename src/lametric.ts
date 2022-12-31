import axios from 'axios';

const HEADER_TYPE = 'application/json';

/**
 * A Frame to provide in a model
 */
interface LaMetricFrame {
	text: string;
	icon?: number;
}

/**
 * The model to send to the LaMetric
 */
interface LaMetricModel {
	model: {
		frames: LaMetricFrame[];
	};
}

export class LaMetric {

	private address: string;
	private apiKey: string;

	/**
	 * Use your LaMetric's local API, and retrive your API key from https://developer.lametric.com/user/devices.
	 * 
	 * Frame icons can be found at https://developer.lametric.com/icons, such as 19368 for the Alert Bell icon.
	 */
	constructor(address: string, apiKey: string) {
		this.address = `http://${address}:8080/api/v2/device/notifications`;
		this.apiKey = apiKey;
	}

	/**
	 * Send a notification to a LaMetric Time
	 */
	send(model: LaMetricModel) {
		return axios.post(this.address, JSON.stringify(model), {
			headers: {
				'Content-Type': HEADER_TYPE,
				'Accept': HEADER_TYPE,
				'Authorization': `Basic ${Buffer.from(`dev:${this.apiKey}`).toString('base64')}`
			}
		});
	}
}
