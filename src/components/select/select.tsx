import React, { memo, useState, useMemo, useCallback } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  chakra,
  Box,
  Input,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { SelectProps } from "./select.types";

export type Option = {
  country: string;
  selected: boolean;
};

export const Select = memo((props: SelectProps) => {
  const {
    menuName = "menu-button:r1:",
    label,
    options,
    onSelected,
    labelId,
    placement = "bottom-end",
    preventOverflow = false,
    flip = false,
  } = props;

  const useSelect = (
    options: Option[],
    onSelected: (val: string) => void = () => {}
  ) => {
    // get the selected country from options prop default is empty
    const getSelectedOption = useMemo(
      () => options.find((val) => val.selected)?.country || "",
      [options]
    );

    // display the selected country
    const [selectedOption, setSelectedOption] = useState(getSelectedOption);

    const handleSelect = useCallback(
      (selectedValue: string) => {
        onSelected(selectedValue);
        setSelectedOption(selectedValue);
      },
      [onSelected]
    );

    return {
      selectedOption,
      handleSelect,
    };
  };

  const { selectedOption, handleSelect } = useSelect(options, onSelected);

  const [searchTerm, setSearchTerm] = useState("");

  // filter options based on search term
  const filteredOptions = options.filter((option) =>
    option?.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex gap="1rem">
      <label id={labelId}>
        <Text fontWeight="500">{label}</Text>
      </label>
      <Menu
        isLazy
        placement={placement}
        offset={[0, 0]}
        aria-label={label}
        flip={flip}
        preventOverflow={preventOverflow}
      >
        {({ isOpen }) => (
          <>
            <MenuButton
              data-testid="menu-button"
              height="2rem"
              aria-labelledby={`${labelId} ${menuName}`}
              as={chakra.button}
              sx={{
                width: "10rem",
                paddingLeft: "0.5rem",
                borderRadius: "5px",
                border: "1px solid black",
                backgroundColor: "#ffffff",
                "&> span": {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              }}
            >
              <Text noOfLines={1} align="left" id={menuName}>
                {selectedOption}
              </Text>
            </MenuButton>
            <MenuList
              data-testid="menu-list"
              aria-label={label}
              rootProps={{ zIndex: 2 }}
              sx={{
                padding: "1rem",
                listStyle: "none",
                overflow: "auto",
                width: "10rem",
              }}
            >
              <Input
                data-testid="input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="sm"
                mb={2}
              />
              {filteredOptions?.map((option) => (
                <MenuItem
                  data-testid="menu-item"
                  key={option.country}
                  onClick={() => handleSelect(option.country)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "2rem",
                    height: "3rem",
                    outlineColor: "transparent",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#D3D3D3",
                    },
                  }}
                >
                  <Flex alignItems="center">
                    <Text px="2rem">{option.country}</Text>
                    {selectedOption === option.country && (
                      <Box data-testid="icon">
                        <Icon
                          as={FaCheck}
                          h="1rem"
                          w="1rem"
                          aria-hidden="true"
                          color="#000000"
                        />
                      </Box>
                    )}
                  </Flex>
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
});
