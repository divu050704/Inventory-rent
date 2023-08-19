import { useState } from "react";
import "../css/Upload.css"
export default function Upload() {
    const [data, setData] = useState({
        name: [""],
        customerName: [""],
        price: [""],
        rate: [""],
        phoneNumber: [""],
        uid: [""]
    });
    const handeInputs = (type,index,d) => {
        setData((prev) => {
            prev[type][index] = d
            return {...prev}
        })
         
    }
    const addNew = () => {
        setData((prev) => ({
            name: [...prev.name, ""], 
            customerName: [...prev.customerName, ""],
            price: [...prev.price, ""],
            rate: [...prev.rate, ""],
            phoneNumber: [...prev.phoneNumber, ""],
            uid: [...prev.uid, ""]
        }))
    }
    const deleteThis = (index) => {
        setData((prev) => {
            prev.name.splice(index, 1)
            prev.customerName.splice(index, 1)
            prev.price.splice(index,1)
            prev.rate.splice(index,1)
            prev.phoneNumber.splice(index,1)
            prev.uid.splice(index,1)

            return {...prev}
        })
    }
    const submit = () => {
        if (data.name.includes("") || data.customerName.includes("") || data.price.includes("") || data.rate.includes("") || data.phoneNumber.includes("")){
            alert("All fields are required")
        }
        else{
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              };
              fetch("http://localhost:8080/api/new-rent",requestOptions)
        }
    }
    const form = data.name.map((element, index) => {
            return (
                <div className="Upload--form" key={index}>
                    <h2>{index + 1 + "."}</h2>

                    <h2>UID</h2>
                    <input value={data.uid[index]} onChange={(event) => handeInputs("uid", index, event.target.value)}></input>

                    <h2>
                        Customer name
                    </h2>
                    <input value={data.customerName[index]} onChange={(event) => handeInputs("customerName", index, event.target.value)}></input>
                    <h2>
                        Book Name
                    </h2>
                    <input value={data.name[index]} onChange={(event) => handeInputs("name", index, event.target.value)}></input>
                    <h2>
                        Price
                    </h2>
                    <input value={data.price[index]} onChange={(event) => handeInputs("price", index, event.target.value)}></input>
                    <h2>
                        Rate
                    </h2>
                    <input value={data.rate[index]}  onChange={(event) => handeInputs("rate", index, event.target.value)}></input>
                    <h2>
                        Phone number
                    </h2>
                    <input  value={data.phoneNumber[index]} onChange={(event) => handeInputs("phoneNumber", index, event.target.value)}></input>
                    <br />
                    <button className="Uplaod--delete-button" onClick={() => deleteThis(index)} >Delete</button>
                    <hr />
                </div>
            )
        })

    return (
        <div className="Upload">
            { form }
            <button className="Upload--add-button" onClick={() => addNew()}>Add +</button><br/>
            <button className="Upload--submit" onClick={submit}>SUBMIT</button>
        </div>
    )
}