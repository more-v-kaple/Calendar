import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './dropdown.scss';

import { selectDate } from 'Redux/actionCreators';

import { getFilteredEvents } from 'Redux/selectors';

import { ID } from 'Constants';

import DropdownItem from 'Components/DropdownItem';

const initialState = {
    hoveredItem: null
};

class Dropdown extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        }
    }

    handleMouseOver = e => {
        const { handleHover } = this.props,
            prevHovered = this.state.hoveredItem,
            hoveredItem = e.target.closest('[data-date]') ?
                e.target.closest('[data-date]').dataset.date
                : null;

        if (prevHovered !== hoveredItem && hoveredItem) {
            handleHover(hoveredItem);
            console.log('handleHover', hoveredItem);
            this.setState({ hoveredItem })
        }
    }

    render () {
        const { handleClick, list } = this.props;

        return (
            <ul className = "dropdown"
                onClick = { handleClick }
                onMouseOver = { this.handleMouseOver }
            >
                {
                    list.map(event => (
                        <DropdownItem
                            key = { event[ID] }
                            event = { event }
                        />
                    ))
                }
            </ul>
        );
    }
}
Dropdown.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
    handleHover: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
    list: getFilteredEvents(state, props)
});

const mapDispatchToProps = dispatch => ({
    handleHover: payload => dispatch(selectDate(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
