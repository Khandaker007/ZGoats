import { Button, Heading, Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'

// CUSTOM STICKER
import Popular from '../../assets/custom-layer/sticker-1.png'
import lgStar from '../../assets/custom-layer/sticker-4.png'
import mdStar from '../../assets/custom-layer/sticker-2.png'
import smStar from '../../assets/custom-layer/sticker-3.png'

export default function PackageCard({image, packageName, quantity, popular}) {
    return (
        <Flex flexDirection={'column'} alignItems={'center'} py={10} px={65} bg={'whiteAlpha.100'} borderRadius={20} position={'relative'}>
            <Image src={image} alt='package image' pb={6.667}/>
            <Heading pb={3.333} color={'white'}>{packageName}</Heading>
            <Text pb={12} color={'white'}>{quantity}</Text>
            <Button color={'primary'} p={3} bg={'transparent'}>Sold out</Button>
            {
                popular ? 
                <>
                    <Image src={Popular} position={'absolute'} top={-7} right={'-55px'}/>
                    <Image src={lgStar} position={'absolute'} bottom={-4} right={10}/>
                    <Image src={mdStar} position={'absolute'} top={8} left={8}/>
                    <Image src={smStar} position={'absolute'} top={65} right={-2}/>
                </> :
                <></>

            }
        </Flex>
    )
}
