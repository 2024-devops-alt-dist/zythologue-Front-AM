import React from "react";
import { Link } from "react-router-dom";

    const ListeBrasserie = ({ brasseries }) => {
    return (
        <div className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-amber-600 mb-6">Liste des Brasseries</h1>
        <ul className="space-y-4">
            {brasseries.map((brasserie) => (
            <li
                key={brasserie.id}
                className="p-4 border border-gray-300 rounded-md shadow-sm bg-white"
            >
                <h2 className="text-xl font-semibold text-gray-800">{brasserie.name}</h2>
                <p className="text-gray-600">{brasserie.location}</p>
                <Link
                to={`/brasserie/${brasserie.id}`}
                className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
                >
                Voir la fiche détaillée
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default ListeBrasserie;
