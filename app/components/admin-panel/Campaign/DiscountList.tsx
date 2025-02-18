import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@heroui/react";
import { useFetcher } from "react-router";
import { showToast } from "~/components/Notification/Notification";
import CustomModal from "../Modals/CustomModal";
import { useState } from "react";

export default function DiscountList({ discount }: { discount: number | null }) {
  const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);

  const fetcher = useFetcher();

  const removeDiscountOffer = () => {
    fetcher.submit({ discount: 0 }, { method: "POST" });

    if (fetcher?.data?.success === false) {
      showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
    } else {
      showToast("موفق", "جشنواره با موفقیت حذف شد", "success");
    }
  };

  return (
    <>
      <CustomModal isOpen={isOpenRemoveModal} onClose={() => setIsOpenRemoveModal(false)} title={`آیا از حذف جشنواره اطمینان دارید؟`} action={removeDiscountOffer} />

      <Table
        aria-label="Example static collection table"
        classNames={{
          th: "font-lalezar text-base font-normal",
          wrapper: "font-DanaMedium",
        }}
      >
        <TableHeader>
          <TableColumn align="center">درصد تخفیف</TableColumn>
          <TableColumn align="center">حذف</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{discount}</TableCell>
            <TableCell>
              <Button color="danger" size="sm" onPress={() => setIsOpenRemoveModal(true)}>
                حذف
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
