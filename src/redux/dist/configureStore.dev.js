"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _dishes = require("./dishes");

var _comments = require("./comments");

var _promotions = require("./promotions");

var _leaders = require("./leaders");

var store = (0, _toolkit.configureStore)({
  reducer: {
    dishes: _dishes.Dishes,
    comments: _comments.Comments,
    promotions: _promotions.Promotions,
    leaders: _leaders.Leaders
  }
});
exports.store = store;
//# sourceMappingURL=configureStore.dev.js.map
