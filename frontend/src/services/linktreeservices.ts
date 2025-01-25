import axios from "axios";

interface Link {
  title: string;
  icon: string;  // Use a string identifier for the icon (not JSX)
  link: string;
}

export const handleCreateLinktree = async (treeName: string, links: Link[]) => {
  if (!treeName) {
    alert("Please enter a name for your Linktree.");
    return;
  }

  try {
    // Validate that each link has a title, icon, and URL
    for (const link of links) {
      if (!link.title || !link.link || !link.icon) {
        alert("Each link must have a title, icon, and URL.");
        return;
      }
    }

    const payload = {
      treeName,
      links: links.map((link) => ({
        title: link.title,
        icon: link.icon,  
        url: link.link,
      })),
    };
    

    // Make the API call to create the Linktree
    const response = await axios.post("http://localhost:8000/api/v1/link/create", payload);

    console.log("Linktree created successfully:", response.data);
    alert("Linktree created successfully!");

    // Save the response data to localStorage (ensure no JSX/DOM elements)
    const userData = {
      treeName: response.data.treeName,
      links: response.data.links,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("userLinktreeData", JSON.stringify(userData));  
  } catch (error) {
    console.error("Error creating Linktree:", error);
    alert("Failed to create Linktree. Please try again.");
  }
};