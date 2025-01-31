import { HomeIcon } from "public/svg/svgs";
import React from "react";
import { Link } from "react-router";
import "./Breadcrumb.css";

type BreadcrumbPropsType = {
  titleName: string;
  titleLink: string;

  categoryName: string;
  categoryLink: string;

  dataName: string;
  dataLink: string;
};

function Breadcrumb({ titleName, titleLink, categoryName, categoryLink, dataName, dataLink }: BreadcrumbPropsType) {
  return (
    <div className="breadcrumb flex items-center gap-x-12 p-4 h-13 rounded-lg bg-white dark:bg-darker overflow-x-auto overflow-y-hidden">
      <Link to="/" className="breadcrumb-item relative shrink-0">
        <HomeIcon className="size-6" />
      </Link>
      <Link to={titleLink} className="breadcrumb-item font-DanaLight relative shrink-0">
        <span>{titleName}</span>
      </Link>
      <Link to={categoryLink} className="breadcrumb-item font-DanaLight relative shrink-0">
        <span>{categoryName}</span>
      </Link>
      <Link to={dataLink} className="font-DanaMedium shrink-0">
        <span>{dataName}</span>
      </Link>
    </div>
  );
}

export default Breadcrumb;
