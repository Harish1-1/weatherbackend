const Session = require('../models/Session');

exports.logSession = async (req, res, next) => {
    const { userId } = req;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const newSession = new Session({
        userId,
        ip,
        loginTime: new Date(),
    });

    try {
        await newSession.save();
        next();
    } catch (error) {
        console.error('Session logging error:', error);
        res.status(500).json({ error: 'Failed to log session' });
    }
};

exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find({});
        res.json(sessions);
    } catch (error) {
        console.error('Error fetching sessions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
