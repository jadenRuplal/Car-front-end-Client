import CarIndex from "./cars/CarIndex"


const Home = (props) => {

	const { msgAlert } = props

	return (
		<>
			<h2>Car Page</h2>
			<CarIndex msgAlert={ msgAlert }/>
		</>
	)
}

export default Home
