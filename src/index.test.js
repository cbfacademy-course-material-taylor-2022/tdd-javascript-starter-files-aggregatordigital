import {projectName,fizzbuzz} from "./index";

describe('Starter project should', () => {
  it('output its name', () => {
    expect(projectName()).toEqual('Kata starter project');
  });
});

describe('fizzbuzzfunction', () => {
  it('should output 1 when given 1', () => {
    expect(fizzbuzz(1)).toEqual('1');
  });
});