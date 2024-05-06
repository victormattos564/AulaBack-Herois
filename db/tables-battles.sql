CREATE TABLE battles (
    id SERIAL PRIMARY KEY,
    winner_id INTEGER,
    hero1_id INTEGER NOT NULL,
    hero2_id INTEGER NOT NULL,
    perdedor_id INTEGER,
    FOREIGN KEY (hero1_id) REFERENCES heroes(id),
    FOREIGN KEY (hero2_id) REFERENCES heroes(id),
    FOREIGN KEY (winner_id) REFERENCES heroes(id)
);
  

INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (1, 1, 2);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (2, 1, 3);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (3, 1, 4);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (4, 1, 5);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (5, 1, 6);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (6, 1, 7);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (7, 1, 8);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (8, 1, 9);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (9, 1, 10);
INSERT INTO battles (winner_id, hero1_id, hero2_id) VALUES (10, 1, 11);