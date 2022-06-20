import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { addCompanyToFavouritesAction } from '../redux/actions'
import { removeFromFavouritesAction } from '../redux/actions'
import { useDispatch } from 'react-redux'

const SingleJob = ({ job, index }) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <Card.Body>
        <Link to={`/${job.company_name}`}>
          <Card.Title>{job.company_name}</Card.Title>
        </Link>
        <h4>Title</h4>
        <Card.Text>{job.title}</Card.Text>
        <h4>Category</h4>
        <Card.Text>{job.category}</Card.Text>
        <h4>Salary</h4>
        <Card.Text>{job.salary}</Card.Text>
        <h4>Type</h4>
        <Card.Text>{job.type}</Card.Text>
        <Button
          variant="outline-success"
          onClick={() => dispatch(addCompanyToFavouritesAction(job))}
        >
          Add Company To Favourites
        </Button>{' '}
        <Button
          variant="outline-success"
          onClick={() => dispatch(removeFromFavouritesAction(index))}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SingleJob
