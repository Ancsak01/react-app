import React from 'react';
import { InputGroup } from 'react-bootstrap';

class FilterData extends React.Component {
    constructor(props ,data) {
        super(props)
        this.state = {
            filterName: "",
            filterArea: "",
            paramData: data
        }
    }

    getFilteredData(){
        const filteredData = this.state.paramData.filter(item => {
            let chosenItem = (this.state.filterArea) ? item[this.state.filterArea].toString() : item["file_name"]
            if (this.state.filterArea) {
                console.log(item[this.state.filterArea]);
            }
            return chosenItem.toLowerCase().includes(this.state.filterName.toLowerCase())
        })
        return filteredData;
    }

    render() {
        //const filteredData = this.getFilteredData(this.state.paramData);
        const sampleData = this.state.paramData;
        return (
            <InputGroup>
                <select name="filterArea" id="filterArea" onChange={(data) => this.setState({ filterArea: data.target.value })}>
                    {(sampleData[0]) ? Object.keys(sampleData[0]).map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    }) : null}
                </select>
                <input type="text" name="filter" id="filter" placeholder="filter goes here..." onChange={(e) => { this.setState({ filterName: e.target.value }) }} />
            </InputGroup>
        )
    }
}

export default FilterData