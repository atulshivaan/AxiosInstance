import Carasoule from "../components/Carasoule"


const Home = () => {

    const welcome=[
        {
            id:1,
            title:"Welcome to the E-commerce website",
            description:"This is a simple e-commerce website built with React and Tailwind CSS. You can browse products, add them to your cart, and checkout.",
            image:"https://i.pinimg.com/736x/7a/0a/c9/7a0ac95218dde25b0ed2e714b8e92cbb.jpg"
        },
        {
            id:2,
            title:"Shop the latest trends",
            description:"We have a wide range of products to choose from. Shop the latest trends and find your perfect style.",
            image:"https://i.pinimg.com/736x/49/75/c8/4975c828abd338151f3f4f7521616bf4.jpg"
        },
        {
            id:3,
            title:"Get the best deals",
            description:"We offer the best deals on the latest products. Don't miss out on our amazing discounts.",
            image:"https://i.pinimg.com/736x/44/61/25/446125f18e56a7a2f2f96319a205a183.jpg"
        }
    ]
  return (
    <div>
        <Carasoule items={welcome} />
      
    </div>
  )
}

export default Home
