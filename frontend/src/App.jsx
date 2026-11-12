import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";

function App() {
  let [books, setBooks] = useState([])
  let [formVisible, setFormVisible] = useState(false)
  let [reload, setReload] = useState(false)
  let [editedId, setEditedId] = useState(null)
  let [newBook, setNewBook] = useState({
    name: "",
    price: "",
    description: "",
    kepUrl: "",
  })

  useEffect(() =>{
    fetch("http://localhost:3000/api/books")
    .then(res => res.json())
    .then(res => setBooks(res))
  }, [newBook, reload])

  function onCardDelete(id){
    fetch(`http://localhost:3000/api/books/${id}`, {
      method: "delete"
    })
    .then(() => {
      setReload(!reload)
    })
  }

function onCardEdit(id) {
  fetch(`http://localhost:3000/api/books/${id}`)
    .then(res => res.json())
    .then(res => setNewBook(res))
  setEditedId(id);
  setFormVisible(true);
}

function submitHandler(e) {
    e.preventDefault();
    if (editedId) {
      fetch(`http://localhost:3000/api/books/${editedId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    })
    .then(() => {
    setNewBook({
    name: "",
    price: "",
    description: "",
    kepUrl: ""
    });
    setEditedId(false);
  })
    } else {
    fetch("http://localhost:3000/api/books", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
  })
    .then(() => {
    setNewBook({
    name: "",
    country: "",
    description: "",
    kepUrl: ""
    });
  })

}
}

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
        <>
        <button className="btn btn-primary mt-6" type="button" onClick={() => setFormVisible(true)}>Új könyv felvitele</button>
        {formVisible && <Form newBook={newBook} setNewBook={setNewBook} submitHandler={submitHandler}/>}
          <div className="container">
            {books.map(book => {
              return <Card key={book.id} name={book.name} price={book.price} description={book.description} kepUrl={book.kepUrl} onCardDelete={() => onCardDelete(book.id)} onCardEdit={() => onCardEdit(book.id)}/>
            })}
          </div>
        
        </>

      </main>
    </div>
  )
}

export default App