import React from 'react'

import {Button}from '@chakra-ui/react'
import * as Styles from './Styles'

const ErrorModal = ({ isErrorVisible, errorTitle, errorBody, onPressButton }) =>
    isErrorVisible && (
        <div className="modal">
            <div style={Styles.detailsContainer}>
                <div style={Styles.errorTitle}>{errorTitle}</div>
                <div style={Styles.errorBody}>{errorBody}</div>
                <div style={{ marginBottom: 36 }}>
                    <Button onClick={onPressButton}/>
                </div>
            </div>
        </div>
    )

export default ErrorModal
