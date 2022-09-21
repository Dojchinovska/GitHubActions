package com.talent.notes.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(name = "deleted")
    private boolean isDeleted;

    @ManyToMany(mappedBy = "tags")
    @JsonIgnore
    List<Note> notes = new ArrayList<>();

    @JsonIgnore
    @ManyToOne
    private User user;

    public Tag(String name, User user) {
        this.name = name;
        this.user = user;
        this.isDeleted = false;
    }

    public void setIsDeleted(boolean deleted) {
        this.isDeleted = deleted;
    }

    @Override
    public String toString() {
        return "Tag{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}