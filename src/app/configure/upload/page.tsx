"use client";

import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState } from "react";
import DropZone, { FileRejection } from "react-dropzone";

const page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const onDropRejected = () => {};
  const onDropAccepted = () => {};
  const isUploading = false;
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <DropZone
          accept={{
            "image/png": [".png"],
            "image/jpg": [".jpg"],
            "image/jpeg": [".jpeg"],
          }}
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-1 flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input type="text" {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="h-6 w-6 mb-2 text-zinc-500" />
              ) : isUploading ? (
                <Loader2 className="h-6 w-6 text-zinc-500 animate-spin" />
              ) : (
                <Image className="h-6 w-6 text-zinc-500" />
              )}
            </div>
          )}
        </DropZone>
      </div>
    </div>
  );
};

export default page;
