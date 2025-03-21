
import { easeOut } from 'motion'
import './App.css'
import { color } from 'motion/react'

function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <motion.h1 animate={{ x: 50 }}
          transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
        >
          Latest
          <motion.span
            animate={{ color: ['#ecff33', '#fcffe3', '#ff6133'] }}
            transition={{duration:1.5,repeat: Infinity }}
          >Job</motion.span>
          for career
        </motion.h1>
      </div>
      <div>
        <motion.img src="" animate={{y:[50,100,50]}} transition={{duration:10, repeat: Infinity}} />

        <motion.img src="" animate={{x:[100,150,100]}} transition={{duration:10, delay:5, repeat: Infinity}} />
      </div>
    </>
  )
}

export default App
