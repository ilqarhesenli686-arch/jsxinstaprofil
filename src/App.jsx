import { useState } from 'react';

import image1 from './assets/images/image1.jpeg';
import image2 from './assets/images/image2.jpeg';
import image3 from './assets/images/image3.jpeg';

function App() {
  const [likes, setLikes] = useState([0, 0, 0]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-gray-300 shadow-md rounded-xl p-4">
        <img
          src={image1}
          alt="card1"
          className="w-full h-full object-cover rounded-lg"
        />
        
<div className=" hover:scale-105 transition-transform duration-300">
        <button onClick={() => handleLike(0)}>
          ❤️ Like
        </button>
</div>
        <p>Bəyənmə sayı: {likes[0]}</p>
      </div>


      <div className="bg-gray-300 shadow-md rounded-xl p-4">
        <img
          src={image2}
          alt="card2"
          className="w-full h-full object-cover rounded-lg"
        />
        
<div className=" hover:scale-105 transition-transform duration-300">
        <button onClick={() => handleLike(1)}>
          ❤️ Like
        </button>
</div>    
        <p>Bəyənmə sayı: {likes[1]}</p>
      </div>


      <div className="bg-gray-300 shadow-md rounded-xl p-4">
        <img
          src={image3}
          alt="card3"
          className="w-full h-full object-cover rounded-lg"
        />
        
<div className=" hover:scale-105 transition-transform duration-300">
        <button  onClick={() => handleLike(2)} >
          ❤️ Like
        </button>
</div>
        <p>Bəyənmə sayı: {likes[2]}</p>
      </div>

    </div>
  );
}

export default App;







// import image1 from './assets/images/image1.jpeg';
// import image2 from './assets/images/image2.jpeg';
// import image3 from './assets/images/image3.jpeg';
// import { useState } from 'react';

// function App() {
//   const [likes, setLikes] = useState(0);

//   return (
//     <>
//          <div className="grid grid-cols-3 gap-4">
        
//         <div className="bg-gray-300 h-full w-full shadow-md rounded-xl p-4">
//           <img 
//             src={image1}
//             alt="card1" 
//             className="w-full h-full object-cover rounded-lg"
//           />
//           <h2>card1</h2>
//            <button onClick={() => setLikes(likes + 1)}>
//           ❤️ Like
//         </button>

//         <p>Bəyənmə sayı: {likes}</p>
//         </div>

//         <div className="bg-gray-300 h-full w-full shadow-md rounded-xl p-4">
//           <img 
//             src={image2} 
//             alt="card2" 
//             className="w-full h-full object-cover rounded-lg"
//           />
//           <h2>card2</h2>
//            <button onClick={() => setLikes(likes + 1)}>
//           ❤️ Like
//         </button>

//         <p>Bəyənmə sayı: {likes}</p>
//         </div>

//         <div className="bg-gray-300 h-full w-full shadow-md rounded-xl p-4">
//           <img 
//             src={image3} 
//             alt="card3" 
//             className="w-full h-full  object-cover rounded-lg"
//           />
//           <h2>card3</h2>
//            <button onClick={() => setLikes(likes + 1)}>
//           ❤️ Like
//         </button>

//         <p>Bəyənmə sayı: {likes}</p>  
//         </div>

//       </div>
//     </>
//   )
// }

// export default App