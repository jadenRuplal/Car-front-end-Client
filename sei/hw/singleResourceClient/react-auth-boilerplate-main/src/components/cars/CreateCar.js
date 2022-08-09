import { useState } from 'react'
import { createCar } from '../../api/pets'
import { useNavigate } from 'react-router-dom'
import { createPetSuccess, createPetFailure } from '../shared/AutoDismissAlert/messages'
import CarForm from '../shared/PetForm'

const CreateCar = (props) => {
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [pet, setCar] = useState({
        make: '',
        color: '',
        year: '',
    })


    const handleChange = (e) => {
        setPet(prevCar => {
            let updatedValue = e.target.value
            const updatedName = e.target.name


            if (e.target.type === 'number') {
                // this is looking at the input type, and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }

            // this handles the checkbox, changing on to true etc
            const updatedCar = {
                [updatedName]: updatedValue
            }
            return {
                ...prevCar,
                ...updatedCar
            }
        })
    }

    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createCar(user, car)
            .then(res => { navigate(`/cars/${res.data.car.id}`)})
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createCarsuccess,
                    variant: 'success'
                })
            })
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createCarFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <CarForm 
            pet={ pet } 
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            heading="Add a new Car!"
        />
    )
}

export default CreateCar