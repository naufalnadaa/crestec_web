import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"

const Layout = ({ children }) => {
    return (
        <>
            <div style={{ overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md">
                        <Topbar />
                        <div className="ml-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Layout }