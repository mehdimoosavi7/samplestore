import {
  faArrowRightLong,
  faCalendar,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import DateComponent from "./DateComponent"; 

const CommentItem = ({
  blogTitle,
  blogText,
  blogId,
  blogImage,
  blogAuthor,
  blogCommentsCount,
  blogDate,
}: 
  any
) => {
  const writeDate = DateComponent(blogDate);
  return (
    <Card className="blog-card">
      <div className="blog-card-image">
        <img src={`/images/${blogImage}`} alt={blogTitle} />
      </div>
      <Card.Body>
        <div className="blog-card-header">
          <span className="blog-card-header-item text-capitalize">
            <FontAwesomeIcon icon={faUser} />
            {blogAuthor}
          </span>
          <span className="blog-card-header-item text-capitalize">
            <FontAwesomeIcon icon={faComment} />
            {blogCommentsCount}
          </span>
          <span className="blog-card-header-item">
            <FontAwesomeIcon icon={faCalendar} />
            {writeDate}
          </span>
        </div>
        <Card.Title as="h3">{blogTitle}</Card.Title>
        <Card.Text as="p">{blogText}</Card.Text>
        <Link className="card-link" href={`/blogs/${blogId}`}>
          Read more
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CommentItem;
