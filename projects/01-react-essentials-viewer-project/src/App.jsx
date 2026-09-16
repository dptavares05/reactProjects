import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
