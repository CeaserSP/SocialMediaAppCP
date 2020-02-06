import React from "react";
import { ButtonGroup } from 'react-bootstrap';

function btns(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => props.handlePageChange("Home")}
                    className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                    Home
        </a>
            </li>

            <li className="nav-item">
                <a
                    href="#signup"
                    onClick={() => props.handlePageChange("Signup")}
                    className={props.currentPage === "Signup" ? "nav-link active" : "nav-link"}
                >
                    Signup
        </a>
            </li>

            <li className="nav-item">
                <a
                    href="#login"
                    onClick={() => props.handlePageChange("Login")}
                    className={props.currentPage === "Login" ? "nav-link active" : "nav-link"}
                >
                    Login
        </a>
            </li>
        </ul>
    );
}

export default btns;