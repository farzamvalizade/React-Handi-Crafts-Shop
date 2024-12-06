import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./assets/css/styles.css";
import "./assets/css/cart.css";

const Nav = () => {
    const [showAll, setShowAll] = useState(false);
    const handleToggleShowAll = () => {
        setShowAll((prevState) => !prevState);
    };

    const [showHumbergerMenu, setShowHumbergerMenu] = useState(false);
    const handleShowHumbergerMenu = () => {
        setShowHumbergerMenu((prevState) => !prevState);
    };

    const [showPagesMenu, setShowPagesMenu] = useState(false);
    const handlePagesMenuHover = () => setShowPagesMenu(true);
    const handlePagesMenuLeave = () => setShowPagesMenu(false);
    const [top, setTop] = useState(false);

    const GoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 600) {
                setTop(true);
            } else {
                setTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [cart,setCart] = useState(false);

    const HandleCartShow = () => {
        setCart((prevState) => !prevState);
    }
    return (
        <React.Fragment>
            <div className={`overlay ${showHumbergerMenu ? 'show' : ''}`} onClick={handleShowHumbergerMenu}></div>
            <nav className="nav-main w-full  " id="nav-main">
                <div className="popup-wrappper" style={{ zIndex: showHumbergerMenu ? "9999" : "-1" }}>
                    <div className="navbar bg-blue-500" id="navbar">
                        <article className="nav-container">
                            <div className="navbar-box-links flex gap-8 items-center">
                                <div className="nav-box-logo">
                                    <Link to="/">فروشگاه</Link>
                                </div>

                                <ul className="navbar-box-links-container">
                                    <li><Link to="/">خانه</Link></li>
                                    <li
                                        onMouseEnter={handlePagesMenuHover}
                                        onMouseLeave={handlePagesMenuLeave}
                                    >
                                        <Link to="/contact">صفحات</Link>
                                        {showPagesMenu && (
                                            <ul className="dropdown">
                                                <li><Link className="color-link" to="/products">محصولات</Link></li>
                                                <li><Link className="color-link" to="/ostans">استان ها</Link></li>
                                                <li><Link className="color-link" to="/about">درباره ما</Link></li>
                                                <li><Link className="color-link" to="/contact">ارتباط با ما</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <Link to="/login">ورود</Link>|<Link to="/signup">ثبت‌نام</Link>
                                    </li>
                                    
                                </ul>
                            </div>

                            <div className="nav-box-media">
                                <input type="search" placeholder="جستوجو..." className={`nav-input-serach`} style={{ display: showAll ? 'table' : 'none' }} id="nav-input-serach" />
                                <Link><i className="fa-solid fa-magnifying-glass search-icon" id="nav-icon-serach" onClick={handleToggleShowAll}></i></Link>
                                <Link><i className="fa-solid fa-cart-shopping" onClick={HandleCartShow}></i></Link>
                                <Link to="/profile"><i className="fa-regular fa-user"></i></Link>
                                <Link><i className="material-symbols-outlined hamburger-menu" onClick={handleShowHumbergerMenu}>menu</i></Link>
                            </div>

                        </article>

                    </div>

                    <section className="menu-responsive " style={{ display: showHumbergerMenu ? 'table' : 'none' }}>
                        <div className="box1">
                            <div className="box2" id="box2">
                                <div className="menu-responsive-box">
                                        <div className="menu-responsive-container">
                                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                                <div className="nav-box-logo">
                                                    <a href="/">آقاجانی</a>
                                                </div>
                                                <i 
                                            className="material-symbols-outlined navbar-close-icon" style={{color: "red"}}
                                            onClick={handleShowHumbergerMenu}
                                        >
                                            close
                                        </i>
                                                
                                            </div>

                                            <input type="search" placeholder="جستوجو..." className="menu-responsive-input-serach" />

                                            <ul className="menu-responsive-link-box">
                                            <li><Link className="color-link" to="/products">محصولات</Link></li>
                                                <li><Link className="color-link" to="/ostans">استان ها</Link></li>
                                                <li><Link className="color-link" to="/about">درباره ما</Link></li>
                                                <li><Link className="color-link" to="/contact">ارتباط با ما</Link></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={`overlay ${cart ? 'show' : ''}`} onClick={HandleCartShow}></div>

                    <section 
                        className="cart-responsive" 
                        style={{ display: cart ? "block" : "none" }}
                    >
                        <div className="box1">
                            <div className="box2">
                                <div className="cart-responsive-box">
                                    <div className="cart-responsive-container">
                                        <i 
                                            className="material-symbols-outlined navbar-close-icon" style={{color: "red"}}
                                            onClick={HandleCartShow}
                                        >
                                            close
                                        </i>
                                        <h2>سبد خرید شما</h2>
                                        <ul className="cart-responsive-link-box">
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                            <li className="cart-item">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt="product1"
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">محصول 1</span>
                                                    <span className="price mr-2">50,000 تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button className="btn-quantity">+</button>
                                                    <button className="btn-quantity">-</button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="cart-summary">
                                            <p className="total-amount">
                                                مجموع پرداختی: <span>50,000 تومان</span>
                                            </p>
                                            <button className="btn-checkout hover:bg-green-500">تسویه حساب</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                </div>
            </nav>

            <div className="go-up" id="go-up" style={{display: top ? 'table':'none'}}  onClick={GoUp}>
            <span className="material-symbols-outlined">
                rocket
            </span>
            </div>

        </React.Fragment>
    );
};

export default Nav;
