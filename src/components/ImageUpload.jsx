import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useTheme } from "../context/ThemeContext";

export default function ImageUpload({ onUpload }) {
    const { theme } = useTheme();
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            onUpload(fileUrl);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        },
        multiple: false,
    });

    return (
        <div
            {...getRootProps()}
            className={`border-4 rounded-md p-6 text-center cursor-pointer transition-all duration-300 ${isDragActive ? "border-yellow-500 bg-yellow-50" : `border-gray-300 bg-gray-100 ${theme.className}`}`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className="text-blue-600">Drop the image here ...</p>
            ) : (
                <p className="text-gray-600">📁 Drop an image here or click to upload</p>
            )}
        </div>
    );
}
