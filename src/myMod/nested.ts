/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

export const func = (): void => {
  console.log("called nested exported 'func()'");
};

const privateFunction = (): void => {
  console.log("called nested private 'func()'");
};

// NO EQUIVALENT TO pub(in path)
export const publicFunctionInMyMod = (): void => {
  console.log("called nested exported 'publicFunctionInMyMod()'");
};

// NO EQUIVALENT TO pub(self)
export const publicFunctionInNested = (): void => {
  console.log("called nested exported 'publicFunctionInNested()'");
};

// NO EQUIVALENT TO pub(super)
export const publicFunctionInSuperMod = (): void => {
  console.log("called nested exported 'publicFunctionInSuperMod()'");
};
