import React from 'react'
import { hot } from 'react-hot-loader/root'
import CardsList from './components/CardsList/CardsList'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { GlobalStyle } from './App.styled'
import { Provider } from 'react-redux'
import { store } from './app/store'
import useToken from './hooks/useToken'

function AppComponent() {
  useToken()

  return (
    <Layout>
      <GlobalStyle />
      <Header />
      <Main>
        <CardsList />
      </Main>
    </Layout>
  )
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
))
