import React from 'react'
import {
    Box,
    Image,
    VStack,
    AccordionIcon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react'
import Header from '../components/Header'
import MovieListItem from "../components/MovieListItem";

import starWarsLogo from '../assets/starWarsLogo.png'
import mockData from './__mock__'

const Landing = () => {
    return (
        <VStack alignItems='center'>
            <Header title='Star Wars Wiki'/>
            <Image src={starWarsLogo} width={300} height={200} borderRadius={100} style={{marginBottom: 32}}/>
            <Accordion allowToggle width='60%'>
                <AccordionItem
                    border="0px"
                    borderRadius="8px"
                    boxShadow="0px 4px 14px rgba(0, 0, 0, 0.1)"
                >
                    <h2>
                        <AccordionButton
                            _expanded={{ borderColor: 'unset !important' }}
                            _hover="#FFFFFF"
                            boxShadow="unset !important"
                        >
                            <Box flex='1' textAlign='left'>
                                Pick a movie
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        {mockData.results.map((movie, index) => {
                            return (
                                <MovieListItem key={index} movieTitle={movie.title} movieNumber={index + 1}/>
                            )
                        })}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}


export default Landing
