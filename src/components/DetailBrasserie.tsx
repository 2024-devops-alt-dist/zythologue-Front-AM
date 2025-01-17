import React from "react";
import { useParams } from "react-router-dom";

    const DetailBrasserie = ({ brasseries }) => {
    const { brasserieId } = useParams();
    const brasserie = brasseries.find((b) => b.id === parseInt(brasserieId));

    if (!brasserie) {
        return <div className="p-6 text-red-600">Brasserie non trouvée.</div>;
    }

    return (
        <div className="p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-amber-600 mb-4">{brasserie.name}</h1>
        <p className="text-lg text-gray-700 mb-6">{brasserie.description}</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Les bières proposées :</h2>
        <ul className="space-y-2">
            {brasserie.beers.map((beer) => (
            <li
                key={beer.id}
                className="p-3 border border-gray-300 rounded-md shadow-sm bg-white"
            >
                <p className="text-lg font-medium">{beer.name}</p>
                <p className="text-sm text-gray-600">
                Type : {beer.type} | Alcool : {beer.abv}
                </p>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default DetailBrasserie;
