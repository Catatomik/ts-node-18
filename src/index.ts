import { strictEqual } from "node:assert";

const arr = [1,2,3];
const reversed = arr.toReversed();
strictEqual(reversed[0], 3);
strictEqual(reversed[1], 2);
strictEqual(reversed[2], 1);