import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import chatRouter from './routes/chat.js';
import contactRouter from './routes/contact.js';
import adminRouter from './routes/admin.js';

const app = express();
const PORT = process.env.PORT || 4000;

// ── MongoDB connection ──
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/owenhvac';
const client = new MongoClient(mongoUri);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('owenhvac');
    console.log('Connected to MongoDB');
    
    // Seed default prompt if none exists
    const existing = await db.collection('prompts').findOne({ isActive: true });
    if (!existing) {
      await db.collection('prompts').insertOne({
        name: 'Default HVAC Assistant',
        content: `You are Owen HVAC's friendly AI assistant. You help customers with questions about HVAC maintenance, heat pumps, electric boilers, HRV systems, and electrical services in Halifax, Nova Scotia.

Key information:
- Phone: (902) 989-2358 / (902) 240-5387 (Chinese)
- Email: info@owenhvac.ca
- Hours: Mon-Fri 9AM-5PM
- Service area: Halifax, Dartmouth, Nova Scotia
- Services: HVAC maintenance & cleaning, heat pump install/repair, electric boiler, HRV, electrical

Always be helpful, professional, and encourage booking a service when appropriate. If unsure, suggest they call or email for a detailed consultation. You can respond in English or Chinese depending on the user's language.`,
        model: 'gpt-4o',
        temperature: 0.7,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log('Default prompt seeded');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

// ── Middleware ──
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});

// ── Routes ──
app.use('/api/chat', chatRouter);
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', db: db ? 'connected' : 'disconnected' });
});

// ── Start ──
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
});
