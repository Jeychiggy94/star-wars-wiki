import React from 'react'
import {Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
import * as Styles from "./Styles";


const GenderFilter = ({setGender, value}) => {
    return (
        <RadioGroup onChange={setGender} value={value} bg='black' style={Styles.genderFilterRadioGroup}>
            <Text color='yellow' style={Styles.genderFilterCaption}>Select Gender of Characters you wish to display</Text>
            <Stack direction='row' style={Styles.genderFilterStack}>
                <Radio value='All' colorScheme='yellow'>All</Radio>
                <Radio value='Male' colorScheme='yellow'>Male</Radio>
                <Radio value='Female' colorScheme='yellow'>Female</Radio>
                 <Radio value='Other' colorScheme='yellow'>Other</Radio>
            </Stack>
        </RadioGroup>)
}

export default GenderFilter
