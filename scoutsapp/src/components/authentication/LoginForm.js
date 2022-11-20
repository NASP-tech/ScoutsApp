import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { library } from '@fortawesome/fontawesome-svg-core'
import Logo from '../images/loginForm/logoScouts.png';
import nav from '../images/loginForm/navLogo.png';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert';
import Axios from 'axios';

const LoginForm = () => {

    const navigate = useNavigate();

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formValues;

    const handleClick = (e) => { 
        e.preventDefault();
        const url = 'http://localhost:4000/api/auth/';

            if(email != "" && password != ""){

                const body = {
                    "email": email, 
                    "password": password
                };

            Axios.post(url, body)
                .then(response => {
                    localStorage.setItem("userInfo", JSON.stringify(response.data));
                    Swal("Success", "Welcome!","success");
                    navigate('/menu');
                }).catch(function (error) {
                    console.log(error.toJSON());
                    Swal( "Oops" ,  "Something went wrong" ,  "error" );
                });

        } else {
            Swal( "Oops" ,  "Email or Password is empty." ,  "error" );
        }

    }

    return (
        <Container fluid='lg'>
            <Row>
                <Col lg='6' className='d-none d-lg-block'>
                    <div className='text-center'><img src={Logo} alt='Scouts' width='80%'></img></div>
                </Col>
                <Col lg='6'>
                    <h2 className='text-center'>Bienvenido</h2>
                    <div className='text-center'><img src={nav} alt='Scouts' width='25%'></img></div>
                    <div
                        class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3">Nuestras Redes Sociales</p>

                        <a href="https://www.facebook.com/ScoutsSV" type="button"
                            class="btn btn-success btn-floating mx-1">
                            <i class="fa-brands fa-facebook-f">FB</i>
                        </a>

                        <a href="https://twitter.com/ScoutsSv" type="button"
                            class="btn btn-success btn-floating mx-1">
                            <i class="fab fa-twitter">TT</i>
                        </a>

                        <a href="https://www.instagram.com/scoutssv/" type="button"
                            class="btn btn-success btn-floating mx-1">
                            <i class="fab fa-linkedin-in">IG</i>
                        </a>
                    </div><Form>
                        
                        <Form.Group className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" onChange={ handleInputChange } type='text' placeholder='Ingrese el usuario o correo'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" onChange={ handleInputChange } type='password' placeholder='Ingresa la contraseña'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Olvido su Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='Ingresa la contraseña'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Button onClick={ handleClick } variant='primary' >Ingresar</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;