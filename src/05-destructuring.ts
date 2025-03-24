// ==========================================
// 5. DESTRUCTURING
// ==========================================

// First, define the necessary types and sample data (if not already defined)
type Person = {
    id: number;
    name: string;
    profession: string;
    dateOfBirth: Date;
    description: string;
    isAlive?: boolean;
  };
  
  // Sample data for the examples
  const adaLovelace: Person = {
    id: 1,
    name: "Ada Lovelace",
    profession: "Mathematician, Writer",
    dateOfBirth: new Date(1815, 11, 10),
    description: "Considered the first computer programmer for her work with Charles Babbage's Analytical Engine",
    isAlive: false
  };
  
  const graceHopper: Person = {
    id: 2,
    name: "Grace Hopper",
    profession: "Computer Scientist, United States Navy Rear Admiral",
    dateOfBirth: new Date(1906, 11, 9),
    description: "Pioneer of computer programming and invented one of the first linkers"
  };
  
  const analyticalEngine = {
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
  
  const famousPeople = [adaLovelace, graceHopper];
  const sortedByAge = [...famousPeople].sort(
    (a, b) => a.dateOfBirth.getTime() - b.dateOfBirth.getTime()
  );
  
  // Object destructuring - basic
  const { name, profession, description } = adaLovelace;
  console.log(`${name} was a ${profession}. ${description}`);
  
  // Object destructuring with alias
  const { name: personName, dateOfBirth: dob } = graceHopper;
  console.log(`${personName} was born on ${dob.toDateString()}`);
  
  // Object destructuring with default values
  const { isAlive = false } = graceHopper; // Default to false if property doesn't exist
  console.log(`Is alive: ${isAlive}`);
  
  // Nested object destructuring
  const { budget: { allocated, spent, currency } } = analyticalEngine;
  console.log(`Project budget: ${allocated} ${currency}, Spent: ${spent} ${currency}`);
  
  // Array destructuring - basic
  const [first, second] = famousPeople;
  console.log(`First two: ${first.name}, ${second.name}`);
  
  // Array destructuring - skipping elements
  const [, secondPerson] = famousPeople;
  console.log(`Second person: ${secondPerson.name}`);
  
  // Array destructuring - rest pattern
  const [earliest, ...rest] = sortedByAge;
  console.log(`Earliest born: ${earliest.name}`);
  console.log(`Others: ${rest.map(p => p.name).join(', ')}`);
  
  // Function parameter destructuring
  function displayPersonInfo({ name, profession, dateOfBirth }: Person): string {
    const birthYear = dateOfBirth.getFullYear();
    return `${name} (${birthYear}) was a ${profession}`;
  }
  
  console.log(displayPersonInfo(adaLovelace));
  // Ada Lovelace (1815) was a Mathematician, Writer 