import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-size-[40px_40px]
    dark:bg-zinc-950 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
    text-zinc-900 dark:text-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Navbar/>
            <Home />
        </div>
    </div>
  )
}

export default App