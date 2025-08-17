import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/store-logo.svg";
const year = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="bg-secondary text-dark bg-opacity-10 py-5">
            <Container className="d-flex flex-column align-items-center">
                <div className="mb-4">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <p>
                        Copyright <span>&#169;</span> {year}
                    </p>
                </div>
            </Container>
        </footer>
    );
}