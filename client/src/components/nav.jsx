import React from 'react';

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        window.onscroll = () => {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
        }
        return (
            <main className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-4">
                    <a className="navbar-brand" href="/home">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="/comments">Comments</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="/events">Events</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="progress-container">
                    <div id="progressBar"></div>
                </div>
            </main>
        )
    }
}