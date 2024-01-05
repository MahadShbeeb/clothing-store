import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import store from './store/store'
import { Provider } from 'react-redux';

export const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  }
});


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Provider store={store}> 
          <RouterProvider router={router}/>
        </Provider>
    </ThemeProvider>

      </QueryClientProvider>

  </React.StrictMode>,
)
