import { Router } from 'express';
import { ObjectId } from 'mongodb';

const router = Router();

// Simple auth middleware
function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// GET /api/admin/prompts — list all prompts
router.get('/prompts', auth, async (req, res) => {
  try {
    const prompts = await req.db.collection('prompts').find().sort({ updatedAt: -1 }).toArray();
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/prompts/:id — update a prompt
router.put('/prompts/:id', auth, async (req, res) => {
  try {
    const { name, content, model, temperature, isActive } = req.body;
    const update = { name, content, model, temperature, isActive, updatedAt: new Date() };

    // If setting this prompt as active, deactivate others
    if (isActive) {
      await req.db.collection('prompts').updateMany({}, { $set: { isActive: false } });
    }

    await req.db.collection('prompts').updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: update }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/prompts — create new prompt
router.post('/prompts', auth, async (req, res) => {
  try {
    const { name, content, model, temperature } = req.body;
    const result = await req.db.collection('prompts').insertOne({
      name: name || 'New Prompt',
      content: content || '',
      model: model || 'gpt-4o',
      temperature: temperature || 0.7,
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.json({ success: true, id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/contacts — list recent contacts
router.get('/contacts', auth, async (req, res) => {
  try {
    const contacts = await req.db.collection('contacts').find().sort({ createdAt: -1 }).limit(50).toArray();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/admin/conversations — list recent conversations
router.get('/conversations', auth, async (req, res) => {
  try {
    const convos = await req.db.collection('conversations').find().sort({ createdAt: -1 }).limit(50).toArray();
    res.json(convos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
