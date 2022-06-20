import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import JobsList from './components/JobsList'
import FullJob from './components/FullJob'
import SelectCategory from './components/SelectCategory'

import { useDispatch, useSelector } from 'react-redux'
import Favourites from './components/Favourites'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getBooksAction } from './redux/actions'

const App = () => {
  const jobs = useSelector((state) => state.jobs.jobsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <Link to={'/'}>
              <h1 className="text-center">Job Search</h1>
            </Link>
          </Col>
          <SearchBar />
          <SelectCategory />
          <Link to={'/favourites'}>
            <Button className="ml-5" variant="outline-success">
              Go To Favourites
            </Button>{' '}
          </Link>
        </Row>
        <Row></Row>
        <hr />
        <Routes>
          <Route path={'/'} element={<JobsList jobs={jobs} />} />
          <Route path={'/:company'} element={<FullJob />} />
          <Route path={'/favourites'} element={<Favourites />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
