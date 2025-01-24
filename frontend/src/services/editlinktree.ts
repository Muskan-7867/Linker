import axios from "axios";


const API_URL = "http://localhost:8000/api/v1/link";

// Function to handle editing a Linktree
export const editLinktree = async (id: string, treeName: string, links: { title: string; icon: string; link: string }[]) => {
  try {
    const response = await axios.put(
      `${API_URL}/update`, 
      { treeName, links }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating Linktree:", error);
    
  }
};

// Function to handle deleting a Linktree
export const deleteLinktree = async (id: string) => {
  try {
    const response = await axios.delete(
      `${API_URL}/delete/${id}` 
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting Linktree:", error);
   
  }
};
