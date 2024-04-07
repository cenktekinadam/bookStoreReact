import { Link } from "react-router-dom"


const MainPage = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center gap-5 p-4">
            <h1 className="text-center">Unıversal Library'e Hoş Geldiniz</h1>
            <img className="w-100 rounded-5" src="/bookshop.gif" alt="" />
            <p> <Link className="text-warning" to={'/ürünler'}>Ürünler</Link>Sayfasında yeni çıkan bütün kitaplara ulaşabilirsiniz</p>
        </div>

    )
}

export default MainPage
