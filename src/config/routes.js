export default {
    getRoutes
}

function getRoutes() {
    return [
        {
            name: 'app',
            path: '',
            controller: "PlasmaController",
            isApp: true,
            function: null,
            params: null
        },
        {
            name: 'stella',
            path: 'stella',
            controller: "StellaController",
            isApp: true,
            function: null,
            params: null
        },

    ];
}