import { useState } from "react"

function Searchquery({app}){
  const [list,setlist]=useState(app)
  const [query,setquery]=useState("")
  const resultlist= list.filter((itm)=>itm.includes(query))

  return <div className="container"> 
  <div >
    <input type="text" placeholder="Search" onChange={(e)=>setquery(e.target.value)} value={query} className="input"/>
  </div>


  {query && <div>
    {resultlist.map((itm,i)=><li className="list" key={i}>{itm}</li>)}
  </div>}

  {resultlist.length===0?'no result found':""}
  </div>
}

export default Searchquery