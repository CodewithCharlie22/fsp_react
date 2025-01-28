import React from 'react'

export default function Sompopular() {
    return (
        <>
            <div className="title">
                <span>Popular Subjects on GeekLearning</span>
            </div>
            <br />
            <br />
            <div className="course">
                <div className="cbox">
                    <div className="det">
                        <a href="subjects/computer_courses.html">
                            <img src="images/courses/computer.png" />
                            Computer Courses
                        </a>
                    </div>
                    <div className="det">
                        <a href="subjects/computer_courses.html#data">
                            <img src="images/courses/data.png" />
                            Data Structures
                        </a>
                    </div>
                    <div className="det">
                        <a href="subjects/computer_courses.html#algo">
                            <img src="images/courses/algo.png" />
                            Algorithm
                        </a>
                    </div>
                    <div className="det">
                        <a href="subjects/computer_courses.html#java">
                            <img src="images/courses/algo.png" />
                            Java
                        </a>
                    </div>
                </div>
                <center>
                    <div className="cbox">
                        <div className="det">
                            <a href="subjects/gate.html">
                                <img src="images/courses/d1.png" />
                                GATE Preparation
                            </a>
                        </div>
                        <div className="det">
                            <a href="subjects/jee.html">
                                <img src="images/courses/d1.png" />
                                JEE Preparation
                            </a>
                        </div>
                    </div>
                </center>
                <div className="cbox">
                    <div className="det">
                        <a href="subjects/jee.html#sample_papers">
                            <img src="images/courses/paper.png" />
                            Sample Papers
                        </a>
                    </div>
                    <div className="det">
                        <a href="subjects/quiz.html">
                            <img src="images/courses/d1.png" />
                            Daily Quiz
                        </a>
                    </div>
                    <div className="det det-last">
                        <a href="subjects/computer_courses.html#projects">
                            <img src="images/courses/projects.png" />
                            Projects
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
