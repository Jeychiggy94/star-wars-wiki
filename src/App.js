import './App.css';
import Landing from '../src/screens/Landing'
import MovieDetails from "./screens/MovieDetails";
import ErrorModal from './components/ErrorModal'
import { Routes, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { GeneralActions } from '../src/state'



function App({error, errorClear}) {
  return [
      <Routes key={1}>
          <Route exact element={<Landing/>} path='/'/>
          <Route exact element={<MovieDetails/>} path='/movieDetails'/>
      </Routes>,
      <ErrorModal
          errorBody={error.errorBody}
          errorTitle={error.errorTitle}
          isErrorVisible={error.isErrorVisible}
          key={4}
          onPressButton={() => errorClear()}
      />

  ]
}

const mapStateToProps = (state) => ({
    error: state.general.error,
})

const mapDispatchToProps = (dispatch) => ({
    errorClear: (payload) => dispatch(GeneralActions.errorClear(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
