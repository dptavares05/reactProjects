import { useState } from 'react';
import { EXAMPLES } from '../../data.js';
import TabButton from '../TabButton.jsx';
import Section from '../Section/Section.jsx';
import Tabs from '../Tabs/Tabs.jsx';

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic to view examples.</p>;

    if(selectedTopic) {
        tabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>
        );
    }

    return (
         <Section id="examples">
                  <h2>Examples</h2>

                  <Tabs 
                  ButtonsContainer="menu"
                  buttons ={
                    <>
                    <TabButton 
                      isSelected={selectedTopic === 'components'}
                      onClick={() => handleSelect('components')} 
                    >
                      Components
                    </TabButton>
        
                    <TabButton 
                      isSelected={selectedTopic === 'jsx'}
                      onClick={() => handleSelect('jsx')}
                    >
                      JSX
                    </TabButton>
        
                    <TabButton 
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}
                    >
                     Props
                    </TabButton>
        
                    <TabButton 
                      isSelected={selectedTopic === 'state'}
                      onClick={() => handleSelect('state')} 
                    >
                      State
                    </TabButton>
                    </>
                  }> 
                  </Tabs>
                  {!selectedTopic && ( <p>Please select a topic to view examples.</p>)}
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
                </Section>
    );
}