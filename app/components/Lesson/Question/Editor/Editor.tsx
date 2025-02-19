import { useState, useEffect, useRef, useMemo, use } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

import "./Editor.css";
import { Button } from "@heroui/button";
import { Toaster } from "react-hot-toast";
import { showToast } from "~/components/Notification/Notification";
import { getAllSessions, getOneSession, saveTicket } from "~/utils/utils";
import { AuthContext } from "~/contexts/AuthContext";
import { useFetcher, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import type { courseSessionType } from "~/types/course.type";
import * as Spinners from "react-spinners";
import { Skeleton } from "@heroui/skeleton";
const PulseLoader = Spinners.PulseLoader;

const LICENSE_KEY = "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NjU1ODM5OTksImp0aSI6IjhjZmVlMDg1LTQ0N2MtNDI2ZS05YTU4LWU2YTU5OTFlOTE0YiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkJPWCJdLCJ2YyI6ImM5OGJhZWFkIn0.u6_VTX8FUsfIKpes-3z4NKRJdO6ehOwUUWiR1JGCes2X53RslwzRvf2pDZPf_O5k92YOCW46zj46Tx1R37HZsw";

export default function Editor({ session }: { session: courseSessionType }) {
  const editorContainerRef = useRef(null);
  const editorToolbarRef = useRef(null);
  const editorRef = useRef<any>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const cloud = useCKEditorCloud({ version: "44.1.0" });

  const fetcher = useFetcher();

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { DecoupledEditor, editorConfig } = useMemo(() => {
    if (cloud.status !== "success" || !isLayoutReady) {
      return {};
    }

    const { DecoupledEditor, Alignment, AutoLink, Autosave, Bold, CodeBlock, Essentials, Link, Paragraph, SpecialCharacters } = cloud.CKEditor;

    return {
      DecoupledEditor,
      extraPlugins: "autogrow",
      autoGrow_minHeight: 250,
      autoGrow_maxHeight: 600,

      editorConfig: {
        toolbar: {
          items: ["bold", "|", "specialCharacters", "link", "codeBlock", "|", "alignment"],
          shouldNotGroupWhenFull: false,
        },
        plugins: [Alignment, AutoLink, Autosave, Bold, CodeBlock, Essentials, Link, Paragraph],
        initialData: "",
        licenseKey: LICENSE_KEY,
        link: {
          defaultProtocol: "https://",
          placeholder: "سوال خود را بپرسید ...",
        },
        placeholder: "سوال خود را بپرسید ...",
        language: "fa",
        contentsLangDirection: "rtl",
      },
    };
  }, [cloud, isLayoutReady]);

  const saveQuestionHandler = async (questionBody: string) => {
    if (questionBody) {
      const formData = new FormData();
      formData.append("departmentID", "67a538b31087370b4d8efc40");
      formData.append("departmentSubID", "67a538f31087370b4d8efc48");
      formData.append("title", `پرسش جلسه ${session?.title}`);
      formData.append("priority", "3");
      formData.append("body", questionBody);

      fetcher.submit(formData, { method: "POST", action: "/sendQuestion" });

      if (fetcher?.data?.success === false) {
        showToast("خطا", "خطای غیر منتظره رخ داده است", "error");
      } else {
        showToast("موفق", "پرسش با موفقیت ارسال شد", "success");
        editorRef.current.setData("");
      }
    } else {
      showToast("خطا", "لطفا متن را وارد کنید.", "error");
    }
  };

  if (!isLayoutReady) {
    return <Skeleton className="w-full rounded-xl h-64" />;
  }

  return (
    <div className="flex flex-col items-end gap-4 lg:gap-6">
      <div className="main-container">
        <div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
          <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {DecoupledEditor && editorConfig && (
                <CKEditor
                  onReady={(editor) => {
                    editorRef.current = editor as any;
                    (editorToolbarRef.current as any).appendChild(editor.ui.view.toolbar.element);
                  }}
                  onAfterDestroy={() => {
                    Array.from((editorToolbarRef.current as any).children).forEach((child: any) => child.remove());
                  }}
                  editor={DecoupledEditor}
                  config={editorConfig as any}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Button
        className="h-[42px] lg:h-[46px] w-full lg:w-[102px] font-DanaRegular text-base rounded-lg lg:box-content text-primary border border-primary bg-transparent hover:bg-[#1eb35b1a]"
        onPress={() => {
          if (editorRef.current) {
            saveQuestionHandler(editorRef?.current?.getData());
          }
        }}
      >
        {fetcher.state === "loading" ? <PulseLoader color="#009c4b" className="mx-auto" size={12} /> : <>ارسال</>}
      </Button>
    </div>
  );
}
