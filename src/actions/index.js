export const addAdditionalFeatures = feature => {
    console.log("feature bought", feature)
    return {type: "ADD_FEATURE", payload: feature}
}