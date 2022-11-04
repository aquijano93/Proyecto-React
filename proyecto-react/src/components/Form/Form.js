import './Form.css'
import { useState, createContext } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const FormData = createContext({
    name:"",
    lastname:"",
    phone:"",
    address:"",
    email:""
})

const FormCheckOut = ({dataSet}) => {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const MySwal = withReactContent(Swal);
    

    const sendData = (e) => {
        e.preventDefault()
        if (!name || !email || !phone || !address)
        {
        MySwal.fire({
            title: <strong>Oops!</strong>,
            html: <i>You have to complete all the fields</i>,
            icon: 'error'
        })
        }
        else 
        {
            dataSet(
                name,
                lastname,
                phone,
                address,
                email
            )
        }
    }

    return (

        <form className="row" id="form">

            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <h4>Buyer Information</h4>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> First Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"   className="form-input form-control"   placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Last Name</label>
                                    <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text"   className="form-input form-control"   placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Phone Number</label>
                                    <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number" className="form-input form-control"   placeholder="Phone"required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Email Address</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-input form-control"   placeholder="Email" required/>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label> Shipping Address</label>
                                    <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"   className="form-input form-control"   placeholder="Address"required />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-end">
                                <button className="submit btn btn-warning mx-1" onClick = {sendData} >Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormCheckOut