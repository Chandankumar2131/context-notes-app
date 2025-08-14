import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="3"
        className="w-full p-2 border rounded"
      ></textarea>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
