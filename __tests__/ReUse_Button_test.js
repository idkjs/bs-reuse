'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var JestDom = require("bs-jest-dom/src/JestDom.js");
var ReUse_Button = require("../src/ReUse_Button.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.js");

Jest.describe("getByText", (function (param) {
        Jest.test("Component renders", (function (param) {
                var btn = React.createElement(ReUse_Button.make, {
                      children: "Hello Button"
                    });
                return JestDom.toBeInTheDocument(expect(ReactTestingLibrary.getByText({
                                    NAME: "Str",
                                    VAL: "Hello Button"
                                  }, undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, btn))));
              }));
        Jest.test("Component renders", (function (param) {
                var btn = React.createElement(ReUse_Button.make, {
                      type_: "button",
                      children: "Hello Button",
                      variant: "text"
                    });
                return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, btn).container));
              }));
        Jest.test("Component renders disabled", (function (param) {
                var onClick = (jest.fn());
                var btn = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(ReUse_Button.make, {
                          onClick: onClick,
                          type_: "button",
                          children: "Hello Button",
                          disabled: true
                        }));
                Curry._2(ReactTestingLibrary.FireEvent.click, undefined, ReactTestingLibrary.getByText({
                          NAME: "Str",
                          VAL: "Hello Button"
                        }, undefined, btn));
                ((expect(onClick).not.toHaveBeenCalled()));
                return Jest.pass;
              }));
        return Jest.test("Component onClick prop", (function (param) {
                      var onClick = (jest.fn());
                      var btn = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, React.createElement(ReUse_Button.make, {
                                onClick: onClick,
                                type_: "button",
                                children: "Hello Button"
                              }));
                      Curry._2(ReactTestingLibrary.FireEvent.click, undefined, ReactTestingLibrary.getByText({
                                NAME: "Str",
                                VAL: "Hello Button"
                              }, undefined, btn));
                      ((expect(onClick).toHaveBeenCalled()));
                      return Jest.pass;
                    }));
      }));

/*  Not a pure module */
