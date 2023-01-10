import { Box, Text } from '@mantine/core'
import React from 'react'
import Search from '../components/search/Search'
import Leagues from '../components/summoner-history/Leagues'
import { useSelector } from 'react-redux'
import { Match as MatchDetails } from '../api/api.interfaces'
import Match from '../components/summoner-history/Match'

const History: React.FC = () => {

  const history = useSelector((state: any) => state.history)
  console.log(history);

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
        {history.leagues.length !== 0 ? <Leagues leagues={history.leagues} /> : null}

        {history.matches.length !== 0  && JSON.stringify(history.matches.participant) !== '{}' ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', marginLeft: 10 }}>
            {history.matches.map((match: MatchDetails, index: number) => (
              <Match key={index} match={match} />
            ))
            }
          </Box>
        ) : null}

        {history.message !== '' || JSON.stringify(history.matches.participant) === '{}'? (<Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 30, color: 'red' }}>{history.message}</Text>) : null}

      </Box>
    </>
  )
}

export default History