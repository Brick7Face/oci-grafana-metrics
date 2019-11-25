/*
** Copyright © 2019 Oracle and/or its affiliates. All rights reserved.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
export const regions = ['ca-toronto-1', 'eu-frankfurt-1', 'uk-london-1', 'us-ashburn-1', 'us-phoenix-1']
export const namespaces = ['oci_computeagent', 'oci_blockstore', 'oci_lbaas', 'oci_telemetry']
export const aggregations = ['count()', 'max()', 'mean()', 'min()', 'rate()', 'sum()', 'percentile(.90)', 'percentile(.95)', 'percentile(.99)']
export const windows = ['1m', '5m', '1h']
export const environments = ['local', 'OCI Instance']


export const compartmentsQueryRegex = /^compartments\(\)/;
export const regionsQueryRegex = /^regions\(\)/;
export const namespacesQueryRegex = /namespaces\((\$?\w+)(,\s*\$\w+)*\)/;
export const metricsQueryRegex = /metrics\((\s*\$?\w+)(\s*,\s*\$\w+)(\s*,\s*\$\w+\s*)*\)/;
export const dimensionKeysQueryRegex = /dimensions\((\s*\$?\w+)(\s*,\s*\$\w+)(\s*,\s*\$\w+)(\s*,\s*\$\w+\s*)*\)/;
export const dimensionValuesQueryRegex = /dimensionOptions\((\s*\$?\w+)(\s*,\s*\$\w+)(\s*,\s*\$\w+)(\s*,\s*\$\w+)(\s*,\s*\$\w+\s*)*\)/;