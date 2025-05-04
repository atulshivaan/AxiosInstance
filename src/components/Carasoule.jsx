const Carasoule = ({ items }) => {
    return (
      <div className="flex overflow-x-scroll space-x-4 p-4">
        {items.map((item) => (
          <div key={item.id} className="min-w-[300px] bg-white shadow-md rounded-md p-4">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Carasoule;