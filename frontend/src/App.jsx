import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold">
          Welcome to my website!
        </h1>

        <p className="mt-4 text-gray-500">
          Built with React, Tailwind CSS and DaisyUI.
        </p>

        <button className="btn btn-primary mt-6">
          Get Started
        </button>
      </main>
    </div>
  )
}

export default App