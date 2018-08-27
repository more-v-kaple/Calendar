import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './header.scss';

import clickInterceptor from 'Decorators/clickInterceptor';

import Button from 'Components/Button';
import Search from 'Containers/Search';
import QuickAddEvent from 'Containers/QuickAddEvent';

const initialState = {
    isAddEventFormOpen: false
};

@clickInterceptor({ target: 'quick-add-event' })
class Header extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        }
    }

    componentDidUpdate () {
        const { outsideClick } = this.props,
            { isAddEventFormOpen } = this.state;

        if (isAddEventFormOpen && outsideClick) {
            this.closeForm();
        }
    }

    refresh = () => {
        console.log('refresh')
    }

    openForm = () => {
        const { enableClickInterceptor } = this.props;

        this.setState({ isAddEventFormOpen: true });
        enableClickInterceptor();
    }

    closeForm = () => {
        const { disableClickInterceptor } = this.props;

        this.setState({ isAddEventFormOpen: false });
        disableClickInterceptor();
    }

    render () {
        const { isAddEventFormOpen } = this.state,
            pressed = isAddEventFormOpen ? 'pressed' : '';

        return (
            <div className="app__header header">
                <div className="header__controls">
                    <Button
                        handleClick = { this.openForm }
                        name = "Добавить"
                        style = { `button_blue ${pressed}` }
                    />
                    <Button
                        handleClick = { this.refresh }
                        name = "Обновить"
                        style = "button_blue"
                    />
                    {
                        isAddEventFormOpen &&
                        <QuickAddEvent
                            handleCloseForm = { this.closeForm }
                        />
                    }
                </div>
                <div className="header_search">
                    <Search/>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    disableClickInterceptor: PropTypes.func.isRequired,
    enableClickInterceptor: PropTypes.func.isRequired,
    outsideClick: PropTypes.string.isRequired
};

export default Header;
