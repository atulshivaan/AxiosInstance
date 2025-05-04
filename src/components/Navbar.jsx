import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-center align-center h-20 w-[90%] mx-30">

     <Link to="/" className="text-3xl font-bold text-blue-500 hover:text-blue-700 mx-4">Home</Link>
        <Link to="/products" className="text-3xl font-bold text-blue-500 hover:text-blue-700 mx-4">Products</Link>
       
        <Link to="/users" className="text-3xl font-bold text-blue-500 hover:text-blue-700 mx-4">User</Link>
     

      
    </div>
  )
}

export default Navbar
