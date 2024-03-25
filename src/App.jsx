import { useState } from 'react'
import Searchquery from './Searchquery'
import reactdata from './Data/data'

function App() {
  const [data, setdata] = useState(reactdata)
  const {app}=data
  
  return <Searchquery app={app}/>
}

export default App
