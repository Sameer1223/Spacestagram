import logo from './logo.svg';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import Main from './Main.js';
import Header from './Header.js';

function App() {
    return (
        <AppProvider i18n={translations}>
            <Header/>
            <Main/>
        </AppProvider>
    );
}

export default App;

