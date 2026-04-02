"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _dishes = require("../shared/dishes");

var _comments = require("../shared/comments");

var _promotions = require("../shared/promotions");

var _leaders = require("../shared/leaders");

var initialState = {
  dishes: _dishes.DISHES,
  comments: _comments.COMMENTS,
  promotions: _promotions.PROMOTIONS,
  leaders: _leaders.LEADERS
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
