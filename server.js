const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const commentRoutes = require("./routes/commentRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");

// Use routes
app.use("/api/comments", commentRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Root route (to avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.send(
    "<h1>Backend is running 🚀</h1><p>Available endpoints:</p><ul><li>/api/comments</li><li>/api/newsletter/subscribe</li></ul>"
  );
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
