import { useState, useEffect } from 'react'

import { useParams, useNavigate } from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { Container, Card, Button } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneCar, updateCar, removeCar } from '../../api/cars'
import messages from '../shared/AutoDismissAlert/messages'
import EditCarModal from './EditCarModal'

const ShowCar = (props) => {
    const [car, setCar] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
            .catch(err => {                   
                msgAlert({
                    heading: 'Error getting pet',
                    message: messages.getCarsFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [updated])

    
    const removeTheCar = () => {
        removeCar(user, car.id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeCarSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => {navigate('/')})
            // on failure send a failure message
            .catch(err => {                   
                msgAlert({
                    heading: 'Error removing pet',
                    message: messages.removeCarFailure,
                    variant: 'danger'
                })
            })
    }

    if (!car) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{ car.fullTitle }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Year: { car.year }</small></div>
                            <div><small>Make: { car.make }</small></div>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {
                            car.owner && user && car.owner._id === user._id 
                            ?
                            <>
                                <Button onClick={() => setEditModalShow(true)} 
                                    className="m-2" 
                                    variant="warning"
                                >
                                    Edit Car
                                </Button>
                                <Button onClick={() => removeTheCar()}
                                    className="m-2"
                                    variant="danger"
                                >
                                    Delete The Car
                                </Button>
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <EditPetModal 
                user={user}
                car={car} 
                show={editModalShow} 
                updateCar={updateCar}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)} 
            />
        </>
    )
}

export default ShowCar