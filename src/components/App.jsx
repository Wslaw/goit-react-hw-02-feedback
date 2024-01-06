import React from 'react';
import { Component } from 'react';

import  FeedbackForm  from '../components/Feedback/FeedbackForm';



class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };

  render() {
    
    return {

    }
  }
}


export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         // color: '#010101'
//       }}
//     >
//       <FeedbackForm />
//     </div>
//   );
// };
