import React from 'react'
import {
    Center,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Spinner
} from '@chakra-ui/react'
import * as Styles from './Styles'

const CharactersTable = ({characters, fetching, gender, onClick}) => {

    const width = window.innerWidth

    let totalHeight = characters.reduce((result, element) => {
        return Number(result) + Number(element.height !== 'unknown' ? element.height : 0)
    }, 0)

    let height = totalHeight / 2.54
    let heightInFt = Math.floor(height / 12)
    let heightInInches = (height - 12 * heightInFt).toFixed(2)

    return (
        <TableContainer bg='black'>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th color='yellow' onClick={onClick}>Name</Th>
                        <Th  color='yellow'>Gender</Th>
                        <Th isNumeric color='yellow'>Height</Th>
                    </Tr>
                </Thead>
                {fetching && (
                   <Center w={width} height='300px'>
                       <Spinner
                           align='center'
                           thickness='4px'
                           speed='0.65s'
                           emptyColor='gray.200'
                           color='yellow'
                           size='xl'
                           style={Styles.spinner}
                       />
                   </Center>
                )}
                <Tbody>
                    {
                        characters.map((character, index) =>
                            (
                                <Tr key={index}>
                                    <Td color='yellow'>{character.name}</Td>
                                    <Td color='yellow'>{character.gender}</Td>
                                    <Td isNumeric color='yellow'>{character.height}</Td>
                                </Tr>
                            )
                        )
                    }
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th color='white'>{gender ? gender : ''} Characters in movie: {fetching ? "Calculating..." : characters.length}</Th>
                        <Th isNumeric color='white'>Total height of characters: {totalHeight}cm ({heightInFt} ft / {heightInInches} in)</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default CharactersTable
