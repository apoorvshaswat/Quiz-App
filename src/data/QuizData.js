const quizData = [
  {
    category: "Science",
    quizzes: [
      {
        id: 1,
        title: "General Science Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "What is the boiling point of water?",
            options: ["100°C", "0°C", "50°C", "25°C"],
            answer: "100°C",
          },
          {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Pb"],
            answer: "Au",
          },
          {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Carbon Dioxide",
          },
          {
            question: "What is the hardest natural substance on Earth?",
            options: ["Diamond", "Gold", "Iron", "Platinum"],
            answer: "Diamond",
          },
          {
            question: "What is the center of an atom called?",
            options: ["Nucleus", "Proton", "Neutron", "Electron"],
            answer: "Nucleus",
          },
        ],
      },
      {
        id: 2,
        title: "Biology Basics Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "What is the basic unit of life?",
            options: ["Atom", "Molecule", "Cell", "Tissue"],
            answer: "Cell",
          },
          {
            question: "What is the primary function of red blood cells?",
            options: [
              "Carry oxygen",
              "Fight infection",
              "Clot blood",
              "Provide energy",
            ],
            answer: "Carry oxygen",
          },
          {
            question: "What is the genetic material in living organisms?",
            options: ["DNA", "RNA", "Protein", "Carbohydrate"],
            answer: "DNA",
          },
          {
            question:
              "What is the process by which plants make their own food?",
            options: [
              "Photosynthesis",
              "Respiration",
              "Digestion",
              "Reproduction",
            ],
            answer: "Photosynthesis",
          },
          {
            question:
              "What organ is responsible for pumping blood throughout the body?",
            options: ["Liver", "Lungs", "Heart", "Kidneys"],
            answer: "Heart",
          },
        ],
      },
      {
        id: 3,
        title: "Chemistry Fundamentals Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is the pH of pure water?",
            options: ["0", "7", "14", "3"],
            answer: "7",
          },
          {
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "KCl", "CaCO3", "MgO"],
            answer: "NaCl",
          },
          {
            question:
              "What type of bond involves the sharing of electron pairs?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            answer: "Covalent",
          },
          {
            question: "What is the boiling point of ethanol?",
            options: ["78°C", "100°C", "120°C", "90°C"],
            answer: "78°C",
          },
          {
            question:
              "What is a substance that speeds up a chemical reaction called?",
            options: ["Catalyst", "Reagent", "Solvent", "Product"],
            answer: "Catalyst",
          },
        ],
      },
      {
        id: 4,
        title: "Earth Science Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "What is the primary gas in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "Nitrogen",
          },
          {
            question: "What is the study of rocks and minerals called?",
            options: ["Geology", "Biology", "Chemistry", "Physics"],
            answer: "Geology",
          },
          {
            question: "What is the water cycle?",
            options: [
              "Evaporation",
              "Condensation",
              "Precipitation",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "What is the process by which rocks are broken down called?",
            options: ["Erosion", "Weathering", "Sedimentation", "Compaction"],
            answer: "Weathering",
          },
          {
            question: "What layer of the Earth do we live on?",
            options: ["Mantle", "Crust", "Core", "Lithosphere"],
            answer: "Crust",
          },
        ],
      },
      {
        id: 5,
        title: "Astronomy Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Mars", "Saturn"],
            answer: "Jupiter",
          },
          {
            question: "What is the name of Earth's natural satellite?",
            options: ["Mars", "Moon", "Pluto", "Sun"],
            answer: "Moon",
          },
          {
            question: "What galaxy is Earth located in?",
            options: [
              "Andromeda Galaxy",
              "Triangulum Galaxy",
              "Milky Way Galaxy",
              "Whirlpool Galaxy",
            ],
            answer: "Milky Way Galaxy",
          },
          {
            question: "How long does it take the Earth to orbit the Sun?",
            options: ["365 days", "30 days", "24 hours", "365.25 days"],
            answer: "365.25 days",
          },
          {
            question: "What is the closest star to Earth?",
            options: ["Sun", "Proxima Centauri", "Sirius", "Vega"],
            answer: "Sun",
          },
        ],
      },
      {
        id: 6,
        title: "Environmental Science Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is the main cause of global warming?",
            options: [
              "Fossil fuels",
              "Solar flares",
              "Volcanoes",
              "Deforestation",
            ],
            answer: "Fossil fuels",
          },
          {
            question:
              "What gas is primarily responsible for the greenhouse effect?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
            answer: "Carbon Dioxide",
          },
          {
            question: "What is biodiversity?",
            options: [
              "Variety of species",
              "Amount of oxygen",
              "Soil fertility",
              "Rate of erosion",
            ],
            answer: "Variety of species",
          },
          {
            question: "What is the process of water becoming vapor called?",
            options: [
              "Evaporation",
              "Condensation",
              "Precipitation",
              "Transpiration",
            ],
            answer: "Evaporation",
          },
          {
            question: "Which of these is a renewable energy source?",
            options: ["Coal", "Natural gas", "Wind", "Nuclear"],
            answer: "Wind",
          },
        ],
      },
    ],
  },
  {
    category: "Physics",
    quizzes: [
      {
        id: 7,
        title: "Fundamental Physics Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "What is the force of gravity on Earth?",
            options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.6 m/s²"],
            answer: "9.8 m/s²",
          },
          {
            question: "What is the formula for kinetic energy?",
            options: ["1/2 mv²", "mv", "mgh", "F=ma"],
            answer: "1/2 mv²",
          },
          {
            question: "What is the unit of electric current?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            answer: "Ampere",
          },
          {
            question: "What does F=ma represent?",
            options: ["Force", "Mass", "Acceleration", "Energy"],
            answer: "Force",
          },
          {
            question: "What is the speed of sound in air?",
            options: ["343 m/s", "300 m/s", "150 m/s", "600 m/s"],
            answer: "343 m/s",
          },
        ],
      },
      {
        id: 8,
        title: "Thermodynamics Quiz",
        difficulty: "Medium",
        questions: [
          {
            question:
              "What is the measure of the average kinetic energy of particles?",
            options: ["Temperature", "Heat", "Pressure", "Volume"],
            answer: "Temperature",
          },
          {
            question:
              "What law states that energy cannot be created or destroyed?",
            options: [
              "First Law of Thermodynamics",
              "Second Law of Thermodynamics",
              "Third Law of Thermodynamics",
              "Law of Conservation of Mass",
            ],
            answer: "First Law of Thermodynamics",
          },
          {
            question: "What is the SI unit of energy?",
            options: ["Joule", "Calorie", "Newton", "Watt"],
            answer: "Joule",
          },
          {
            question:
              "What is the process of heat transfer through a fluid called?",
            options: ["Conduction", "Convection", "Radiation", "Insulation"],
            answer: "Convection",
          },
          {
            question: "What is the total energy of motion and position called?",
            options: [
              "Kinetic Energy",
              "Potential Energy",
              "Mechanical Energy",
              "Thermal Energy",
            ],
            answer: "Mechanical Energy",
          },
        ],
      },
      {
        id: 21,
        title: "Advanced Physics Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is the formula for gravitational potential energy?",
            options: ["mgh", "1/2 mv²", "F=ma", "E=mc²"],
            answer: "mgh",
          },
          {
            question: "What is the speed of light in a vacuum?",
            options: [
              "3 x 10^8 m/s",
              "1 x 10^8 m/s",
              "3 x 10^6 m/s",
              "1.5 x 10^8 m/s",
            ],
            answer: "3 x 10^8 m/s",
          },
          {
            question:
              "What principle states that pressure applied to an enclosed fluid is transmitted undiminished to all parts of the fluid?",
            options: [
              "Bernoulli's Principle",
              "Pascal's Principle",
              "Archimedes' Principle",
              "Newton's Third Law",
            ],
            answer: "Pascal's Principle",
          },
          {
            question:
              "In quantum mechanics, what is the term for the smallest discrete quantity of energy?",
            options: ["Photon", "Quark", "Boson", "Quantum"],
            answer: "Quantum",
          },
          {
            question: "What is the unit of frequency?",
            options: ["Hertz", "Joule", "Newton", "Watt"],
            answer: "Hertz",
          },
        ],
      },
    ],
  },
  {
    category: "History",
    quizzes: [
      {
        id: 9,
        title: "Ancient Civilizations Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "Which civilization is known for the pyramids?",
            options: ["Egyptians", "Romans", "Greeks", "Mesoamericans"],
            answer: "Egyptians",
          },
          {
            question: "Who was the first emperor of China?",
            options: ["Qin Shi Huang", "Sun Tzu", "Confucius", "Genghis Khan"],
            answer: "Qin Shi Huang",
          },
          {
            question: "What was the primary language of the Roman Empire?",
            options: ["Latin", "Greek", "Hebrew", "Arabic"],
            answer: "Latin",
          },
          {
            question:
              "Which battle marked the turning point of the American Civil War?",
            options: ["Gettysburg", "Antietam", "Bull Run", "Vicksburg"],
            answer: "Gettysburg",
          },
          {
            question: "Who discovered America in 1492?",
            options: [
              "Christopher Columbus",
              "Ferdinand Magellan",
              "John Cabot",
              "Amerigo Vespucci",
            ],
            answer: "Christopher Columbus",
          },
        ],
      },
      {
        id: 10,
        title: "Modern History Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "Which event triggered World War I?",
            options: [
              "Assassination of Archduke Ferdinand",
              "Invasion of Poland",
              "Pearl Harbor",
              "Fall of Berlin Wall",
            ],
            answer: "Assassination of Archduke Ferdinand",
          },
          {
            question: "What year did the Berlin Wall fall?",
            options: ["1989", "1991", "1985", "1993"],
            answer: "1989",
          },
          {
            question: "Who was the first female Prime Minister of the UK?",
            options: [
              "Margaret Thatcher",
              "Angela Merkel",
              "Indira Gandhi",
              "Golda Meir",
            ],
            answer: "Margaret Thatcher",
          },
          {
            question: "What was the main cause of the Great Depression?",
            options: [
              "Stock Market Crash",
              "World War I",
              "Drought",
              "Oil Crisis",
            ],
            answer: "Stock Market Crash",
          },
          {
            question:
              "Which country was divided into East and West during the Cold War?",
            options: ["Germany", "Korea", "Vietnam", "China"],
            answer: "Germany",
          },
        ],
      },
      {
        id: 11,
        title: "World War II Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What year did World War II begin?",
            options: ["1939", "1941", "1945", "1935"],
            answer: "1939",
          },
          {
            question: "What was the main conflict in the Pacific during WWII?",
            options: ["Battle of Midway", "D-Day", "Stalingrad", "Hiroshima"],
            answer: "Battle of Midway",
          },
          {
            question: "Who was the leader of the Soviet Union during WWII?",
            options: [
              "Joseph Stalin",
              "Leon Trotsky",
              "Vladimir Lenin",
              "Nikita Khrushchev",
            ],
            answer: "Joseph Stalin",
          },
          {
            question: "What was the name of the Nazi party's leader?",
            options: [
              "Adolf Hitler",
              "Hermann Göring",
              "Heinrich Himmler",
              "Rudolf Hess",
            ],
            answer: "Adolf Hitler",
          },
          {
            question: "What was the outcome of the Battle of Britain?",
            options: [
              "German victory",
              "British victory",
              "Stalemate",
              "Negotiated peace",
            ],
            answer: "British victory",
          },
        ],
      },
      {
        id: 12,
        title: "Famous Historical Figures Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "Who was known as the Iron Lady?",
            options: [
              "Margaret Thatcher",
              "Indira Gandhi",
              "Golda Meir",
              "Angela Merkel",
            ],
            answer: "Margaret Thatcher",
          },
          {
            question: "Who was the first president of the United States?",
            options: [
              "George Washington",
              "Thomas Jefferson",
              "Abraham Lincoln",
              "John Adams",
            ],
            answer: "George Washington",
          },
          {
            question: "Who is known for the theory of evolution?",
            options: [
              "Albert Einstein",
              "Charles Darwin",
              "Isaac Newton",
              "Galileo Galilei",
            ],
            answer: "Charles Darwin",
          },
          {
            question: "Who led the Civil Rights Movement in the U.S.?",
            options: [
              "Martin Luther King Jr.",
              "Malcolm X",
              "Rosa Parks",
              "Nelson Mandela",
            ],
            answer: "Martin Luther King Jr.",
          },
          {
            question:
              "Who was the first female aviator to fly solo across the Atlantic Ocean?",
            options: [
              "Amelia Earhart",
              "Bessie Coleman",
              "Harriet Quimby",
              "Jacqueline Cochran",
            ],
            answer: "Amelia Earhart",
          },
        ],
      },
    ],
  },
  {
    category: "Geography",
    quizzes: [
      {
        id: 13,
        title: "World Capitals Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
          },
          {
            question: "What is the capital of Japan?",
            options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
            answer: "Tokyo",
          },
          {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
            answer: "Ottawa",
          },
          {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
            answer: "Canberra",
          },
          {
            question: "What is the capital of Brazil?",
            options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
            answer: "Brasília",
          },
        ],
      },
      {
        id: 14,
        title: "Physical Geography Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile",
          },
          {
            question: "What mountain range separates Europe and Asia?",
            options: ["Himalayas", "Andes", "Rockies", "Ural"],
            answer: "Ural",
          },
          {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
            answer: "Sahara",
          },
          {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
            answer: "Vatican City",
          },
          {
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: "Pacific",
          },
        ],
      },
      {
        id: 15,
        title: "Geographical Features Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is the highest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            answer: "Mount Everest",
          },
          {
            question: "What body of water separates Saudi Arabia from Africa?",
            options: [
              "Red Sea",
              "Mediterranean Sea",
              "Persian Gulf",
              "Arabian Sea",
            ],
            answer: "Red Sea",
          },
          {
            question: "Which river runs through Egypt?",
            options: ["Nile", "Amazon", "Yangtze", "Ganges"],
            answer: "Nile",
          },
          {
            question: "Which continent is the Sahara Desert located in?",
            options: ["Asia", "Africa", "North America", "Australia"],
            answer: "Africa",
          },
          {
            question: "What is the capital city of Egypt?",
            options: ["Cairo", "Alexandria", "Giza", "Luxor"],
            answer: "Cairo",
          },
        ],
      },
    ],
  },
  {
    category: "Literature",
    quizzes: [
      {
        id: 16,
        title: "Classic Literature Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "Who wrote 'Pride and Prejudice'?",
            options: [
              "Jane Austen",
              "Charles Dickens",
              "Mark Twain",
              "Emily Brontë",
            ],
            answer: "Jane Austen",
          },
          {
            question: "What is the title of the first Harry Potter book?",
            options: [
              "Harry Potter and the Philosopher's Stone",
              "Harry Potter and the Chamber of Secrets",
              "Harry Potter and the Goblet of Fire",
              "Harry Potter and the Order of the Phoenix",
            ],
            answer: "Harry Potter and the Philosopher's Stone",
          },
          {
            question: "Who is the author of '1984'?",
            options: [
              "George Orwell",
              "Aldous Huxley",
              "Ray Bradbury",
              "F. Scott Fitzgerald",
            ],
            answer: "George Orwell",
          },
          {
            question: "Which poet wrote 'The Road Not Taken'?",
            options: [
              "Robert Frost",
              "Emily Dickinson",
              "Walt Whitman",
              "Langston Hughes",
            ],
            answer: "Robert Frost",
          },
          {
            question: "What is the name of Sherlock Holmes' partner?",
            options: [
              "Dr. Watson",
              "Professor Moriarty",
              "Inspector Lestrade",
              "Mycroft Holmes",
            ],
            answer: "Dr. Watson",
          },
        ],
      },
      {
        id: 17,
        title: "Modern Literature Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "Who wrote 'The Fault in Our Stars'?",
            options: [
              "John Green",
              "Nicholas Sparks",
              "Rainbow Rowell",
              "Suzanne Collins",
            ],
            answer: "John Green",
          },
          {
            question:
              "What is the title of the first book in 'The Hunger Games' series?",
            options: [
              "The Hunger Games",
              "Catching Fire",
              "Mockingjay",
              "The Ballad of Songbirds and Snakes",
            ],
            answer: "The Hunger Games",
          },
          {
            question: "Who is the author of the 'Game of Thrones' series?",
            options: [
              "George R.R. Martin",
              "J.R.R. Tolkien",
              "C.S. Lewis",
              "Isaac Asimov",
            ],
            answer: "George R.R. Martin",
          },
          {
            question:
              "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
            options: [
              "A Tale of Two Cities",
              "Great Expectations",
              "Moby Dick",
              "War and Peace",
            ],
            answer: "A Tale of Two Cities",
          },
          {
            question: "Who wrote 'The Great Gatsby'?",
            options: [
              "F. Scott Fitzgerald",
              "Ernest Hemingway",
              "Mark Twain",
              "John Steinbeck",
            ],
            answer: "F. Scott Fitzgerald",
          },
        ],
      },
      {
        id: 18,
        title: "Poetry Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "Who wrote 'The Waste Land'?",
            options: [
              "T.S. Eliot",
              "W.H. Auden",
              "Robert Frost",
              "Emily Dickinson",
            ],
            answer: "T.S. Eliot",
          },
          {
            question: "What is the main theme of 'The Raven'?",
            options: ["Love", "Loss", "Nature", "War"],
            answer: "Loss",
          },
          {
            question:
              "Which poet is known for the line 'Because I could not stop for Death'? ",
            options: [
              "Emily Dickinson",
              "Robert Frost",
              "John Keats",
              "Walt Whitman",
            ],
            answer: "Emily Dickinson",
          },
          {
            question: "What is a common structure of a Shakespearean sonnet?",
            options: ["ABABCDCDEFEFGG", "AABBCC", "ABABAB", "ABCDE"],
            answer: "ABABCDCDEFEFGG",
          },
          {
            question: "Who wrote the epic poem 'Paradise Lost'?",
            options: [
              "John Milton",
              "John Bunyan",
              "William Blake",
              "William Wordsworth",
            ],
            answer: "John Milton",
          },
        ],
      },
      {
        id: 19,
        title: "Famous Fictional Characters Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "Who is the main character in 'Moby Dick'?",
            options: ["Ishmael", "Captain Ahab", "Queequeg", "Starbuck"],
            answer: "Ishmael",
          },
          {
            question: "Which novel features the character Jay Gatsby?",
            options: [
              "To Kill a Mockingbird",
              "The Great Gatsby",
              "1984",
              "Pride and Prejudice",
            ],
            answer: "The Great Gatsby",
          },
          {
            question: "Who is the author of 'Harry Potter' series?",
            options: [
              "J.K. Rowling",
              "C.S. Lewis",
              "Suzanne Collins",
              "Philip Pullman",
            ],
            answer: "J.K. Rowling",
          },
          {
            question: "In which book does the character Atticus Finch appear?",
            options: [
              "The Catcher in the Rye",
              "To Kill a Mockingbird",
              "The Grapes of Wrath",
              "The Old Man and the Sea",
            ],
            answer: "To Kill a Mockingbird",
          },
          {
            question:
              "What is the name of the girl in 'The Diary of a Young Girl'?",
            options: [
              "Anne Frank",
              "Eleanor Roosevelt",
              "Malala Yousafzai",
              "Marie Curie",
            ],
            answer: "Anne Frank",
          },
        ],
      },
      {
        id: 20,
        title: "Literary Devices Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is an allegory?",
            options: [
              "A story with a hidden meaning",
              "A type of rhyme",
              "A character's struggle",
              "A narrative style",
            ],
            answer: "A story with a hidden meaning",
          },
          {
            question:
              "What is the term for a recurring theme or symbol in literature?",
            options: ["Motif", "Metaphor", "Simile", "Imagery"],
            answer: "Motif",
          },
          {
            question:
              "Which device involves giving human characteristics to non-human objects?",
            options: [
              "Personification",
              "Hyperbole",
              "Alliteration",
              "Oxymoron",
            ],
            answer: "Personification",
          },
          {
            question: "What is a sonnet?",
            options: [
              "A 14-line poem",
              "A narrative poem",
              "A type of novel",
              "A dramatic work",
            ],
            answer: "A 14-line poem",
          },
          {
            question: "What is the use of exaggeration for emphasis called?",
            options: ["Hyperbole", "Understatement", "Metaphor", "Simile"],
            answer: "Hyperbole",
          },
        ],
      },
    ],
  },
];

export default quizData;
