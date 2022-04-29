import React from 'react'
import {connect} from "react-redux"
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Image,
    VStack,
    AccordionIcon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Spinner
} from '@chakra-ui/react'
import Header from '../components/Header'
import MovieListItem from "../components/MovieListItem";
import {ContainerActions,NetworkActions, GeneralActions} from '../state/'
import * as Styles from './ScreenStyles'

import starWarsLogo from '../assets/starWarsLogo.png'

const Landing = ({getMovies, getMovieRequest, getMoviesRequest, moviesUpdate, movies, errorShow}) => {

    const navigate = useNavigate()

    const getMoviesList = async () => {
        try {
            const response = await getMoviesRequest()
            moviesUpdate({movies: response?.results})
        }
        catch(e) {
            errorShow({
                errorTitle: 'Something went wrong' || e.messageTitle,
                errorBody: 'Error retrieving the selected movie' || e.messageBody
            })
        }
    }

    const getMovie = async ({id}) => {
        try {
            const response = await getMovieRequest({id: id})

            moviesUpdate({
                selectedMovie: response,
                characters: response?.characters
            })
        }
        catch(e) {
            errorShow({
                errorTitle: 'Something went wrong' || e.messageTitle,
                errorBody: 'Error retrieving movies' || e.messageBody
            })
        }
    }

    const sortedMovies = movies.sort((a, b) => {
            return new Date(a.release_date) - Date(b.release_date)
    })

    return (
        <VStack alignItems='center' height='100%'>
            <Header title='Star Wars Wiki'/>
            <Image src={starWarsLogo} width={300} height={200} borderRadius={100} style={{marginBottom: 32}}/>
            <Accordion allowToggle width='60%' onClick={async () => await getMoviesList()}>
                <AccordionItem
                    bg='black'
                    border="0px"
                    borderRadius="8px"
                    boxShadow="0px 4px 14px rgba(0, 0, 0, 0.1)"
                >
                    <h2>
                        <AccordionButton
                            bg='black'
                            _expanded={{ borderColor: 'unset !important' }}
                            _hover="#FFFFFF"
                            boxShadow="unset !important"
                        >
                            <Box flex='1' textAlign='left' textColor='yellow' bg='black'>
                                Pick a movie
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        {
                            getMovies.fetching ?
                                <Spinner
                                    align='center'
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='yellow'
                                    size='xl'
                                    style={Styles.moviesSpinner}
                                /> :
                                sortedMovies?.map((movie, index) => {
                                    return (
                                        <MovieListItem
                                            key={index}
                                            movieTitle={movie.title}
                                            movieNumber={index + 1}
                                            onSelectMovie={async () => {
                                                await getMovie({ id: index + 1 })
                                                navigate('/movieDetails')
                                            }}
                                        />
                                    )
                                })
                        }
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}

const mapStateToProps = (state) =>  ({
    movies: state.container.movies.movies,
    getMovies: state.network.getMovies,
    selectedMovie: state.container.movies.selectedMovie
})


const mapDispatchToProps = (dispatch) => ({
    errorShow: (payload) => dispatch(GeneralActions.errorShow(payload)),
    getMovieRequest: (payload) => dispatch(NetworkActions.getMovieRequest(payload)),
    getMoviesRequest: (payload) => dispatch(NetworkActions.getMoviesRequest(payload)),
    moviesUpdate: (payload) => dispatch(ContainerActions.moviesUpdate(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
