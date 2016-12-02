/* kpmy 07.11.2016 */
angular.module('LogkAl', ['ui.router', 'ngMaterial', 'ngMdIcons', 'ngMessages', 'ngSanitize', 'hc.marked'])
    .config(function ($mdIconProvider) {
        $mdIconProvider.iconSet('action', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg');
        $mdIconProvider.iconSet('alert', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-alert.svg');
        $mdIconProvider.iconSet('av', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-av.svg');
        $mdIconProvider.iconSet('communication', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg');
        $mdIconProvider.iconSet('content', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg');
        $mdIconProvider.iconSet('device', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-device.svg');
        $mdIconProvider.iconSet('editor', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-editor.svg');
        $mdIconProvider.iconSet('file', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-file.svg');
        $mdIconProvider.iconSet('hardware', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-hardware.svg');
        $mdIconProvider.iconSet('image', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg');
        $mdIconProvider.iconSet('maps', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-maps.svg');
        $mdIconProvider.iconSet('navigation', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg');
        $mdIconProvider.iconSet('notification', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-notification.svg');
        $mdIconProvider.iconSet('places', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-places.svg');
        $mdIconProvider.iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg');
        $mdIconProvider.iconSet('toggle', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg');
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('light-green')
            .accentPalette('green')
            .warnPalette('orange')
            .backgroundPalette('grey');
    })
    .config(function (markedProvider) {
            markedProvider.setOptions({gfm: true});
    });