import { Router } from 'express';
import OpenAI from 'openai';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { messages, language } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array required' });
    }

    // Get active prompt from MongoDB
    const promptDoc = await req.db.collection('prompts').findOne({ isActive: true });
    const systemPrompt = promptDoc?.content || 'You are a helpful HVAC assistant.';
    const model = promptDoc?.model || 'gpt-4o';
    const temperature = promptDoc?.temperature || 0.7;

    // Add language hint
    const langHint = language === 'zh' ? '\n\nThe user is speaking Chinese. Please respond in Chinese.' : '';

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model,
      temperature,
      max_tokens: 800,
      messages: [
        { role: 'system', content: systemPrompt + langHint },
        ...messages.slice(-10), // Keep last 10 messages for context
      ],
    });

    const reply = completion.choices[0]?.message?.content || '';

    // Log conversation
    try {
      await req.db.collection('conversations').insertOne({
        messages: [...messages, { role: 'assistant', content: reply }],
        language: language || 'en',
        model,
        createdAt: new Date(),
      });
    } catch {}

    res.json({ reply });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

export default router;
