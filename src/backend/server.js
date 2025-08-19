const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logger
app.use((req, res, next) => {
  const startMs = Date.now();
  const { method, url } = req;
  const contentType = req.headers['content-type'];
  next();
  res.on('finish', () => {
    const duration = Date.now() - startMs;
    console.log(`${method} ${url} -> ${res.statusCode} (${duration}ms)`, contentType ? `ct=${contentType}` : '');
    if (method !== 'GET' && req.body) {
      try {
        console.log('Body:', JSON.stringify(req.body));
      } catch (_) {}
    }
  });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'AcademicHub Backend API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('/*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server only after DB connects
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err?.message || err);
    process.exit(1);
  }
};

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

start();
