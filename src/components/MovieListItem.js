import React from 'react'
import {Box, HStack, Icon, Text} from "@chakra-ui/react"

const MovieListItem = ({movieNumber, movieTitle, onSelectMovie}) => (
    <HStack height='40px' onClick={onSelectMovie}>
       <Box>
           <Text fontSize='sm' as='i'>{`${movieNumber}.`}</Text>
       </Box>
        <Box width="100%">
            <Text fontSize='sm' as='i'>{movieTitle}</Text>
        </Box>
    </HStack>
)

export default MovieListItem
