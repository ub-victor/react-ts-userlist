export async function fetchUsers() {
  const response = await fetch("http://localhost:5000/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}
