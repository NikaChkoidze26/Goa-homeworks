export function shout(str) {
    return str.toUpperCase();
  }
  
  export function whisper(str) {
    return str.toLowerCase();
  }
  
  export default function flipCase(str) {
    return str.split('')
              .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
              .join('');
  }
  