
const isStrongPassword = (password) => {
  if (password.length < 6 || password.length > 20) {
    return false;
  }
  if (!/[a-z]/.test(password)) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  if (/([a-zA-Z0-9])\1{2,}/.test(password)) {
    return false;
  }
  return true;
}

const minimumStepsToMakeStrong = (password) => {
  let steps = 0;
  if (!isStrongPassword(password)) {
    if (password.length < 6) {
      steps += 6 - password.length;
      return steps
    }
    else if (password.length > 20) {
      steps += password.length - 20;
    }
    if (!/[a-z]/.test(password)) {
      steps += 1;
    }
    if (!/[A-Z]/.test(password)) {
      steps += 1;
    }
    if (!/[0-9]/.test(password)) {
      steps += 1;
    }
    if (/([a-zA-Z0-9])\1{2,}/.test(password)) {
      steps += 1;
    }
  }
  return steps;
}

// Test the function
console.log(minimumStepsToMakeStrong("a"));
console.log(minimumStepsToMakeStrong("aA1"));
console.log(minimumStepsToMakeStrong("1337C0d3"));
