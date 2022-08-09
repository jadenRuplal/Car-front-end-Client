import { 
    Form,
    Button,
    Container 
} from 'react-bootstrap'

const CarForm = (props) => {
    const { car, handleChange, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form>
                <Form.Label htmlFor="name">Model</Form.Label>
                <Form.Control
                    placeholder="What is your cars model?"
                    name="model"
                    id="model"
                    value={ car.model }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="Year">year</Form.Label>
                <Form.Control
                    placeholder="Whats the year?"
                    type="number"
                    name="year"
                    id="year"
                    value={ car.year }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="description">color</Form.Label>
                <Form.Control
                    placeholder="whats the color"
                    name="color"
                    id="color"
                    value={ car.color }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CarForm