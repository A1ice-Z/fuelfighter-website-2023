import './styles/fonts.css';
import './styles/shared.css'

import { colors, useWindowDimensions } from './styles/styles';

function App() {
  const styles = {
    darkMode: {
      backgroundColor:  colors.darkPrimary,
      color:            colors.darkSecondary,
    },
    lightMode: {
      backgroundColor:  colors.lightPrimary,
      color:            colors.lightSecondary,
    }
  }
  const dim = useWindowDimensions()

  return (
    <div className="App" style={styles.darkMode}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className='prova' style={{color: colors.darkSecondary}}>
          Bellaa
        </p>
        <p style={{color: colors.darkTertiary}}>
          width:  {dim.width}
        </p>
        <p style={{color: colors.darkTertiary}}>
          height:  {dim.height}
        </p>
      </header>
    </div>
  );
}

export default App;
