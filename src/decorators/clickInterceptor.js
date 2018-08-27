import React, { Component } from 'react';

import stopPropagation from 'Utils/stopPropagation';

import autobind from 'autobind-decorator';

/**
 * @param    {object}                [target] :: Specifies the DOM element's class name outside of which the click event will be watched
 * @callback disableClickInterceptor          :: Function for disabling the interceptor
 * @callback enableClickInterceptor           :: Function for enabling the interceptor
 * @emits    outsideClick                     :: Event that fires when click outside of the target element detected
 */

const clickInterceptor = ({ target }) => ComposedComponent => {
    const initialState = { enabled: false, outsideClick: false };

    @autobind
    class WrapperComponent extends Component {
        constructor () {
            super();

            this.state = initialState;
        }

        componentDidMount () {
            const { enabled } = this.state;

            enabled && this.addEventListener();
        }

        componentDidUpdate () {
            const { enabled } = this.state;

            enabled ? this.addEventListener() : this.removeEventListener();
        }

        componentWillUnmount () {
            const { enabled } = this.state;

            enabled && this.removeEventListener();
        }

        addEventListener () {
            document.addEventListener('click', this.handleOutsideClick);
        }

        removeEventListener () {
            document.removeEventListener('click', this.handleOutsideClick);
        }

        handleOutsideClick (e) {
            stopPropagation(e);
            const { target: currentTarget } = e,
                // const outsideClick = !currentTarget.classList.contains(target);
                outsideClick = !document.querySelector(`.${target}`
                ).contains(currentTarget);

            outsideClick && this.setState({ outsideClick: true });
        }

        enableClickInterceptor () {
            this.setState({ enabled: true });
        }

        disableClickInterceptor () {
            this.setState(initialState);
        }

        render () {
            const { outsideClick } = this.state;

            return (
                <ComposedComponent
                    disableClickInterceptor = { this.disableClickInterceptor }
                    enableClickInterceptor = { this.enableClickInterceptor }
                    outsideClick = { outsideClick }
                    {...this.props }
                />
            );
        }
    }

    return WrapperComponent;
};

export default clickInterceptor;
