// ==========================================
// 2. FUNCTIONS
// ==========================================

// Function with type annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  // Arrow function
  const multiply = (a: number, b: number): number => a * b;
  
  // Function type definition
  type MathOperation = (x: number, y: number) => number;
  
  // Function as a first-class citizen
  // 1. Storing function in a variable
  const add: MathOperation = (a, b) => a + b;
  const subtract: MathOperation = (a, b) => a - b;
  
  // 2. Passing function as an argument
  function calculate(a: number, b: number, operation: MathOperation): number {
    return operation(a, b);
  }
  
  console.log(calculate(10, 5, add));      // 15
  console.log(calculate(10, 5, subtract)); // 5
  
  // 3. Returning a function (higher-order function)
  function createMultiplier(factor: number): (x: number) => number {
    return (number: number): number => number * factor;
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
  
  // Real-world example: Event handler factory for a form
  type FormField = {
    name: string;
    value: string;
  };
  
  type FormChangeHandler = (field: FormField) => void;
  
  function createFormChangeHandler(formName: string): FormChangeHandler {
    return (field: FormField): void => {
      console.log(`Form "${formName}" field "${field.name}" changed to "${field.value}"`);
      // In React, you might update state here
    };
  }
  
  const profileFormHandler = createFormChangeHandler("UserProfile");
  profileFormHandler({ name: "email", value: "user@example.com" });
  // Form "UserProfile" field "email" changed to "user@example.com" 