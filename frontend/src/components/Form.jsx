export default function Form({ newBook, setNewBook, submitHandler }) {
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="cim">Cím:</label>
                    <input
                        type="text"
                        id="cim"
                        value={newBook.cim}
                        onChange={e => setNewBook({...newBook, cim: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="szerzo">Szerző:</label>
                    <input
                        type="text"
                        id="szerzo"
                        value={newBook.szerzo}
                        onChange={e => setNewBook({...newBook, szerzo: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="kiadas_eve">Kiadás éve:</label>
                    <input
                        type="number"
                        id="kiadas_eve"
                        value={newBook.kiadas_eve}
                        onChange={e => setNewBook({...newBook, kiadas_eve: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="kategoria">Kategória:</label>
                    <input
                        type="text"
                        id="kategoria"
                        value={newBook.kategoria}
                        onChange={e => setNewBook({...newBook, kategoria: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="ar">Ár:</label>
                    <input
                        type="number"
                        id="ar"
                        value={newBook.ar}
                        onChange={e => setNewBook({...newBook, ar: e.target.value})}
                        required
                    />
                </div>
            </div>

            <div>
                <button className="btn btn-primary mt-6" type="submit">
                    Hozzáadás
                </button>
            </div>
        </form>
    );
}