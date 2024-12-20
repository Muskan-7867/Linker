import React, { useContext } from 'react';
import LinksContext, { Link } from './LinksContext';

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
        <div className="mt-4">
            {links.map((link, index) => (
                <div key={index} className="mb-4">
                  
                    <div className="mb-4">
                        <label htmlFor={`title-${index}`} className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                        <input
                            type="text"
                            id={`title-${index}`}
                            name="title"
                            value={link.title}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border-1 border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor={`icon-${index}`} className="block text-gray-700 text-sm font-bold mb-2">Icon:</label>
                        <input
                            type="text"
                            id={`icon-${index}`}
                            name="icon"
                            value={link.icon}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border-1 border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor={`link-${index}`} className="block text-gray-700 text-sm font-bold mb-2">Link:</label>
                        <input
                            type="text"
                            id={`link-${index}`}
                            name="link"
                            value={link.link}
                            onChange={(e) => handleChange(e, index)}
                            className="shadow appearance-none border-1 border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
            ))}
            <button type="button" onClick={addNewLink} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add More Links</button>
        </div>
    );
}

export default LinkForm;