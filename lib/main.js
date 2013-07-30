/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the "License"). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

let {Services} = Cu.import("resource://gre/modules/Services.jsm", null);
let defaultBranch = Services.prefs.getDefaultBranch("dom.event.clipboardevents.");
let origValue = defaultBranch.getBoolPref("enabled");

defaultBranch.setBoolPref("enabled", false);
onShutdown.add(function() defaultBranch.setBoolPref("enabled", origValue));
