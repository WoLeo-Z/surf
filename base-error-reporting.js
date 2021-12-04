// Copyright (C) Microsoft Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function hookErrorReporting(component) {
  window.onerror = (message, source, lineno, columnNumber, error) => {
    const errorInfo = {
      column: columnNumber,
      component,
      line: lineno,
      message: "error",
      name: "name",
      source_url: source,
      stack: "ss"
    };
 //   chrome.errorReporting.reportError(errorInfo);
  };
}
