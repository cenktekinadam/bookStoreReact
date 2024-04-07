import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"
import FilterArea from "../Components/FilterArea"
import { useSearchParams } from "react-router-dom"
const ProductsPage = () => {
    const [books, setBooks] = useState(null)
    const [searchparams] = useSearchParams()
    //! Filter Area Compta urle searcing params ekledik
    const ordered = (searchparams.get("sırala"));
    const query = (searchparams.get("aramaterimi"));
    console.log(ordered, query);

    //!Bileşenin Ekrana basılma olayını izsledik useeffect ile 
    useEffect(() => {
        //* apia Json serverA gönderilecek parametreleri dökumandan okuyup belirledik
        const params = {
            _sort: ordered === 'Alfabetik Sırayla' ? 'title' : ordered === 'Sayfa Sayısını' ? 'page' : ordered === 'Yapım yılını' ? 'year' : '',
            order: 'desc',
            q: query,
        }



        //!Apidan Verileri aldık Ve state aktardık
        axios.get('http://localhost:3030/books', { params }).then((res) => setBooks(res.data)).catch((err) => console.log(err))
    }, [ordered, query])
    return (
        <>
            <div className="flex-grow-1 pt-3 h-100 ">
                <h3 className="text-center">{books?.length} Kitap Bulundu</h3>
            </div>
            <FilterArea />

            <div className="mx-5 row row-cols-1 row-cols-lg-3 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3 ">

                {books?.map((book) => (

                    <Card key={book.id} book={book} />

                ))}

            </div>
        </>


    )
}

export default ProductsPage
