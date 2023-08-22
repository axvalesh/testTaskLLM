import React, { useRef } from "react";
import MyButton from "../UI/Button/MyButton";
import Typography from "../UI/Typography/Typography";
import cl from './RegistrationForm.module.css'

interface RegistrationFormProps {
    onSubmitProp: (event: any) => any;
}

const RegistrationForm = ({onSubmitProp}: RegistrationFormProps) => {

    const name = useRef<HTMLInputElement>(null)
    const surname = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const phone = useRef<HTMLInputElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)

    function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(name.current?.value && surname.current?.value && email.current?.value && phone.current?.value && checkbox.current?.checked) {
            const formData = {
                name: name.current.value,
                surname: surname.current.value,
                email: email.current.value,
                phone: phone.current.value,
            };
            onSubmitProp(formData);
        }
    }

    return (
      <form onSubmit={(event) => handlerSubmit(event)} className={cl.container}>
           <Typography variant="h4">Реєстрація</Typography>
           <div className={cl.form__content}>
                <span>
                    <Typography variant="inputText">Ім’я</Typography>
                    <input required ref={name} type="text" placeholder="Введіть ваше ім’я" />
                </span>
                <span>
                    <Typography variant="inputText">Прізвище</Typography>
                    <input required ref={surname} type="text" placeholder="Введіть ваше прізвище" />
                </span>
                <span>
                    <Typography variant="inputText">Email</Typography>
                    <input required ref={email} type="text" placeholder="Введіть ваш email" />
                </span>
                <span>
                    <Typography variant="inputText">Телефон</Typography>
                    <input required ref={phone} type="tel" placeholder="442686666" />
                </span>
                <span className={cl.check__box__wrapper}>
                    <input required ref={checkbox} type="checkbox" className={cl.check__box}/>
                    <Typography variant="subtitle">Я приймаю умови Публічної оферти та надаю згоду на обробку своїх персональних даних</Typography>
                </span>
           </div>
           <MyButton type='submit' colorType="yellow">Зареєструватися</MyButton>
      </form>
    );
};

export default RegistrationForm;