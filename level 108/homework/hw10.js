export default function createUser(name) {
    return { id: Date.now(), name };
  }
  
export function deleteUser(id) {
    console.log(`User ${id} deleted`);
  }
  