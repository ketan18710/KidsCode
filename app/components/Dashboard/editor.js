import React,{useState,useEffect} from 'react'
import AceEditor from 'components/AceEditor'
import {Grid, Button, makeStyles,CircularProgress} from '@material-ui/core'
import {API_CONSTANTS} from 'utils/constants'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  fabProgress: {
    // color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function Editor(props) {
  const { codeResult, getCodeResult} = props
  const [output, setOutput] = useState('')
  const [triggers, setTriggers] = useState({
    runTrigger : false,
    loading : false
  })
  const classes = useStyles();
  console.log('output', output)
  useEffect(() => {
    if(codeResult.status === API_CONSTANTS.loading){
      setTriggers({...triggers,loading : true})
    }else if(codeResult.status === API_CONSTANTS.success){
      setTriggers({...triggers,loading : false,runTrigger:false})
      setOutput(codeResult.data)
    }else if(codeResult.status === API_CONSTANTS.error){
      setTriggers({...triggers,loading : false,runTrigger:false})
      setOutput(codeResult.data)
    }
  }, [codeResult])
  const run = (code) => {
    getCodeResult(code)
  }
  
  return (
    <Grid className="Editor" container>
      <Grid item lg={12} container justify="flex-end">
          <div className={classes.wrapper}>
          <Button disabled={triggers.loading} color="primary" className="runCode" onClick={()=>setTriggers({...triggers,runTrigger : true})} variant="contained">
            Run Code
          </Button>
          {triggers.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </Grid>
      <Grid item lg={12}>
        <AceEditor runTrigger={triggers.runTrigger} runCode={(code)=>run(code)}/>
      </Grid>
      <Grid item lg={12} container>
        <Grid item lg={12} container justify="flex-start">
          <h3>Output : </h3>
        </Grid>
        <Grid item lg={12} >
          <AceEditor runTrigger={false} output={output} readOnly={true}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Editor
