import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Navbar } from './components/Navbar'
import { Container } from 'react-bootstrap'
import store from './redux/store'
import FormUserContainer from './components/multiStepsform/FormUserContainer'
import showResults from './components/multiStepsform/pages/ShowResult'
import Welcome from './components/initialization/Welcome'
import './Application.scss';

import NoteContainer from './components/note/NoteContainer'
import { FirebaseState } from './context/firebase/FirebaseState'
import { AlertState } from './context/alert/AlertState'
import { Alert } from './components/note/components/Alert.jsx'

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Provider store={store}>
          <div className="App">
            <BrowserRouter>
              <Navbar />
              <Container>
                <Switch>
                  <Route exact path={'/'}>
                    <Welcome />
                  </Route>
                  <Route exact path={'/multi-stepsform'}>
                    <FormUserContainer onSubmit={showResults} />
                  </Route>
                  <Route
                    path={'/notes'}
                  >
                    <Alert/>
                    <NoteContainer />
                  </Route>
                </Switch>
              </Container>
            </BrowserRouter>
          </div>
        </Provider>
      </AlertState>
    </FirebaseState>
  )
}

export default App
