import React from 'react';
import { InputGroup } from 'react-bootstrap';

class FilterData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterName: "",
            filterArea: "",
        }
    }

    render() {
        const sampleData = this.props.data;
        return (
            <InputGroup>
                <select name="filterArea" id="filterArea" onChange={(data) => this.props.setStates('FilterArea', data.target.value)}>
                    {(sampleData[0]) ? Object.keys(sampleData[0]).map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    }) : null}
                </select>
                <input type="text" name="filter" id="filter" placeholder="filter goes here..." onChange={(e) => { this.props.setStates('FilterName', e.target.value) }} />
            </InputGroup>
        )
    }
}

export default FilterData