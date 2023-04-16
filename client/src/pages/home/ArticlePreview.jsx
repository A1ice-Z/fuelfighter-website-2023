//overflow: hidden
import {useEffect, useState} from "react";
import { formatDate } from "../../components/formatter"
import { useNavigate } from 'react-router-dom';

export default function ArticlePreview({ id, title, description, author, date, image, featured }) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/blog/${id}`, {
      state: {
        id: id,
      },
    });
  };

  const [maxLength, setMaxLength] = useState(getMaxLength());

  function getMaxLength() {
    if (window.innerWidth <= 600) {
      return 20;
    } else if (window.innerWidth > 600 && window.innerWidth <= 1000) {
      return 40;
    } else if (window.innerWidth > 1000 && window.innerWidth <= 1200) {
      return 30;
    } else if (window.innerWidth > 1200 && window.innerWidth <= 1700){
      return 50;
    } else {
        return 90;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setMaxLength(getMaxLength());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const words = description.split(' ');
  const truncatedDescription =
    words.length > maxLength
      ? words.slice(0, maxLength).join(' ') + '...'
      : description;

  return (
    <div onClick={redirect}>
      <h2>{title}</h2>
      <div className="dateArticle">
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      <p>{truncatedDescription}</p>
    </div>
  );
}