import { Link, useLocation } from "react-router-dom"



const UndefinedPage = ({ }) => {
    const loc = useLocation()

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            {loc.state && <h3 className="text-danger mt-2">{loc.state}</h3>}
            <img src="/notfound.gif" className="w-100 rounded-5" />
            <h1 className="text-center">Aradıgın Sayfa Bulunamadı</h1>


            <p className="text-center">Böyle bir Sayfa Bulunmuyor.Anasayfaya Dönüp başka bir şey aratabilirsiniz</p>
            <Link to={'/'} className="btn btn-primary">AnaSayfaya Dön</Link>
        </div>
    )
}

export default UndefinedPage
