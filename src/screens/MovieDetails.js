import React, {useEffect} from 'react'
import Header from "../components/Header"
import CharactersTable from "../components/CharactersTable"
import GenderFilter from "../components/GenderFilter"
import Crawl from "../components/Crawl";
import {connect} from "react-redux";
import _ from 'lodash'
import {GeneralActions} from "../state";

const MovieDetails = ({characters, selectedMovie, errorShow}) => {

    const [parsedCharacters, setParsedCharacters] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(true)
    const [genderSelected, setGenderSelected] = React.useState('All')
    const [clicks, setClicks] = React.useState(0)

    useEffect( () => {
        const fetchData = async () => {
           await getCharacterDetails()
       }
        fetchData()
        filterByGender()
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
                errorShow({
                    errorTitle: 'Something went wrong' || e.messageTitle,
                    errorBody: 'Error fetching character data' || e.messageBody
                })
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

    const filterByGender = () => {
       const filteredData = []

        parsedCharacters.filter((item) => {
            if(item.gender.toLowerCase() === genderSelected.toLowerCase()) filteredData.push(item)

            if(genderSelected === 'Other' && !(item.gender.toLowerCase() === 'male' || item.gender.toLowerCase() === 'female')) filteredData.push(item)
                return null
        })

        return genderSelected === 'All' ? parsedCharacters : _.uniq(filteredData)
    }

    return(
        <div style={{height: '100vh', backgroundColor: 'black'}}>
            <Header title={selectedMovie?.title}/>
            <Crawl
                movieCrawl={selectedMovie?.opening_crawl}
                episode={selectedMovie?.episode_id}
            />
            <GenderFilter setGender={setGenderSelected} value={genderSelected}/>
            <CharactersTable
                characters={clicks % 2 === 0 ? _.sortBy(filterByGender(), ['name']) : _.reverse(filterByGender(), ['name'])}
                fetching={isFetching} gender={genderSelected}
                onClick={() => setClicks(clicks + 1)}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    characters: state.container.movies.characters,
    selectedMovie: state.container.movies.selectedMovie
})

const mapDispatchToProps = (dispatch) => ({
    errorShow: (payload) => dispatch(GeneralActions.errorShow(payload)),

})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
