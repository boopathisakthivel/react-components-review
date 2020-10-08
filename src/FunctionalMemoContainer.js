import React from 'react';

function FunctionalMemoContainer() {
    console.log('FunctionalMemoContainer::render');
    return (
        <div className="FunctionalMemoContainer">
            This is the FunctionalMemoContainer
        </div>
    );
};

export default React.memo(FunctionalMemoContainer);
