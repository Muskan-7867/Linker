import axios from "axios";

interface Link {
  title: string;
  icon: string; // Use a string identifier for the icon (not JSX)
  link: string;
}

export const handleCreateLinktree = async (treeName: string, links: Link[]) => {
  if (!treeName.trim()) {
    alert("Please enter a name for your Linktree.");
    return { success: false };
  }

  // Validate that each link has a title, icon, and URL
  for (const link of links) {
    if (!link.title || !link.link || !link.icon) {
      alert("Each link must have a title, icon, and URL.");
      return { success: false };
    }
  }

  const payload = {
    treeName,
    links: links.map((link) => ({
      title: link.title,
      icon: link.icon, // Only string identifiers
      url: link.link, // Change `link` to `url` for clarity in the API payload
    })),
  };

  try {
    // API call to create the Linktree
    const response = await axios.post(
      "http://localhost:8000/api/v1/link/create",
      payload
    );

    console.log("Linktree created successfully:", response.data);

    // Save response to localStorage
    const userData = {
      treeName: response.data.treeName,
      links: response.data.links,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("userLinktreeData", JSON.stringify(userData));

    alert("Linktree created successfully!");
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error creating Linktree:", error);

    return { success: false };
  }
};
