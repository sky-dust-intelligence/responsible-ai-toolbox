// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  describeCausalAnalysis,
  modelAssessmentDatasets
} from "@responsible-ai/rai-e2e";

const datasetShape = modelAssessmentDatasets.ClassificationModelDebugging;
describeCausalAnalysis(datasetShape, "ClassificationModelDebugging");
