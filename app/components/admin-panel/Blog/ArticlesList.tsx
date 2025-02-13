import { useCallback, useState } from "react";
import { Button, Chip } from "@heroui/react";
import { CheckCircleIcon, TomanIcon } from "public/svg/svgs";
import { useFetcher, useNavigate } from "react-router";
import RichTable from "../RichTable";
import type { articleType } from "~/types/article.type";
import ArticleDeleteBtn from "./ArticleDeleteBtn";

export const columns = [
  { name: "شناسه", uid: "_id", sortable: false },
  { name: "عنوان", uid: "title", sortable: true },
  { name: "نام کوتاه", uid: "shortName", sortable: false },
  { name: "نویسنده", uid: "creator", sortable: false },
  { name: "وضعیت", uid: "publish" },
  { name: "مشاهده", uid: "draft" },
  { name: "حذف", uid: "delete" },
];


const INITIAL_VISIBLE_COLUMNS = ["_id", "title", "shortName", "creator", "publish", "draft", "delete"];

export default function ArticleList({ article }: { article: articleType[] }) {
  const navigate = useNavigate();

  const renderCell = useCallback((article: articleType, columnKey: keyof {}) => {
    const cellValue = article[columnKey];

    switch (columnKey) {
      case "_id":
        return <span className="md:truncate md:line-clamp-1">{article._id}</span>;

      case "title":
        return <span className="md:truncate md:line-clamp-1">{article.title}</span>;
      case "shortName":
        return <span className="md:truncate md:line-clamp-1">{article.shortName}</span>;
      case "creator":
        return <span className="md:truncate md:line-clamp-1">{article.creator.name}</span>;
      case "publish":
        return <span className="md:line-clamp-1">{article.publish ? "منتشر شده" : "پیش نویس"}</span>;

      case "draft":
        return (
          <span className="md:line-clamp-1">
            {article.publish ? (
              <CheckCircleIcon className="size-5 mx-auto" />
            ) : (
              <Button
                color="warning"
                size="sm"
                onPress={() => {
                  navigate(`/admin-panel/blog/${article.shortName}`);
                }}
              >
                ادامه نوشتن
              </Button>
            )}
          </span>
        );

      case "delete":
        return <ArticleDeleteBtn article={article} />;
      default:
        return cellValue;
    }
  }, []);
  return (
    <>
      <RichTable columns={columns} statusOptions={[]} filterKey="status" INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} data={article} renderCell={renderCell} searchKey="body" dataTitle="دوره" />
    </>
  );
}
