console.log("This is PAGE.ts");

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch("http://localhost:8000/notes/");
  const notes = await response.json();
  return {
    notes,
  };
};
