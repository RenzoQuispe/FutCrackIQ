CREATE TABLE partidos_ucl (
    id INT AUTO_INCREMENT PRIMARY KEY,
    temporada VARCHAR(20),
    fase VARCHAR(50),
    equipo_local VARCHAR(100),
    equipo_visitante VARCHAR(100),
    resultado VARCHAR(20)
);
CREATE TABLE partidos_mundiales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    año VARCHAR(20),
    fase VARCHAR(50),
    equipo1 VARCHAR(100),
    equipo2 VARCHAR(100),
    resultado VARCHAR(20)
);
CREATE TABLE partidos_libertadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    temporada VARCHAR(20),
    fase VARCHAR(50),
    equipo_local VARCHAR(100),
    equipo_visitante VARCHAR(100),
    resultado VARCHAR(20)
);
CREATE TABLE goleadores_ucl (
    id INT AUTO_INCREMENT PRIMARY KEY,
    temporada VARCHAR(20),
    jugador VARCHAR(50),
    equipo VARCHAR(100),
    goles INT
);
CREATE TABLE goleadores_mundiales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    año VARCHAR(20),
    jugador VARCHAR(50),
    pais VARCHAR(100),
    goles INT
);
CREATE TABLE goleadores_libertadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    año VARCHAR(20),
    jugador VARCHAR(50),
    pais VARCHAR(100),
    goles INT
);
