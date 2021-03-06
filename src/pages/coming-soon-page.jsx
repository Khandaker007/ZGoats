import React from "react";

// COMPONENT
import Header from "../components/header/header";
import DataDisplay from "../components/data-display/data-display.component";
// ICON
import { ArrowForwardIcon } from "@chakra-ui/icons";
// IMAGE
import heroImage from "../assets/image/hero-img.png";
// LOGO
import bloctoLogo from "../assets/logo/blocto.png";
// CUSTOM LAYER
import normalUnderline from "../assets/custom-layer/normal-underline.png";

import gCircle from '../assets/custom-layer/ellipse-1.png'
import gCircle2 from '../assets/custom-layer/ellipse-2.png'
import gCircle3 from '../assets/custom-layer/ellipse-3.png'

import waveLineLeft from '../assets/custom-layer/vector-left.png'
import waveLineRight from '../assets/custom-layer/vector-right.png'

import {
  Box,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
  Button,
  Image,
  Input,
} from "@chakra-ui/react";

export default function ComingSoon() {
  return (
    <>
      <Box bg={'secondary'} position={'relative'}>
        {/* Background custom design*/}
        <Image src={gCircle} position={'absolute'}/>
        <Image src={gCircle2} position={'absolute'} height={1300} right={0}/>
        <Image src={gCircle3} position={'absolute'} height={1300}/>

        <Image src={waveLineLeft} position={'absolute'}/>
        <Image src={waveLineRight} position={'absolute'} right={0} top={350}/>

        {/* Content Container */}
        <Box pt={5} position={'relative'} zIndex={1000}>
          <Header onlyLogo px/>
          {/* SECTION ONE*/}
          <Grid templateColumns={['1fr','1fr',"repeat(2, 1fr)"]} gap={10} py={[50,50,100]} px={[55,70]}>
            <GridItem colStart={1} colEnd={2} alignSelf={"center"}>
              <Flex flexDirection={"column"} gap={5} alignItems={"start"}>
                <Heading color={"white"}>
                  Next evolution of <br /> generative art
                </Heading>
                <Text color={"textColor"}>
                  GoatedGoats allows you to buy, sell, and equip separate traits, so
                  you can build and change your personal GOAT as you see fit.
                  Soon2Built on Flow to utilize the chain's high throughput and low
                  transactions fees. Each trait is a separate NFT that you can own,
                  trade, or equip as you like onto your base goat. If you're lucky,
                  you'll mint some characteristics of your favorite GOAT in history.
                </Text>
              </Flex>
            </GridItem>
            <GridItem colStart={[1,1,2]} colEnd={[1,1,3]} justifySelf={"center"}>
              <Image src={heroImage} alt="hero image" height={[300,378]} />
            </GridItem>
          </Grid>
          {/* SECTION ONE END*/}
          {/* SECTION TWO*/}
          <Box px={[55,70]} bg={"blackAlpha.400"} py={30}>
            <Grid templateColumns={['1fr','1fr',"repeat(2, 1fr)"]} gap={20}>
              <GridItem>
                <Flex flexDirection={"column"} gap={2}>
                  <Heading color={"white"}>Don't miss out!</Heading>
                  <Text color={"textColor"}>
                    Give us your email to make sure you're first to know about the
                    Goat drop!
                  </Text>
                  <Flex alignItems={"center"}>
                    <Input
                      placeholder="Email"
                      size={"md"}
                      color={"grey"}
                      width={[240,300]}
                    />
                    <Button
                      color={"white"}
                      bg={"primary"}
                      ml={-20}
                      position={"relative"}
                      zIndex={1}
                    >
                      Subscribe <ArrowForwardIcon ml={3} />
                    </Button>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex
                  gap={5}
                  justifyContent={['space-between','space-between',"center"]}
                  bg={"blackAlpha.600"}
                  width={[null,null,"min-content"]}
                  p={[null,30]}
                  borderRadius={20}
                >
                  <DataDisplay number={10} state="Days" secondColor />
                  <DataDisplay number={20} state="Hours" secondColor />
                  <DataDisplay number={30} state="Minutes" secondColor />
                  <DataDisplay number={40} state="Seconds" secondColor />
                </Flex>
              </GridItem>
            </Grid>
          </Box>
          {/* SECTION TWO END*/}
          {/* SECTION THREE*/}
          <Box px={[55,70]} py={55}>
            <Flex flexDirection={'column'} gap={5} alignItems={'start'} width={['100%','50%']}>
              <Flex gap={5} direction={['column','row']} justify={['center','start']} align={['center',null]}>
                <Image src={bloctoLogo} alt="blocto logo" />
                <Flex flexDirection={'column'}>
                  <Heading as={"h3"} color={"white"} whiteSpace={"nowrap"}>
                    Connect your Blocto
                  </Heading>
                  <Image
                    src={normalUnderline}
                    alt="normal underline"
                    height={15}
                    width={115}
                    marginLeft={['200px','200px',60]}
                  />
                </Flex>
              </Flex>
              <Text color={"textColor2"}>
                Connect your Blocto wallet to reserve a space on chain to mint one
                of our 10,000 pack drops! Pack includes a base goat that can equip
                up to seven traits, as well as randomized traits to fill each slot.
              </Text>
              <Button color={"white"} bg={"primary"}>
                Connect <ArrowForwardIcon ml={2} />
              </Button>
            </Flex>
          </Box>
          {/* SECTION THREE END*/}
          {/* SECTION FOUR*/}
          <Box px={[55,70]} py={39} bg={'blackAlpha.400'}>
            <Heading color={'white'} mb={3} size={'lg'}>Follow our project amd join our community!</Heading>
            <Flex gap={5}>
                <Button color={'white'} bg={'twitColor'} borderRadius={10}>Twitter</Button>
                <Button color={'white'} bg={'instaColor'} borderRadius={10}>Instagram</Button>
                <Button color={'white'} bg={'discordColor'} borderRadius={10}>Discord</Button>
            </Flex>
          </Box>
          {/* SECTION FOUR END*/}
        </Box>
      </Box>
    </>
  );
}
