// Helper simple para fetch a nuestra API
export async function apiGet(path) {
const res = await fetch(path);
if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
return res.json();
}