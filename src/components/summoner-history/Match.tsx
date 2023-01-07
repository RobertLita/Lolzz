import { Box, Text, Image } from '@mantine/core'
import React from 'react'

const Match = () => {
  const championName = 'Sylas'
  const championIconUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${championName}.png`
  const items = ['4633', '3089', '3158', '3115', '4637', '1026', '0']
  const itemsUrls = []
  for (let i = 0; i < 7; i++)
    if (items[i] !== '0')
      itemsUrls.push(`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${items[i]}.png`)
    else
      itemsUrls.push('')
  const kills = 12
  const deaths = 6
  const assists = 4
  const minionKilled = 159
  const win = true
  const gameMode = 'Ranked Flex'
  const gameDurationMin = Math.floor(1498 / 60)
  const gameDurationSec = 1498 % 60
  const dragonKills = 2
  const baronKills = 1
  const turretKills = 6

  return (
    <Box display='flex' bg='red' w="60%" h={90} sx={{ borderRadius: 5, alignItems: 'center' }}>
      <Box display='flex' h='100%' w={100} sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text c='#fff' fz='sm' sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          {gameMode}
        </Text>
        {
          win === true ? (
            <Text c='#fff' fz='xl' sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Win
            </Text>
          ) : (
            <Text c='#fff' fz='xl' sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Loss
            </Text>
          )
        }
        <Text c='#fff' fz='md' sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          {gameDurationMin}:{gameDurationSec}
        </Text>
      </Box>
      <Image src={championIconUrl} alt={championName} width={60} height={60} ml={20} />
      <Text ml={40} c='#fff' fz='xl' sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 550 }}>{kills}/{deaths}/{assists}</Text>
      <Text ml={20} c='#fff' fz='xl' sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 550 }}>{minionKilled}cs</Text>

      {itemsUrls[0] !== '' ? (<Image src={itemsUrls[0]} alt='item0' width={30} height={30} ml={30} />) : (<></>)}
      {itemsUrls[1] !== '' ? (<Image src={itemsUrls[1]} alt='item1' width={30} height={30} />) : (<></>)}
      {itemsUrls[2] !== '' ? (<Image src={itemsUrls[2]} alt='item1' width={30} height={30} />) : (<></>)}
      {itemsUrls[3] !== '' ? (<Image src={itemsUrls[3]} alt='item1' width={30} height={30} />) : (<></>)}
      {itemsUrls[4] !== '' ? (<Image src={itemsUrls[4]} alt='item1' width={30} height={30} />) : (<></>)}
      {itemsUrls[5] !== '' ? (<Image src={itemsUrls[5]} alt='item1' width={30} height={30} />) : (<></>)}
      {itemsUrls[6] !== '' ? (<Image src={itemsUrls[6]} alt='item1' width={30} height={30} />) : (<></>)}

      <Box display='flex' ml={20}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
          <path d="m12 8-2 8H6L4 8l4 4 4-4zM8 0l4 4-1.003 1.002L11 5h3l-6 6-6-6h2.999L4 4l4-4zm0 2.4L6.4 4 8 5.6 9.6 4 8 2.4z" fill="black" fill-rule="nonzero" />
        </svg>
        <Text c="#fff" mr={12}>{turretKills}</Text>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
          <path d="M8 0 6 4 3 1v4H0l3 3v3l4 5h2l4-5V8l3-3h-3V1l-3 3-2-4zm2 9 2-1-1 2-2 1 1-2zm-5 1L4 8l2 1 1 2-2-1z" fill="black" fill-rule="nonzero" />
        </svg>
        <Text c="#fff" ml={3} mr={12}>{dragonKills}</Text>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
          <path d="M9 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-2-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-10 2 4-1 1H9L8 4 7 5H5L4 4l2-4-6 4 2 4 3 8 1-1h4l1 1 3-8 2-4-6-4z" fill="black" fill-rule="nonzero" />
        </svg>
        <Text c="#fff" ml={3}>{baronKills}</Text>
      </Box>
    </Box>
  )
}

export default Match