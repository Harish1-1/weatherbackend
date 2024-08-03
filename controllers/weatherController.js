const axios = require('axios');

exports.getWeather = async (req, res) => {
    const { location } = req.params;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    try {
        const response = await axios.get(url);
        console.log('Weather API response:', response.data);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        res.status(500).json({ error: 'Failed to fetch weather' });
    }
};
