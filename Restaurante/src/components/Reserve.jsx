import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/Reserve.scss';

const Reserve = () => {
    
    // Estado para almacenar los datos del formulario
    const [data, setData] = useState ({
        name: '',
        surname: '',
        date: '',
        email: '',
    });

    const clearState = () => {
        setData({ ...contactState })
    }

    //Creamos las variables para crear las validaciones
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    // Función para manejar cambios en los inputs
    const handleInputChange = (event) => {

        const { name, value } = event.target;

        //El campo nombre tiene que tener una validación que obligue al usuario a poner un texto con un mínimo de caracteres
        if (data.name.length + 1 < 3) 
        {
            setMessage('Name must be at least 3 characters')
            setBtnDisabled(true)
        } 
        else 
        {
            setMessage(null)
            setBtnDisabled(false)
        }

        setData({
            ...data,
            [name]: value,
        });
    }

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault()

        // Guardar datos en localStorage
        localStorage.setItem('formData', JSON.stringify(data));

        // Redireccionar a la vista principal
        navigate('/');
    }
    
    return (
            <div className="reserve-form">
                <h1>Datos necesarios para realizar la reserva</h1>
                <form onSubmit={handleSubmit}>
                    <div>  
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" placeholder="name" onChange={handleInputChange} name="name" value={data.name}/>
                    </div>
                    <div>
                        <label htmlFor="surname">Apellidos:</label>
                        <input type="text" placeholder="surname" onChange={handleInputChange} name="surname" value={data.surname}/>
                    </div> 
                    <div>
                         <label htmlFor="date">Fecha:</label>
                         <input type="date" placeholder="date" onChange={handleInputChange} name="date"value={data.date}/>
                    </div> 
                   
                    <div>   
                        <label htmlFor="email">Email:</label> 
                        <input type="email"  placeholder="email" onChange={handleInputChange} name="email"value={data.email}/>
                    </div> 
                
                    <button type="submit" disabled={btnDisabled}>Enviar</button>
                    <p>{message}</p>
                </form>
            </div>
    )

}

export default Reserve