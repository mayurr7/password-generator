import { useState ,  useCallback, useEffect, useRef} from 'react'




function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState('');


  //useRef hook

    let passwordRef = useRef(null);

  let passwordGenerator =  useCallback(() => {
        let pass= '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if(numberAllowed) str += "0123456789";
        if(charAllowed) str += '!@$%&()_+';

       for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random()* str.length + 1);

       pass += str.charAt(char);
      
       }
       setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword] );

  let copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);

    useEffect(() => {passwordGenerator()}, [length, numberAllowed, setPassword, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md max-auto shadow-md rounded-lg mx-20 px-2 my-20 py-1 text-orange-500 bg-gray-700">

        <h1 className='text-orange-600 font-bold   mx-20 text-center  my-1'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden  mb-7">
          <input type="text" 
          value={password}
          className='outline-none w-full py-3 px-5'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPass}
          className='outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>

        </div>
              <div className="flex text-sm  gap-x-2">
                <div className="flex items-center gap-x-1">
                  <input 
                  type="range"
                  min={6}
                  max={15}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {setLength(e.target.value)}}
                   />

                   <label htmlFor="">Length : {length}</label>
                </div>
                    <div className="flex items-center gap-x-1">
                      <input type="checkbox" 
                      defaultChecked={numberAllowed}
                      id='numberInput'
                      onChange={() => {
                        setNumberAllowed((prev) => !prev);
                      }}
                      />
                      <label htmlFor="numberInput">Numbers</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                      <input type="checkbox" 
                      defaultChecked={numberAllowed}
                      id='numberInput'
                      onChange={() => {
                        setNumberAllowed((prev) => !prev);
                      }}
                      />
                      <label htmlFor="characterInput">Character</label>
                    </div>
                
              </div>

      </div>
    </>
  )
}

export default App
