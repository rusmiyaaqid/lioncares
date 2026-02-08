// function App() {
//   return (
//     <div className="w-screen h-screen bg-gray-900 overflow-hidden">
//       <img 
//         src="/pixel_1_columbia.png" 
//         alt="Columbia Campus"
//         className="w-full h-full object-contain pixelated stardew-map"
//       />
//     </div>
//   )
// }

// export default App

import './App.css'
import CampusMap from './components/CampusMap'

function App() {
  return <CampusMap />
}

export default App