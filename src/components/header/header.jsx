import React from "react";

import { 
    Box, 
    Button, 
    Flex, 
    HStack, 
    Image, 
    Link
} from "@chakra-ui/react";

import logo from '../../assets/logo/goats-logo.png'

export default function Header({onlyLogo}) {
  return (
    <Flex justifyContent={'space-between'} px={70}>
      <Image src={logo} alt="zgoats logo" height={'50px'}/>
        <Flex alignItems={'center'} gap={30} display={onlyLogo ? 'none' : 'flex'}>
            <HStack color={'white'} spacing={'30px'}>
                <Link>Rarity</Link>
                <Link>Team</Link>
                <Link>FAQ</Link>
            </HStack>
            <Button color={'white'} bg={'primary'} size={'sm'}>Connect</Button>
        </Flex>
    </Flex>
  );
}
