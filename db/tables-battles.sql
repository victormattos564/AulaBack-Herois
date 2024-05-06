CREATE TABLE battles (
    id SERIAL PRIMARY KEY NOT NULL,
    winner_name INT NOT NULL,
    hero1_id INT NOT NULL,
    hero2_id INT NOT NULL,
    FOREIGN KEY (hero1_id) REFERENCES heroes(id),
    FOREIGN KEY (hero2_id) REFERENCES heroes(id),
    FOREIGN KEY (winner_name) REFERENCES heroes(id)
);



INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (1, 1, 2);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (2, 3, 4);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (3, 5, 6);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (4, 7, 8);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (5, 9, 10);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (6, 11, 12);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (7, 13, 14);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (8, 15, 16);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (9, 17, 18);
INSERT INTO battles (winner_name, hero1_id, hero2_id) VALUES (10, 19, 20);
