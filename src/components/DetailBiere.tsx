    import React from "react";

    function DetailBiere({ beer, onBack }) {
    if (!beer) return null;

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
        <button
            onClick={onBack}
            className="text-sm text-gray-500 mb-4 underline"
        >
            Back to list
        </button>
        <h1 className="text-2xl font-bold text-amber-700">{beer.name}</h1>
        <p className="text-gray-600 text-lg">{beer.type}</p>
        <p className="text-gray-500">Category: {beer.category}</p>
        <p className="text-gray-700 mt-4">{beer.description}</p>
        <p className="text-gray-700 mt-4">{beer.abv} %</p>
        <p className="text-gray-700 mt-4">Prix: {beer.price} €</p>
        </div>
    );
    }

    export default DetailBiere;
