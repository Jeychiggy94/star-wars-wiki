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
    TableCaption,
    TableContainer,
    Spinner
} from '@chakra-ui/react'

const CharactersTable = ({characters, fetching}) => {

    const width = window.innerWidth

    let totalHeight = characters.reduce((result, element) => {
        return Number(result) + Number(element.height !== 'unknown' ? element.height : 0)
    }, 0)

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Gender</Th>
                        <Th isNumeric>Height</Th>
                    </Tr>
                </Thead>
                {fetching && (
                   <Center w={width}>
                       <Spinner
                           align='center'
                           thickness='4px'
                           speed='0.65s'
                           emptyColor='gray.200'
                           color='yellow'
                           size='xl'
                           style={{marginTop: 100}}
                       />
                   </Center>
                )}
                <Tbody>
                    {
                        characters.map((character, index) =>
                            (
                                <Tr key={index}>
                                    <Td>{character.name}</Td>
                                    <Td>{character.gender}</Td>
                                    <Td isNumeric>{character.height}</Td>
                                </Tr>
                            )
                        )
                    }
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Total Characters in movie: {fetching ? "Calculating..." : characters.length}</Th>
                        <Th isNumeric>Total height of characters: {fetching ? "Calculating..." : totalHeight}</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}

export default CharactersTable
