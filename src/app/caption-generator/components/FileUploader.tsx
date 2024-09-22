// components/FileUploader.tsx
import React from "react";

interface FileUploaderProps {
  selectedFile: File | null;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ selectedFile, handleFileChange }) => (
  <div className="mb-6 w-full flex flex-col items-center">
    <label className="block mb-2 text-sm font-medium text-gray-700 w-full">
      <div className="flex items-center justify-center h-64 w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200">
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="h-full w-auto object-fit rounded-lg" />
        ) : (
          <span className="text-gray-500">Upload Image</span>
        )}
        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
      </div>
    </label>
  </div>
);

export default FileUploader;
