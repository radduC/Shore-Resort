CREATE TABLE rooms (
 room_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 featured VARCHAR(50),
 background VARCHAR(50) NOT NULL,
 type VARCHAR(50) NOT NULL,
 price INT NOT NULL,
 img_url VARCHAR(50) NOT NULL,
 room_size VARCHAR(50) NOT NULL,
 max_capacity VARCHAR(50) NOT NULL,
 pets_allowed VARCHAR(50),
 free_breakfast VARCHAR(50),
 room_desc VARCHAR(50) NOT NULL,
 room_url VARCHAR(50) NOT NULL,
 details_id INT NOT NULL,
 extras_id INT NOT NULL
);

CREATE TABLE extras (
    extras_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    room_id INT NOT NULL,
    pillows_bed_linens VARCHAR(50) NOT NULL,
    towels VARCHAR(50) NOT NULL,
    toiletries VARCHAR(50) NOT NULL,
    refreshments VARCHAR(50) NOT NULL,
    internet VARCHAR(50) NOT NULL,
    beds VARCHAR(50) NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

CREATE TABLE details (
    details_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    room_id INT NOT NULL,
    details1 VARCHAR(50) NOT NULL,
    details2 VARCHAR(50) NOT NULL,
    details3 VARCHAR(50) NOT NULL,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);