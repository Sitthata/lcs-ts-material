import type { Person } from "../../types";

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