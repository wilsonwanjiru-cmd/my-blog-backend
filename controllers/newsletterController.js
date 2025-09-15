const Newsletter = require("../models/Newsletter");

// Subscribe user to newsletter
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "This email is already subscribed" });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Successfully subscribed to the newsletter!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
