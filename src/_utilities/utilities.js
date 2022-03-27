export const formatDate = (date) => new Date(date).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric"
});

export const extractId = (search) => search.split("=")[1];

export const extractFeaturePrope = (result, id) => Array.isArray(result.features) &&
    result.features.filter(feature => feature.id === id)[0]?.properties;

export const sortProperties = (a, b, sortedBy) =>
    a.properties[sortedBy.prop].toString()
        .localeCompare(b.properties[sortedBy.prop], 'en', {numeric: true})
    * sortedBy.order