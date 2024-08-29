import { useState ,useCallback ,useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

// usecallback hook = we use it for optimization
// he useCallback hook helps by "remembering" your function and only 
// recreating it if the things it depends on (called dependencies) change. 
// If the dependencies haven’t changed, React will just use the "remembered" function,
// avoiding the need to create a new one.
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-={}:<>?[]";


    for(let i = 1; i <= length; i++)
    {
      let char = (Math.floor(Math.random() * str.length +1));
      pass += str.charAt(char);
      // pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  } , [length , numberAllowed , charAllowed , setPassword]);

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select(); // optional selection it might be null
    // passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  }, [password]);


// useeffect hook = we use it whenever there is any change in the given dependencies
// The effect will only re-run if one of the dependencies has changed since the last render.
// If you leave this array empty ([]), 
// the effect only runs once after the initial render.
  useEffect(()=>{
    passwordGenerator();
  } , [length , numberAllowed , charAllowed , passwordGenerator]);

  return (
  <>
  <div className='w-full max-w-md mx-auto shadow-md
  rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-'>
  <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef} 
      />
      <button onClick={copyPasswordToClipboard} 
      className='outline-none bg-blue-800 text-white px-3py-0.5
       shrink-0'>
        Copy</button>
    </div>
    <div className='felx text-sm gap-x-2'>
      <div className=' flex items-center gap-x-1'>
        <input 
        type="range"
        min= {6}
        max ={100}
        value={length}
        className='curson-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
        />
        <label htmlFor="">Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        id="numberInput"
        defaultChecked={numberAllowed}
        onChange={(e)=>{
          setNumberAllowed(e.target.checked)
        }}
        />  
        <label htmlFor="numberInput">Include Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        id="characterInput"
        defaultChecked={charAllowed}
        onChange={(e)=>{
          setCharAllowed((prev)=> !prev)
          }}
          />
          <label htmlFor="characterInput">Include Characters</label>
      </div>
    </div>
  </div>
  </>
  )
}

export default App
