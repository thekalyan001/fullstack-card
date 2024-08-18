import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const SearchSection = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault(); 
        onSearch(searchQuery);
    };

    return (
        <div className='bg-blue-200 h-80 flex justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center items-center max-w-xl w-full space-y-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl'>How can we help?</h1>
                <form onSubmit={handleSearch} className='relative w-full'>
                    <div className="bg-white flex px-4 py-3 border-2 border-gray-400 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full outline-none bg-transparent text-gray-600 text-sm" 
                        />
                        <button type="submit" className="bg-transparent border-none p-0">
                            <FaArrowRight />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchSection;
