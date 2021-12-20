import React from 'react'

import { Flex, Heading, Image, Text} from '@chakra-ui/react'

export default function ActionCard({icon, heading, text}) {

    return (
        <>
            <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
                <Image src={icon} height={100}/>
                <Heading as={'h3'} color={'white'} size={'md'}>{heading}</Heading>
                <Text color={'textColor2'} textAlign={'center'}>{text}</Text>
            </Flex>
        </>
    )
}
