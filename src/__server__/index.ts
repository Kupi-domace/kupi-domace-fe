import Mock from "./mock";

import "./__db__/grocery-2";

import "./__db__/related-products";

import "./__db__/shop";
import "./__db__/sales";
import "./__db__/users";
import "./__db__/ticket";
import "./__db__/orders";
import "./__db__/address";
import "./__db__/products";
import "./__db__/dashboard";

Mock.onAny().passThrough();
