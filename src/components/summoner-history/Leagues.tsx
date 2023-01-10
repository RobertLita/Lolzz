import { Box, Image, Text } from "@mantine/core";
import React, { useState } from "react";
import { League } from "../../api/api.interfaces";

type LeagueProps = {
  leagues: League[];
} 

const Leagues: React.FC<LeagueProps> = ({ leagues }) => {
  const nRanks = leagues.length;
  let icons = [];
  for (let i = 0; i < nRanks; i++)
    icons.push(require(`../../assets/Emblem_${leagues[i].division}.png`))

  return (
    <Box w={{ lg: '20%', sm: '50%', base: '80%' }} h={{ lg: 500, sm: 250, base: 250 }} bg="#002853" sx={{
      borderRadius: 5, display: "flex", flexDirection: "column",
      '@media screen and (max-width: 1201px)': {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }
    }}>
      {nRanks === 1 ? (
        <Box h="100%" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 16 }} c="#fff" mb={15}>
            {leagues[0].mode.split('_').slice(0, -1).join(' ')}
          </Text>
          <Image src={icons[0]} alt="division icon" width={100} height={100} />
          <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 20 }} c="#fff" mt={15}>
            {leagues[0].division} {leagues[0].tier}
          </Text>
          <Text sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15 }} c="#cddcfe">
            {leagues[0].LP} LP
          </Text>
        </Box>
      ) : (
        <>
          <Box h="50%" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 16 }} c="#fff" mb={15}>
              {leagues[0].mode.split('_').slice(0, -1).join(' ')}
            </Text>
            <Image src={icons[0]} alt="division icon" width={100} height={100} />
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 20 }} c="#fff" mt={15}>
              {leagues[0].division} {leagues[0].tier}
            </Text>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15 }} c="#cddcfe">
              {leagues[0].LP} LP
            </Text>
          </Box>
          <Box h="50%" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 16 }} c="#fff" mb={15}>
              {leagues[1].mode.split('_').slice(0, -1).join(' ')}
            </Text>
            <Image src={icons[1]} alt="division icon" width={100} height={100} />
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 20 }} c="#fff" mt={15}>
              {leagues[1].division} {leagues[1].tier}
            </Text>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15, }} c="#cddcfe">
              {leagues[1].LP} LP
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Leagues;
