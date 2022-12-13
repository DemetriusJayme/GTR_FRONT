import { useRef, useState } from "react";

export default function Dropzone() {
  const fileUpload = useRef();
  const [dragOver, setDragOver] = useState(false);

  function handleDrag(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function handleDragOut(e) {
    setDragOver(false);
  }

  function handleDrop(e) {
    fileUpload.current.files = e.dataTransfer.files;
    e.preventDefault();
  }

  return (
    <>
      <label>Annex</label>
      <div
        className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
        onDragOver={handleDrag}
        onDragEnter={handleDrag}
        onDragLeave={handleDragOut}
        onDrop={handleDrop}>
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div>
            <label htmlFor="file-upload">
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                ref={fileUpload}
                multiple
                accept="image/png, image/jpeg,.pdf"
              />
            </label>
            <p>or drag and drop</p>
          </div>

          <p>PDF, PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </>
  );
}
