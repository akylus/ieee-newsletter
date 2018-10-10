import React from 'react';
import Nav from './Nav'; 
import './ArticleCard.css';
const Card = (props) => {
  return (
    <div>
	    <div class='ArticleStyle'>
        <article class="br2 ba dark-gray b--black mv8 w-100 w-50-m w-40-l mw8 center shadow-5 grow pointer">
          <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
          <div class="pa2 ph3-ns pb3-ns">
            <div class="dt w-100 mt1">
              <div class="dtc">
                <h1 class="f5 f4-ns mv0"> { props.title } </h1>
              </div>
              <div class="dtc tr">
                <h2 class="f5 mv0"> { props.date }</h2>
              </div>
            </div>
            <p class="f6 lh-copy measure mt2 mid-gray"> { props.description } </p>
            <div class="tr">
                <h2 class="f6 lh-copy measure mt2 mid-gray mv0"> - by { props.author }</h2>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Card;