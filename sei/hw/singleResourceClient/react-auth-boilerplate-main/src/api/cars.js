import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllCars = () => {
    return axios(`${apiUrl}/cars`)
}

// READ => SHOW
export const getOneCar = (id) => {
    return axios(`${apiUrl}/cars/${id}`)
}

// CREATE
export const createCar = (user, newCar) => {
	return axios({
		url: apiUrl + '/cars',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { pet: newCar }
	})
}

// UPDATE
export const updateCar = (user, updatedCar) => {
    console.log('this is updatedCar', updatedCar)
	return axios({
		url: `${apiUrl}/cars/${updatedCar.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { car: updatedCar }
	})
}

// DELETE
export const removeCar = (user, carId) => {
    return axios({
        url: `${apiUrl}/cars/${carId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}