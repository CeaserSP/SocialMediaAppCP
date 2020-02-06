import React, { Component } from "react";
import btns from "./buttons";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

class sMedia extends Component {
    state = {
        currentPage: "Home"
    };
    handlePageChange = page => {
        this.setState({ currentPage: page })
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "Login") {
            return <Login />
        } else {
            return <Signup />
        }
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default sMedia;