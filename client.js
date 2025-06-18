import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  AssistantProvider,
  ComposerPrimitive,
  ThreadPrimitive,
  useLocalRuntime,
} from '@assistant-ui/react';

function ChatWidget() {
  const opts =
    typeof window !== 'undefined' ? window.ASSISTANT_UI_OPTIONS || {} : {};
  const runtimeOptions = opts.runtimeOptions || { model: 'openai/gpt-3.5-turbo' };
  if (opts.apiUrl) {
    runtimeOptions.baseUrl = opts.apiUrl;
  }
  const runtime = useLocalRuntime(runtimeOptions);
  return (
    <AssistantProvider runtime={runtime}>
      <div
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          width: '320px',
          height: '420px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          zIndex: 10000,
        }}
      >
        <ThreadPrimitive.Root style={{ flex: 1, overflowY: 'auto' }}>
          <ThreadPrimitive.Messages />
          <ThreadPrimitive.ScrollToBottom />
        </ThreadPrimitive.Root>
        <ComposerPrimitive.Root style={{ display: 'flex', padding: '4px' }}>
          <ComposerPrimitive.Input style={{ flex: 1 }} />
          <ComposerPrimitive.Send>Send</ComposerPrimitive.Send>
        </ComposerPrimitive.Root>
      </div>
    </AssistantProvider>
  );
}

export default function () {
  if (typeof document !== 'undefined') {
    const existing = document.getElementById('assistant-ui-widget');
    if (!existing) {
      const container = document.createElement('div');
      container.id = 'assistant-ui-widget';
      document.body.appendChild(container);
      const root = createRoot(container);
      root.render(<ChatWidget />);
    }
  }
}
