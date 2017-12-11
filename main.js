'uses strict';

/* global Reveal, hljs */

Reveal.initialize({
    rollingLinks: true,
    dependencies: [
        {
            src: 'https://cdn.bootcss.com/reveal.js/3.6.0/plugin/highlight/highlight.js',
            async: true,
            callback: function() { hljs.initHighlightingOnLoad(); }
        }
    ]
});
