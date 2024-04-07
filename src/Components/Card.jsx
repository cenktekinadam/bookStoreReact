import { Link } from 'react-router-dom'


const Card = ({ book }) => {

    return (
        <div className="col" >
            <div className="card shadow p-2 d-flex flex-column align-items-center justify-content-center gap-2 " style={{ maxHeight: '650px' }}>
                -
                <img src={book.image} style={{}} className='img-fluid img-thumbnail' />
                <div >
                    <h1 className="text-center fs-3">{book.title}</h1>
                    <h3 className="text-center fs-3">Yazar:{book.author}</h3>

                </div>
                <Link to={`/ürün/${book.id}`} className='btn btn-primary w-100 '>Detay Gör</Link>
            </div >
        </div>
    )
}

export default Card
