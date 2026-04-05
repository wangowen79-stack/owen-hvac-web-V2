import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useI18n } from '../i18n';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { lang } = useI18n();

  const greeting = lang === 'zh'
    ? 'Hi! 我是 Owen HVAC 的 AI 助手。有什么可以帮您的吗？'
    : "Hi! I'm Owen HVAC's AI assistant. How can I help you today?";

  const quickQuestions = lang === 'zh'
    ? ['多久需要维护一次？', '你们服务哪些区域？', '如何预约？']
    : ['How often should I maintain?', 'What areas do you serve?', 'How to book?'];

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const userMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg], language: lang }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || data.error || 'Sorry, something went wrong.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: lang === 'zh' ? '抱歉，暂时无法连接。请拨打 (782) 824-2846。' : 'Sorry, unable to connect. Please call (782) 824-2846.' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {open && (
        <div style={{
          position: 'fixed', bottom: 90, right: 20, width: 370, maxWidth: 'calc(100vw - 40px)',
          height: 500, maxHeight: 'calc(100vh - 120px)',
          background: 'white', borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
          display: 'flex', flexDirection: 'column', zIndex: 9999,
          animation: 'fadeUp 0.3s ease',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--navy), var(--navy-light))',
            padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ color: 'white', fontWeight: 600, fontSize: 15 }}>Owen HVAC</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
                {lang === 'zh' ? '通常几秒内回复' : 'Usually replies in seconds'}
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
              width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><X size={16} /></button>
          </div>

          <div style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{
              background: 'var(--gray-50)', borderRadius: '4px 14px 14px 14px',
              padding: '12px 16px', fontSize: 14, lineHeight: 1.6, color: 'var(--gray-700)',
              maxWidth: '85%',
            }}>{greeting}</div>

            {messages.length === 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)} style={{
                    background: 'var(--warm-50)', border: '1px solid var(--warm-200)',
                    borderRadius: 20, padding: '6px 14px', fontSize: 13,
                    color: 'var(--orange-dark)', fontWeight: 500,
                  }}>{q}</button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                background: m.role === 'user' ? 'var(--orange)' : 'var(--gray-50)',
                color: m.role === 'user' ? 'white' : 'var(--gray-700)',
                borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '4px 14px 14px 14px',
                padding: '10px 16px', fontSize: 14, lineHeight: 1.6,
                maxWidth: '85%', wordBreak: 'break-word',
              }}>{m.content}</div>
            ))}

            {loading && (
              <div style={{ alignSelf: 'flex-start', padding: '10px 16px', background: 'var(--gray-50)', borderRadius: '4px 14px 14px 14px' }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      width: 7, height: 7, borderRadius: '50%', background: 'var(--gray-300)',
                      animation: `float 1s ease-in-out ${i * 0.15}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--gray-100)', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder={lang === 'zh' ? '输入消息...' : 'Type a message...'}
              style={{
                flex: 1, padding: '10px 14px', borderRadius: 10,
                border: '1.5px solid var(--gray-200)', fontSize: 14,
                fontFamily: 'var(--font-body)', outline: 'none',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--orange)'}
              onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
            />
            <button onClick={() => sendMessage(input)} disabled={!input.trim()} style={{
              width: 42, height: 42, borderRadius: 10, border: 'none',
              background: input.trim() ? 'var(--orange)' : 'var(--gray-200)',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}><Send size={16} /></button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{
        position: 'fixed', bottom: 24, right: 24, width: 56, height: 56,
        borderRadius: '50%', border: 'none',
        background: open ? 'var(--gray-600)' : 'linear-gradient(135deg, var(--orange), var(--orange-dark))',
        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
        zIndex: 10000, transition: 'all 0.3s ease',
      }}>
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
