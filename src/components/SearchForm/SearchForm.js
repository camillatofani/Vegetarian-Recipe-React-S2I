/* ==== Containers & Component ==== */
import {
    Container,
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

/* ==== Style ==== */
import css from './SearchForm.module.css';

function SearchForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    console.log(errors);
    console.log(watch('firstName'));
    const lastName = watch('lastName');

    return(
        <Container className={css.containerForm}>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit((data) => {
                            console.log(data);
                        })}>
                            <Form.Control
                                {...register('firstName', { required: 'This value is required' })}
                                placeholder='First Name'
                            />
                            <p>{ errors.firstName?.message }</p>
                            <Form.Control
                                {...register('lastName', { required: 'This value is required',
                                    minLength: {
                                        value: 4,
                                        message: 'Min lenght is 4.'
                                    }
                                })}
                                placeholder='Last Name'
                            />
                            <p>{lastName}</p>
                            <p>{ errors.lastName?.message }</p>
                            <Button variant="success" type='submit'>Search</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchForm;
