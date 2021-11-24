import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Shop } from './components/Shop.jsx';

import { ContextProvider } from './context'

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
