import { ReactNode } from "react";
import React from "react";
import "./styles/smallcard.css";

interface interfaceCardItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

const SmallCard = ({ icon, title, desc }: interfaceCardItem) => {
  return (
    <div className="card">
      <article className="card-content">
        <h2 className="card-icon">{icon}</h2>
        <h5 className="card-title">{title}</h5>
        <small className="card-desc">{desc}</small>
      </article>
    </div>
  );
};

export default SmallCard;
