const marvelNetflixSeries = {
    "series": [
        {
            "name": "Daredevil",
            "description": "Blinded as a young boy, Matt Murdock fights injustice by day as a lawyer and by night as the superhero Daredevil in Hell's Kitchen, New York City.",
            "year": "2015-2018",
            "imagePath": "/assets/series/netflix/daredevil/daredevil.jpg",
            "seriesPage": 0,
            "infoLink": "https://www.marvel.com/tv-shows/daredevil/1",
            "prerequisites": [],
            "released":1
        },
        {
            "name": "Jessica Jones",
            "description": "Following a tragic end to her short-lived superhero career, Jessica Jones is rebuilding her personal life and career as a detective who gets pulled into cases involving people with extraordinary abilities in New York City.",
            "year": "2015-2019",
            "imagePath": "/assets/series/netflix/jessica_jones/jessica_jones.jpg",
            "seriesPage": 0,
            "infoLink": "https://www.marvel.com/tv-shows/jessica-jones/1",
            "prerequisites": [],
            "released":1
        },
        {
            "name": "Luke Cage",
            "description": "Given super strength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire in New York City's Harlem.",
            "year": "2016-2018",
            "imagePath": "/assets/series/netflix/luke_cage/luke_cage.jpg",
            "seriesPage": 0,
            "infoLink": "https://www.marvel.com/tv-shows/luke-cage/1",
            "prerequisites": ["Jessica Jones"],
            "released":1
        },
        {
            "name": "Iron Fist",
            "description": "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny as a defender of New York City.",
            "year": "2017-2018",
            "imagePath": "/assets/series/netflix/iron_fist/iron_fist.jpg",
            "seriesPage": 0,
            "infoLink": "https://www.marvel.com/tv-shows/iron-fist/1",
            "prerequisites": [],
            "released":1
        },
        {
            "name": "The Punisher",
            "description": "After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as The Punisher, aiming to fight crime by any means necessary.",
            "year": "2017-2019",
            "imagePath": "/assets/series/netflix/the_punisher/the_punisher.jpg",
            "seriesPage": 0,
            "infoLink": "https://www.marvel.com/tv-shows/the-punisher/1",
            "prerequisites": ["Daredevil"],
            "released":1
        },
        {
            "name": "The Defenders",
            "description": "Daredevil, Jessica Jones, Luke Cage, and Iron Fist join forces to take on common enemies as a sinister conspiracy threatens New York City.",
            "year": "2017",
            "imagePath": "/assets/series/netflix/the_defenders/the_defenders.jpg",
            "seriesPage": 0,
            "infoLink": "https://www.marvel.com/tv-shows/the-defenders/1",
            "prerequisites": ["Daredevil", "Jessica Jones", "Luke Cage", "Iron Fist"],
            "released":1
        }
    ]
};

export default marvelNetflixSeries;
