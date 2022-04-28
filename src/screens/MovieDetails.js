import React, {useEffect} from 'react'
import Header from "../components/Header"
import CharactersTable from "../components/CharactersTable";
import {connect} from "react-redux";
import _ from 'lodash'

const MovieDetails = ({characters, selectedMovie}) => {

    const [parsedCharacters, setParsedCharacters] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(true)

    useEffect( () => {
        const fetchData = async () => {
           await getCharacterDetails()
       }
        fetchData()
    }, [])

    // Fetching character data from the url
    const fetchCharacterData = (url) => {
        return fetch(url)
            .then((response) => {
                return response.json()
        })
            .then((data) => {
                return {...data, url}
            })
            .catch((e) => {
               console.log(e)
            })
    }

    // getting character details  for each character
    const getCharacterDetails = async () => {
        if (selectedMovie && !_.isEmpty(characters)) {

            // using a map function to bypass async-await unaware looping
            const actors = await characters.map(async (character) => {
                return await fetchCharacterData(character)
            })

            const parsedData = await Promise.all(actors)
            setParsedCharacters(parsedData)
            setIsFetching(false)
        }
    }

    return(
        <>
            <Header title={selectedMovie?.title}/>
            <CharactersTable characters={parsedCharacters} fetching={isFetching}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    characters: state.container.movies.characters,
    selectedMovie: state.container.movies.selectedMovie
})

export default connect(mapStateToProps)(MovieDetails)
