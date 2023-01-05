import React, { useState } from 'react';
import { Input, NativeSelect, Button } from '@mantine/core';


const Search: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('EUNE');

    const regions = ['EUNE', 'EUW', 'NA', 'KR', 'OCE']

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform search here, using the searchQuery value
    };

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <div className='inputs'>
                <Input
                    className='text_input'
                    placeholder="Search you summoner name.."
                    variant="filled"
                    value={searchQuery}
                    onChange={handleChange}
                    radius="md"
                    size="lg"
                    
                />
                <NativeSelect
                    data={regions}
                    value={selectedRegion}
                    onChange={handleRegionChange}
                    radius="xl"

                />
            </div>
            <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Search
            </Button>
        </form>
    );
};

export default Search;
