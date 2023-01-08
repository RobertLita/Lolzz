import { Box } from '@mantine/core'
import React from 'react'
import Search from '../components/search/Search'
import Leagues from '../components/summoner-history/Leagues'
import Match from '../components/summoner-history/Match'

const History: React.FC = () => {
  return (
    <>
      <Search />
      <Box mt={20} ml={20} mr={20} display='flex' sx={{
        justifyContent: 'space-evenly',
        '@media screen and (max-width: 1201px)': {
          flexDirection: 'column',
          alignItems: 'center'
        }
      }}>
        <Leagues />
        <Match />
      </Box>
    </>
  )
}

export default History