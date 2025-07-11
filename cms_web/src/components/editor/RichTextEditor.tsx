import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'align': [] }],
    ['blockquote', 'code-block'],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'list', 'bullet', 'indent',
  'align',
  'blockquote', 'code-block',
  'link', 'image'
];

function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
  return (
    <div className={`rich-text-editor ${className || ''}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
        }}
      />
      <style jsx global>{`
        .rich-text-editor .ql-editor {
          min-height: 300px;
          font-size: 16px;
          line-height: 1.6;
        }
        
        .rich-text-editor .ql-toolbar {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          border-color: #d1d5db;
        }
        
        .rich-text-editor .ql-container {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-color: #d1d5db;
        }
        
        .rich-text-editor .ql-editor:focus {
          outline: none;
        }
        
        .rich-text-editor .ql-toolbar .ql-stroke {
          fill: none;
          stroke: #374151;
        }
        
        .rich-text-editor .ql-toolbar .ql-fill {
          fill: #374151;
          stroke: none;
        }
        
        .rich-text-editor .ql-toolbar .ql-picker {
          color: #374151;
        }
      `}</style>
    </div>
  );
}

export default RichTextEditor;