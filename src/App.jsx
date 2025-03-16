import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/navbar'
import NavBarOptions from './components/navbaroptions'
import HomePage from './components/HomePage'
import { Box } from '@mui/material'
import PropertyDisplay from './components/PropertyDisplay'
import DetailedPropertyMobile from './components/DetailedPropertyMobile'
import AddHouse from './components/AddHouse'

function App() {

  return (
    <Box>
      <Routes>
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/options' element={<NavBarOptions />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/properties' element={<PropertyDisplay />} />
        <Route path='/house-detail/:houseId' element={<DetailedPropertyMobile />} />
        <Route path='/add-house' element={<AddHouse />} />
      </Routes>
    </Box>
  )
}

export default App
