import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {BsPencilFill} from 'react-icons/bs'

const Form = () => {

    const [status, setStatus] = useState(false)



    return (
        <div className="content">
            <form className='form'>
                {
                    status && <p className='form__email'>kubanovski.01@gmail.com <BsPencilFill/></p>

                }
               <h2 className='form__title'>Регистрация</h2>

                <h2 className='form__title'> Придумай пароль для входа <br/>
                     на любом устройстве</h2>
                <input className='form__field' placeholder="Введите Email" type="text"/>

                <button className='form__btn' type="button">Продолжить</button>

                <input className='form__field' placeholder="Придумайте пароль"  type="text"/>

                <button className='form__btn' type="submit">Создать аккаунт</button>

                <Link to='/login'>У меня есть аккаунт</Link>
            </form>

        </div>
    );
};

export default Form;