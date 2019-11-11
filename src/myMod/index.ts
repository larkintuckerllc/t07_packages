/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { publicFunctionInMyMod, publicFunctionInSuperMod } from './nested';

const privateFunction = (): void => {
  console.log("called myMod private 'privateFunction()'");
};

export const func = (): void => {
  console.log("called myMod exported 'func()'");
};

export const indirectAccess = (): void => {
  console.log("called myMod exported 'indirectAccess()'");
  privateFunction();
};

export const callPublicFunctionInMyMod = (): void => {
  console.log("called myMod exported 'callPublicFunctionInMyMod()'");
  publicFunctionInMyMod();
  console.log('> ');
  publicFunctionInSuperMod();
};

// NO EQUIVALENT TO pub(crate)
export const publicFunctionInCrate = (): void => {
  console.log("called myMod exported 'publicFunctionInCrate()'");
};

// NO EQUIVALENT TO DEFINING MODULUES IN ANOTHER MODULE
