// ==========================================
// 3. OBJECTS
// ==========================================

// Define a type for famous people
type Person = {
    id: number;
    name: string;
    profession: string;
    dateOfBirth: Date;
    description: string;
    isAlive?: boolean; // Optional property
  };
  
  // Create objects with the defined type
  const adaLovelace: Person = {
    id: 1,
    name: "Ada Lovelace",
    profession: "Mathematician, Writer",
    dateOfBirth: new Date(1815, 11, 10), // December 10, 1815
    description: "Considered the first computer programmer for her work with Charles Babbage's Analytical Engine",
    isAlive: false
  };
  
  const graceHopper: Person = {
    id: 2,
    name: "Grace Hopper",
    profession: "Computer Scientist, United States Navy Rear Admiral",
    dateOfBirth: new Date(1906, 11, 9), // December 9, 1906
    description: "Pioneer of computer programming and invented one of the first linkers"
  };
  
  // Interface for a more complex object
  interface Project {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    contributors: Person[];
    status: "Planning" | "InProgress" | "Completed" | "OnHold"; // Union type for specific values
    budget: {
      allocated: number;
      spent: number;
      currency: string;
    };
  }
  
  // Create a project with the defined interface
  const analyticalEngine: Project = {
    id: 101,
    name: "Analytical Engine",
    description: "A proposed mechanical general-purpose computer",
    startDate: new Date(1837, 0, 1),
    contributors: [adaLovelace],
    status: "OnHold",
    budget: {
      allocated: 10000,
      spent: 8750,
      currency: "GBP"
    }
  }; 