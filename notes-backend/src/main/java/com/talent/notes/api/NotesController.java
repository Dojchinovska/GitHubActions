package com.talent.notes.api;

import com.talent.notes.model.Tag;
import com.talent.notes.model.User;
import com.talent.notes.security.SecurityService;
import com.talent.notes.service.NoteService;
import com.talent.notes.model.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class NotesController {

    private NoteService notesService;

    private SecurityService securityService;


    public NotesController(NoteService notesService, SecurityService securityService) {

        this.notesService = notesService;
        this.securityService = securityService;
    }

    @PostMapping("/api/notes")
    public Note createNote(@RequestBody Note note) {

        return notesService.createNote(note);
    }

    @GetMapping("/api/notes/{id}")
    public Optional<Note> findNote(@PathVariable Long id) {

        return notesService.findNote(id);
    }

    @GetMapping("/api/notes")
    public List<Note> findNotes() {
        User user = securityService.getAuthenticatedUser();
        return notesService.findNotes(user);
    }

    @GetMapping("/api/tags/{id}/notes")
    public List<Note> findNotesByTagId(@PathVariable Long id) {

        return notesService.findNotesByTagId(id);
    }

    @PutMapping("/api/notes/{id}")
    public Note updateNote(@PathVariable("id") Long id, @RequestBody Note note) throws Exception {

        return notesService.updateNote(id, note);
    }

    @DeleteMapping("/api/notes/{id}")
    public void deleteNote(@PathVariable Long id) {

        notesService.deleteNote(id);
    }
}
