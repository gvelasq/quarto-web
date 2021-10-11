/*! @algolia/autocomplete-preset-algolia 1.4.0 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@algolia/autocomplete-preset-algolia"]={})}(this,(function(e){"use strict";function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(r){t(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return t.reduce((function(e,t){return e&&e[t]}),e)}var l="__aa-highlight__",s="__/aa-highlight__";function c(e){var t=e.highlightedValue.split(l),r=t.shift(),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{get:function(){return e},add:function(t){var r=e[e.length-1];(null==r?void 0:r.isHighlighted)===t.isHighlighted?e[e.length-1]={value:r.value+t.value,isHighlighted:r.isHighlighted}:e.push(t)}}}(r?[{value:r,isHighlighted:!1}]:[]);return t.forEach((function(e){var t=e.split(s);n.add({value:t[0],isHighlighted:!0}),""!==t[1]&&n.add({value:t[1],isHighlighted:!1})})),n.get()}function f(e){var t=e.hit,r=e.attribute,n=Array.isArray(r)?r:[r],i=a(t,["_highlightResult"].concat(o(n),["value"]));return"string"!=typeof i&&(i=a(t,n)||""),c({highlightedValue:i})}var g={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},h=new RegExp(/\w/i),p=/&(amp|quot|lt|gt|#39);/g,d=RegExp(p.source);function v(e,t){var r,n,i,o=e[t],u=(null===(r=e[t+1])||void 0===r?void 0:r.isHighlighted)||!0,a=(null===(n=e[t-1])||void 0===n?void 0:n.isHighlighted)||!0;return h.test((i=o.value)&&d.test(i)?i.replace(p,(function(e){return g[e]})):i)||a!==u?o.isHighlighted:a}function y(e){return e.some((function(e){return e.isHighlighted}))?e.map((function(t,r){return n(n({},t),{},{isHighlighted:!v(e,r)})})):e.map((function(e){return n(n({},e),{},{isHighlighted:!1})}))}function b(e){var t=e.hit,r=e.attribute,n=Array.isArray(r)?r:[r],i=a(t,["_snippetResult"].concat(o(n),["value"]));return"string"!=typeof i&&(i=a(t,n)||""),c({highlightedValue:i})}function m(e){function t(t){return e({searchClient:t.searchClient,queries:t.requests.map((function(e){return e.query}))}).then((function(e){return e.map((function(e,r){var n=t.requests[r];return{items:e,sourceId:n.sourceId,transformResponse:n.transformResponse}}))}))}return function(e){return function(r){return n(n({execute:t},e),r)}}}var O="1.4.0";function A(e){var t=e.searchClient,r=e.queries,u=e.userAgents,a=void 0===u?[]:u;"function"==typeof t.addAlgoliaAgent&&[{segment:"autocomplete-core",version:O}].concat(o(a)).forEach((function(e){var r=e.segment,n=e.version;t.addAlgoliaAgent(r,n)}));return t.search(r.map((function(e){var t=e.params;return n(n({},i(e,["params"])),{},{params:n({hitsPerPage:5,highlightPreTag:l,highlightPostTag:s},t)})}))).then((function(e){return e.results}))}var j=m(A);var H=j({transformResponse:function(e){return e.hits}});e.createRequester=m,e.fetchAlgoliaResults=A,e.getAlgoliaFacets=function(e){var t=j({transformResponse:function(e){return e.facetHits}}),r=e.queries.map((function(e){return n(n({},e),{},{type:"facet"})}));return t(n(n({},e),{},{queries:r}))},e.getAlgoliaResults=H,e.parseAlgoliaHitHighlight=f,e.parseAlgoliaHitReverseHighlight=function(e){return y(f(e))},e.parseAlgoliaHitReverseSnippet=function(e){return y(b(e))},e.parseAlgoliaHitSnippet=b,Object.defineProperty(e,"__esModule",{value:!0})}));
