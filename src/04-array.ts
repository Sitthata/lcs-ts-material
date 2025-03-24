// ==========================================
// 4. ARRAYS
// ==========================================

// First, define the Person type (if not already defined)
type Person = {
    id: number;
    name: string;
    profession: string;
    dateOfBirth: Date;
    description: string;
    isAlive?: boolean; // Optional property
  };
  
  // Sample people data (for the examples)
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
  
  // Array of objects with typing
  const famousPeople: Person[] = [
    adaLovelace,
    graceHopper,
    {
      id: 3,
      name: "Alan Turing",
      profession: "Mathematician, Computer Scientist",
      dateOfBirth: new Date(1912, 5, 23), // June 23, 1912
      description: "Father of theoretical computer science and artificial intelligence"
    },
    {
      id: 4,
      name: "Linus Torvalds",
      profession: "Software Engineer",
      dateOfBirth: new Date(1969, 11, 28), // December 28, 1969
      description: "Creator of the Linux kernel and Git version control system",
      isAlive: true
    },
    {
      id: 5,
      name: "Tim Berners-Lee",
      profession: "Computer Scientist",
      dateOfBirth: new Date(1955, 5, 8), // June 8, 1955
      description: "Inventor of the World Wide Web",
      isAlive: true
    }
  ];
  
  // Array method: forEach
  console.log("List of famous people:");
  famousPeople.forEach((person: Person, index: number) => {
    console.log(`${index + 1}. ${person.name} - ${person.profession}`);
  });
  
  // Array method: map
  const peopleNames: string[] = famousPeople.map((person: Person) => person.name);
  console.log("Names only:", peopleNames);
  // ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Linus Torvalds", "Tim Berners-Lee"]
  
  // Array method: filter
  const livingPeople: Person[] = famousPeople.filter(
    (person: Person) => person.isAlive === true
  );
  console.log("Living people:", livingPeople.map(person => person.name));
  // ["Linus Torvalds", "Tim Berners-Lee"]
  
  // Array method: sort (by date of birth)
  const sortedByAge: Person[] = [...famousPeople].sort(
    (a: Person, b: Person) => a.dateOfBirth.getTime() - b.dateOfBirth.getTime()
  );
  console.log("Sorted by date of birth (oldest first):");
  sortedByAge.forEach(person => {
    console.log(`${person.name} (${person.dateOfBirth.getFullYear()})`);
  });
  
  // Array method: find
  const findTuring: Person | undefined = famousPeople.find(
    (person: Person) => person.name.includes("Turing")
  );
  console.log("Found:", findTuring?.name);
  // Found: Alan Turing
  
  // Array method: reduce
  const averageBirthYear: number = famousPeople.reduce(
    (sum: number, person: Person) => sum + person.dateOfBirth.getFullYear(), 
    0
  ) / famousPeople.length;
  
  console.log(`Average birth year: ${Math.round(averageBirthYear)}`);
  // Average birth year: 1932 