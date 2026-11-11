import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold">
          Üdv az XYZ Könyvtár oldalán!
        </h1>

        <p className="mt-4 text-gray-500">
          asd
        </p>

        <button className="btn btn-primary mt-6">
          Könyv kölcsönzés
        </button>
      </main>
    </div>
  )
}

export default App