package com.talent.notes.repository;

import com.talent.notes.model.Tag;
import com.talent.notes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface TagRepository  extends JpaRepository<Tag,Long> {

    List<Tag> findByUser(User user);

    @Transactional
    void deleteById(Long id);
}
