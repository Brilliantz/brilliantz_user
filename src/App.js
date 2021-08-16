import React , {useEffect , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './config'

const App = () => {

  // get browser size 
  const size = useWindowSize();

  return (
    <div>
      <Routes size={size} />
    </div>
  )
}

const useWindowSize = () => {
  const [windowSize , setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize () {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize" , handleResize)

    handleResize();

    return () => window.removeEventListener("resize" , handleResize);

  } , [])

  return windowSize;

}


export default App
