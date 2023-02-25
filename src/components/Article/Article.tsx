import React from 'react';
import ArticleCard from "./ArticleCard";
import Button from "../Button/Button";
import {articles} from "../../data";
import './Article.scss';

const Article = () => (
    <div className="article">
        <div className="wrapper">
            <h3 className='article_title'>cтатьи</h3>

            <div className="article_wrapper">
                <div className="article_content">
                    <div className="card">
                        {
                            articles.length > 0 && articles.map((article => (
                                <ArticleCard key={article.id} article={article}/>
                            )))
                        }
                    </div>
                </div>
            </div>


            <div className="article_button">
                <Button styleText={{color: 'black'}}>Все статьи</Button>
            </div>
        </div>
    </div>
)

export default Article;