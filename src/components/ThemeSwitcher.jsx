import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
    const { themeName, setTheme } = useTheme();
    const { register, setValue, watch } = useForm({
        defaultValues: { theme: themeName },
    });

    // Keyboard shortcut: Alt + Q
    useEffect(() => {
        const handleKey = (e) => {
            if (e.altKey && e.key === 'q') {
                const themes = ['light', 'dark', 'retro'];
                const current = watch('theme');
                const next = themes[(themes.indexOf(current) + 1) % themes.length];
                setValue('theme', next);
                setTheme(next);
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [watch, setTheme, setValue]);

    useEffect(() => {
        setTheme(themeName);
        setValue('theme', themeName);
    }, [themeName, setTheme, setValue]);

    return (
        <form className="space-x-4">
            <label className="font-semibold">Theme:</label>
            <select
                {...register('theme')}
                onChange={(e) => setTheme(e.target.value)}
                className="border px-3 py-1 rounded"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="retro">Retro</option>
            </select>
        </form>
    );
}
