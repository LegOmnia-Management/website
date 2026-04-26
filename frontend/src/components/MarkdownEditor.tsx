'use client';

import React, { useState, useCallback } from 'react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-markdown-preview/markdown.css';
import '@uiw/react-md-editor/markdown-editor.css';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}

export function MarkdownEditor({ value, onChange, height = 500 }: MarkdownEditorProps) {
  return (
    <div
      data-color-mode="light"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid var(--border)',
      }}
    >
      <MDEditor
        value={value}
        onChange={(val) => onChange(val || '')}
        preview="live"
        height={height}
        visibleDragbar={true}
        hideToolbar={false}
        textareaProps={{
          disabled: false,
        }}
        hideCommandBar={false}
        enableScroll={true}
      />
    </div>
  );
}

export default MarkdownEditor;
