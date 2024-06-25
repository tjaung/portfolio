import { ReactNode } from "react";
import React from "react";

interface interfaceCardItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

const ExpCard = ({ icon, title, desc }: interfaceCardItem) => {
  return (
    <div className="card">
      <article className="card-content">
        <h5 className="card-title">{title}</h5>
        <small className="card-desc">{desc}</small>
      </article>
    </div>
  );
};

export default ExpCard;
