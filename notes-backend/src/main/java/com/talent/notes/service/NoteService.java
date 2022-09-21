package com.talent.notes.service;

import com.talent.notes.model.Note;
import com.talent.notes.model.Tag;
import com.talent.notes.model.User;
import com.talent.notes.repository.NotesRepository;
import com.talent.notes.repository.UserRepository;
import com.talent.notes.security.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    private NotesRepository notesRepository;

    private UserRepository userRepository;

    private SecurityService securityService;

    public NoteService(NotesRepository notesRepository, UserRepository userRepository, SecurityService securityService) {
        this.notesRepository = notesRepository;
        this.userRepository = userRepository;
        this.securityService = securityService;
    }

    public List<Note> findNotes(User user) {

        return notesRepository.findByUser(user);
    }

    public Optional<Note> findNote(Long id) {

        return notesRepository.findById(id);
    }

    public void deleteNote(Long id) {

        notesRepository.deleteById(id);
    }

    public List<Note> findNotesByTagId(Long id) {

        return notesRepository.findNotesByTagsId(id);
    }

    public Note updateNote(Long id, Note note) {

        Optional<Note> n = notesRepository.findById(id);
        n.ifPresent(updatedNote -> {
            updatedNote.setTitle(note.getTitle());
            updatedNote.setContent(note.getContent());
        });

        return notesRepository.save(n.get());
    }

    public Note createNote(Note note) {
        User user = securityService.getAuthenticatedUser();
        note.setUser(user);
        return this.notesRepository.saveAndFlush(note);
    }
}
