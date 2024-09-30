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
        id: 1,
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
        id: 2,
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
        id: 3,
        title: "Waves and Optics Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is the frequency of a wave?",
            options: [
              "The number of waves per second",
              "The height of a wave",
              "The distance between waves",
              "The speed of a wave",
            ],
            answer: "The number of waves per second",
          },
          {
            question: "What phenomenon explains the bending of light?",
            options: [
              "Reflection",
              "Refraction",
              "Diffraction",
              "Interference",
            ],
            answer: "Refraction",
          },
          {
            question: "What is the speed of light?",
            options: [
              "300,000 km/s",
              "150,000 km/s",
              "1,000 km/s",
              "3,000 km/s",
            ],
            answer: "300,000 km/s",
          },
          {
            question: "What is the range of visible light?",
            options: ["380-750 nm", "400-700 nm", "500-800 nm", "600-900 nm"],
            answer: "380-750 nm",
          },
          {
            question: "What type of wave is sound?",
            options: [
              "Longitudinal",
              "Transverse",
              "Surface",
              "Electromagnetic",
            ],
            answer: "Longitudinal",
          },
        ],
      },
      {
        id: 4,
        title: "Classical Mechanics Quiz",
        difficulty: "Easy",
        questions: [
          {
            question: "What is Newton's second law?",
            options: ["F = ma", "v = d/t", "E = mc²", "p = mv"],
            answer: "F = ma",
          },
          {
            question: "What does inertia refer to?",
            options: [
              "Resistance to change in motion",
              "Force acting on an object",
              "Mass of an object",
              "Energy of an object",
            ],
            answer: "Resistance to change in motion",
          },
          {
            question: "What is momentum?",
            options: [
              "Mass times velocity",
              "Mass times acceleration",
              "Force times time",
              "Energy divided by time",
            ],
            answer: "Mass times velocity",
          },
          {
            question: "What is gravitational force?",
            options: [
              "Attractive force between two masses",
              "Force due to friction",
              "Centripetal force",
              "Electromagnetic force",
            ],
            answer: "Attractive force between two masses",
          },
          {
            question: "What is the unit of force?",
            options: ["Newton", "Joule", "Pascal", "Watt"],
            answer: "Newton",
          },
        ],
      },
      {
        id: 5,
        title: "Modern Physics Quiz",
        difficulty: "Medium",
        questions: [
          {
            question: "What is the theory of relativity?",
            options: [
              "Theory of space and time",
              "Theory of electromagnetism",
              "Theory of quantum mechanics",
              "Theory of classical mechanics",
            ],
            answer: "Theory of space and time",
          },
          {
            question: "What is the fundamental particle of light?",
            options: ["Photon", "Electron", "Neutron", "Proton"],
            answer: "Photon",
          },
          {
            question: "What is the uncertainty principle?",
            options: [
              "Limit of measuring position and momentum",
              "Limit of measuring energy and time",
              "Limit of measuring speed and direction",
              "Limit of measuring mass and velocity",
            ],
            answer: "Limit of measuring position and momentum",
          },
          {
            question: "What is the speed of light in vacuum?",
            options: [
              "300,000 km/s",
              "150,000 km/s",
              "1,000,000 km/s",
              "500,000 km/s",
            ],
            answer: "300,000 km/s",
          },
          {
            question: "What is quantum entanglement?",
            options: [
              "Connection between particles at a distance",
              "Transfer of energy between particles",
              "Absorption of light by particles",
              "Collision of particles",
            ],
            answer: "Connection between particles at a distance",
          },
        ],
      },
      {
        id: 6,
        title: "Electricity and Magnetism Quiz",
        difficulty: "Hard",
        questions: [
          {
            question: "What is the unit of electric charge?",
            options: ["Coulomb", "Volt", "Ohm", "Ampere"],
            answer: "Coulomb",
          },
          {
            question: "What is Ohm's law?",
            options: ["V = IR", "E = mc²", "F = ma", "P = IV"],
            answer: "V = IR",
          },
          {
            question: "What does a capacitor do?",
            options: [
              "Stores electric charge",
              "Resists current",
              "Produces electromagnetic fields",
              "Converts energy",
            ],
            answer: "Stores electric charge",
          },
          {
            question:
              "What is the magnetic field around a current-carrying wire?",
            options: ["Circular", "Linear", "Conical", "Square"],
            answer: "Circular",
          },
          {
            question: "What is the principle behind electric generators?",
            options: [
              "Electromagnetic induction",
              "Friction",
              "Heat transfer",
              "Chemical reaction",
            ],
            answer: "Electromagnetic induction",
          },
        ],
      },
    ],
  },
];

export default quizData;
