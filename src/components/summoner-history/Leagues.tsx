import { Box, Image, Text } from "@mantine/core";
import React, { useState } from "react";

const Leagues: React.FC = () => {
  const icon = require("../../assets/Emblem_Challenger.png");
  const [nRanks, setNRanks] = useState(2);

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
            Ranked Flex
          </Text>
          <Image src={icon} alt="challenger icon" width={100} height={100} />
          <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 20 }} c="#fff" mt={15}>
            Challenger
          </Text>
          <Text sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15 }} c="#cddcfe">
            60 LP
          </Text>
        </Box>
      ) : (
        <>
          <Box h="50%" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 16 }} c="#fff" mb={15}>
              Ranked Flex
            </Text>
            <Image src={icon} alt="challenger icon" width={100} height={100} />
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 20 }} c="#fff" mt={15}>
              Challenger
            </Text>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15 }} c="#cddcfe">
              60 LP
            </Text>
          </Box>
          <Box h="50%" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 16 }} c="#fff" mb={15}>
              Ranked Solo/Duo
            </Text>
            <Image src={icon} alt="challenger icon" width={100} height={100} />
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 20 }} c="#fff" mt={15}>
              Challenger
            </Text>
            <Text sx={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15, }} c="#cddcfe">
              60 LP
            </Text>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Leagues;
