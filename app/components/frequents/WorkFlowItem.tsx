import React from "react";

const WorkFlowItem = ({ counter, caption, text }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="process-item">
          <span>{counter}</span>
          <div className="process-info">
            <h3>{caption}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlowItem;
