import React from 'react';
import { useLocation, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const errorMsg = useRouteError()
    const loc = useLocation();
    const errorMsg2 = loc.state?.error || 'An error occurred.'
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-5xl font-bold mb-4 text-gray-800 text-red-400">Oops!</h1>
                <h1 className="text-5xl font-bold mb-4 text-gray-800">{errorMsg2}</h1>
                <h2 className="text-2xl font-medium mb-4 text-gray-700">{errorMsg.data}</h2>
            </div>
        </div>
    );
};

export default ErrorPage;