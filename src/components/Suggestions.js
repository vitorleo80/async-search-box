import React, { Component } from 'react'
import Downshift from 'downshift'
import axios from 'axios'
import uuid from 'uuid/v4'
import Suggestion from './Suggestion'
import '../App.css'


export default class Suggestions extends Component {
    state = {
        value: '',
        results: []
    }

    render() {
        const { results, value } = this.state
        const noResults = "No results found"
        return (
            <div>
                <Downshift
                    itemToString={item => (item ? item.name : '')}
                >
                    {({ getInputProps, getItemProps, highlightedIndex, isOpen }) => (
                        <div>
                            <input
                                className='input-box'
                                {...getInputProps({
                                    placeholder: 'city, airport, station, region and district...',
                                    onChange: this.inputOnChange
                                })} />
                            {isOpen && value.length > 1 ? (

                                <div className="downshift-dropdown">
                                    {
                                        results.length > 0 ?
                                            results.map((item, index) => (
                                                <div
                                                    className="dropdown-item"
                                                    {...getItemProps({ key: uuid(), index, item })}
                                                    style={{
                                                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white'
                                                    }}>
                                                    {item.name}
                                                </div>
                                            )) :
                                            <div className="dropdown-noresult">
                                                <span>{noResults}</span>
                                            </div>

                                    }
                                </div>
                            ) : null}
                        </div>
                    )}
                </Downshift>
            </div>
        )
    }

    inputOnChange = ({ target: { value } }) => {
        this.setState({ value })
        this.getData(value)
    }


    getData = async () => {
        const { value } = this.state
        try {
            const { data: { results: { docs: results } } } = await
                axios.get(
                    `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${value}`)
            this.setState({ results })
        }
        catch (error) {
            console.error(error)
        }

    }


}
