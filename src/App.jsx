import { useState } from 'react';
import { marked } from 'marked';
import './App.css'

const placeholder = `Sent message.
paragraph **bolded** 
# h1 
## h2 
[google](google.com) 
- list item 1 
- list item 2 

this is a inline \`<div></div>\`

this is a block of code

\`\`\`
let x = 1
\`\`\`

> First line
> Another line
>
> > Nested line
>
> Last line
![A cute cat](https://example.com/cat.jpg)
`;

function App() {
  const [content, setContent] = useState(placeholder);

  return (
    <div id="container">
      <div>
        <textarea id="editor" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(content, {breaks: true}) }}></div>
    </div>
  )
}

export default App
