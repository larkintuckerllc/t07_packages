/* eslint-disable no-console */
import {
  callPublicFunctionInMyMod,
  func as myModFunc,
  indirectAccess,
  publicFunctionInCrate,
} from './myMod';
import { func as nestedFunc } from './myMod/nested';

const func = (): void => {
  console.log("called `func()'");
};

func();
myModFunc();
indirectAccess();
nestedFunc();
callPublicFunctionInMyMod();
publicFunctionInCrate();
