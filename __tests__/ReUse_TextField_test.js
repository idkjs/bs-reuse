'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var React = require("react");
var JestDom = require("bs-jest-dom/src/JestDom.js");
var ReUse_TextField = require("../src/ReUse_TextField.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.js");

Jest.describe("getByText", (function (param) {
        return Jest.test(" if component renders", (function (param) {
                      var btn = React.createElement(ReUse_TextField.make, {
                            label: "Some Label"
                          });
                      return JestDom.toBeInTheDocument(expect(ReactTestingLibrary.getByText({
                                          NAME: "Str",
                                          VAL: "Some Label"
                                        }, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, btn))));
                    }));
      }));

/*  Not a pure module */
