import React, { Component } from 'react';
import './Homepage.css';
import Signup from './Signup'; 
import SearchBox from './SearchBox'; 
import ArticleCard from './ArticleCard';
import CardList from './CardList';
import { articles } from './Articles';
import tachyons from 'tachyons'; 

class Homepage extends Component {

      constructor() {
      super();
      this.state= {
         articles: articles,
         searchfield: ''
      }
   }

   onSearchChange = (event) => {
      this.setState( {searchfield: event.target.value} );
   }

   render() {
      const filteredArticles = this.state.articles.filter(articles =>{
         return articles.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
   	return(
   		<div>
            
            <div className="App" class="body">
               <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                  <div class="container">
                     <span class="navbar-brand h1 websitename">IEEE - VBIT SB Newsletter</span>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div  id="push"></div>
                     <div class="collapse navbar-collapse " id="navbarText">
                        <ul class="navbar-nav mr-auto pull-right">
                           <li class="nav-item searchbar">
                                <SearchBox searchChange={this.onSearchChange} />
                           </li>
                           <li class="nav-item othernames">
                                <a class="nav-link" href="#">Contact</a>
                           </li>                         
                           <li class="nav-item othernames">
                                <a class="nav-link" href="#">About</a>
                           </li>
                           <li class="nav-item othernames">
                              <div class="dropdown">
                                 <button class="btn btn-secondary dropdown-toggle" id="push" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Department
                                 </button>
                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">CSE</a>
                                    <a class="dropdown-item" href="#">ECE</a>
                                    <a class="dropdown-item" href="#">EEE</a>
                                    <a class="dropdown-item" href="#">Mechanical</a>
                                    <a class="dropdown-item" href="#">IT</a>
                                    <a class="dropdown-item" href="#">Civil</a>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </nav>
            </div>

            <CardList articles = {filteredArticles}/>
         </div>
   	);
   }
}

export default Homepage;