import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { deletelinktree } from "../services/deletelinktree";
import { editLinktree } from "../services/editlinktree";
import { useNavigate } from "react-router-dom";

interface Link {
  title: string;
  icon?: string;
  url: string;
}

const LinktreeTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [treeId, setTreeId] = useState<string>("");
  const [treeName, setTreeName] = useState<string>("Untitled Linktree");
  const [links, setLinks] = useState<Link[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [deleteMessage, setDeleteMessage] = useState<string>("");
  const [deleteError, setDeleteError] = useState<string>("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
  const [deleteTreeIdInput, setDeleteTreeIdInput] = useState<string>("");

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
      const response = await editLinktree(data);
      console.log("Linktree updated successfully:", response);

      // Update local storage
      localStorage.setItem("treeId", treeId);
      localStorage.setItem("treeName", treeName);
      localStorage.setItem("links", JSON.stringify(links));

      alert("Linktree updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating Linktree:", error);
      alert("Failed to update Linktree. Please try again.");
    }
  };

  const handleDelete = async () => {
    if (!showDeleteConfirmation) {
      setShowDeleteConfirmation(true);
      return;
    }

    if (deleteTreeIdInput !== treeId) {
      setDeleteError("Tree ID does not match. Please enter the correct Tree ID.");
      return;
    }

    try {
      const result = await deletelinktree(treeId); // Call the delete function
      setDeleteMessage(result.message); // Set success message from backend
      navigate('/')
      setDeleteError("");

      // Clear local storage and reset state only if deletion is successful
      localStorage.removeItem("treeId");
      localStorage.removeItem("treeName");
      localStorage.removeItem("links");
      setTreeId("");
      setTreeName("Untitled Linktree");
      setLinks([]);
      setShowDeleteConfirmation(false);
    } catch (error) {
      if (error instanceof Error) {
        setDeleteError(error.message); // Set error message
      } else {
        setDeleteError("An unexpected error occurred.");
      }
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
              placeholder="Enter Tree Name"
            />
          </>
        ) : (
          <>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-center text-white border-b pb-2 mb-6"
            >
              {treeName}
            </motion.h2>
          </>
        )}

        <div className="space-y-4">
          {links.length > 0 ? (
            links.map((link, index) => (
              <motion.div key={index} className="flex items-center p-4 bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg transition">
                <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-40 rounded-full mr-4">
                  {isEditing ? (
                    <input
                      type="text"
                      value={link.icon || ""}
                      onChange={(e) => {
                        const updatedLinks = [...links];
                        updatedLinks[index].icon = e.target.value;
                        setLinks(updatedLinks);
                      }}
                      className="text-xl bg-transparent w-full outline-none text-center"
                      placeholder="Icon"
                    />
                  ) : (
                    <span className="text-xl">{link.icon || "🔗"}</span>
                  )}
                </div>
                <div className="flex-1">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={link.title}
                        onChange={(e) => {
                          const updatedLinks = [...links];
                          updatedLinks[index].title = e.target.value;
                          setLinks(updatedLinks);
                        }}
                        className="text-lg font-semibold text-white bg-transparent border-b w-full outline-none"
                        placeholder="Title"
                      />
                      <input
                        type="text"
                        value={link.url}
                        onChange={(e) => {
                          const updatedLinks = [...links];
                          updatedLinks[index].url = e.target.value;
                          setLinks(updatedLinks);
                        }}
                        className="text-sm text-blue-200 bg-transparent border-b w-full outline-none mt-2"
                        placeholder="url"
                      />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                      <p className="text-blue-200 break-all">{link.url}</p>
                    </>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p className="text-white text-center">No links available</motion.p>
          )}
        </div>
        {showDeleteConfirmation && (
          <div className="mt-4">
            <input
              type="text"
              value={deleteTreeIdInput}
              onChange={(e) => setDeleteTreeIdInput(e.target.value)}
              className="text-lg font-bold text-center text-white border-b pb-2 mb-4 bg-transparent w-full outline-none"
              placeholder="Enter Tree ID to confirm deletion"
            />
          </div>
        )}
        <div className="flex justify-center mt-6 space-x-4">
          {isEditing ? (
            <button onClick={handleEdit} className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit Linktree
            </button>
          )}
          <button
            onClick={handleDelete} 
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete Linktree
          </button>
        </div>

       

        {deleteMessage && <p className="text-green-500 text-center mt-4">{deleteMessage}</p>}
        {deleteError && <p className="text-red-500 text-center mt-4">{deleteError}</p>}
      </motion.div>
    </div>
  );
};

export default LinktreeTemplate;