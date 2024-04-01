// RTE stand for "Real time editor", in this file we will make RTE
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form"; // it performs same function as forwardRef () hook

// Ya "control"  hee responsible ha, is component ki sari states ko dosray component mai laay kar janaay ka liay (control will come from parent element who will call it similar as "ref")
function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        //  is field ka andaar agar kuch bhi change hota hai too mujhaay inform kar dena
        render={({ field: { onChange } }) => (
          // yahan par haam wo element likhangaay jo haam naay render karwana hai
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
