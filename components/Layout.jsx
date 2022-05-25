import Footer from './Footer';
import Navbar from './Navbar';
import Meta from './Meta';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <div className="bg-white">
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;