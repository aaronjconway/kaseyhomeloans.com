//testing calls to the fub api

const API_KEY = import.meta.env.API_KEY
const X_SYSTEM_KEY = import.meta.env.API_KEY

// Event data
const eventData = {
	source: 'Email Signup Form',
	type: 'Subscribe',
	message: 'Subscribed to Email List',
	person: {
		emails: [{ value: 'ajconway92@gmail.com' }],
	},
};

// Send the POST request to the Follow Up Boss API
async function sendRequest() {
	try {
		const response = await axios.post('https://api.followupboss.com/v1/events', eventData, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: API_KEY,
				'X-System': 'Kasey-Home-Loans',
				'X-System-Key': X_SYSTEM_KEY
			},
		});

		console.log(response.data);
	} catch (error) {
		console.error('Error sending request:', error);
	}
}

sendRequest();
