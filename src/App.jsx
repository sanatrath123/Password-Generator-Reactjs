// import React ,{ useState ,useCallback ,useEffect, useRef} from "react";

//  function App(){
//   const [length , setlength] = useState(8)
//   const [numberAllowed , setNumberAllowed] = useState(false)
//   const [charAllowed , setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")
//  //use useref
//  const passwordref = useRef(null)
//   const PasswordGenerator= useCallback(()=>{
// const pass=""
// const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//  if(numberAllowed){
//   str +="123456789"
//  }
//  if(charAllowed){
//   str += "!@#$%^&*(){}~"
//  }

//  for(let i=0;i<length;i++){
//   let char = Math.floor(Math.random() * str.length)
//   pass += str.charAt(char)
//  }

//  setPassword(pass)
//   },[length,numberAllowed,charAllowed,setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current.select();
//     passwordRef.current.setSelectionRange(0, 999);
//   }, []);
// //useEffect
// useEffect(()=>{
// PasswordGenerator()
// },[length,numberAllowed,charAllowed,setPassword])


//   return (  
 
//   <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//   <h1 className='text-white text-center my-3'>Password generator</h1>
//   <div className="flex-shadow rounded-lg overflow-hidden mb-4"></div>
//   <div className="flex items-center mb-4"> {/* Add a flex container for alignment */}
//     <input 
//       type="text"
//       value={password}
//       className="w-full outline-none py-2 px-2 rounded-lg text-center"
//       placeholder="PASSWORD"
//       readOnly
//       ref={passwordRef}
//     />
//     <button 
//     onClick={copyPasswordToClipboard}
//       className="outline-none bg-blue-700 text-white px-3 py-2 ml-2 rounded-xl">Copy</button>
//   </div>

//   <div className="flex text-sm"></div>
//     <div className="flex items-center gap-x-1">
//       <input type="range"
//       min={8}
//       max={50}
//       onChange={(e)=>setLength(e.target.value)}
//       value={length}
//       className="cursor-pointer"
//        />
//        <label>Length: {length}</label>
//     </div>
//     <div className="flex items-center gap-x-1">
//       <input type="checkbox"
//     defaultChecked= {numberAllowed} 
//     onChange={()=> setNumberAllowed(!numberAllowed)}
//     id="numberInput"
//     />
//     </div>
//     <div className="flex items-center gap-x-1">
//       <input type="checkbox"
//      defaultChecked={charAllowed} 
//      onChange={()=>setCharAllowed(!charAllowed)}
//      id="charecterInput"
//      />
//      <lable htmlfor="characterInput">Charecters</lable>
    
//     </div>
//   </div>

// </div>
 
  
//   )
//     }
  
// export default App 

import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // Define the PasswordGenerator function using useCallback.
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str += "123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}~";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Create a function to copy the password to the clipboard.
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    document.execCommand("copy");
  }, []);

  // Use useEffect to generate the initial password.
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex-shadow rounded-lg overflow-hidden mb-4"></div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={password}
          className="w-full outline-none py-2 px-2 rounded-lg text-center"
          placeholder="PASSWORD"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-2 ml-2 rounded-xl"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm"></div>
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={8}
          max={50}
          onChange={(e) => setLength(e.target.value)}
          value={length}
          className="cursor-pointer"
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed(!numberAllowed)}
          id="numberInput"
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed(!charAllowed)}
          id="characterInput"
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  );
}

export default App;
