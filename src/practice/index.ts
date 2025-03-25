// TypeScript Workshop: Historic Computing Projects
// This workshop contains exercises to practice TypeScript with data about historical computing projects.

// Type Definitions (assuming these are in the types.ts file)

import type { Project, Person } from '../types';
import { people } from './data/people';
import { projects } from './data/projects';

// =========================================================================
// Exercise 1: Filter projects that are over budget
// =========================================================================
/**
 * This function should return projects where the spent amount exceeds the allocated budget
 * @param projects Array of projects to analyze
 * @returns Array of projects that are over budget
 */
function getOverBudgetProjects(projects: Project[]): Project[] {
  // TODO: Implement this function
  // Hint: Use the filter method to find projects where budget.spent > budget.allocated
  return [];
}

// Test Exercise 1
console.log('===== Exercise 1: Over Budget Projects =====');
const overBudgetProjects = getOverBudgetProjects(projects);
console.log(overBudgetProjects.map(project => project.name));
// Expected output should include "Apollo Guidance Computer" and "World Wide Web"


// =========================================================================
// Exercise 2: Sort projects using a function as argument
// =========================================================================
/**
 * This function should sort projects based on a provided sorting function
 * @param projects Array of projects to sort
 * @param sortFn Function that takes two projects and returns a number for sorting
 * @returns Sorted array of projects
 */
function sortProjects(projects: Project[], sortFn: (a: Project, b: Project) => number): Project[] {
  // TODO: Implement this function
  // Hint: Use the sort method and the provided sortFn
  return [];
}

// Test Exercise 2
console.log('===== Exercise 2: Sorted Projects =====');

// Sort by start date (oldest first)
const byStartDate = (a: Project, b: Project): number => a.startDate.getTime() - b.startDate.getTime();
const chronologicalProjects = sortProjects(projects, byStartDate);
console.log(chronologicalProjects.map(project => `${project.name} (${project.startDate.getFullYear()})`));

// Sort by budget (highest first)
const byBudgetHighToLow = (a: Project, b: Project): number => b.budget.allocated - a.budget.allocated;
const highBudgetProjects = sortProjects(projects, byBudgetHighToLow);
console.log(highBudgetProjects.map(project => `${project.name} (${project.budget.allocated} ${project.budget.currency})`));


// =========================================================================
// Exercise 3: Find lead contributor
// =========================================================================
/**
 * This function should find the Person object for the lead contributor of a project
 * @param project The project to find the lead contributor for
 * @param people Array of people to search within
 * @returns The Person object of the lead contributor or undefined if not found
 */
function findLeadContributor(project: Project, people: Person[]): Person | undefined {
  // TODO: Implement this function
  // Hint: Use find method to locate the person with id matching project.leadContributor
  return undefined;
}

// Test Exercise 3
console.log('===== Exercise 3: Lead Contributors =====');
projects.forEach(project => {
  const leader = findLeadContributor(project, people);
  console.log(`${project.name} - Lead: ${leader?.name || 'Unknown'}`);
});


// =========================================================================
// Exercise 4: Create collaboration project by merging two projects
// =========================================================================
/**
 * This function should create a new collaboration project by merging two existing projects
 * @param project1 First project to merge
 * @param project2 Second project to merge
 * @param newId ID for the new collaboration project
 * @returns A new Project object representing the collaboration
 */
function createCollaborationProject(project1: Project, project2: Project, newId: number): Project {
  // TODO: Implement this function
  // Hints:
  // - Combine names with "Collaboration: [project1] + [project2]"
  // - Merge descriptions
  // - Use the earlier start date of the two projects
  // - Combine unique contributors (avoid duplicates)
  // - Set status to "Planning"
  // - Add budgets together (assuming same currency)
  // - Combine unique tags
  // - Set lead contributor to project1's lead
  
  return {
    id: newId,
    name: '', // TODO: Implement
    description: '', // TODO: Implement
    startDate: new Date(), // TODO: Use earlier date
    contributors: [], // TODO: Combine unique contributors
    status: 'Planning',
    budget: {
      allocated: 0, // TODO: Sum allocated budgets
      spent: 0, // TODO: Sum spent amounts
      currency: '' // TODO: Use currency from project1 (assume same currency)
    },
    tags: [], // TODO: Combine unique tags
    leadContributor: 0 // TODO: Use project1's lead
  };
}

// Test Exercise 4
console.log('===== Exercise 4: Collaboration Project =====');
const turingMeetsWeb = createCollaborationProject(
  projects.find(p => p.id === 104)!, // Turing Machine
  projects.find(p => p.id === 105)!, // World Wide Web
  200
);
console.log(turingMeetsWeb);


// =========================================================================
// Exercise 5: Create project summary using destructuring
// =========================================================================
interface ProjectSummary {
  title: string;
  yearStarted: number;
  duration: number | 'Ongoing';
  teamSize: number;
  leadName: string;
  isComplete: boolean;
  budgetStatus: 'Under Budget' | 'On Budget' | 'Over Budget';
  technologies: string[];
}

/**
 * This function should create a summary of a project using object destructuring
 * @param project The project to summarize
 * @param people The array of people to find the lead's name
 * @returns A ProjectSummary object
 */
function createProjectSummary(project: Project, people: Person[]): ProjectSummary {
  // TODO: Implement this function using destructuring
  // Hints:
  // - Use object destructuring to extract properties from project
  // - Calculate derived values like duration, budgetStatus
  // - Find the lead's name using the people array

  return {
    title: '',
    yearStarted: 0,
    duration: 0,
    teamSize: 0,
    leadName: '',
    isComplete: false,
    budgetStatus: 'On Budget',
    technologies: []
  };
}

// Test Exercise 5
console.log('===== Exercise 5: Project Summaries =====');
projects.forEach(project => {
  const summary = createProjectSummary(project, people);
  console.log(`${summary.title} (${summary.yearStarted}):`);
  console.log(`  Led by ${summary.leadName}, team of ${summary.teamSize}`);
  console.log(`  Duration: ${summary.duration === 'Ongoing' ? 'Ongoing' : summary.duration + ' years'}`);
  console.log(`  Status: ${summary.isComplete ? 'Complete' : 'Not Complete'}, ${summary.budgetStatus}`);
  console.log(`  Technologies: ${summary.technologies.join(', ')}`);
  console.log();
});