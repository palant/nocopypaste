/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the "License"). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

let {WindowObserver} = require("windowObserver");
new WindowObserver({
  applyToWindow: function(window)
  {
    if (!("gBrowser" in window))
      return;

    window.gBrowser.addEventListener("copy", preventHijacking, true);
    window.gBrowser.addEventListener("cut", preventHijacking, true);
    window.gBrowser.addEventListener("paste", preventHijacking, true);
  },

  removeFromWindow: function(window)
  {
    if (!("gBrowser" in window))
      return;

    window.gBrowser.removeEventListener("copy", preventHijacking, true);
    window.gBrowser.removeEventListener("cut", preventHijacking, true);
    window.gBrowser.removeEventListener("paste", preventHijacking, true);
  }
});

function preventHijacking(event)
{
  event.stopPropagation();
}
