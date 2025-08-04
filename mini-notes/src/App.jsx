import React from 'react';
import { NotesProvider } from './context/NotesContext';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

const App = () => {
  return (
    <NotesProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">📝 My Notes</h1>
        <div className="max-w-3xl mx-auto">
          <NoteForm />
          <NoteList />
        </div>
      </div>
    </NotesProvider>
  );
};

export default App;
