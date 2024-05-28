

// import React from 'react';
// import "./Navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Navbar = () => {
//   const wrapTextWithSpans = (text) => {
//     return text.split('').map((char, index) => (
//       <span key={index}>{char}</span>
//     ));
//   };

//   return (
//     <>
//       <div className='navbar'>
//         <div className='left'>
//           <h2>Unfluke</h2>
//         </div>

//         <div className='right'>
//           <img height="30px" src='https://www.unfluke.in/static/media/bell-icon.d99e8edc.png' alt="bell icon" />
//           <img height="30px" src='https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg' alt="coin icon" />0
//           <img height="30px" src='https://www.unfluke.in/static/media/monkey.5456259d.jpg' alt="monkey icon" />

//           <div className="dropdown">
//             <button className="dropbtn"><FontAwesomeIcon icon="fa-solid fa-caret-down" /> </button>
//             <div className="dropdown-content">
//               <a href="#">My Profile</a>
//               <a href="#">My Earnings</a>
//               <a href="#">Funds</a>
//               <a href="#">Change password</a>
//               <a style={{ color: "red" }} href="#">Logout</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='data'>
//         {['LeaderBoard', 'Historical Trading', 'Historical Chart', 'Scanners', 'Alerts', 'Basic backtest', 'Advanced Backtest', 'Pricing', 'My Earning'].map((text, index) => (
//           <p key={index}>
//             {wrapTextWithSpans(text)}
//           </p>
//         ))}
//       </div>

//     </>
//   );
// }

// export default Navbar;

import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../home/Home';

const Navbar = () => {
  const wrapTextWithSpans = (text) => {
    return text.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  return (
    <>
      <div className='navbar'>
        <div className='left'>
          <div><h2 className='h'>Unfluke</h2></div>
          <div ><FontAwesomeIcon className='icon' icon="fa-solid fa-money-bill-trend-up" /></div>
        </div>

        <div className='right'>
          <img height="30px" src='https://www.unfluke.in/static/media/bell-icon.d99e8edc.png' alt="bell icon" />
          <img height="30px" src='https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg' alt="coin icon" />
          <img height="30px" src='https://www.unfluke.in/static/media/monkey.5456259d.jpg' alt="monkey icon" />

          <div className="dropdown">
            <button className="dropbtn"><FontAwesomeIcon icon="fa-solid fa-caret-down" /> </button>
            <div className="dropdown-content">
              <a href="#">My Profile</a>
              <a href="#">My Earnings</a>
              <a href="#">Funds</a>
              <a href="#">Change password</a>
              <a style={{ color: "red" }} href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div className='data'>
        <p>{wrapTextWithSpans('LeaderBoard')}</p>



        <p>{wrapTextWithSpans('Scanners')}</p>
        <p>{wrapTextWithSpans('Alerts')}</p>
        <p>{wrapTextWithSpans('Basic backtest')}</p>
        <p>{wrapTextWithSpans('Advanced Backtest')}</p>
        <p>{wrapTextWithSpans('Pricing')}</p>
        <p>{wrapTextWithSpans('My Earning')}</p>
      </div>

      <h1 className='head' style={{ margin: "20px ", marginLeft: "40%", fontWeight: "400px", marginTop: "100px", color: "rgb(255, 136, 0)" }}>L  e  a  d  e  r  -  B  o  a  r  d
      </h1>
      <Home />  </>
  );
}

export default Navbar;



