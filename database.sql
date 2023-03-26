CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (50) NOT NULL,
	"description" VARCHAR (200) NOT NULL,
	"path" VARCHAR (200),
    "likes" INTEGER
);

INSERT INTO "gallery" 
	("title", "description", "path", "likes") 
VALUES 
	('Aussy', 'Photo of a Australian Sheprad.', 'images/aussy_Small.jpeg', 0),
	('Goat', 'Photo of a goat taken at Glacier National Park.', 'images/goat_small.jpg', 0),
	('FatCat', 'Photo of a fat cat.', 'images/leo_small.jpeg', 0),
	('Puppy', 'Photo of a cute puppy.', 'images/lyra_small.jpeg', 0),
	('Molecule', 'Photo of a psilocybin molecule.', 'images/psilocybin_small.jpeg', 0),
	('Mountain', 'Photo of LongsPeak.', 'images/longspeak_small.jpeg', 0);
	
SELECT * FROM gallery ORDER by id ASC;
	
UPDATE gallery SET likes = likes + 1 WHERE id = 1;
