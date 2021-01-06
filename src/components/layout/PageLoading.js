import React from 'react';
import { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';

const PageLoading = () => {
    return (
        <Fragment><br />
            <div className="text-center">
                <Spinner variant="primary" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner><br />
            </div>
        </Fragment>
    );
}

export default PageLoading;
