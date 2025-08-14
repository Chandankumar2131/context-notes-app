import React from 'react';
import { useNotes } from '../context/NotesContext';

const NoteCard = ({ note }) => {
  const { deleteNote } = useNotes();

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold mb-2">{note.title}</h3>
      <p className="text-gray-700 mb-4">{note.content}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;

