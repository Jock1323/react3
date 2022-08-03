import React,{useState} from "react"
import Item from "./components/Item";
function App() {
const[name,setName]=useState("");
const [type,setType]=useState("");
let [data,setData]=useState([])
const addItem=(e)=>{
e.preventDefault();
if(type!=="" && name!==""){
const newItem={
id:data[data.length-1]?.id+1 ||1,
name:name,
title:type
}
setData([...data,newItem])
setName("")
setType("")
}
}

let removeItem=(list)=>{
  setData(data.filter(item=>item.id!==list.id))
}
return (
<>
  <div className="container-fluid">
    <div>
      <form className="my-3 bg-light w-50 p-3 me-5 input-box" onSubmit={(e)=>addItem(e)}>
        <h1 className="mt-2 text-center text-success mb-3">Programming Languages</h1>
        <input type="text" placeholder="Example:javascript" className="form-control  p-2 mb-4" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="Example:web" className="form-control  p-2 mb-4" value={type} onChange={(e)=>setType(e.target.value)}/>
        <button className="btn btn-success w-100 p-2">Add</button>
        {
        type==="" ||name===""?<p className="text-danger mt-4 fs-5">Iltimos to'ldiring</p> : <p
          className="text-success mt-4 fs-5">Muvoffaqiyatli to'ldirildi</p>
        }
      </form>
    </div>
    <ul className="w-50 d-flex flex-column align-items-center list">
      {
      data.map((item,index)=>(
      <Item data={item} key={index} remove={removeItem}/>
      ))
      }
    </ul>
  </div>
</>
)
}

export default App