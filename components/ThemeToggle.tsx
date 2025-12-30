import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'system';
    });
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const applyTheme = (currentTheme: Theme) => {
        const root = document.documentElement;

        // Remove existing theme class
        root.classList.remove('dark');

        if (currentTheme === 'dark') {
            root.classList.add('dark');
        } else if (currentTheme === 'system') {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (systemPrefersDark) {
                root.classList.add('dark');
            }
        }
        // Light mode is default (no class)
    };

    useEffect(() => {
        applyTheme(theme);

        // Listener for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [theme]);

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        setIsOpen(false);
    };

    const themes: { id: Theme; label: string; icon: React.ReactNode }[] = [
        { id: 'light', label: 'نهاري', icon: <Sun size={16} className="text-yellow-500" /> },
        { id: 'dark', label: 'ليلي', icon: <Moon size={16} className="text-blue-400" /> },
        { id: 'system', label: 'تلقائي', icon: <Monitor size={16} className="text-gray-500 dark:text-gray-400" /> }
    ];

    const currentThemeData = themes.find(t => t.id === theme) || themes[2];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2 px-3 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all text-gray-900 dark:text-white font-bold text-sm"
            >
                {currentThemeData.icon}
                <span className="hidden md:inline">{currentThemeData.label}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 md:right-0 bg-white dark:bg-[#151516] border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl py-2 min-w-[140px] z-[150] backdrop-blur-xl bg-white/90 dark:bg-[#151516]/90 animate-in fade-in zoom-in duration-200">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => handleThemeChange(t.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-colors ${theme === t.id ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5'}`}
                        >
                            {t.icon}
                            <span className="flex-1 text-start">{t.id === 'system' ? 'تلقائي (النظام)' : t.label}</span>
                            {theme === t.id && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThemeToggle;
