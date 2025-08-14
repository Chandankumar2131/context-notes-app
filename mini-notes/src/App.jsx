import React from 'react';
import { NotesProvider } from './context/NotesContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const AppContent = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📝 My Notes</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <NoteForm />
      <NoteList />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <NotesProvider>
      <AppContent />
    </NotesProvider>
  </ThemeProvider>
);

export default App;
