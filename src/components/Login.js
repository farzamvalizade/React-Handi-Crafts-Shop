import React, { useState } from "react";
import * as Yup from "yup";
import "./assets/css/signUp.css";

const Login = () => {
    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleInputEmail = () => {
            if (formData.email) {
                setInputEmail(true)
            }else{
                setInputEmail((prevState) => !prevState)
            }
        
    };

    
    const handleInputPassword = () => {
        if (formData.email) {
            setInputPassword(true)
        }else{
            setInputPassword((prevState) => !prevState)
        }
    };
    const [errors, setErrors] = useState({});

    const myValidation = Yup.object().shape({
        email: Yup.string()
        .required("لطفا ایمیل خود را وارد کنید")
        .email("لطفا ایمیل خود را به درستی وارد کنید"),

        password: Yup.string()
        .required("لطفا رمز عبور خود را وارد کنید")
        .min(6, "رمز عبور باید بیش از 6 کارکتر باشد")
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            await myValidation.validate(formData, {abortEarly: false});
            console.log("Form was sent succssesful", formData);
            setErrors({});
        }
        catch(err){
            const newError = err.inner.reduce((acc, current) => {
                acc[current.path] = current.message;
                return acc;
            }, {});
            setErrors(newError);
        }
    }

    return(
    <section className="main">

        <div className="login">

            <form onSubmit={handleSubmit}>

            <h1>ورود</h1>

            <div className="input-box">
                <i className="material-symbols-outlined icon-input">mail</i>
                <label id="label-email" required="" style={{top: inputEmail ? "0" : "50%"}}>ایمیل</label>
                <input type="email" className="inputtt" name="email" value={formData.email} onChange={handleChange} onClick={handleInputEmail} />
            </div>
            <p className="error-text">{errors.email}</p>

            <div className="input-box">
                <i className="material-symbols-outlined icon-input">lock</i>

                <label id="label-password" required="" style={{top: inputPassword ? "0" : "50%"}}>رمز عبور</label>
                <input type="password" className="inputtt" name="password" value={formData.password} onChange={handleChange} onClick={handleInputPassword} />
            </div>
            <p className="error-text">{errors.password}</p>

            <div className="remember-forgot">
                <a href="/" className="btn-forgot-password">فراموشی رمز عبور؟</a>

                <label>
                    <input type="checkbox" className="m-2" />
                    یادآوری
                </label>
            </div>
            <button type="submit" className="btn-login">ورود</button>

            <div className="register-link">
                <p>
                    اکانتی ندارید؟
                    <a href="/signup" className="btn-register mr-2">ثبت نام</a>
                </p>
            </div>

            </form>
        </div>
    </section>
    );
};
export default Login;

