import { useState } from 'react';
import './App.css';
import { marked } from 'marked';
import MarkdownEditor from './MarkdownEditor';
function App() {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event) =>{
    setMarkdown(event.target.value);
  }

  const renderedHTML = marked(markdown, {sanitize: true});
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <MarkdownEditor value={markdown} onChange={handleMarkdownChange} />
      {/* <textarea id="markdown-input" value={markdown} onChange={handleMarkdownChange} placeholder='Type your Markdown here ....'/> */}
        <div className="preview" dangerouslySetInnerHTML={{__html:renderedHTML}}></div>
         </div>
  );
}

export default App;
