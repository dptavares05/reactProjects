import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

import CoreConcept from './components/CoreConcept/CoreConcept.jsx';

import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';

import { useState } from 'react';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/* <CoreConcept
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              onSelect={() => handleClick('components')} 
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButton>

            <TabButton 
              onSelect={() => handleClick('jsx')}
              isSelected={selectedTopic === 'jsx'}
            >
              JSX
            </TabButton>

            <TabButton 
            onSelect={() => handleClick('props')}
            isSelected={selectedTopic === 'props'}
            >
             Props
            </TabButton>

            <TabButton 
              onSelect={() => handleClick('state')} 
              isSelected={selectedTopic === 'state'}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && ( <p>Please select a topic to view examples.</p>)} // if there is no selected topic, display this paragraph
          {selectedTopic && ( //but if there is a selected topic, display the following div
           <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
            ) }
        </section>
      </main>
    </div>
  );
}

export default App;
