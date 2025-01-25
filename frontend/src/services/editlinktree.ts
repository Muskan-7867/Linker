import axios from 'axios';

// Function to update Linktree
export const editLinktree = async (
  id: string,
  treeName: string,
  links: { title: string; icon: string; link: string }[]
) => {
  try {
    const response = await axios.put(`http://localhost:8000/api/vi/link/update${id}`, {
      treeName,
      links,
    });
    return response.data; 
  } catch (error) {
    console.error("Error updating Linktree:", error);
    throw error; 
  }
};
