//overflow: hidden
import { formatDate } from "../../components/formatter"
import { useNavigate } from 'react-router-dom';

export default function ArticlePreview ({id, title, description, author, date, image, featured}) {    
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/blog/${id}`, {
            state: {
                id: id
            }
        })
    }

    return (
        <div onClick={redirect}>
            <h2>{title}</h2>
            <div className="dateArticle">
                <time dateTime={date}>{formatDate(date)}</time>
            </div>
            <p>{description}</p>
        </div>
    )
}
