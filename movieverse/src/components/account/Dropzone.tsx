import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdFileUpload } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useAccount } from "~/hooks/useAccount";
import { useMessageListener } from "~/hooks/useMessageListener";
import { useUsersStore } from "~/zustand/usersStore";
import Toast from "../Toast";

export const Dropzone = () => {
  const { userId } = useUsersStore();
  const { uploadProfilePicFn, profileLoading, profileError, profileSuccess } =
    useAccount();

  const [messages, setMessages] = useState<
    { name: string; value: string | null }[]
  >([]);

  useEffect(() => {
    setMessages([
      { name: "profileError", value: profileError?.message || null },
      {
        name: "profileSuccess",
        value: profileSuccess ? "Credentials updated." : null,
      },
    ]);
  }, [profileError, profileSuccess]);

  const currentMessage = useMessageListener(messages);

  const [files, setFiles] = useState<(File & { preview: string })[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview!));
  }, [files]);

  const thumbs = files.map((file) => (
    <div className="grid place-items-center" key={file.name}>
      <div>
        <img
          className=""
          src={file.preview!}
          onLoad={() => {
            URL.revokeObjectURL(file.preview!);
          }}
          alt="user-upload"
        />
      </div>
    </div>
  ));

  const handleUpload = () => {
    const file = files[0];
    uploadProfilePicFn({ userId, file });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl text-center space-y-5 w-10/12">
      <div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="grid place-items-center">
              <MdOutlineDoneOutline style={{ color: "gray" }} size={100} />
              <p className="font-medium"> Drop your image here.</p>
            </div>
          ) : (
            <div className="grid place-items-center">
              <MdFileUpload style={{ color: "gray" }} size={100} />
              <p className="font-medium">
                Drag and drop your image here or click to upload an image
              </p>
            </div>
          )}
        </div>
      </div>

      {files.length > 0 && (
        <button disabled={profileLoading} className="btn-primary" onClick={handleUpload}>
          Update profile
        </button>
      )}

      {currentMessage && (
        <Toast
          type={currentMessage.name.includes("Error") ? "error" : "success"}
          message={currentMessage.value}
        />
      )}

      <aside className="w-full h-full rounded-xl overflow-hidden">
        {thumbs}{" "}
      </aside>
    </div>
  );
};
