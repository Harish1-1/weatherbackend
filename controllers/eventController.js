const Event = require('../models/Event');
const axios = require('axios');

exports.createEvent = async (req, res) => {
    const { name, date, location, description } = req.body;
    console.log(req.body);
    const event = new Event({ name, date, location, description, userId: req.userId });
    await event.save();
    res.status(201).json(event);
};

exports.getEvents = async (req, res) => {
    const events = await Event.find({ userId: req.userId });
    res.json(events);
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { name, date, location, description } = req.body;
    const event = await Event.findByIdAndUpdate(id, { name, date, location, description }, { new: true });
    res.json(event);
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    res.json({ message: 'Event deleted successfully' });
};

exports.getWeather = async (req, res) => {
    const { location } = req.params;
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`);
    res.json(response.data);
};
