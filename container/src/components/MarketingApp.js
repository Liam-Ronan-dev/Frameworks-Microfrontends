import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom';
import React, { useRef, useEffect } from 'react'

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {

        mount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                // Our current URL path
                const pathname = history.location

                if(pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            }
        })
    });

    return <div ref={ref}/>

    }