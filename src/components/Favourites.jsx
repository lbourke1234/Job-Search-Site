import { useSelector } from 'react-redux'
import SingleJob from './SingleJob'
import { useEffect, useState } from 'react'

const Favourites = () => {
  const favourites = useSelector((state) => state.user.favouritesList)

  const [faves, setFaves] = useState([])

  const fetchFavourites = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=pureintegration&limit=10`
    )
    if (response.ok) {
      const body = await response.json()
      setFaves(body.data)
    }
  }

  useEffect(() => {
    fetchFavourites()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faves])
  return favourites.map((job, i) => <SingleJob job={job} key={job._id} index={i} />)
}

export default Favourites
