const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51M2aWfIgDroAuon4Y479uHFWKE7SWGH3wzTdnaJYk3FeLtGfG9UBwyDWz2RLNPDZGNfrkoPqU0EGJeyWqq7vsuIM00pNygeVyy'
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(201).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment Request Received Boom!!', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  console.log('payment client secret', paymentIntent.client_secret);
  // OK-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
