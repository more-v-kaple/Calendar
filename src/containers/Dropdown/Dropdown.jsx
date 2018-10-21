import React, { PureComponent, Fragment } from 'react';
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
        };
    }

    handleMouseOver = e => {
        const { selectDate } = this.props,
            prevHovered = this.state.hoveredItem,
            hoveredItem = e.target.closest('[data-date]') ?
                e.target.closest('[data-date]').dataset.date
                : null;

        if (prevHovered !== hoveredItem && hoveredItem) {
            selectDate(hoveredItem);

            this.setState({ hoveredItem })
        }
    }

    render () {
        const { list, handleClick } = this.props;

        return (
            <Fragment>
                {
                    list.length ?
                        <div className="dropdown-wrapper arrow-up">
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
                        </div>
                        : null
                }
            </Fragment>
        );
    }
}

Dropdown.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        members: PropTypes.string,
        description: PropTypes.string,
        past: PropTypes.bool
    })).isRequired,
    handleClick: PropTypes.func.isRequired,
    selectDate: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
    list: getFilteredEvents(state, props)
});

const mapDispatchToProps = dispatch => ({
    selectDate: payload => dispatch(selectDate(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
