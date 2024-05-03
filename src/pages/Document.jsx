import React from 'react'
import { useLocation } from 'react-router-dom'
import RecentTimeline from '../components/RecentTimeline'
function Document() {

const location = useLocation()

  return (
    <RecentTimeline/>
  )
}

export default Document
