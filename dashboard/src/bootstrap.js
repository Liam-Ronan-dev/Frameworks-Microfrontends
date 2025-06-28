import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start the app
const mount = (el) => {
    const app = createApp(Dashboard);

    // Tell vue to show a component inside the DOM
    app.mount(el);
}


// If in dev and isolation, call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}


// Or running through container
// Should export the mount function
export { mount };