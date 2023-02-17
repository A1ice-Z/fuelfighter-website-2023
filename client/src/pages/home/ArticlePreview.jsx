//overflow: hidden
import { formatDate } from "../../components/formatter"

export default ({id, title, description, author, date, image, featured}) => {
    
    return (
        <div className="articleViewHome">
            <h2>{title}</h2>
            <time dateTime={date}>{formatDate(date)}</time>
            <p>{description}</p>
        </div>
    )
}
