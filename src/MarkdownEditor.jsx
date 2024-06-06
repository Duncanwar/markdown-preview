import React from 'react';

function MarkdownEditor({value, onChange}) {
    return (
        <textarea className='markdown-editor' id="markdown-input"  value={value} onChange={onChange} placeholder='Type your markdown here ...'/>
    );
}

export default MarkdownEditor;