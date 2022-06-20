import SingleJob from './SingleJob'
import { useSelector } from 'react-redux'
import { Alert, Spinner } from 'react-bootstrap'

const JobsList = ({ jobs }) => {
  const fetchingError = useSelector((state) => state.jobs.error)
  const finishedLoading = useSelector((state) => state.jobs.finishedLoading)
  return (
    <>
      {!finishedLoading && (
        <div className="text-center">
          <Spinner variant="danger" animation="border"></Spinner>
        </div>
      )}
      {fetchingError && <Alert variant="danger">error while fetching</Alert>}
      {finishedLoading &&
        !fetchingError &&
        jobs.map((job) => <SingleJob job={job} key={job._id} />)}
    </>
  )
}

export default JobsList
