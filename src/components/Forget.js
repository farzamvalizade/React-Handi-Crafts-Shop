import React, { useState } from "react";
import * as Yup from "yup";
import "./assets/css/signUp.css";

const ForgetPassword = () => {
    const [inputEmail, setInputEmail] = useState(false);

    const [formData, setFormData] = useState({
        email: '',

    });
    const handleInputEmail = () => {
            if (formData.email) {
                setInputEmail(true)
            }else{
                setInputEmail((prevState) => !prevState)
            }
        
    };

    

    const [errors, setErrors] = useState({});

    const myValidation = Yup.object().shape({
        email: Yup.string()
        .required("لطفا ایمیل خود را وارد کنید")
        .email("لطفا ایمیل خود را به درستی وارد کنید"),

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

            <h1>فراموشی رمز </h1>

            <div className="input-box">
                <i className="material-symbols-outlined icon-input">mail</i>
                <label id="label-email" required="" style={{top: inputEmail ? "0" : "50%"}}>ایمیل</label>
                <input type="email" className="inputtt" name="email" value={formData.email} onChange={handleChange} onClick={handleInputEmail} />
            </div>
            <p className="error-text">{errors.email}</p>

            <a className="btn-login" href="/confrim">تایید</a>

            <div className="register-link">
                <p>
                    میخواهید وارد شوید؟
                    <a href="/login" className="btn-register mr-2" >ورود</a>
                </p>
            </div>

            </form>
        </div>
    </section>
    );
};
export default ForgetPassword;

