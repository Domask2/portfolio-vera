import React from 'react';
import ArticleCard from "./ArticleCard";
import Button from "../Button/Button";
import './Article.scss';

const Article = () => (
    <div className="article">
        <div className="wrapper">
            <h3 className='article_title'>Статьи</h3>

            <div className="article_wrapper">
                <div className="article_content">
                    <div className="card">
                        <ArticleCard
                            img="https://yanakhodkina.com/wp-content/uploads/uprock_school_3.jpg"
                            url="https://yanakhodkina.com/dnevnik-obucheniya-v-uprock-3/"
                            title="Дневник обучения в школе UPROCK (часть 3)"
                            category='Саморазвитие'
                            categoryUrl='https://yanakhodkina.com/samorazvitie/'
                        />

                        <ArticleCard
                            img="https://yanakhodkina.com/wp-content/uploads/uprock_school_3.jpg"
                            url="https://yanakhodkina.com/dnevnik-obucheniya-v-uprock-2/"
                            title="Дневник обучения в школе UPROCK (часть 2)"
                            category='Саморазвитие'
                            categoryUrl='https://yanakhodkina.com/samorazvitie/'
                        />

                        <ArticleCard
                            img="https://yanakhodkina.com/wp-content/uploads/seo-dizajn-sajta-1.jpg"
                            url="https://yanakhodkina.com/seo-dizajn-sajta/"
                            title="Дневник обучения в школе UPROCK (часть 3)"
                            category='Веб-дизайн'
                            categoryUrl='https://yanakhodkina.com/dizajn/'
                        />
                    </div>
                    <Button styleText={{color: 'black'}}>Все статьи</Button>
                </div>
            </div>
        </div>
    </div>
)

export default Article;