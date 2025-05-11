import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function TextEditor({ onTextChange }) {
    const { theme } = useTheme();
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
        onTextChange(e.target.value);
    };

    return (
        <div className="mt-4">
            <label className="block mb-2">Text to print (max 3 lines)</label>
            <textarea
                value={text}
                onChange={handleChange}
                rows={3}
                maxLength={150}
                placeholder="Write your message..."
                className={`w-full p-3 rounded resize-none ${theme.input}`}
            />
        </div>
    );
}
