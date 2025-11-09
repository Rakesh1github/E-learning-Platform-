import React from "react";
import "./Browse.css"; // make sure file name same ho

export default function Basic() {
  const cards = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    subtitle: `Subtitle ${i + 1}`,
    description: "Short description about this card. Keep it simple and relevant.",
    img: `https://picsum.photos/seed/fivecard${i + 1}/600/400`,
  }));

  return (
    <div className="basic-wrap">
      <div className="basic-inner">
        <h2 className="basic-title">5 Horizontal Cards (Single Row)</h2>

        <div className="cards-row">
          {cards.map((c) => (
            <div key={c.id} className="card">
              <div className="card-image">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-sub">{c.subtitle}</p>
                <p className="card-desc">{c.description}</p>
                <div className="card-footer">
                  <button className="btn">View</button>
                  <div className="card-id">#{c.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
