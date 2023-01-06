import React, { useState } from 'react';
import { Input, NativeSelect, Button, Box } from '@mantine/core';
import { getSummonerDetails } from '../../api/api.calls'; 

const Search: React.FC = () => {
    const [searchName, setSearchName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('eun1');

    const regions = ['eun1', 'euw1', 'na1', 'kr', 'oc1']

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform search here, using the searchName value
        getSummonerDetails(searchName, selectedRegion).then((ob) => {
            console.log(ob);
        })
    };

    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <Box sx={() => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            })}
                mt={50}>
                <Input
                    className='text_input'
                    placeholder="Enter you summoner name..."
                    variant="filled"
                    value={searchName}
                    onChange={handleChange}
                    radius="md"
                    size="lg"
                    w={{ base: 250, sm: 400, lg: 600 }}
                    py={{ base: 'xs', sm: 'md', lg: 'xl' }}
                    mr={20}
                />
                <NativeSelect
                    data={regions}
                    value={selectedRegion}
                    onChange={handleRegionChange}
                    radius="md"
                    w={100}
                    py={{ base: 'xs', sm: 'md', lg: 'xl' }}
                />
            </Box>
            <Box sx={() => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            })}
                mt={40}>
                <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                    w={{base: 100, sm: 150}}
                    h={{base: 40, sm: 50}}
                    fz={{base:15, sm: 18}}
                    ff='Montserrat'
                    type='submit'>
                    Search
                </Button>
            </Box>
        </form>
    );
};

export default Search;
