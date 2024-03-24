import { Fragment, useState } from "react";
import useFetch from "../../custom_hooks/useFetch";
import Loader from "../Loader";
import Popup from "../Popup";
import { useSearch } from "../../contexts/SearchContext";

const Home = () => {
    const { data, loading, error } = useFetch(`https://cloud.codesupply.co/endpoint/react/data.json`);
    const { searchValue } = useSearch();
    const generateChildren = !error && !loading && data;

    const [openedPopupIndex, setOpenedPopupIndex] = useState(null);

    const openPopup = (index) => setOpenedPopupIndex(index);

    const closePopup = () => setOpenedPopupIndex(null);

    
    const filteredData = generateChildren && data.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    

    return (
        <div className="container" id="posts">
            {generateChildren && 
                filteredData.map((item, index) => {
                    let [title, text] = [item.title, item.text];

                    return (
                        <Fragment key={`card${index + 1}`}>
                            <div className="card" onClick={() => openPopup(index)}>
                                <img src={item.img} alt="" srcSet={item.img_2x} />
                                <div className="tags">{item.tags}</div>
                                <div className="card_title">{title}</div>
                                <div className="card_info">
                                    <div className="autor">{item.autor}</div>
                                    <div className="card_date">{item.date}</div>
                                    <div className="views">{item.views} Views</div>
                                </div>
                                <div className="card_text">{text}</div>
                            </div>
                            {openedPopupIndex === index && (
                                <Popup onClose={closePopup} title={title} text={text} />
                            )}
                        </Fragment>
                    );
                })
            }
            {loading && <Loader />}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default Home;