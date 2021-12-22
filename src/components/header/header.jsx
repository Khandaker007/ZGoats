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

export default function Header({onlyLogo, px}) {
  return (
    <Flex justifyContent={'space-between'} direction={['column','row','row','row']} gap={3} px={[px ? 55 : null, px ? 70 : null]}>
      <Image src={logo} alt="zgoats logo" height={['80px','50px','50px','50px']}/>
        <Flex alignItems={'center'} justify={['center','center','center',null]} gap={30} display={onlyLogo ? 'none' : 'flex'}>
            <HStack color={'white'} spacing={['15px','30px']}>
                <Link>Rarity</Link>
                <Link>Team</Link>
                <Link>FAQ</Link>
            </HStack>
            <Button color={'white'} bg={'primary'} size={'sm'}>Connect</Button>
        </Flex>
    </Flex>
  );
}
