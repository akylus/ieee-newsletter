import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

const CardList= ({ articles }) => {
		const cardsArray = articles.map((user,i) => {
			return (<ArticleCard key= {i} id={articles[i].id} title={articles[i].title} date={articles[i].date} description={articles[i].description} author={articles[i].author} branch={articles[i].branch} /> );
		})
		return(
			<div>
				{ cardsArray }
			</div>
		);
}

export default CardList; 