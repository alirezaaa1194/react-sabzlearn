import React from "react";
import type { Route } from "./+types/Categories";
import { getAllCategories } from "~/utils/utils";
import AddCategoryForm from "~/components/admin-panel/Categories/AddCategoryForm";
import CategoriesList from "~/components/admin-panel/Categories/CategoriesList";
import type { MetaFunction } from "react-router";

export async function loader({ params, request }: Route.LoaderArgs) {
  const allCategories = await getAllCategories();

  return { allCategories };
}


export const meta:MetaFunction=()=> {
  return [{ title: "دسته بندی ها - پنل مدیریت - سبزلرن" }];
}

function Categories({ loaderData }: Route.ComponentProps) {
  const allCategories = [...loaderData.allCategories.data].reverse();

  return (
    <div className="md:p-5 flex flex-col gap-5 md:gap-10">
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          افزودن <span className="text-secondary">دسته بندی</span> جدید
        </span>
        <AddCategoryForm categories={allCategories} />
      </div>
      <div className="flex flex-col gap-10 p-5 bg-darker rounded-md">
        <span className="text-xl font-lalezar text-white">
          لیست <span className="text-secondary">دسته بندی ها</span>
        </span>
        <CategoriesList categories={allCategories} />
      </div>
    </div>
  );
}

export default Categories;
