
import ListeBrasserie from "../components/ListeBrasserie";
import DetailBrasserie from "../components/DetailBrasserie";

    const Brasserie = () => {
    const brasseries = [
        {
        id: 1,
        name: "Brasserie de Paris",
        location: "Paris, France",
        description: "Une brasserie artisanale située en plein cœur de Paris.",
        beers: [
            { id: 1, name: "Bière Blonde", type: "Blonde", alcohol: "5%" },
            { id: 2, name: "Bière Brune", type: "Brune", alcohol: "6%" },
            { id: 3, name: "Bière Blanche", type: "Blanche", alcohol: "4.5%" },
        ],
        },
        {
        id: 2,
        name: "Brasserie de Lyon",
        location: "Lyon, France",
        description: "Une brasserie célèbre pour ses bières fruitées.",
        beers: [
            { id: 4, name: "Bière IPA", type: "IPA", alcohol: "6.5%" },
            { id: 5, name: "Bière Rouge", type: "Rouge", alcohol: "7%" },
        ],
        },
    ];

    return (
        <div>
    <h1>Watou</h1>
    <ListeBrasserie brasseries={brasseries} />
        </div>
    )
    };

    export default Brasserie;
