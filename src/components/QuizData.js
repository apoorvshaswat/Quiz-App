// quizData.js
const quizData = [
  {
    category: "Science",
    quizzes: [
      {
        id: 1,
        title: "General Science Quiz",
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
    ],
  },
  {
    category: "Physics",
    quizzes: [
      {
        id: 1,
        title: "Fundamental Physics Quiz",
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
              "What is the process of transferring heat through fluids called?",
            options: ["Conduction", "Convection", "Radiation", "Insulation"],
            answer: "Convection",
          },
          {
            question: "What is absolute zero?",
            options: ["0 Kelvin", "0 Celsius", "0 Fahrenheit", "273.15 Kelvin"],
            answer: "0 Kelvin",
          },
        ],
      },
      {
        id: 3,
        title: "Optics Quiz",
        questions: [
          {
            question: "What is the bending of light called?",
            options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
            answer: "Refraction",
          },
          {
            question: "What is the unit of frequency?",
            options: ["Hertz", "Decibel", "Joule", "Newton"],
            answer: "Hertz",
          },
          {
            question:
              "What type of lens is thicker at the center than at the edges?",
            options: ["Concave", "Convex", "Bifocal", "Plano"],
            answer: "Convex",
          },
          {
            question:
              "What is the color of the visible spectrum with the longest wavelength?",
            options: ["Red", "Blue", "Green", "Violet"],
            answer: "Red",
          },
          {
            question: "What do we call the point at which light rays converge?",
            options: [
              "Focal Point",
              "Optical Center",
              "Vertex",
              "Principal Axis",
            ],
            answer: "Focal Point",
          },
        ],
      },
      {
        id: 4,
        title: "Electricity Quiz",
        questions: [
          {
            question: "What is the unit of electric resistance?",
            options: ["Ohm", "Volt", "Ampere", "Watt"],
            answer: "Ohm",
          },
          {
            question: "What is Ohm's Law?",
            options: ["V=IR", "P=IV", "E=mc²", "F=ma"],
            answer: "V=IR",
          },
          {
            question: "What is the flow of electric charge called?",
            options: ["Voltage", "Current", "Resistance", "Power"],
            answer: "Current",
          },
          {
            question: "What type of circuit has only one path for current?",
            options: [
              "Series Circuit",
              "Parallel Circuit",
              "Open Circuit",
              "Closed Circuit",
            ],
            answer: "Series Circuit",
          },
          {
            question: "What is the device that stores electrical energy?",
            options: ["Capacitor", "Resistor", "Inductor", "Transformer"],
            answer: "Capacitor",
          },
        ],
      },
    ],
  },
];

export default quizData;
