import Cart from "./Cart"
import LoadingSpinner from '../widgets/LoadingSpinner';
import { useState } from "react";

function CartContainer() {
  
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
}, 1000);

  return (
    <>
      {loading ? <LoadingSpinner /> : <Cart />}
    </>
  )
}
export default CartContainer