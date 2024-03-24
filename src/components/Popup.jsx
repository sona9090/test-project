const Popup = ({onClose, title, text}) => {
    return (
        <div className="popup_overlay">
            <div className="overlay" onClick={onClose}></div>
            <div className="popup">
                <div className="close_popup" onClick={onClose}></div>
                <div className="popup_title">{title}</div>
                <div className="popup_text">{text}</div>
            </div>
        </div>
    )
}

export default Popup;