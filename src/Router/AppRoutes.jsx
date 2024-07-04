import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login'
import OtherRepos from '../Pages/OtherRepositoreis'
import MyRepos from '../Pages/MyRepositories'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="outros-repositorios" element={<OtherRepos/>}/>
      <Route path="meus-repositorios" element={<MyRepos/>}/>
    </Routes>
  )
}
