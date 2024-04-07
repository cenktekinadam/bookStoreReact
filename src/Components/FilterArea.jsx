import { useSearchParams } from "react-router-dom";
//! useSerachParams urldeki arama parametrelerini yönetmemizi sağlar
//!Geriye Dizi içerisinde iki parametre  Döndürür 1URldeki arama Parametreleri 2)Bu parametreyi değiştirmeye yarayan metot

const FilterArea = () => {
    const [searchparams, setSearchParams] = useSearchParams()

    const handleSubmit = (e) => {
        e.preventDefault()

        //* Aratılan Terimi urle parametre olarak ekleme

        searchparams.set("aramaterimi", e.target[0].value)
        //Bunun için Url Güncellemesini yapmamız geerk
        setSearchParams(searchparams)
    }
    const handleChange = (e) => {
        searchparams.set("sırala", e.target.value)
        setSearchParams(searchparams)
    }



    return (
        <div className="my-3 d-flex  w-100 align-items-center gap-3">
            <label className="text-warning ms-2">Sırala</label>
            <select defaultValue={searchparams.get('sırala')} onChange={handleChange} className="form-select w-50">
                <option>Alfabetik Sırayla</option>
                <option >Sayfa Sayısını</option>
                <option >Yapım yılını</option>
            </select>

            <form onSubmit={handleSubmit} action="" className="d-flex gap-3  w-100">
                <input defaultValue={searchparams.get('aramaterimi')} type="text" placeholder="Aratılacak isim" className="form-control w-75" />
                <button className="btn btn-primary">Ara</button>
            </form>
        </div>
    )
}

export default FilterArea
