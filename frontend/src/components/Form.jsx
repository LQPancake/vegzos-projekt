export default function Form({ newBook, setNewBook, submitHandler }) {
    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="title">Cím:</label>
                    <input
                        type="text"
                        id="title"
                        value={newBook.title}
                        onChange={e => setNewBook({...newBook, title: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="author">Szerző:</label>
                    <input
                        type="text"
                        id="author"
                        value={newBook.author}
                        onChange={e => setNewBook({...newBook, author: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="published_year">Kiadás éve:</label>
                    <input
                        type="number"
                        id="published_year"
                        value={newBook.published_year}
                        onChange={e => setNewBook({...newBook, published_year: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="category">Kategória:</label>
                    <input
                        type="text"
                        id="category"
                        value={newBook.category}
                        onChange={e => setNewBook({...newBook, category: e.target.value})}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price">Ár:</label>
                    <input
                        type="number"
                        id="price"
                        value={newBook.price}
                        onChange={e => setNewBook({...newBook, price: e.target.value})}
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