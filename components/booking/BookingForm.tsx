import CancellationPolicy from "./CancellationPolicy";
import axios from 'axios';
import { useState } from 'react';

export default function BookingForm(){
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  })

  const [loading, setLoading]= useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)
    setError("")

    try{
      const response =  await axios.post("/api/bookings", formData)
      alert("Booking Confirmed")

    }catch(error){
      setError("Failed to submit booking")
    }finally{
      setLoading(false)
    }

  }

  return(

    <div>

      <form onSubmit={handleSubmit}>

        <button type="submit" disabled={loading}>
          {
            loading? "Processing" : "Conirm & Pay"
          }
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>

    </div>
  )

}
