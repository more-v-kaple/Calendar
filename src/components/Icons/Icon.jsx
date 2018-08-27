/* global require */

import React from 'react';
import PropTypes from 'prop-types';

import SVGInline from 'react-svg-inline';

import icons from './icons.json';

const icon = name => require(`../../assets/icons/${icons[name]}`);

const SIZES = {
    'tiny': '6px',
    'small': '12px',
    'medium': '16px',
    'large': '24px',
    'x-large': '58px'
};

const Icon = props => {
    const {
        name,
        size,
        width,
        height,
        fill,
        component
    } = props;

    const iconSize = SIZES[size];
    const iconPath = icon(name);

    const specified = {
        width: width ? `${width}px` : iconSize,
        height: height ? `${height}px` : iconSize
    };

    return (
        <SVGInline svg = { iconPath }
            component = { component || 'i' }
            width = { specified.width }
            height = { specified.height }
            fill = { fill || null }
        />
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.string,
    palette: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    fill: PropTypes.string,
    size: PropTypes.string
};

export default Icon;
