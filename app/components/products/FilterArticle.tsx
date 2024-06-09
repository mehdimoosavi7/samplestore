import React from "react";

interface FilterArticleProps {
  title?: string;
  content?: React.ReactNode;
  key?: string;
}

const FilterArticle: React.FC<FilterArticleProps> = ({
  title,
  content,
  key,
}) => {
  return (
    <article key={key} className="filter-article">
      <h4 className="filter-article-title">{title}</h4>
      {content}
    </article>
  );
};

export default FilterArticle;
