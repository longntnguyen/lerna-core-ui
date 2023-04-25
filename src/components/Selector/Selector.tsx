import { useState } from "react";

function Selector() {
    const [open,setOpen]=useState(false)
  return (
    <div className="dropdown">
  <button className="btn-dropdown" onClick={()=>setOpen((pre)=>!pre)} >
    Dropdown link
  </button>

 {open? <ul className="dropdown-menu"  >
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul>:<></>}
</div>
  );
}

export default Selector;