import React from 'react';
import { useNotes } from '../context/NotesContext';
import NoteCard from './NoteCard';

const NoteList = () => {
  const { notes } = useNotes();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
      {notes.length === 0 && <p className="text-gray-500">No notes yet.</p>}
    </div>
  );
};

export default NoteList;
