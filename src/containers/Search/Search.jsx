import React, { PureComponent } from 'react';

import './search.scss';

import { PLACEHOLDER_SEARCH } from 'Constants';

import InputDropdown from 'Components/InputDropdown';
import Icon from 'Components/Icons';

const initialState = {
    isDropdownOpened: false,
    inputValue: ''
};

class Search extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        };
    }

    handleClickDropdown = e => {
        console.log(e.target.dataset.id);
    }

    toggleDropdown = () => {
        this.setState(prevState => ({ isDropdownOpened: !prevState.isDropdownOpened }));
    }

    handleInput = e => {
        const inputValue = e.target.value;

        this.setState(prevState => ({ inputValue }));
    }

    render () {
        const { isDropdownOpened, inputValue } = this.state;

        return (
            <div className="search">
                <div className="search__icon">
                    <Icon
                        name="search"
                        size="small"
                    />
                </div>
                <InputDropdown
                    handleClick = { this.handleClickDropdown }
                    isDropdownOpened = { isDropdownOpened }
                    placeholder = { PLACEHOLDER_SEARCH }
                    handleFocus = { this.toggleDropdown }
                    handleBlur = { this.toggleDropdown }
                    handleInput = { this.handleInput }
                    inputValue = { inputValue }
                />
            </div>
        );
    }
}

export default Search;
