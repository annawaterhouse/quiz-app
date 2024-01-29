require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

//basic express server setup
const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(express.static("public"));
    // Logging middleware
    app.use(morgan("dev"));
  
    // Body parsing middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  
    // API routes
    app.use("/api", require("./api"));
  
    // Serve static HTML in production
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.resolve(__dirname, "../../dist/")));
    }
  
    // Simple error handling middleware
    app.use((err, req, res, next) => {
      console.error(err);
      res.status(err.status ?? 500).send(err.message ?? "Internal server error.");
    });
  
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}.`);
    });

    return app;
  };
  
  createApp();
  