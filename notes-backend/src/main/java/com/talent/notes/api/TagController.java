package com.talent.notes.api;

import com.talent.notes.model.Tag;
import com.talent.notes.model.User;
import com.talent.notes.security.SecurityService;
import com.talent.notes.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class TagController {

    private TagService tagService;

    private SecurityService securityService;

    public static class CreateNoteRequest{
        public String name;
    }

    public TagController(TagService tagService, SecurityService securityService) {
        this.tagService = tagService;
        this.securityService = securityService;
    }

    @GetMapping("/api/tags/{id}")
    public Tag findTag(@PathVariable long id) {

        return tagService.findTag(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/api/tags")
    public List<Tag> findTags() {
        User user = securityService.getAuthenticatedUser();
        return tagService.findTags(user);
    }

    @DeleteMapping("/api/tags/{id}")
    public void deleteTagById(@PathVariable Long id) {

        tagService.deleteTagById(id);
    }

    @PostMapping("/api/tags")
    public Tag createTag(@RequestBody Tag tag) {
        return tagService.createTag(tag);
    }


    @PutMapping("/api/tags/{id}")
    public Tag editTag(@PathVariable Long id, @RequestBody Tag tag){
        return tagService.editTag(id, tag);
    }



}
