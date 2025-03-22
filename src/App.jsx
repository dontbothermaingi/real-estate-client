import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/navbar'
import NavBarOptions from './components/navbaroptions'
import HomePage from './components/HomePage'
import { Box } from '@mui/material'
import PropertyDisplay from './components/PropertyDisplay'
import DetailedPropertyMobile from './components/DetailedPropertyMobile'
import AddHouse from './components/AddHouse'
import EditHouse from './components/EditHouse'
import HouseChanges from './components/HouseChanges'

function App() {

  return (
    <Box>
      <Routes>
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/options' element={<NavBarOptions />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/properties/:aim' element={<PropertyDisplay />} />
        <Route path='/house-detail/:houseId/:aim' element={<DetailedPropertyMobile />} />
        <Route path='/add-house' element={<AddHouse />} />
        <Route path='/edit-house/:houseId' element={<EditHouse />} />
        <Route path='/house-changes' element={<HouseChanges />} />
      </Routes>
    </Box>
  )
}

export default App
