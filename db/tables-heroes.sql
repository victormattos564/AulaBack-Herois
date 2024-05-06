CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name_heroes VARCHAR(100) NOT NULL,
    power_heroes VARCHAR(100) NOT NULL,
    level INTEGER NOT NULL,
    hp_heroes INTEGER NOT NULL
);

INSERT INTO heroes (name_heroes, power_heroes, level, hp_heroes) VALUES
    ('Superman', 'Super Força', 10, 100),
    ('Batman', 'Inteligência', 10, 90),
    ('Mulher Maravilha', 'Super Velocidade', 10, 95);


CREATE DATABASE gerenciamento_herois;
