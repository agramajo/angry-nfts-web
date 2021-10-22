import React from 'react'

export default function Navigation() {
    return (
        <nav id="site-nav" className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="left">
                            <h1>PunkPortraits</h1>
                        </div>
                        <div className="right">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target=".main-nav"
                                aria-controls="main-nav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse main-nav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a
                                            href="#landing"
                                            aria-current="page"
                                            className="nav-link active"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#experience" aria-current="page" className="nav-link">
                                            Experience
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#progress" aria-current="page" className="nav-link">
                                            Join
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#details" aria-current="page" className="nav-link">
                                            Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#roadmap" aria-current="page" className="nav-link">
                                            Roadmap
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#members" aria-current="page" className="nav-link">
                                            Team
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#faq" aria-current="page" className="nav-link">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                                <div className="actions">
                                    <a
                                        href="#buy"
                                        className="btn btn-success disabled"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="bottom"
                                        title="The Public Sale starts on October 23 @ 4:30PM UTC"
                                    >
                                        BUY
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
