import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IBlogData from "../../interfaces/IBlogData";
import Loader from "../../components/loader/Loader";

interface IItemDetailsProps {
    items: IBlogData[]
}

const Details: React.FC<IItemDetailsProps> = ({ items }) => {

    const [singleItem, setSingleItem] = useState<null | IBlogData>(null);

    const { itemID } = useParams();

    useEffect(() => {
        if(items && itemID) {
            const findItemByID = items.find((singleItem) => Number(singleItem.id) === Number(itemID));

            setSingleItem(findItemByID || null);
        } else {
            console.error('Item or itemID not found');
        }
    }, [itemID, items])

    if (!singleItem) return <Loader />
    return (  
        <section className="details">
            <img src={singleItem.img_url} alt={singleItem.title} />
            <div className="details__title">
            <h3>{singleItem.title}</h3>
            <p className="bold">{singleItem.published_date}</p>
            </div>
            <p>{singleItem.description}</p>
            <p className="bold">{singleItem.author}</p>
        </section>
    );
}

export default Details;