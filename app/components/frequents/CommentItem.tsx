import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
interface CommentItemProps {
  commentTitle: string;
  commentPoints: number;
  commentText: string;
  commentImage: string;
  commentUserName: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  commentTitle,
  commentPoints,
  commentText,
  commentImage,
  commentUserName,
}) => {
  const stars = Array(5).fill(0);
  return (
    <Card className="testimonial-card">
      <Card.Body>
        <ul className="card-points">
          {stars.map((_, index) => {
            return (
              <li key={index} className={commentPoints > index ? "filled" : ""}>
                <FontAwesomeIcon icon={faStar} />
              </li>
            );
          })}
        </ul>
        <Card.Title as="h3">{commentTitle}</Card.Title>
        <Card.Text as="p">{commentText}</Card.Text>
        <div className="card-user">
          <Image
            width={65}
            height={65}
            className="rounded-full"
            src={`/images/${commentImage}`}
            alt={commentUserName}
          />
          <h4 className="card-username">{commentUserName}</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommentItem;
