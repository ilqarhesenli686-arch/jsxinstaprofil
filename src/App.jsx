import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';

function App() {
  

  return (
    <>
         <div className="grid grid-cols-3 gap-4">
        
        <div className="bg-gray-200 shadow-md rounded-xl p-4">
          <img 
            src={image1}
            alt="card1" 
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2>card1</h2>
        </div>

        <div className="bg-gray-200 shadow-md rounded-xl p-4">
          <img 
            src={image2} 
            alt="card2" 
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2>card2</h2>
        </div>

        <div className="bg-gray-200 shadow-md rounded-xl p-4">
          <img 
            src={image3} 
            alt="card3" 
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2>card3</h2>
        </div>

      </div>
    </>
  )
}

export default App