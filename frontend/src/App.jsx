
import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [books, setBooks] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const [newBook, setNewBook] = useState({
    cim: "",
    szerzo: "",
    kiadas_eve: "",
    kategoria: "",
    ar: ""
});

  useEffect(() => {
    fetch("http://localhost:3000/konyvek")
      .then(res => res.json())
      .then(res => setBooks(res))
      .catch(error => console.error(error));
  }, [reload]);

function resetForm() {
    setNewBook({
        cim: "",
        szerzo: "",
        kiadas_eve: "",
        kategoria: "",
        ar: ""
    });

    setEditedId(null);
    setFormVisible(false);
}

  function onCardDelete(id) {
    fetch(`http://localhost:3000/konyvek/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setReload(prev => !prev);
      })
      .catch(error => console.error(error));
  }

  function onCardEdit(id) {
    fetch(`http://localhost:3000/konyvek/${id}`)
      .then(res => res.json())
      .then(res => {
        setNewBook(res);
        setEditedId(id);
        setFormVisible(true);
      })
      .catch(error => console.error(error));
  }


  function submitHandler(e) {
      e.preventDefault();
  
      const isEditing = editedId !== null;
  
      fetch(
          isEditing
              ? `http://localhost:3000/konyvek/${editedId}`
              : "http://localhost:3000/konyvek",
          {
              method: isEditing ? "PUT" : "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newBook)
          }
      )
          .then(async res => {
              if (!res.ok) {
                  const errorText = await res.text();
                  throw new Error(errorText || "Failed to save book");
              }
            
              return res.json();
          })
          .then(() => {
              resetForm();
              setReload(prev => !prev);
          })
          .catch(error => console.error("POST/PUT error:", error));
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

        <button
          className="btn btn-primary mt-6"
          type="button"
          onClick={() => {
            resetForm();
            setFormVisible(true);
          }}
        >
          Új könyv felvitele
        </button>

        {formVisible && (
          <Form
            newBook={newBook}
            setNewBook={setNewBook}
            submitHandler={submitHandler}
          />
        )}

        <div className="container">
          {books.map(book => (
            <Card
                key={book.id}
                cim={book.cim}
                szerzo={book.szerzo}
                kiadas_eve={book.kiadas_eve}
                kategoria={book.kategoria}
                ar={book.ar}
                onCardDelete={() => onCardDelete(book.id)}
                onCardEdit={() => onCardEdit(book.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
