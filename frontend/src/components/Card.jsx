
export default function Card({
    cim,
    szerzo,
    kiadas_eve,
    kategoria,
    ar,
    onCardDelete,
    onCardEdit
}) {
    return (
        <div className="card">
            <h2>{cim}</h2>
            <p>{szerzo}</p>
            <p>{kiadas_eve}</p>
            <p>{kategoria}</p>
            <p>{ar}</p>

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
