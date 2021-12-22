import React from "react";

// COMPONENTS
import Header from "../components/header/header";
import ActionCard from "../components/action-card/action-card";
import DataDisplay from "../components/data-display/data-display.component";
import PackageCard from "../components/package-card/package-card.component";
import TeamCard from "../components/team-card/team-card.component";

// CHAKRA ICON
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Exchange from "../assets/icon/exchange.png";
import Fire from "../assets/icon/fire.png";
import MagicWand from "../assets/icon/magic-wand.png";
import shoppingCard from "../assets/icon/shopping-cart.svg";
import arrow from "../assets/icon/down-arrow.svg";
// IMAGE
import heroImage from "../assets/image/hero-img.png";
import PackageImage1 from "../assets/image/package-img-1.png";
import PackageImage2 from "../assets/image/package-img-2.png";
import PackageImage3 from "../assets/image/package-img-3.png";
import TeamImage1 from "../assets/image/team-img-1.png";
import TeamImage2 from "../assets/image/team-img-2.png";
import TeamImage3 from "../assets/image/team-img-3.png";
import TeamImage4 from "../assets/image/team-img-4.png";
// CUSTOM LAYER
import curlyUnderline from "../assets/custom-layer/curly-underline.png";
import normalUnderline from "../assets/custom-layer/normal-underline.png";
import zikzakUnderline from "../assets/custom-layer/zikzak-underline.png";
import question from "../assets/custom-layer/question.png";

import gCircle from '../assets/custom-layer/ellipse-1.png'
import gCircle2 from '../assets/custom-layer/ellipse-2.png'
import gCircle3 from '../assets/custom-layer/ellipse-3.png'
import gCircle4 from '../assets/custom-layer/ellipse-4.png'
import gCircle5 from '../assets/custom-layer/ellipse-5.png'
import gCircle6 from '../assets/custom-layer/ellipse-6.png'
import gCircle7 from '../assets/custom-layer/ellipse-7.png'

import waveLineLeft from '../assets/custom-layer/vector-left.png'
import waveLineRight from '../assets/custom-layer/vector-right.png'

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";


export default function LandingPage() {

  return (
    <>
      <Box bg={"secondary"} position={'relative'}>
        {/* Background custom design*/}
        <Image src={gCircle} position={'absolute'}/>
        <Image src={gCircle2} position={'absolute'} right={0}/>
        <Image src={gCircle3} position={'absolute'}/>
        <Image src={gCircle4} position={'absolute'} right={0} top={800}/>
        <Image src={gCircle5} position={'absolute'} top={900}/>
        <Image src={gCircle6} position={'absolute'} bottom={0}/>
        <Image src={gCircle7} position={'absolute'} bottom={0} right={0}/>

        <Image src={waveLineLeft} position={'absolute'}/>
        <Image src={waveLineRight} position={'absolute'} right={0} top={350}/>

        {/* Content Container */}
        <Box px={[55,70]} pt={5} pb={20} position={'relative'} zIndex={1000}>

          {/* Header Component */}
          <Header />

          {/* SECTION ONE*/}
          <Grid 
            templateColumns={['1fr','1fr',"repeat(2, 1fr)"]}
            gap={10}
            py={100}>
            <GridItem colStart={1} colEnd={2} alignSelf={"center"}>
              <Flex flexDirection={"column"} gap={5} alignItems={"start"}>
                <Heading color={"white"}>
                  Lorem ipsum GOATSs <br /> porta gravida at eget
                </Heading>
                <Text color={"textColor"}>
                  GoatedGoats is a gamified generative art project where each
                  generated trait is a separate NFT that is interchangeable between
                  the base goats.
                </Text>
                <Button color={"white"} bg={"primary"} size={"sm"}>
                  Explore <ArrowForwardIcon ml={1} />
                </Button>
              </Flex>
            </GridItem>
            <GridItem colStart={[1,1,2]} colEnd={[1,1,3]} justifySelf={"center"}>
              <Image src={heroImage} alt="hero image" height={[300,378]} />
            </GridItem>
          </Grid>
          {/* SECTION ONE END*/}

          {/* SECTION TWO*/}
          <Grid templateColumns={['1fr','1fr','1fr',"repeat(3, 1fr)"]} gap={10} pb={[50,50,50,100]}>
            <GridItem>
              <ActionCard
                icon={MagicWand}
                heading={"Mint"}
                text={
                  "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                }
              />
            </GridItem>
            <GridItem>
              <ActionCard
                icon={Exchange}
                heading={"Trade"}
                text={
                  "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui."
                }
              />
            </GridItem>
            <GridItem>
              <ActionCard
                icon={Fire}
                heading={"Burn"}
                text={
                  "Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
                }
              />
            </GridItem>
          </Grid>
          {/* SECTION TWO END*/}

          {/* SECTION THREE*/}
          <Grid templateColumns={['1fr','1fr','1fr',"35% 1fr"]} gap={[10,10,10,null]} pb={[10,10,10,20]}>
            <GridItem>
              <Heading color={"white"}>Launching in</Heading>
              <Image src={curlyUnderline} />
            </GridItem>
            <GridItem>
              <Flex justifyContent={"space-between"}>
                <DataDisplay number={10} state="Days" />
                <DataDisplay number={20} state="Hours" />
                <DataDisplay number={30} state="Minutes" />
                <DataDisplay number={40} state="Seconds" />
              </Flex>
            </GridItem>
          </Grid>
          {/* SECTION THREE END*/}

          {/* SECTION FOUR*/}
          <Grid gap={10} bg={"blackAlpha.500"} p={[5,5,5,10]} borderRadius={20} mb={[10,10,10,20]}>
            <GridItem >
              <Heading color={"white"}>Goats mechanics</Heading>
              <Text color={"textColor2"}>
                Each base goat will consist of one to six attributes that can be
                outfitted with different traits to build a complete goat. These
                traits can be traded, equipped to your other goats, burned for
                tokens to roll for new traits, or utilized in other projects built
                on top of GoatedGoats traits.
              </Text>
            </GridItem>
            <GridItem>
              <Grid templateColumns={["repeat(2, 1fr)","repeat(4, 1fr)"]} gap={[5,5,5,8]}>
                <DataDisplay number="10,000" state="Total goats" sizeSmall start />
                <DataDisplay number="16" state="Backgrounds" sizeSmall start />
                <DataDisplay number="20" state="Skins" sizeSmall start />
                <DataDisplay number="45" state="Clothes" sizeSmall start />
                <DataDisplay number="30" state="Hats" sizeSmall start />
                <DataDisplay number="15" state="Mouths" sizeSmall start />
                <DataDisplay number="10" state="Eyes" sizeSmall start />
                <DataDisplay number="5" state="Super Goats" sizeSmall start />
              </Grid>
            </GridItem>
          </Grid>
          {/* SECTION FOUR END*/}
          <hr />
          {/* SECTION FIVE*/}
          <Box py={[10,10,10,20]} textAlign={"center"}>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Heading ding color={"white"}>
                Get your GOATs
              </Heading>
              <Image
                src={normalUnderline}
                alt="normal underline"
                height={15}
                width={115}
                marginLeft={40}
              />
            </Flex>
            <Box
              width={"min-content"}
              color={"white"}
              whiteSpace={"nowrap"}
              bg={"whiteAlpha.50"}
              py={1}
              px={3}
              mx={"auto"}
              my={10}
            >
              <Text>
                Sold out: <span>0/10,000</span>
              </Text>
            </Box>
            <Flex justifyContent={"space-between"} direction={['column','column','column','row']} gap={10}>
              <PackageCard
                image={PackageImage1}
                packageName={"Single GOAT"}
                quantity={"1 GOAT = 3 FLOW"}
                // popular
              />
              <PackageCard
                image={PackageImage2}
                packageName={"Tripple GOAT"}
                quantity={"3 GOAT = 7 FLOW"}
                // popular
              />
              <PackageCard
                image={PackageImage3}
                packageName={"GOAT Squad"}
                quantity={"10 GOAT = 20 FLOW"}
                popular
              />
            </Flex>
            <Button color={"white"} bg={"primary"} mt={10}>
              Praticipate in minting <Image src={shoppingCard} ml={3} />
            </Button>
          </Box>
          {/* SECTION FIVE END*/}

          {/* SECTION SIX*/}
          <Box mb={20}>
            <Flex flexDirection={"column"} alignItems={"center"}>
              <Heading ding color={"white"}>
                Team
              </Heading>
              <Image src={zikzakUnderline} alt="normal underline" mb={10} />
              <Box width={['100%','100%','100%',800]} textAlign={"center"} mb={10}>
                <Text color={"textColor2"}>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Text>
              </Box>
            </Flex>
            <Grid templateColumns={['1fr','1fr',"repeat(2, 1fr)","repeat(4, 1fr)"]} gap={5} justifyContent={"center"}>
              <TeamCard image={TeamImage1} text={"@loremipsum"} />
              <TeamCard image={TeamImage2} text={"@loremipsum"} />
              <TeamCard image={TeamImage3} text={"@loremipsum"} />
              <TeamCard image={TeamImage4} text={"@loremipsum"} />
            </Grid>
          </Box>
          {/* SECTION SIX END*/}
          <hr />
          {/* SECTION SEVEN*/}
          <Box mt={20}>
            <Flex justifyContent={"center"} mb={10}>
              <Heading color={"white"}>FAQ</Heading>
              <Image src={question} ml={2} />
            </Flex>
            <Flex width={['100%','100%','100%',800]} mx={"auto"} gap={4} flexDirection={"column"}>
              <Flex
                p={3}
                color={"white"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"whiteAlpha.100"}
                cursor={"pointer"}
              >
                <Text>
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </Text>
                <Image src={arrow} alt="down arrow icon" />
              </Flex>
              <Flex
                p={3}
                color={"white"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"whiteAlpha.100"}
                cursor={"pointer"}
              >
                <Text>
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </Text>
                <Image src={arrow} alt="down arrow icon" />
              </Flex>
              <Flex
                p={3}
                color={"white"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"whiteAlpha.100"}
                cursor={"pointer"}
              >
                <Text>
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </Text>
                <Image src={arrow} alt="down arrow icon" />
              </Flex>
              <Flex
                p={3}
                color={"white"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"whiteAlpha.100"}
                cursor={"pointer"}
              >
                <Text>
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </Text>
                <Image src={arrow} alt="down arrow icon" />
              </Flex>
              <Flex
                p={3}
                color={"white"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bg={"whiteAlpha.100"}
                cursor={"pointer"}
              >
                <Text>
                  Maecenas sed diam eget risus varius blandit sit amet non magna.
                </Text>
                <Image src={arrow} alt="down arrow icon" />
              </Flex>
            </Flex>
          </Box>
          {/* SECTION SEVEN END*/}
        </Box>
      </Box>
    </>
  );
}
