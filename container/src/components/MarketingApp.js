import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

export default () => {
    const ref = useRef(null);


    useEffect(() => {
        // the reference to the HTML element were passing into
        // the mount function

        // mount will take the element and create an instance of
        // the marketing app
        mount(ref.current)
    });

    return <div ref={ref}/>

    }