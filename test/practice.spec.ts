import { expect, test, describe } from "bun:test";
import { people, projects, type Project } from '../src/practice/data';
import {
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
} from '../src/practice/index';

// ========================================
// HELPERS
// ========================================

// Helper to create a sample project for testing
function createSampleProject(overrides = {}) {
  return {
    id: 999,
    name: "Test Project",
    description: "A project created for testing",
    startDate: new Date(2020, 0, 1), // Jan 1, 2020
    endDate: new Date(2022, 0, 1),   // Jan 1, 2022
    contributors: [people[0], people[1]],
    status: "Completed" as const,
    budget: {
      allocated: 10000,
      spent: 9500,
      currency: "USD"
    },
    tags: ["test", "sample"],
    leadContributor: people[0].id,
    ...overrides
  };
}

// ========================================
// BASIC EXERCISES TESTS
// ========================================
describe("Basic Exercises", () => {
  
  test("Exercise 1: checkProjectBudget - under budget", () => {
    const project = createSampleProject({
      budget: { allocated: 10000, spent: 9000, currency: "USD" }
    });
    
    const result = checkProjectBudget(project);
    
    expect(result).toContain("under budget");
    expect(result).toContain("1000 USD");
    expect(result).toContain("Test Project");
  });
  
  test("Exercise 1: checkProjectBudget - over budget", () => {
    const project = createSampleProject({
      budget: { allocated: 10000, spent: 11000, currency: "USD" }
    });
    
    const result = checkProjectBudget(project);
    
    expect(result).toContain("over budget");
    expect(result).toContain("1000 USD");
    expect(result).toContain("Test Project");
  });
  
  test("Exercise 1: checkProjectBudget - exactly on budget", () => {
    const project = createSampleProject({
      budget: { allocated: 10000, spent: 10000, currency: "USD" }
    });
    
    const result = checkProjectBudget(project);
    
    expect(result).toContain("exactly on budget");
    expect(result).toContain("10000 USD");
    expect(result).toContain("Test Project");
  });
  
  test("Exercise 2: calculateProjectDuration - completed project", () => {
    const project = createSampleProject({
      startDate: new Date(2020, 0, 1),
      endDate: new Date(2022, 0, 1)
    });
    
    const result = calculateProjectDuration(project);
    
    expect(result).toContain("Test Project");
    expect(result).toContain("2 years");
    expect(result).toContain("ran for");  // Past tense for completed
  });
  
  test("Exercise 2: calculateProjectDuration - ongoing project", () => {
    const project = createSampleProject({
      startDate: new Date(2020, 0, 1),
      endDate: undefined,
      status: "InProgress"
    });
    
    const result = calculateProjectDuration(project);
    
    expect(result).toContain("Test Project");
    expect(result).toContain("running for");  // Present continuous for ongoing
  });
});

// ========================================
// FUNCTIONS EXERCISES TESTS
// ========================================
describe("Function Exercises", () => {
  
  test("Exercise 3: createStatusFilter - filters by status", () => {
    const completedFilter = createStatusFilter("Completed");
    const inProgressFilter = createStatusFilter("InProgress");
    
    // Test data with known counts
    const testProjects = [
      createSampleProject({ status: "Completed" }),
      createSampleProject({ status: "InProgress", id: 998 }),
      createSampleProject({ status: "Completed", id: 997 }),
      createSampleProject({ status: "Planning", id: 996 })
    ];
    
    const completedProjects = completedFilter(testProjects);
    const inProgressProjects = inProgressFilter(testProjects);
    
    expect(completedProjects.length).toBe(2);
    expect(inProgressProjects.length).toBe(1);
    expect(completedProjects[0].status).toBe("Completed");
    expect(inProgressProjects[0].status).toBe("InProgress");
  });
  
  test("Exercise 4: sortProjects - sorts by provided sorter function", () => {
    const testProjects = [
      createSampleProject({ id: 1, startDate: new Date(2021, 0, 1) }),
      createSampleProject({ id: 2, startDate: new Date(2020, 0, 1) }),
      createSampleProject({ id: 3, startDate: new Date(2022, 0, 1) })
    ];
    
    // Sort by start date
    const sortByStartDate = (a: Project, b: Project) => a.startDate.getTime() - b.startDate.getTime();
    const sorted = sortProjects(testProjects, sortByStartDate);
    
    expect(sorted[0].id).toBe(2); // Earliest start date
    expect(sorted[1].id).toBe(1);
    expect(sorted[2].id).toBe(3); // Latest start date
    
    // Original array should be unchanged
    expect(testProjects[0].id).toBe(1);
  });
});

// ========================================
// OBJECTS EXERCISES TESTS
// ========================================
describe("Object Exercises", () => {
  
  test("Exercise 5: createProjectSummary - creates correct summary", () => {
    const project = createSampleProject({
      budget: { allocated: 10000, spent: 9500, currency: "USD" }
    });
    
    const summary = createProjectSummary(project);
    
    expect(summary.id).toBe(project.id);
    expect(summary.name).toBe(project.name);
    expect(summary.status).toBe(project.status);
    expect(summary.contributorCount).toBe(2);
    expect(summary.completionPercentage).toBe(100); // Completed project
  });
  
  test("Exercise 5: createProjectSummary - partial completion", () => {
    const project = createSampleProject({
      status: "InProgress",
      budget: { allocated: 10000, spent: 5000, currency: "USD" }
    });
    
    const summary = createProjectSummary(project);
    
    expect(summary.completionPercentage).toBe(50); // 50% spent = 50% complete
  });
  
  test("Exercise 6: findLeadContributor - finds correct contributor", () => {
    const project = createSampleProject({
      leadContributor: people[0].id
    });
    
    const leader = findLeadContributor(project, people);
    
    expect(leader).not.toBeUndefined();
    expect(leader?.id).toBe(people[0].id);
    expect(leader?.name).toBe(people[0].name);
  });
  
  test("Exercise 6: findLeadContributor - handles missing leader", () => {
    const project = createSampleProject({
      leadContributor: undefined
    });
    
    const leader = findLeadContributor(project, people);
    
    expect(leader).toBeUndefined();
  });
});

// ========================================
// ARRAYS EXERCISES TESTS
// ========================================
describe("Array Exercises", () => {
  
  test("Exercise 7: analyzeProjects - calculates correct statistics", () => {
    const testProjects = [
      createSampleProject({
        status: "Completed",
        budget: { allocated: 10000, spent: 9000, currency: "USD" },
        tags: ["test", "completed"]
      }),
      createSampleProject({
        id: 998,
        status: "InProgress",
        budget: { allocated: 5000, spent: 2000, currency: "USD" },
        tags: ["test", "active"]
      })
    ];
    
    const analysis = analyzeProjects(testProjects);
    
    expect(analysis.totalBudget).toBe(15000);
    expect(analysis.averageSpent).toBe(5500);
    expect(analysis.statusCounts.Completed).toBe(1);
    expect(analysis.statusCounts.InProgress).toBe(1);
    expect(analysis.tagFrequency.test).toBe(2);
    expect(analysis.tagFrequency.completed).toBe(1);
    expect(analysis.tagFrequency.active).toBe(1);
  });
  
  test("Exercise 8: findPersonProjects - finds projects for a contributor", () => {
    const testProjects = [
      createSampleProject({
        contributors: [people[0], people[1]]
      }),
      createSampleProject({
        id: 998,
        contributors: [people[1], people[2]]
      }),
      createSampleProject({
        id: 997,
        contributors: [people[2]]
      })
    ];
    
    const person0Projects = findPersonProjects(people[0].id, testProjects);
    const person1Projects = findPersonProjects(people[1].id, testProjects);
    const person2Projects = findPersonProjects(people[2].id, testProjects);
    
    expect(person0Projects.length).toBe(1);
    expect(person1Projects.length).toBe(2);
    expect(person2Projects.length).toBe(2);
    expect(person0Projects[0].id).toBe(999);
  });
});

// ========================================
// DESTRUCTURING EXERCISES TESTS
// ========================================
describe("Destructuring Exercises", () => {
  
  test("Exercise 9: printProjectReport - includes all required information", () => {
    const project = createSampleProject();
    
    const report = printProjectReport(project);
    
    expect(report).toContain(project.name);
    expect(report).toContain(project.description);
    expect(report).toContain(project.status);
    expect(report).toContain("9500/10000 USD");
    
    // Should include contributor names
    for (const contributor of project.contributors) {
      expect(report).toContain(contributor.name);
    }
  });
  
  test("Exercise 10: updateProjectStatus - formats message correctly", () => {
    const statusUpdate = {
      id: 101,
      status: "OnHold",
      newStatus: "InProgress",
      date: new Date(2023, 1, 15)
    };
    
    const message = updateProjectStatus(statusUpdate);
    
    expect(message).toContain("101");
    expect(message).toContain("OnHold");
    expect(message).toContain("InProgress");
    expect(message).toContain("2/15/2023"); // Date format may vary
  });
});

// ========================================
// SPREAD OPERATIONS EXERCISES TESTS
// ========================================
describe("Spread Operations Exercises", () => {
  
  test("Exercise 11: createCollaborationProject - correctly merges projects", () => {
    const project1 = createSampleProject({
      contributors: [people[0]],
      tags: ["tag1", "tag2"],
      budget: { allocated: 10000, spent: 8000, currency: "USD" }
    });
    
    const project2 = createSampleProject({
      id: 998,
      contributors: [people[1]],
      tags: ["tag2", "tag3"],
      budget: { allocated: 5000, spent: 4000, currency: "USD" }
    });
    
    const collaboration = createCollaborationProject(
      "Collaboration", 
      "A merged project", 
      project1, 
      project2
    );
    
    expect(collaboration.name).toBe("Collaboration");
    expect(collaboration.description).toBe("A merged project");
    expect(collaboration.contributors.length).toBe(2); // No duplicates
    expect(collaboration.budget.allocated).toBe(15000);
    expect(collaboration.budget.spent).toBe(12000);
    
    // Tags should be unique
    expect(collaboration.tags?.length).toBe(3);
    expect(collaboration.tags?.includes("tag1")).toBe(true);
    expect(collaboration.tags?.includes("tag2")).toBe(true);
    expect(collaboration.tags?.includes("tag3")).toBe(true);
  });
  
  test("Exercise 12: updateProjectImmutably - updates without mutation", () => {
    const original = createSampleProject({
      status: "OnHold",
      budget: { allocated: 10000, spent: 5000, currency: "USD" }
    });
    
    const updated = updateProjectImmutably(original, {
      status: "InProgress",
      budget: { allocated: 12000 }
    });
    
    // New object should have updated properties
    expect(updated.status).toBe("InProgress");
    expect(updated.budget.allocated).toBe(12000);
    
    // Original values that weren't updated should be preserved
    expect(updated.budget.spent).toBe(5000);
    expect(updated.budget.currency).toBe("USD");
    
    // Original object should be unchanged
    expect(original.status).toBe("OnHold");
    expect(original.budget.allocated).toBe(10000);
  });
});

// ========================================
// BONUS CHALLENGES TESTS
// ========================================
describe("Bonus Challenges", () => {
  
  test("Challenge 1: generateTimeline - creates chronological events", () => {
    const testProjects = [
      createSampleProject({
        startDate: new Date(2020, 0, 1),
        endDate: new Date(2021, 0, 1)
      }),
      createSampleProject({
        id: 998,
        name: "Second Project",
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2022, 0, 1)
      })
    ];
    
    const timeline = generateTimeline(testProjects);
    
    expect(timeline.length).toBe(4); // 2 projects × 2 events (start + end)
    
    // Events should be in chronological order
    expect(timeline[0].date.getTime()).toBeLessThanOrEqual(timeline[1].date.getTime());
    expect(timeline[1].date.getTime()).toBeLessThanOrEqual(timeline[2].date.getTime());
    
    // Should include correct project info
    const projectEvents = timeline.filter(event => event.projectId === 998);
    expect(projectEvents.length).toBe(2);
    expect(projectEvents[0].projectName).toBe("Second Project");
  });
  
  test("Challenge 2: searchProjects - filters with multiple criteria", () => {
    const testProjects = [
      createSampleProject({
        status: "Completed",
        startDate: new Date(2020, 0, 1),
        budget: { allocated: 10000, spent: 9000, currency: "USD" },
        tags: ["web", "frontend"]
      }),
      createSampleProject({
        id: 998,
        name: "Budget App",
        status: "InProgress",
        startDate: new Date(2022, 0, 1),
        budget: { allocated: 5000, spent: 2000, currency: "USD" },
        tags: ["web", "backend"]
      }),
      createSampleProject({
        id: 997,
        name: "Mobile App",
        status: "Planning",
        startDate: new Date(2023, 0, 1),
        budget: { allocated: 20000, spent: 0, currency: "USD" },
        tags: ["mobile", "frontend"]
      })
    ];
    
    // Test single criterion
    const webProjects = searchProjects(testProjects, { tag: "web" });
    expect(webProjects.length).toBe(2);
    
    // Test multiple criteria
    const searchResults = searchProjects(testProjects, {
      minBudget: 10000,
      tag: "frontend"
    });
    
    expect(searchResults.length).toBe(2);
    expect(searchResults.some(p => p.name === "Test Project")).toBe(true);
    expect(searchResults.some(p => p.name === "Mobile App")).toBe(true);
    
    // Test date criteria
    const recentProjects = searchProjects(testProjects, {
      startAfter: new Date(2021, 0, 1)
    });
    
    expect(recentProjects.length).toBe(2);
    expect(recentProjects.some(p => p.id === 998)).toBe(true);
    expect(recentProjects.some(p => p.id === 997)).toBe(true);
  });
});