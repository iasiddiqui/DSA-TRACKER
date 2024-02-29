import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'
import chakraTheme from './chakraTheme.js'
import DiffChecker from './components/common/DiffChecker.js'
import ultimateData from './components/common/ultimateData.js'

let fetchData = localStorage.getItem('DSA_Tracker')
fetchData = fetchData === null ? ultimateData : JSON.parse(fetchData)
fetchData = DiffChecker(ultimateData, fetchData)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <ChakraProvider theme={chakraTheme}>

                <App fetchData={fetchData} />

            </ChakraProvider>
        </HashRouter>
    </React.StrictMode>
)
