//! Layout ekstra ayarlar ve kategorşler sayfasını kapsayan route'a verdiğimiz bir bileşen

import { NavLink, Outlet } from "react-router-dom"

//* Kapsayıcı Route bileşen verdiğimiz zaman alt routelardan hangisine gidersek gidelim kapasayıcı routen bileşeni ile karşılaşırız
const Layout = () => {
    return (
        <div className="d-flex gap-5 p-4">
            <aside className="d-flex flex-column bg-light p-3 rounded">
                <NavLink to={'/ekstra/kategoriler'}>Kategoriler</NavLink>
                <NavLink to={'/ekstra/kampanyalar'}>Kampanyalar</NavLink>
                <NavLink to={'/ekstra/ayarlar'}>Ekstra</NavLink>
            </aside>

            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
