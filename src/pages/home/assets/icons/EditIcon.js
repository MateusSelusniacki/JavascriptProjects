import React from 'react';

const EditIcon = ({ width = 24, height = 24, color = 'currentColor' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-edit"
    >
        <path d="M11 4h9"></path>
        <path d="M15 8v9"></path>
        <path d="M16 1l6 6"></path>
        <path d="M4 13.03V19h5.97l10.46-10.46a1.5 1.5 0 0 0 0-2.12L16.12 4.4a1.5 1.5 0 0 0-2.12 0L4 13.03z"></path>
    </svg>
);

export default EditIcon;
