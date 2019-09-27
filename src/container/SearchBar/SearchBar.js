import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        //Se tiene que bind porque este se declaro, haciendo que su this pierda su contexto
        //En cambio si se usa arrow function como los otros, this no pierde su contexto
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }else{
            return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({ sortBy: sortByOption });
    }

    handleTermChange(event){
        this.setState({ term: event.target.value });
    }

    handleLocationChange = event => {
        this.setState({ location: event.target.value });
    }

    handleSearch = event =>{
        const { term, location, sortBy } = this.state;
        this.props.searchYelp(term, location, sortBy);
        event.preventDefault();
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption =>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li 
                key={ sortByOptionValue }
                className={ this.getSortByClass(sortByOptionValue) } 
                onClick={ this.handleSortByChange.bind(this, sortByOptionValue) }
                >
                    { sortByOption }
                </li>;
        });
    }
    render(){
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <h2>Start by submitting your desire</h2>
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={ this.handleTermChange } />
                <input placeholder="Where?" onChange={ this.handleLocationChange } />
            </div>
            <div className="SearchBar-submit">
                <button onClick={ this.handleSearch }>Let's Go</button>
            </div>
        </div>
        );
    }
}

export default SearchBar;