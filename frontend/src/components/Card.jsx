
export default function Card({
    title,
    author,
    published_year,
    category,
    price,
    onCardDelete,
    onCardEdit
}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{published_year}</p>
            <p>{category}</p>
            <p>{price}</p>

            <p>
                <button
                    className="btn btn-primary mt-6"
                    type="button"
                    onClick={onCardEdit}
                >
                    EDIT
                </button>

                <button
                    className="btn btn-primary mt-6"
                    type="button"
                    onClick={onCardDelete}
                >
                    DEL
                </button>
            </p>
        </div>
    )
}
