insert into user (id, username, password) values (101, 'angela', 'angela');
insert into user (id, username, password) values (102, 'user1', 'password');

insert into note (id, title, content, user_id) values (1, 'Book', 'Pride and Prejudice - Jane Austin', 101);
insert into note (id, title, content, user_id) values (3, 'Movie', 'A bout de souffle - Godard', 101);
insert into note (id, title, content, user_id) values (4, 'Poem', 'Lady Lazarus - Sylvia Plath', 101);
insert into note (id, title, content, user_id) values (2, 'Magazines', 'Vogue', 102);

insert into tag (id, name, deleted, user_id) values (10,'literature', false, 101);
insert into tag (id, name, deleted, user_id) values (11, 'news', false, 102);
insert into tag (id, name, deleted, user_id) values (12, 'movie', false, 101);
insert into tag (id, name, deleted, user_id) values (13, 'poem', false, 101);
insert into tag (id, name, deleted, user_id) values (14, 'French New Wave', false, 101);

insert into note_tags (notes_id, tags_id) values(1, 10);
insert into note_tags (notes_id, tags_id) values (3, 12);
insert into note_tags (notes_id, tags_id) values (4, 13);
insert into note_tags (notes_id, tags_id) values (3, 14)
