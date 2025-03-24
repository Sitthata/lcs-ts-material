// ==========================================
// 6. SPREAD OPERATIONS
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
  
  // Spread with arrays - copying
  const originalArray: number[] = [1, 2, 3, 4, 5];
  const copyOfArray: number[] = [...originalArray];
  
  console.log("Original:", originalArray);
  console.log("Copy:", copyOfArray);
  
  // Spread with arrays - merging
  const array1: string[] = ["a", "b", "c"];
  const array2: string[] = ["d", "e", "f"];
  const mergedArray: string[] = [...array1, ...array2];
  
  console.log("Merged array:", mergedArray);
  // ["a", "b", "c", "d", "e", "f"]
  
  // Spread with arrays - adding elements
  const numbersWithAdditions: number[] = [0, ...originalArray, 6, 7];
  console.log("With additions:", numbersWithAdditions);
  // [0, 1, 2, 3, 4, 5, 6, 7]
  
  // Spread with objects - copying
  const originalPerson: Person = adaLovelace;
  const personCopy: Person = { ...originalPerson };
  
  console.log("Original person:", originalPerson.name);
  console.log("Copy of person:", personCopy.name);
  
  // Spread with objects - merging
  type ContactInfo = {
    email: string;
    phone: string;
    address: string;
  };
  
  const contactInfo: ContactInfo = {
    email: "ada@example.com",
    phone: "+44-1234-567890",
    address: "London, England"
  };
  
  // Create new object by merging person and contact info
  const personalRecord = {
    ...adaLovelace,
    ...contactInfo
  };
  
  console.log("Personal record:", personalRecord);
  
  // Spread with objects - updating properties
  const updatedPerson: Person = {
    ...adaLovelace,
    profession: "Computer Pioneer, Mathematician",
    description: "First computer programmer who worked on the Analytical Engine"
  };
  
  console.log("Updated profession:", updatedPerson.profession);
  
  // Real-world example: Updating React state (immutably)
  interface UserState {
    name: string;
    email: string;
    preferences: {
      theme: "light" | "dark";
      notifications: boolean;
      language: string;
    };
  }
  
  const currentState: UserState = {
    name: "John Doe",
    email: "john@example.com",
    preferences: {
      theme: "light",
      notifications: true,
      language: "en"
    }
  };
  
  // How you'd update nested state in React (immutably)
  const newState: UserState = {
    ...currentState,
    preferences: {
      ...currentState.preferences,
      theme: "dark"
    }
  };
  
  console.log("Updated theme:", newState.preferences.theme);
  // Updated theme: dark
  console.log("Original theme:", currentState.preferences.theme);
  // Original theme: light 