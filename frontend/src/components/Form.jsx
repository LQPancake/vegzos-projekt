export default function Form({newBook, setNewBook, submitHandler}) {

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="name">Név:</label>
                    <input type="text" id="name"  value={newBook.name} onChange={e => setNewBook({...newBook, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="price">Ár:</label>
                    <input type="text" id="price" value={newBook.price} onChange={e => setNewBook({...newBook, price: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="description">Leírás:</label>
                    <input type="text" id="description" value={newBook.description} onChange={e => setNewBook({...newBook, description: e.target.value})}/>
                </div>
                <label htmlFor="kepUrl">Kép:</label>
                <input type="text" id="kepUrl" name="kepUrl" value={newBook.kepUrl} onChange={e => setNewBook({...newBook, kepUrl: e.target.value})}/>
                </div>
                <div>
                    <button className="btn btn-primary mt-6" type="submit">Hozzáadás</button>
                </div>
        </form>
    )
}