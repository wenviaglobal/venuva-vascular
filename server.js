import express from 'express';
import sendEmailHandler from './api/send-email.js';
import bookAppointmentHandler from './api/book-appointment.js';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.post('/api/send-email', (req, res) => sendEmailHandler(req, res));
app.post('/api/book-appointment', (req, res) => bookAppointmentHandler(req, res));

app.listen(PORT, () => {
  console.log(`Venuva API server running on port ${PORT}`);
});
