import React from 'react';
import './App.css';
import LanguageProvider from "./hooks/useLanguage";
import ListingPage from "./pages/ListingPage";

function App() {
    return (
        <LanguageProvider>
            <ListingPage />
        </LanguageProvider>
    );
}

export default App;
