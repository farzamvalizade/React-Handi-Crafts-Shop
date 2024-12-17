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

    const [visible, setVisible] = useState(false);
    const GoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
 

    const [cart, setCart] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "محصول 1", price: 50000, quantity: 1 },
        { id: 2, name: "محصول 2", price: 70000, quantity: 1 },
        { id: 3, name: "محصول 3", price: 30000, quantity: 1 },
    ]);

    const handleCartShow = () => {
        setCart((prevState) => !prevState);
        
    };

    const handleQuantityChange = (id, action) => {
        setCartItems((prevItems) => 
            prevItems.map(item => 
                item.id === id 
                    ? { ...item, quantity: Math.max(1, item.quantity + (action === 'increase' ? 1 : -1)) } 
                    : item
            )
        );
    };
    useEffect(() => {
        if (showHumbergerMenu || cart) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showHumbergerMenu, cart]);
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <React.Fragment>
            <div className={`overlay ${showHumbergerMenu ? 'show' : ''}`} style={{zIndex:"999"}} onClick={handleShowHumbergerMenu}></div>
            <nav id="nav-main">
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
                                <Link><i className="fa-solid fa-cart-shopping" onClick={handleCartShow}></i></Link>
                                <Link to="/profile"><i className="fa-regular fa-user"></i></Link>
                                <Link><i className="material-symbols-outlined hamburger-menu" onClick={handleShowHumbergerMenu}>menu</i></Link>
                            </div>

                        </article>

                    </div>

                    <section className="menu-responsive " style={{ display: showHumbergerMenu ? 'table' : 'none'}}>
                        <div className="box1">
                            <div className="box2" id="box2">
                                <div className="menu-responsive-box" >
                                        <div className="menu-responsive-container" >
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
                    <div className={`overlay ${cart ? 'show' : ''}`} onClick={handleCartShow}></div>
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
                                            onClick={handleCartShow}
                                        >
                                            close
                                        </i>
                                        <h2 style={{position:"sticky"}}>سبد خرید شما</h2>
                                        <ul className="cart-responsive-link-box">
                                        {cartItems.map(item => (
                                            <li key={item.id} className="cart-item w-full">
                                                <img
                                                    src="https://via.placeholder.com/60/CCCCCC/FFFFFF?text=1"
                                                    alt={item.name}
                                                    className="cart-item-image"
                                                />
                                                <div className="cart-item-info">
                                                    <span className="mr-2">{item.name}</span>
                                                    <span className="price mr-2">{item.price.toLocaleString()} تومان</span>
                                                </div>
                                                <div className="cart-item-actions">
                                                    <button 
                                                        className="btn-quantity" 
                                                        onClick={() => handleQuantityChange(item.id, 'increase')}
                                                    >
                                                        +
                                                    </button>
                                                    <span className="quantity">{item.quantity}</span> {/* نمایش تعداد فعلی */}
                                                    <button 
                                                        className="btn-quantity" 
                                                        onClick={() => handleQuantityChange(item.id, 'decrease')}
                                                    >
                                                        -
                                                    </button>
                                                    <button className="btn-remove">حذف</button>
                                                </div>
                                            </li>
))}
                                        </ul>
                                        <div className="cart-summary">
                                            <p className="total-amount">
                                                مجموع پرداختی: <span>{calculateTotal().toLocaleString()} تومان</span>
                                            </p>
                                            <a href="/checkout"><button className="btn-checkout hover:bg-green-500"> ادامه فرآیند خرید</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={`go-up ${visible ? 'show' : ''}`} onClick={GoUp}>
                    <span>↑</span>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;
