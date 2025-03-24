// projects.ts - Sample data for TypeScript exercises

// Type definitions
export type Person = {
    id: number;
    name: string;
    profession: string;
    dateOfBirth: Date;
    description: string;
    isAlive?: boolean; // Optional property
    nationality?: string;
  };
  
  export interface Project {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate?: Date; // Optional - some projects are ongoing
    contributors: Person[];
    status: "Planning" | "InProgress" | "Completed" | "OnHold"; // Union type
    budget: {
      allocated: number;
      spent: number;
      currency: string;
    };
    tags?: string[]; // Optional array of tags
    leadContributor?: number; // Optional reference to a Person's id
  }
  
  // Famous people in computing history
  export const people: Person[] = [
    {
      id: 1,
      name: "Ada Lovelace",
      profession: "Mathematician, Writer",
      dateOfBirth: new Date(1815, 11, 10), // December 10, 1815
      description: "Considered the first computer programmer for her work with Charles Babbage's Analytical Engine",
      isAlive: false,
      nationality: "British"
    },
    {
      id: 2,
      name: "Charles Babbage",
      profession: "Mathematician, Engineer, Inventor",
      dateOfBirth: new Date(1791, 11, 26), // December 26, 1791
      description: "Originated the concept of a digital programmable computer",
      isAlive: false,
      nationality: "British"
    },
    {
      id: 3,
      name: "Alan Turing",
      profession: "Mathematician, Computer Scientist",
      dateOfBirth: new Date(1912, 5, 23), // June 23, 1912
      description: "Father of theoretical computer science and artificial intelligence",
      isAlive: false,
      nationality: "British"
    },
    {
      id: 4,
      name: "Grace Hopper",
      profession: "Computer Scientist, United States Navy Rear Admiral",
      dateOfBirth: new Date(1906, 11, 9), // December 9, 1906
      description: "Pioneer of computer programming and invented one of the first linkers",
      isAlive: false,
      nationality: "American"
    },
    {
      id: 5,
      name: "Tim Berners-Lee",
      profession: "Computer Scientist",
      dateOfBirth: new Date(1955, 5, 8), // June 8, 1955
      description: "Inventor of the World Wide Web",
      isAlive: true,
      nationality: "British"
    },
    {
      id: 6,
      name: "Linus Torvalds",
      profession: "Software Engineer",
      dateOfBirth: new Date(1969, 11, 28), // December 28, 1969
      description: "Creator of the Linux kernel and Git version control system",
      isAlive: true,
      nationality: "Finnish"
    },
    {
      id: 7,
      name: "Margaret Hamilton",
      profession: "Computer Scientist",
      dateOfBirth: new Date(1936, 7, 17), // August 17, 1936
      description: "Developed the on-board flight software for NASA's Apollo missions",
      isAlive: true,
      nationality: "American"
    },
    {
      id: 8,
      name: "Brendan Eich",
      profession: "Computer Programmer",
      dateOfBirth: new Date(1961, 6, 4), // July 4, 1961
      description: "Creator of JavaScript",
      isAlive: true,
      nationality: "American"
    },
    {
      id: 9,
      name: "Anders Hejlsberg",
      profession: "Software Engineer",
      dateOfBirth: new Date(1960, 11, 2), // December 2, 1960
      description: "Lead architect of TypeScript and C#",
      isAlive: true,
      nationality: "Danish"
    }
  ];
  
  // Historical computing projects
  export const projects: Project[] = [
    {
      id: 101,
      name: "Analytical Engine",
      description: "A proposed mechanical general-purpose computer",
      startDate: new Date(1837, 0, 1),
      contributors: [people[0], people[1]], // Ada Lovelace, Charles Babbage
      status: "OnHold",
      budget: {
        allocated: 10000,
        spent: 8750,
        currency: "GBP"
      },
      tags: ["mechanical", "computing", "historical"],
      leadContributor: 2 // Charles Babbage
    },
    {
      id: 102,
      name: "ENIAC",
      description: "First programmable, electronic, general-purpose digital computer",
      startDate: new Date(1943, 4, 1),
      endDate: new Date(1945, 10, 1),
      contributors: [people[3]], // Grace Hopper (simplified history)
      status: "Completed",
      budget: {
        allocated: 500000,
        spent: 487000,
        currency: "USD"
      },
      tags: ["electronic", "computing", "historical"],
      leadContributor: 4 // Grace Hopper
    },
    {
      id: 103,
      name: "Apollo Guidance Computer",
      description: "Computer system for the Apollo program that put humans on the moon",
      startDate: new Date(1965, 0, 1),
      endDate: new Date(1969, 6, 20),
      contributors: [people[6]], // Margaret Hamilton
      status: "Completed",
      budget: {
        allocated: 150000,
        spent: 180000,
        currency: "USD"
      },
      tags: ["aerospace", "navigation", "embedded"],
      leadContributor: 7 // Margaret Hamilton
    },
    {
      id: 104,
      name: "Turing Machine",
      description: "A mathematical model of computation",
      startDate: new Date(1936, 0, 1),
      endDate: new Date(1936, 11, 31),
      contributors: [people[2]], // Alan Turing
      status: "Completed",
      budget: {
        allocated: 1000,
        spent: 1000,
        currency: "GBP"
      },
      tags: ["theoretical", "mathematical", "foundations"],
      leadContributor: 3 // Alan Turing
    },
    {
      id: 105,
      name: "World Wide Web",
      description: "An information system enabling documents and resources to be accessed over the Internet",
      startDate: new Date(1989, 2, 1),
      endDate: new Date(1991, 7, 6),
      contributors: [people[4]], // Tim Berners-Lee
      status: "Completed",
      budget: {
        allocated: 50000,
        spent: 53000,
        currency: "CHF"
      },
      tags: ["internet", "hypertext", "protocol"],
      leadContributor: 5 // Tim Berners-Lee
    },
    {
      id: 106,
      name: "Linux Kernel",
      description: "A free and open-source Unix-like operating system kernel",
      startDate: new Date(1991, 8, 17),
      contributors: [people[5]], // Linus Torvalds
      status: "InProgress", // Still being developed
      budget: {
        allocated: 0,
        spent: 0,
        currency: "USD"
      },
      tags: ["operating-system", "open-source", "unix"],
      leadContributor: 6 // Linus Torvalds
    },
    {
      id: 107,
      name: "JavaScript",
      description: "A programming language that is one of the core technologies of the World Wide Web",
      startDate: new Date(1995, 4, 1),
      endDate: new Date(1995, 11, 4),
      contributors: [people[7]], // Brendan Eich
      status: "Completed",
      budget: {
        allocated: 100000,
        spent: 95000,
        currency: "USD"
      },
      tags: ["web", "language", "scripting"],
      leadContributor: 8 // Brendan Eich
    },
    {
      id: 108,
      name: "TypeScript",
      description: "A strongly typed programming language that builds on JavaScript",
      startDate: new Date(2010, 9, 1),
      contributors: [people[8]], // Anders Hejlsberg
      status: "InProgress", // Still being developed
      budget: {
        allocated: 2000000,
        spent: 1500000,
        currency: "USD"
      },
      tags: ["language", "javascript", "typed"],
      leadContributor: 9 // Anders Hejlsberg
    },
    {
      id: 109,
      name: "Quantum Computing Research",
      description: "Theoretical research into quantum computing possibilities",
      startDate: new Date(2020, 0, 1),
      contributors: [people[2], people[3], people[8]], // Turing, Hopper, Hejlsberg
      status: "Planning",
      budget: {
        allocated: 5000000,
        spent: 1200000,
        currency: "USD"
      },
      tags: ["quantum", "research", "future"],
      leadContributor: 3 // Alan Turing (anachronistic, but for example purposes)
    }
  ];
  
  export default projects;