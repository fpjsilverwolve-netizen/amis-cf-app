import React, { useState } from 'react';
import { Editor } from 'amis-editor';
import { render as renderAmis } from 'amis';
import 'amis/lib/themes/c映.css';
import 'amis-editor/dist/style.css';

function App() {
  const [preview, setPreview] = useState(false);
  const [schema, setSchema] = useState({
    type: 'page',
    title: '我的低代码页面',
    body: [
      {
        type: 'form',
        title: '示例表单',
        api: 'https://your-worker-url.workers.dev/api/users', // 后续替换为 Workers API
        body: [
          { type: 'input-text', name: 'name', label: '姓名' },
          { type: 'input-email', name: 'email', label: '邮箱' }
        ]
      }
    ]
  });

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
        <button onClick={() => setPreview(!preview)}>
          {preview ? '切换到编辑模式' : '切换到预览模式'}
        </button>
      </div>
      <div style={{ flex: 1 }}>
        {preview ? (
          <div style={{ padding: '20px' }}>{renderAmis(schema)}</div>
        ) : (
          <Editor value={schema} onChange={(newSchema) => setSchema(newSchema)} />
        )}
      </div>
    </div>
  );
}

export default App;