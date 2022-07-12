// ==UserScript==
// @name         MoSCoW labels for Gitlab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces MoSCoW method tags: [M], [S], [C], [W], [MUST], [SHOULD], [COULD], [WOULD] in comments with colored labels.
// @author       Bartosz Piskadło
// @match        https://gitlab.com/*/merge_requests/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const createLabel = (text, color) => {
    const label = document.createElement('strong');
    label.innerText = text;
    label.style.backgroundColor = color;
    label.style.color = '#fff';
    label.style.fontSize = '0.8rem';
    label.style.paddingTop = '1px';
    label.style.paddingBottom = '1px';
    label.style.paddingLeft = '5px';
    label.style.paddingRight = '5px';
    label.style.borderRadius = '4px';
    return label;
  }

  const replaceMoscowTags = (label) => {
    const mustLabel = createLabel('MUST', '#f06c2b');
    const shouldLabel = createLabel('SHOULD', '#f9bb00');
    const couldLabel = createLabel('COULD', '#55ce55');
    const wouldLabel = createLabel('WOULD', '#bfbfbf');
    const comments = document.querySelectorAll('.note-text');

    comments.forEach((note) => {
      note.innerHTML = note.innerHTML
        .replace(/\[MUST\]|\[M\]/gi, mustLabel.outerHTML)
        .replace(/\[SHOULD\]|\[S\]/gi, shouldLabel.outerHTML)
        .replace(/\[COULD\]|\[C\]/gi, couldLabel.outerHTML)
        .replace(/\[WOULD\]|\[W\]/gi, wouldLabel.outerHTML);
    });
  };

  setTimeout(replaceMoscowTags, 2000);
})();
