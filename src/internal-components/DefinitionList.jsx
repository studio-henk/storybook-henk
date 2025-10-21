import React from 'react';
import './DefinitionList.css';

export const DefinitionList = ({ items, className = '' }) => (
    <dl className={className}>
        {items.map(({ term, definition }, i) => (
            <React.Fragment key={i}>
                <dt>{term}</dt>
                <dd>{definition}</dd>
            </React.Fragment>
        ))}
    </dl>
);