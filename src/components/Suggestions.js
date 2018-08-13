export default class Suggestions extends Component {
    state = {
        value: ''
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
                                                   {item.name} />
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
    }


   


}
