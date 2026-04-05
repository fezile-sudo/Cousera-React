"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};
var appSlice = (0, _toolkit.createSlice)({
  name: 'app',
  initialState: initialState,
  reducers: {// add reducers later (e.g. addComment)
  }
});
var _default = appSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=reducer.dev.js.map
