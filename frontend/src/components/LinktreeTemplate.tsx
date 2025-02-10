import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

interface Link {
  title: string;
  icon: string;
  link: string;
}

const LinktreeTemplate: React.FC = () => {
  const [treeId, setTreeId] = useState<string>("123");
  const [treeName, setTreeName] = useState<string>("Untitled Linktree");
  const [links, setLinks] = useState<Link[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  useEffect(() => {
    const storedTreeId = localStorage.getItem("treeId");
    const storedTreeName = localStorage.getItem("treeName");
    const storedLinks = localStorage.getItem("links");

    if (storedTreeId) setTreeId(storedTreeId);
    if (storedTreeName) setTreeName(storedTreeName);
    if (storedLinks) setLinks(JSON.parse(storedLinks));
  }, []);

  const handleEdit = async () => {
    try {
      const data = { id: treeId, treeName, links };
      await axios.put("http://localhost:8000/api/v1/link/edit", data, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("treeId", treeId);
      localStorage.setItem("treeName", treeName);
      localStorage.setItem("links", JSON.stringify(links));
      alert("Linktree updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating Linktree:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl w-full bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl rounded-2xl p-6"
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={treeId}
              onChange={(e) => setTreeId(e.target.value)}
              className="text-lg font-bold text-center text-white border-b pb-2 mb-4 bg-transparent w-full outline-none"
              placeholder="Enter Tree ID"
            />
            <input
              type="text"
              value={treeName}
              onChange={(e) => setTreeName(e.target.value)}
              className="text-3xl font-bold text-center text-white border-b pb-2 mb-6 bg-transparent w-full outline-none"
            />
          </>
        ) : (
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-center text-white border-b pb-2 mb-6"
          >
            {treeName}
          </motion.h2>
        )}

        <div className="space-y-4">
          {links.length > 0 ? (
            links.map((link, index) => (
              <motion.div key={index} className="flex items-center p-4 bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg transition">
                <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-40 rounded-full mr-4">
                  <span className="text-xl">{link.icon || "🔗"}</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={link.title}
                    onChange={(e) => {
                      const updatedLinks = [...links];
                      updatedLinks[index].title = e.target.value;
                      setLinks(updatedLinks);
                    }}
                    className="text-lg font-semibold text-white bg-transparent border-b w-full outline-none"
                  />
                ) : (
                  <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                )}
                <p className="text-blue-200 break-all">{link.link}</p>
              </motion.div>
            ))
          ) : (
            <motion.p className="text-white text-center">No links available</motion.p>
          )}
        </div>

        <div className="flex justify-center mt-6">
          {isEditing ? (
            <button onClick={handleEdit} className="bg-green-500 text-white px-4 py-2 rounded-lg">Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LinktreeTemplate;
