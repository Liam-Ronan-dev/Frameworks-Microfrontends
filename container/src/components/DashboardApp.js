import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
// testing
export default () => {
    const ref = useRef(null);

    useEffect(() => {
      mount(ref.current)   
    }, []);

    return <div ref={ref} />
}