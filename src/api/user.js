export async function fetchUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
