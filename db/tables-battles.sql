CREATE TABLE battles (
    id SERIAL PRIMARY KEY,
    winner_name VARCHAR(100) NOT NULL,
    hero1_id INTEGER NOT NULL,
    hero2_id INTEGER NOT NULL,
    FOREIGN KEY (hero1_id) REFERENCES heroes(id),
    FOREIGN KEY (hero2_id) REFERENCES heroes(id)
);

INSERT INTO battles (winner_name, hero1_id, hero2_id)
VALUES ('Superman', 1, 2);
