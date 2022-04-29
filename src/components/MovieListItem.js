import React from 'react'
import {Box, HStack, Text} from "@chakra-ui/react"

const MovieListItem = ({movieNumber, movieTitle, onSelectMovie}) => (
    <HStack height='40px' onClick={onSelectMovie} bg='black'>
       <Box>
           <Text fontSize='sm' as='i' color='yellow'>{`${movieNumber}.`}</Text>
       </Box>
        <Box width="100%">
            <Text fontSize='sm' as='i' color='yellow'>{movieTitle}</Text>
        </Box>
    </HStack>
)

export default MovieListItem
