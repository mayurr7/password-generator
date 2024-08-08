import { useState ,  useCallback} from 'react'




function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState('');


  let passwordGenerator =  useCallback(() => {
        let pass= '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if(numberAllowed) str += "0123456789";
        if(charAllowed) str += '!@$%&()_+';

       for (let index = 1; index <= array.length; index++) {
       let char = Math.floor(Math.random()) * str.length + 1;

       pass = str.charAt(char);
      
       }
       setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword] )

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
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5'>Copy</button>

        </div>
      </div>
    </>
  )
}

export default App
