package com.talent.notes.repository;

import com.talent.notes.model.Note;
import com.talent.notes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface NotesRepository extends JpaRepository<Note, Long> {

   // @Query("from Note n where n.tag.id = ?1")
    List<Note> findNotesByTagsId(Long id);

    List<Note> findByUser(User user);

    @Transactional
     void deleteById(Long id);

}
