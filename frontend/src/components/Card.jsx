export default function Card({name, price, description, kepUrl, onCardDelete, onCardEdit}){
    return(
        <div className="card">
            <img src={kepUrl} alt="Könyv" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
            <p>
                <button className="icon-button" onClick={onCardEdit}>EDIT</button>
                <button className="icon-button" onClick={onCardDelete}>DEL</button>
            </p>
        </div>
    )
}