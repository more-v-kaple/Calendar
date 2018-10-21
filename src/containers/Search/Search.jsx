import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './search.scss';

import clickInterceptor from 'Decorators/clickInterceptor';

import { toggleEventForm } from 'Redux/actionCreators';

import { getSelectedEvent } from 'Redux/selectors';

import findMatch from 'Utils/helpers/findMatch';

import { PLACEHOLDER_SEARCH } from 'Constants';

import InputDropdown from 'Containers/InputDropdown';
import Icon from 'Components/Icons';

const initialState = {
    isDropdownOpened: false,
    inputValue: ''
};
@clickInterceptor({ target: 'search' })
class Search extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        };
    }

    componentDidUpdate (prevProps, prevState) {
        const { outsideClick, disableClickInterceptor } = this.props,
            { isDropdownOpened } = this.state;

        if (isDropdownOpened && outsideClick) {
            this.showDropdown(false);
            disableClickInterceptor();
        }

        if (!isDropdownOpened &&
            isDropdownOpened !== prevState.isDropdownOpened) {
            disableClickInterceptor();
        }
    }

    handleClick = () => {
        const { toggleEventForm, event } = this.props,
            { inputValue } = this.state,
            match = findMatch(inputValue, event);

        this.setState({ inputValue: match });
        toggleEventForm(true);
        this.showDropdown(false);
    }

    showDropdown = status => {
        this.setState({ isDropdownOpened: status });
    }

    handleFocus = () => {
        const { enableClickInterceptor } = this.props;

        this.showDropdown(true);
        enableClickInterceptor();
    }

    handleEraseValue = () => {
        this.setState({ inputValue: '' });
    }

    handleInput = e => {
        const inputValue = e.target.value;

        this.setState({ inputValue });
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
                    handleEraseValue = { this.handleEraseValue }
                    isDropdownOpened = { isDropdownOpened }
                    placeholder = { PLACEHOLDER_SEARCH }
                    handleFocus = { this.handleFocus }
                    handleInput = { this.handleInput }
                    handleClick = { this.handleClick }
                    inputValue = { inputValue }
                />
            </div>
        );
    }
}

Search.propTypes = {
    toggleEventForm: PropTypes.func.isRequired,
    disableClickInterceptor: PropTypes.func,
    enableClickInterceptor: PropTypes.func,
    outsideClick: PropTypes.string,
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.string.isRequired,
        members: PropTypes.string,
        description: PropTypes.string
    })
};

const mapStateToProps = state => ({
    event: getSelectedEvent(state)
});

const mapDispatchToProps = dispatch => ({
    toggleEventForm: payload => dispatch(toggleEventForm(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
