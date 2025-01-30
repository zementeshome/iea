import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Select } from "./components/select/select.tsx";
import { countryOptions } from "./countries.tsx";
import { Flex, Heading, Image } from "@chakra-ui/react";
import iea from "./iea.svg.png";

function App() {
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        alignItems="center"
        rowGap="2rem"
        paddingTop="1rem"
      >
        <Image src={iea} alt="iea logo" width="20%" height="20%" />
        <Heading level="1">Member countries</Heading>
        {countryOptions.length > 0 && (
          <Select
            label="Countries:"
            labelId="countries"
            menuName="menu-button-:r1:"
            currentItem=""
            options={countryOptions}
          />
        )}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
