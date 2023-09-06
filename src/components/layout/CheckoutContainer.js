import { useState } from "react";
import LoadingSpinner from "../widgets/LoadingSpinner";
import Checkout from "./Checkout";

function CheckoutContainer() {
  
  const [loading, setLoading] = useState(true)
  
  setTimeout(() => {
    setLoading(false)
}, 1000)

  return (
    <>
        {loading ? <LoadingSpinner /> : <Checkout />}
    </>
  )
}
export default CheckoutContainer