import React, { Component } from 'react';
import styles from './App.css';
import IdeaListContainer from './containers/IdeaListContainer';
import Idea from './components/Idea';
import AddIdeaButtonContainer from './containers/AddIdeaButtonContainer';

class App extends Component {
  render() {
    return (
      <div className={styles.ideas}>
        <div className={styles.tile}>
          <AddIdeaButtonContainer>Add an idea</AddIdeaButtonContainer>
        </div>
        <IdeaListContainer>
          {idea => (
            <div key={idea.id} className={styles.tile}>
              <Idea {...idea} />
            </div>
          )}
        </IdeaListContainer>
      </div>
    );
  }
}

export default App;
