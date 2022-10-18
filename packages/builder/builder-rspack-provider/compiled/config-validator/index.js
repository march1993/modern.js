module.exports = function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.source !== undefined){let data0 = data.source;const _errs1 = errors;if((!(data0 && typeof data0 == "object" && !Array.isArray(data0))) && (data0 !== null)){validate10.errors = [{instancePath:instancePath+"/source",schemaPath:"#/properties/source/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === _errs1){if(data0 && typeof data0 == "object" && !Array.isArray(data0)){if(data0.globalVars !== undefined){let data1 = data0.globalVars;const _errs4 = errors;if(errors === _errs4){if(data1 && typeof data1 == "object" && !Array.isArray(data1)){}else {validate10.errors = [{instancePath:instancePath+"/source/globalVars",schemaPath:"#/properties/source/properties/globalVars/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}}}}var valid0 = _errs1 === errors;}else {var valid0 = true;}if(valid0){if(data.dev !== undefined){let data2 = data.dev;const _errs7 = errors;if(!(data2 && typeof data2 == "object" && !Array.isArray(data2))){validate10.errors = [{instancePath:instancePath+"/dev",schemaPath:"#/properties/dev/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs7 === errors;}else {var valid0 = true;}if(valid0){if(data.html !== undefined){let data3 = data.html;const _errs9 = errors;if(!(data3 && typeof data3 == "object" && !Array.isArray(data3))){validate10.errors = [{instancePath:instancePath+"/html",schemaPath:"#/properties/html/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs9 === errors;}else {var valid0 = true;}if(valid0){if(data.experiments !== undefined){let data4 = data.experiments;const _errs11 = errors;if(!(data4 && typeof data4 == "object" && !Array.isArray(data4))){validate10.errors = [{instancePath:instancePath+"/experiments",schemaPath:"#/properties/experiments/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs11 === errors;}else {var valid0 = true;}if(valid0){if(data.output !== undefined){let data5 = data.output;const _errs13 = errors;if(!(data5 && typeof data5 == "object" && !Array.isArray(data5))){validate10.errors = [{instancePath:instancePath+"/output",schemaPath:"#/properties/output/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs13 === errors;}else {var valid0 = true;}if(valid0){if(data.tools !== undefined){let data6 = data.tools;const _errs15 = errors;if(!(data6 && typeof data6 == "object" && !Array.isArray(data6))){validate10.errors = [{instancePath:instancePath+"/tools",schemaPath:"#/properties/tools/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}var valid0 = _errs15 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;};