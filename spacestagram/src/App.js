import logo from './logo.svg';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import Header from './UI/Header.js';
import Footer from './UI/Footer.js';
import Page from './Pages/Page.js';
import './Styles/index.css';

function App() {
    return (
        <AppProvider i18n={translations}>
            <Header/>
            <Page/>
            <Footer/>
        </AppProvider>
    );
}

export default App;

