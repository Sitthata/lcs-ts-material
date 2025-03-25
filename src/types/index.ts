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