import { React, useState } from 'react'


import { Flex, Heading, Text } from '@chakra-ui/react'

export default function DataDisplay({number, state, sizeSmall, start, secondColor}) {

    return (
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={start ? 'start' : 'center'} gap={2}>
            <Heading as={'h1'} fontSize={sizeSmall ? 30 : 40} color={'white'}>{number}</Heading>
            <Text color={secondColor ? 'textColor' : 'textColor2'} fontSize={sizeSmall ? 'xs' : 'sm'}>{state}</Text>
        </Flex>
    )
}
