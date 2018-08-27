import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './navigation.scss';

import MonthControls from 'Containers/MonthControls';
import MoveToToday from 'Containers/MoveToToday';

class Navigation extends PureComponent {

    render () {
        return (
            <div className="navigation">
                <MonthControls/>
                <MoveToToday/>
            </div>
        );
    }
}

export default Navigation;
