import React,{useState,useEffect} from 'react'
import AceEditor from 'react-ace';
import './style.scss'
// Import a Mode (language)
// import "ace-builds/src-min-noconflict/ext-language_tools";
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/snippets/python";
// import "ace-builds/src-noconflict/theme-github";
import 'brace/mode/python';
import 'brace/theme/monokai';
import 'brace/theme/textmate';
import 'brace/theme/github';
import 'brace/snippets/python';
import 'brace/ext/language_tools';
function Editor(props) {
  const {readOnly , runTrigger, runCode,output } = props
  const [editorVal, setEditorVal] = useState('')
  useEffect(() => {
    if(runTrigger){
      runCode(editorVal)
    }
  }, [runTrigger && runTrigger])
  const retCode = (code) => {
    return `${code}`
  }
  
  return (
    <div>
      <AceEditor
          placeholder={!readOnly ? 'Enter Code Here' : ''}
          mode="python"
          theme="monokai"
          onChange={(code)=>setEditorVal(code)}
          // showPrintMargin={true}
          showGutter={!readOnly ? true : false }
          readOnly={readOnly}
          className={readOnly ? 'readOnly' : ''}
          highlightActiveLine={true}
          value={output ? retCode(output) : editorVal}
          setOptions={
            {
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              // tabSize: 1,
            }
          }
        />
    </div>
  )
}

export default Editor
