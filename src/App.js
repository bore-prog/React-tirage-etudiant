import './App.css';
import Header from './componants/header/header';
import Footer from './componants/footer/footer';
import { MissingPeopleProvider } from './componants/missingPeoples/missingPeopleContext';

function App() {
  return (
    <div className="App">
      <MissingPeopleProvider>
        <Header />
        {/* <Tirage /> */}
        <Footer />
      </MissingPeopleProvider>

    </div>
  );
}

export default App;
