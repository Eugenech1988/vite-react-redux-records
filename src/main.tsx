import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {persistor, store} from './store/store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider} from "@mui/material/styles"
import {CssBaseline} from "@mui/material"
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
