/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.rotateOutUpRight = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'right bottom',
                transform: 'none',
                opacity: 1,
                offset: 0
            },
            {
                transformOrigin: 'right bottom',
                transform: 'rotate3d(0, 0, 1, 90deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
