import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = ({ searchQuery, isSearchTriggered }) => {
    const [cardList, setCardList] = useState([]);  
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCardByTitle = async (title) => {
        try {
            const response = await axios.get(`http://localhost:5000/cards/${title}`);
            console.log('Search API Response:', response.data);  // Inspect the structure
            return [response.data];   
        } catch (error) {
            console.error(error.message);
            setErrorMessage('Card not found.');
            return [];  
        }
    };

    const fetchAllCards = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cards');
            console.log('API Response:', response.data);  
            return response.data;
        } catch (error) {
            console.error(error.message);
            setErrorMessage('Failed to fetch cards. Please try again later.');
            return [];
        }
    };

    useEffect(() => {
        const loadCards = async () => {
            setIsLoading(true);
            try {
                const result = await fetchAllCards();
                if (Array.isArray(result)) {
                    setCardList(result);  
                } else {
                    setErrorMessage('Unexpected data format from server.');
                }
            } catch (err) {
                setErrorMessage('Failed to fetch cards. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        loadCards();
    }, []);

    useEffect(() => {
        const loadSearchedCards = async () => {
            if (!searchQuery) return;

            setIsLoading(true);
            try {
                const result = await fetchCardByTitle(searchQuery);
                if (Array.isArray(result)) {
                    setCardList(result);   
                } else {
                    setErrorMessage('Unexpected data format from server.');
                }
            } catch (err) {
                setErrorMessage('Failed to search cards. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        loadSearchedCards();
    }, [searchQuery, isSearchTriggered]);

    return (
        <div className="p-24">
            {errorMessage && <div className="text-red-500 font-bold">{errorMessage}</div>}
            {isLoading && <div>Loading cards...</div>}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-24">
                {cardList?.map((card) => (
                    <div key={card._id} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer delay-150 transition-transform">
                        <h1 className="text-sm md:text-lg font-bold mb-2">{card.title}</h1>
                        <hr className="border-gray-400 mb-2" />
                        <p className="text-sm md:text-lg text-gray-700">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
