import React, {FC} from 'react';
import './ArticleCard.scss';

interface ArticleCardProps {
    article: {
        img: string
        url: string
        title: string
        category: string
        categoryUrl: string
    }
}

const ArticleCard: FC<ArticleCardProps> = ({article}) => {
    const {img, url, title, category, categoryUrl} = article;
    return (
        <div className='articleCard'>
            <a className="img" href={url}>
                <div className='bg' style={{backgroundImage: `url(${img})`}}/>
            </a>

            <div className="content">
                <a href={categoryUrl} className="category">{category}</a>

                <a href={url} className='txt'>{title}</a>
            </div>
        </div>
    )
}

export default ArticleCard;