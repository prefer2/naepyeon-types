import { expectType, expectNotType } from "tsd";

import {
  ValueOf,
  PartialRequired,
  PartialOptional,
  PickWithPrefix,
} from "../src/index";

type TypeForTest = {
  a: "A";
  b: "B";
  c?: "C";
};

// ValueOf true case
expectType<ValueOf<TypeForTest>>("A");

// ValueOf false case
expectNotType<ValueOf<TypeForTest>>("aaa");

// PartialRequired true case
expectType<PartialRequired<TypeForTest, "c">>({
  a: "A",
  b: "B",
  c: "C",
});

// PartialRequired false case
expectNotType<PartialRequired<TypeForTest, "c">>({
  a: "A",
  b: "B",
});

// PartialOptional true case 1
expectType<PartialOptional<TypeForTest, "a">>({
  b: "B",
  c: "C",
});

// PartialOptional true case 2
expectType<PartialOptional<TypeForTest, "a">>({
  a: "A",
  b: "B",
  c: "C",
});

// PickWithPrefix true case
expectType<PickWithPrefix<TypeForTest, "a", "test">>({
  testA: "A",
});

// PickWithPrefix false case
expectNotType<PickWithPrefix<TypeForTest, "a", "test">>({
  testa: "A",
});
