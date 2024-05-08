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
  


INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (1, 2, 3, 4);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (2, 3, 4, 5);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (3, 4, 5, 6);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (4, 5, 6, 7);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (5, 6, 7, 8);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (6, 7, 8, 9);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (7, 8, 9, 10);
INSERT INTO battles (winner_id, hero1_id, hero2_id, perdedor_id) VALUES (8, 9, 10, 11);