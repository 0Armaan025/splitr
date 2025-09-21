import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";


const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="layout min-h-screen flex flex-col  bg-radial from-blue-500 to-blue-100">
            
            {children}
            
        </div>
    );
}

export default Layout;