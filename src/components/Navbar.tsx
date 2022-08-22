import { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import logo from '../assets/store-logo.svg'
import { navLinks } from '../data/data'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <NavbarBs className="d-flex flex-column align-items-start p-0 bg-white mb-3">
            <div className='d-none d-sm-block w-100 bg-secondary text-dark bg-opacity-10'>
                <Container>
                    <Nav className='d-flex justify-content-center gap-5' style={{ fontSize: ".9rem" }}>
                        <Nav.Link to={"/"} as={NavLink} className='text-muted'>
                            <span className='fw-bold me-1'>
                                <svg
                                    className='me-1'
                                    width="10px"
                                    height="10px"
                                    viewBox="0 01 10 10"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.55313 7.43141L7.94187 5.81016C7.69813 5.56453 7.30125 5.56453 7.05688 5.80891L5.625 7.24078L2.5 4.11578L3.93375 2.68203C4.1775 2.43828 4.17812 2.04266 3.93438 1.79828L2.32188 0.183281C2.0775 -0.0610937 1.68187 -0.0610937 1.4375 0.183281L0.0025 1.61766L0 1.61578C0 6.10328 3.6375 9.74078 8.125 9.74078L9.55188 8.31391C9.79562 8.07016 9.79625 7.67578 9.55313 7.43141Z"
                                        transform="translate(0 0.2592188)"
                                        fill="currentColor">
                                    </path>
                                </svg>
                                Hotline:
                            </span>
                            0800-010101010
                        </Nav.Link>
                        <Nav.Link to={"/"} as={NavLink} className='text-muted'>
                            <svg
                                className="me-1"
                                width="10px"
                                height="10px"
                                viewBox="0 0 12 12"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.44789 10.8027L0 7.23665L0.972973 6.24984L3.56757 7.89453L11.027 0L12 0.657877L4.42703 10.7408C4.31291 10.8927 4.13933 10.9869 3.9514 10.9987C3.76346 11.0106 3.57971 10.9391 3.44789 10.8027Z"
                                    fill="currentColor">
                                </path>
                            </svg>
                            Free Shipping
                        </Nav.Link>
                        <Nav.Link to={"/"} as={NavLink} className='text-muted'>
                            <svg
                                className="me-1"
                                width="10px"
                                height="10px"
                                viewBox="0 0 12 12"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.44789 10.8027L0 7.23665L0.972973 6.24984L3.56757 7.89453L11.027 0L12 0.657877L4.42703 10.7408C4.31291 10.8927 4.13933 10.9869 3.9514 10.9987C3.76346 11.0106 3.57971 10.9391 3.44789 10.8027Z"
                                    fill="currentColor">
                                </path>
                            </svg>
                            Shop Now
                        </Nav.Link>
                    </Nav>
                </Container>
            </div>

            {sticky ? (
                <div className="w-100 bg-white sticky shadow-sm">
                    <Container className="d-flex justify-content-between">
                        <Nav>
                            <Nav.Link to={"/"} as={NavLink} className='text-muted d-none d-sm-block'>
                                Store
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to={"/"} as={NavLink}>
                                <img src={logo} alt="" />
                            </Nav.Link>
                        </Nav>
                        <Button
                            onClick={openCart}
                            style={{ width: "3rem", height: "3rem", position: "relative" }}
                            variant="outline-secondary"
                            className="rounded-circle"
                        >
                            <svg
                                width="21px"
                                height="21px"
                                viewBox="0 0 22 22"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <g
                                    id="shopping-bag"
                                    transform="translate(0.75 0.75)">
                                    <path
                                        d="M0 0L20 0L20 20L0 20L0 0Z"
                                        id="Rectangle"
                                        fill="none"
                                        stroke="none">
                                    </path>
                                    <g
                                        id="Group"
                                        transform="translate(1.666667 0.8333333)">
                                        <path
                                            d="M16.6667 13.3333L0 13.3333L1.66667 0L15 0L16.6667 13.3333L16.6667 13.3333Z"
                                            transform="translate(0 5)"
                                            id="Path"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5">
                                        </path>
                                        <path
                                            d="M0 7.5L0 3.33333C0.00549133 1.49466 1.49466 0.00549134 3.33333 0L3.33333 0C5.172 0.00549134 6.66117 1.49466 6.66667 3.33333L6.66667 7.5"
                                            transform="translate(5 4.440892E-16)"
                                            id="Path"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            {cartQuantity > 0 ? (
                                <div
                                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                    style={{
                                        color: "white",
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        transform: "translate(25%, 25%)",
                                    }}
                                >
                                    {cartQuantity}
                                </div>
                            ) : null}
                        </Button>
                    </Container>
                </div>
            ) : null}

            <div className="w-100 bg-white">
                <Container className="d-flex justify-content-between align-items-center">
                    <Nav>
                        <Nav.Link to={"/"} as={NavLink} className='text-muted d-none d-sm-block'>
                            Store
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to={"/"} as={NavLink}>
                            <img src={logo} alt="" />
                        </Nav.Link>
                    </Nav>
                    <Button
                        onClick={openCart}
                        style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-secondary"
                        className="rounded-circle"
                    >
                        <svg
                            width="21px"
                            height="21px"
                            viewBox="0 0 22 22"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <g
                                id="shopping-bag"
                                transform="translate(0.75 0.75)">
                                <path
                                    d="M0 0L20 0L20 20L0 20L0 0Z"
                                    id="Rectangle"
                                    fill="none"
                                    stroke="none">
                                </path>
                                <g
                                    id="Group"
                                    transform="translate(1.666667 0.8333333)">
                                    <path
                                        d="M16.6667 13.3333L0 13.3333L1.66667 0L15 0L16.6667 13.3333L16.6667 13.3333Z"
                                        transform="translate(0 5)"
                                        id="Path"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5">
                                    </path>
                                    <path
                                        d="M0 7.5L0 3.33333C0.00549133 1.49466 1.49466 0.00549134 3.33333 0L3.33333 0C5.172 0.00549134 6.66117 1.49466 6.66667 3.33333L6.66667 7.5"
                                        transform="translate(5 4.440892E-16)"
                                        id="Path"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        {cartQuantity > 0 ? (
                            <div
                                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{
                                    color: "white",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    transform: "translate(25%, 25%)",
                                }}
                            >
                                {cartQuantity}
                            </div>
                        ) : null}
                    </Button>
                </Container>
            </div>
            <div className='d-none d-sm-block w-100 border-top'>
                <Container>
                    <Nav className='d-flex justify-content-center gap-5'>
                        {navLinks.map((item, i) => (
                            <Nav.Link key={i} to={"#"} as={NavLink} className="text-muted">
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </div>
            <div className='w-100 bg-warning py-2 text-dark bg-opacity-25 text-muted text-center' style={{ fontSize: ".9rem" }}>
                Special offers ✨ only this week available
            </div>
        </NavbarBs >
    )
}