import { Form, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setSearchTextActionAndFetch } from '../redux/actions'

const SearchBar = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <Row>
        <Col>
          <Form.Label className="text-center">Search</Form.Label>
          <Form.Control
            type="text"
            id="search-bar"
            onChange={(e) => {
              dispatch(setSearchTextActionAndFetch(e.target.value))
            }}
          />
          <Form.Text muted>Search for a job here</Form.Text>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
