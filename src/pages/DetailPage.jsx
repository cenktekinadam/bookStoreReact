import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DetailPage = () => {
    const [detail, setDetail] = useState(null)
    //*1*-Urldeki İd Parametresini al
    // UseParams urle eklenmiş olan path Parametresine Erişim Sağlar
    const { id } = useParams()


    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3030/books/${id}`).then((res) => setDetail(res.data))
            .catch((err) => { navigate('/sdsad', { state: err.message }) })
        /* Ürün Bilgisi Gelmediyse  ve Catch Bloğu Çalıştıysa KullanıcıyıNotFOUNDPage yönlendir*/
    }, [])


    //* İdsini Bildiğimiz Kkitabın Bilgilerini apidan al Url Den Aldıgımız 

    return (
        <div className='w-100 h-100'>
            {!detail && <p className='color-white'>Yükleniyor</p>}
            {detail && (
                <div className='row my-5 p-5 w-100'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <img style={{ maxHeight: '400px' }} src={detail.image} className='rounded-4 img-fluid shadow' alt={detail.title} />
                    </div>


                    <div className='col-md-6 d-flex flex-column justify-content-center align-items-center my-3'>
                        <h1>{detail.title}</h1>

                        <div className='my-4 '>
                            <div>
                                <DetailInfo label={'Yazar'} value={detail.author} />
                                <DetailInfo label={'Konusu & Hikayesi'} value={detail.description} />
                                <div className='d-flex gap-5'>
                                    <DetailInfo label={'Yapım yılı'} value={detail.year} />
                                    <DetailInfo label={'Sayfa Sayısı'} value={detail.page} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )
            }


            {/*    {detail?.map((book) =>
                (<h1>{book.description}</h1>)
            )} */}
        </div >
    )
}

export default DetailPage

const DetailInfo = ({ label, value }) => {


    return (
        <p className='fs-5'>
            <span className='bg-danger badge me-3'>{label}</span>
            <span>{value}</span>
        </p>
    )

}