import type { Project } from "../../types";
import { people } from "./people";

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