import React, { useState } from "react";
import * as Yup from "yup";
import "./assets/css/signUp.css";

const SignUp = () => {
    const [inputEmail, setInputEmail] = useState(false);
    const handleInputEmail = () => {
        if (formData.email) {
            setInputEmail(true)
        }else{
            setInputEmail((prevState) => !prevState)
        }
    };

    const [inputPassword1, setInputPassword1] = useState(false);
    const handleInputPassword1 = () => {
        if (formData.email) {
            setInputPassword1(true)
        }else{
            setInputPassword1((prevState) => !prevState)
        }
    };

    const [inputPassword2, setInputPassword2] = useState(false);
    const handleInputPassword2 = () => {
        if (formData.email) {
            setInputPassword2(true)
        }else{
            setInputPassword2((prevState) => !prevState)
        }
    };

    const [formData, setFormData] = useState({
        email: "",
        password1: "",
        password2: "",
    });

    const [errors, setErrors] = useState({});

    const myValidation = Yup.object().shape({
        email: Yup.string()
            .required("لطفا ایمیل خود را وارد کنید")
            .email("لطفا ایمیل خود را به درستی وارد کنید"),
        password1: Yup.string()
            .required("لطفا رمز عبور خود را وارد کنید")
            .min(6, "رمز عبور باید بیش از 6 کارکتر باشد"),
        password2: Yup.string()
            .required("لطفا رمز عبور خود را وارد کنید")
            .oneOf([Yup.ref("password1")], "رمزهای عبور یکسان نیستند"),
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await myValidation.validate(formData, { abortEarly: false });
            console.log("Form was sent successfully", formData);
            setErrors({});
        } catch (err) {
            const newError = err.inner.reduce((acc, current) => {
                acc[current.path] = current.message;
                return acc;
            }, {});
            setErrors(newError);
        }
    };

    return (
        <section className="main">
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h1>ثبت‌نام</h1>

                    <div className="input-box" >
                        <i className="material-symbols-outlined icon-input" >mail</i>
                        <label
                            id="label-email"
                            required=""
                            style={{ top: inputEmail ? "0" : "50%" }}
                        >
                            ایمیل
                        </label>
                        
                        <input

                            type="email"
                            className="inputtt"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onClick={handleInputEmail}
                        />
                    </div>
                    <p className="error-text">{errors.email}</p>

                    <div className="input-box">
                        <label
                            id="label-password1"
                            required=""
                            style={{ top: inputPassword1 ? "0" : "50%" }}
                        >
                            رمز عبور
                        </label>
                        <input

                            type="password"
                            className="inputtt"
                            name="password1"
                            value={formData.password1}
                            onChange={handleChange}
                            onClick={handleInputPassword1}
                        />
                        <i className="material-symbols-outlined icon-input" >lock</i>
                    </div>
                    <p className="error-text">{errors.password1}</p>

                    <div className="input-box">
                        <label
                            id="label-password2"
                            required=""
                            style={{ top: inputPassword2 ? "0" : "50%" }}
                        >
                            تکرار رمز عبور
                        </label>
                        <input
                            type="password"
                            className="inputtt"
                            name="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            onClick={handleInputPassword2}
                        />
                        <i className="material-symbols-outlined icon-input" >lock</i>
                    </div>
                    <p className="error-text">{errors.password2}</p>

                    <button type="submit" className="btn-login">
                        ورود
                    </button>

                    <div className="register-link">
                        <p>
                            اکانتی دارید؟
                            <a href="/login" className="btn-register mr-2">
                                {" "}
                                وارد شوید
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
