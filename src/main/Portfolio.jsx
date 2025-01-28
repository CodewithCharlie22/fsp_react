import React from 'react'

export default function Portfolio() {
    return (
        <>
            <>
                <div className="diffSection" id="portfolio_section">
                    <center>
                        <p style={{ fontSize: 50, padding: 100, paddingBottom: 40 }}>Portfolio</p>
                    </center>
                    <div className="content">
                        <p>
                            "Live as if you were to die tomorrow. Learn as if you were to live
                            forever." "Education is the most powerful weapon which you can use to
                            change the world." “The only person who is educated is the one who has
                            learned how to learn from their mistakes.”
                        </p>
                    </div>
                </div>
                <div className="extra" style={{
                    "font-size": "50px",
                    "text-align": "center",
                    "color": "rgb(255, 255, 255)",
                    "background-image": "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(images/extra/b1.jpg)",
                    "background-size": "cover",
                    "background-attachment": "fixed",
                    "font-family": "cursive",
                    "z-index": "-9",
                    "padding": "30px 30px 150px",
                    }}>
                    <p>We're increasing this data every year</p>
                    <div className="smbox">
                        <span>
                            <center>
                                <div className="data">100</div>
                                <div className="det">Enrolled Students</div>
                            </center>
                        </span>
                        <span>
                            <center>
                                <div className="data">62</div>
                                <div className="det">Total Courses</div>
                            </center>
                        </span>
                        <span>
                            <center>
                                <div className="data">50</div>
                                <div className="det">Placed Students</div>
                            </center>
                        </span>
                        <span>
                            <center>
                                <div className="data">20</div>
                                <div className="det">Total Projects</div>
                            </center>
                        </span>
                    </div>
                </div>
            </>

        </>
    )
}
