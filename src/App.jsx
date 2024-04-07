import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import ProductsPage from "./pages/ProductsPage"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import DetailPage from "./pages/DetailPage"
import UndefinedPage from "./pages/UndefinedPage"
import Layout from "./Components/Layout"


const App = () => {
  // Tarayıcadaki urle göre Ekrana hangi bileşenin basılacağını belirle
  //React routerDom Tarayıcıdaki urle Window nesnesi ile erişir
  return (
    <BrowserRouter>

      <Header />
      {/* Projedeki Sayfaları Tanımladıgımız kapsayıcı */}


      <Routes>
        {/* Route:Projedeki HEr BİR Sayfa İçin Tanımlanır */}
        {/* Routa Yol ve o yol için kullanılacak bileşen verilir*/}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        {/* Dynamic Rout */}
        <Route path="/ürün/:id" element={<DetailPage />} />

        { /* NEsted Routes iç içe Routelar */}
        <Route path="/ekstra" element={<Layout />}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>


        {/* Dynamic Rout */}
        <Route path="*" element={<UndefinedPage />} />

      </Routes>
      {/* Bütün Sayfalar için ortak bileşenleri routes dışına verilir */}
      <Footer />

    </BrowserRouter>

  )
}

export default App
