import React from 'react';

const OtherMembersTable = React.lazy(() => import('./OtherMembersTable'));

const OtherMembersSection = () => {
    return (
        <>
            <div className='container w-full grid grid-cols-1 lg:grid-cols-2 justify-center'>
                <OtherMembersTable />
                <OtherMembersTable />
            </div>
        </>
    );
}

export default OtherMembersSection;