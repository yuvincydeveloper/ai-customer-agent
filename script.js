Here's a solid starting point: an Express backend with a chatbot endpoint that uses the Claude API to answer customer questions, with conversation context and a system prompt scoped to a small business.

How it works:

- **`/api/chat`** — takes a `sessionId`, the customer's `message`, and a `business` object (name, hours, FAQs, tone). It keeps per-session conversation history in memory and calls Claude with a system prompt built from your business data.
- **`/api/chat/reset`** — clears a session when a customer starts fresh.
- Conversation history is capped at 20 messages so token usage doesn't grow forever.

To run it:
```
npm install
cp .env.example .env   # then add your Anthropic API key
npm run dev
```

Test with curl:
```
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"abc123","message":"What are your hours?","business":{"name":"Joe'\''s Bakery","hours":"Mon-Sat 8am-6pm"}}'
```

Want me to add the **frontend chat widget** next, or move the conversation/business storage from memory into a real database?
