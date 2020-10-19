// Copyright 2020 The MathWorks, Inc.

import * as path from "path";

export const runCmdPath = path.join(path.dirname(__dirname), "bin", "run_matlab_command");

export function runCmdArg(junit: string, cobertura: string, source: string) {
    return "addpath('" + path.join(path.dirname(__dirname), "scriptgen") + "');" +
        "testScript = genscript('Test'," +
            "'JUnitTestResults','" + junit + "'," +
            "'CoberturaCodeCoverage','" + cobertura + "'," +
            "'SourceFolder','" + source + "');" +
        `disp('Running MATLAB script with contents:');` +
        `disp(strtrim(testScript.writeToText()));` +
        `fprintf('__________\\n\\n');` +
        `run(testScript);`;
}
