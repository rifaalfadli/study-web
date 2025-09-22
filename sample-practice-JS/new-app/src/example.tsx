import React from "react";
import "./example.css"

const ExampleComponent = () => {
    const name = 'Rifa';
    return (
        <div className="example">Hello, {name}!</div>
    );
};

export default ExampleComponent;