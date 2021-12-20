import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export default function TeamCard({image, text}) {
    return (
        <Box textAlign={'center'} >
            <Box height={250} width={250} display={'inline'}>
                <Image src={image} mx={'auto'} mb={2}/>
            </Box>
            <Heading as={'h3'} color={'white'} size={'md'}>{text}</Heading>
        </Box>
    )
}
