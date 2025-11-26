import React from "react";
import { Link } from "react-router-dom";
import "./Browse.css";

export default function Card2() {
  const cards = [
    {
      id: 1,
      title: "Java",
      subtitle: "Master Java Programming",
      description:
        "Learn Core and Advanced Java with real-world projects and interview preparation.",
      img: ".\assets\java.jpg",
      path: "/java",
    },
    {
      id: 2,
      title: "Python",
      subtitle: "Learn Python for All Levels",
      description:
        "Explore Python for automation, data science, and web development — all in one course.",
      img: "https://cdn.pixabay.com/photo/2018/06/27/07/30/python-3497388_1280.jpg",
      path: "/python",
    },
    {
      id: 3,
      title: "Aptitude",
      subtitle: "Crack Exams & Placements",
      description:
        "Sharpen your problem-solving and logical reasoning skills for campus placements.",
      img: "https://cdn.pixabay.com/photo/2017/06/10/07/18/quiz-2380457_1280.jpg",
      path: "/aptitude",
    },
    {
      id: 4,
      title: "DSA",
      subtitle: "Data Structures & Algorithms",
      description:
        "Build a strong foundation in algorithms and problem-solving to ace coding interviews.",
      img: "https://cdn.pixabay.com/photo/2017/08/10/03/29/code-2612136_1280.jpg",
      path: "/dsa",
    },
    {
      id: 5,
      title: "English",
      subtitle: "Enhance Communication Skills",
      description:
        "Improve your English grammar, fluency, and vocabulary for professional success.",
      img: "https://cdn.pixabay.com/photo/2016/11/18/15/54/english-1838566_1280.jpg",
      path: "/english",
    },
  ];

  return (
    <div className="basic-wrap">
      <div className="basic-inner">
        <h2 className="basic-title">Upgrade Your Skills with High-Demand Courses</h2>

        <div className="cards-row">
          {cards.map((c) => (
            <div key={c.id} className="card">
              <div className="card-image">
                <img src={c.img} alt={`${c.title} course`} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{c.title} Course</h3>
                <p className="card-sub">{c.subtitle}</p>
                <p className="card-desc">{c.description}</p>
                <div className="card-footer">
                  <Link to={c.path} className="w-full">
                    <button className="btn-primary">Start Learning</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
