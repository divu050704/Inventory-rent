import "../css/Home.css"
import { useState } from "react"
import Upload from "./Upload"
import RentBook from "./RentBook" 
export default function Home() {
    const [bar, setBar] = useState("Upload")
    return (
        <div style={{height: "100vh"}}>
            <nav className="navbar">
                <h2>
                    Inventory
                </h2>
            </nav>
            <div className="Main">
                <div className="side-bar">
                    <p
                        className={bar === 'Upload' ? "side-bar--opened" : "side-bar--closed"}
                        onClick={() => setBar("Upload")}
                    >
                        Upload Data
                    </p>
                    <p
                        className={bar === 'Rent' ? "side-bar--opened" : "side-bar--closed"}
                        onClick={() => setBar("Rent")}
                    >
                        Rent Books
                    </p>
                </div>
                {bar === "Upload" ? <Upload /> : <RentBook />}
            </div>
        </div>
    )
}