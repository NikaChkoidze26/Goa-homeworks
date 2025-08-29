export function getYear() {
    return new Date().getFullYear();
  }
  
  export function getMonth() {
    return new Date().getMonth() + 1; 
  }
  
  export default function getDateString() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }
  