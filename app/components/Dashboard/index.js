import React,{useState,useEffect} from 'react'
import './style.scss'
import Editor from './editor'
import VideoPlayer from '../VideoPlayer'
function DashboardComp(props) {
  const {activeTab , activeTabConsts, codeResult, getCodeResult} = props
  return (
    <div className="DashboardComp">
      {
        activeTab === activeTabConsts.video
        &&
        <VideoPlayer />
      }
      {
        activeTab === activeTabConsts.code
        &&
        <Editor codeResult={codeResult} getCodeResult={(data)=>getCodeResult(data)} />
      }
    </div>
  )
}

export default DashboardComp
