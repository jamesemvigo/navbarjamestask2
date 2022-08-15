import React from 'react'
import Navbar from './Navbar'

function App() {
  return (
    <div><Navbar></Navbar></div>
  )
}

export default App











// import React from 'react'
// import './Navbar.css'

// function Navbar() {
//     const buttons=['Home','About','Features','Pricing','How It Works','Contact','Login']
//   return (
//     <div className="navbar">
//     <div className='header'>

//         <div className="left-container">
//             <img className='fleecard-image' src="http://fleecard.com/static/media/Fleecard_beta.4ffac123.png" alt="fleecard logo" />
           
//         </div>



//        <div className="right-container">
//            <div className="log-buttons">
            
//                 {buttons.map((item)=>{
//                     return(
//                     <button className="buttonstyle" >{item}</button>
//                     )})}
//            </div>
                
//        </div>
//     </div>
//     </div>
//   )
// }

// export default Navbar