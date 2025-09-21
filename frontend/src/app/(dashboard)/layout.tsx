import { LeftSideBar } from "@/components/left-side-bar/leftsidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="layout min-h-screen flex flex-row  bg-radial from-blue-500 to-blue-100">
                <LeftSideBar/>
                {children}
            </div>
        </>
    );
}

export default Layout;