import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import SearchSection from './component/SearchSection';
import Card from './component/Card';  
import Footer from './component/Footer';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <Navbar />
            <SearchSection onSearch={handleSearch} />
            <Card searchQuery={searchQuery} />
            <Footer />
        </>
    );
}

export default App;
