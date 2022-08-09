import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllCars } from '../../api/cars'
import messages from '../shared/AutoDismissAlert/messages'


// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const CarsIndex = (props) => {
    const [cars, setCars] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    useEffect(() => {
        console.log(props)
        getAllCars()
            .then(res => setCars(res.data.pets))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Cars',
                    message: messages.getCarsFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If pets haven't been loaded yet, show a loading message
    if (!cars) {
        return <LoadingScreen />
    } else if (cars.length === 0) {
        return <p>No cars yet. go buy one.</p>
    }

    const carCards = cars.map(car => (
        <Card style={{ width: '30%', margin: 5}} key={ pet.id }>
            <Card.Header>{ car.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/cars/${car.id}`}>View { car.make }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div style={ cardContainerStyle }>
            { carCards }
        </div>
    )
}

export default CarsIndex