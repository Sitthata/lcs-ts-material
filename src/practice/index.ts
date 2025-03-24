// TypeScript Practice Exercises
// Import the projects data from projects.ts to solve these exercises

import { people, projects, type Person, type Project } from './data';

// ==================================================
// BASICS EXERCISES
// ==================================================

// Exercise 1: Check if a project is over budget
// Create a function that takes a project and returns a message about its budget status
function checkProjectBudget(project: Project): string {
  // Your code here:
  // 1. Calculate if the project is over budget (spent > allocated)
  // 2. Return an appropriate message using string templates
  // 3. Include the project name, budget info, and status in the message
  
  return ''; // Replace with your solution
}

// Exercise 2: Calculate the time a project has been running
// For completed projects, calculate the duration; for ongoing projects, calculate time until today
function calculateProjectDuration(project: Project): string {
  // Your code here:
  // 1. Check if the project has an end date
  // 2. Calculate the appropriate duration in years and months
  // 3. Return a formatted string with the result
  
  return ''; // Replace with your solution
}

// ==================================================
// FUNCTIONS EXERCISES
// ==================================================

// Exercise 3: Create a higher-order function for project filtering
// This function should return another function that filters projects by status
type ProjectFilter = (projects: Project[]) => Project[];

function createStatusFilter(status: Project['status']): ProjectFilter {
  // Your code here:
  // Return a function that filters projects by the given status
  
  return projects => []; // Replace with your solution
}

// Exercise 4: Create a function that takes a sorter function as a parameter
// The function should sort projects based on the provided sorting logic
type ProjectSorter = (a: Project, b: Project) => number;

function sortProjects(projects: Project[], sorter: ProjectSorter): Project[] {
  // Your code here:
  // Use the sorter function to sort and return a new array of projects
  
  return []; // Replace with your solution
}

// ==================================================
// OBJECTS EXERCISES
// ==================================================

// Exercise 5: Create a ProjectSummary type and a function to generate summaries
type ProjectSummary = {
    id: number;
    name: string;
    status: Project['status'];
    completionPercentage: number;
    contributorCount: number;
    totalBudget: number;
    currencyCode: string;
};

function createProjectSummary(project: Project): ProjectSummary {
  // Your code here:
  // Create and return a ProjectSummary from a Project
  
  return {} as ProjectSummary; // Replace with your solution
}

// Exercise 6: Create a function that finds the lead contributor of a project
function findLeadContributor(project: Project, people: Person[]): Person | undefined {
  // Your code here:
  // 1. Check if the project has a leadContributor property
  // 2. Find and return the Person object that matches the leadContributor id
  
  return undefined; // Replace with your solution
}

// ==================================================
// ARRAYS EXERCISES
// ==================================================

// Exercise 7: Use array methods to analyze project data
function analyzeProjects(projects: Project[]): {
  totalBudget: number;
  averageSpent: number;
  statusCounts: Record<Project['status'], number>;
  tagFrequency: Record<string, number>;
} {
  // Your code here:
  // 1. Calculate the total allocated budget across all projects
  // 2. Calculate the average amount spent
  // 3. Count projects by status
  // 4. Count frequency of each tag
  
  return {
    totalBudget: 0,
    averageSpent: 0,
    statusCounts: {} as Record<Project['status'], number>,
    tagFrequency: {}
  }; // Replace with your solution
}

// Exercise 8: Find projects where a person is a contributor
function findPersonProjects(personId: number, projects: Project[]): Project[] {
  // Your code here:
  // Use array methods to find all projects where the person with this ID is a contributor
  
  return []; // Replace with your solution
}

// ==================================================
// DESTRUCTURING EXERCISES
// ==================================================

// Exercise 9: Print a project report using destructuring
function printProjectReport(project: Project): string {
  // Your code here:
  // 1. Use destructuring to extract project properties
  // 2. Use nested destructuring for the budget
  // 3. Return a formatted report string
  
  return ''; // Replace with your solution
}

// Exercise 10: Function that takes destructured parameters
function updateProjectStatus({
  id,
  status,
  newStatus,
  date
}: {
  id: number;
  status: Project['status'];
  newStatus: Project['status'];
  date: Date;
}): string {
  // Your code here:
  // Return a status update message using the destructured parameters
  
  return ''; // Replace with your solution
}

// ==================================================
// SPREAD OPERATIONS EXERCISES
// ==================================================

// Exercise 11: Merge multiple projects into a collaboration project
function createCollaborationProject(
  name: string, 
  description: string, 
  ...projectsToMerge: Project[]
): Project {
  // Your code here:
  // 1. Create a new project object
  // 2. Combine contributors from all projects (avoid duplicates)
  // 3. Sum up budgets
  // 4. Merge tags (avoid duplicates)
  
  return {} as Project; // Replace with your solution
}

// Exercise 12: Update a project immutably (as you would in React)
function updateProjectImmutably(
  project: Project, 
  updates: Partial<Project>
): Project {
  // Your code here:
  // Create a new project with the updates applied without modifying the original
  // Handle nested objects like budget correctly
  
  return {} as Project; // Replace with your solution
}

// ==================================================
// BONUS CHALLENGES
// ==================================================

// Challenge 1: Create a Timeline type and generate project timelines
type TimelineEvent = {
  date: Date;
  projectId: number;
  projectName: string;
  event: string;
};

function generateTimeline(projects: Project[]): TimelineEvent[] {
  // Your code here:
  // Create timeline events for project start and end dates
  // Sort them chronologically
  
  return []; // Replace with your solution
}

// Challenge 2: Implement a project search function with multiple criteria
type SearchCriteria = {
  term?: string;
  status?: Project['status'];
  minBudget?: number;
  maxBudget?: number;
  tag?: string;
  contributorId?: number;
  startAfter?: Date;
  startBefore?: Date;
};

function searchProjects(projects: Project[], criteria: SearchCriteria): Project[] {
  // Your code here:
  // Implement a flexible search function that filters projects based on the provided criteria
  
  return []; // Replace with your solution
}

// Export the exercises functions for testing
export {
  checkProjectBudget,
  calculateProjectDuration,
  createStatusFilter,
  sortProjects,
  createProjectSummary,
  findLeadContributor,
  analyzeProjects,
  findPersonProjects,
  printProjectReport,
  updateProjectStatus,
  createCollaborationProject,
  updateProjectImmutably,
  generateTimeline,
  searchProjects
};