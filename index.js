function first_name(column) {
    return `
        SPLIT(${column}, ' ')[OFFSET(0)] as first_name
    `;
}

function last_name(column) {
    return `
        SPLIT(${column}, ' ')[OFFSET(1)] as last_name
    `;
}

module.exports = { first_name, last_name };