import React, { useContext } from 'react';
import LinksContext, { Link } from './LinksContext';
import { FaPlus } from 'react-icons/fa';

function LinkForm() {
    const { links, addNewLink, updateLink } = useContext(LinksContext) as {
        links: Link[];
        addNewLink: () => void;
        updateLink: (index: number, key: keyof Link, value: string) => void;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        updateLink(index, e.target.name as keyof Link, e.target.value);
    };

    return (
        <div className="mt-4  max-h-96 overflow-y-scroll border border-gray-300 rounded p-4 scrollbar-hidden">
            {links.map((link, index) => (
                <div key={index} className="mb-4 border-b pb-4 ">
                    <div className="mb-4 flex  items-center overflow-auto">
                        <label
                            htmlFor={`title-${index}`}
                            className="block text-gray-700 text-sm font-bold mb-2 mr-2"
                        >
                            Title:
                        </label>
                        <input
                            type="text"
                            id={`title-${index}`}
                            name="title"
                            value={link.title}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <FaPlus className="text-green-500 ml-2 cursor-pointer" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label
                            htmlFor={`icon-${index}`}
                            className="block text-gray-700 text-sm font-bold mb-2 mr-2"
                        >
                            Icon:
                        </label>
                        <input
                            type="text"
                            id={`icon-${index}`}
                            name="icon"
                            value={link.icon}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <FaPlus className="text-green-500 ml-2 cursor-pointer" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label
                            htmlFor={`link-${index}`}
                            className="block text-gray-700 text-sm font-bold mb-2 mr-2"
                        >
                            Link:
                        </label>
                        <input
                            type="text"
                            id={`link-${index}`}
                            name="link"
                            value={link.link}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <FaPlus className="text-green-500 ml-2 cursor-pointer" />
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={addNewLink}
                className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                <FaPlus className="mr-2" />
                Add More Links
            </button>
        </div>
    );
}

export default LinkForm;
