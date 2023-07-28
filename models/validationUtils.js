export function validateModel(entity, validationSchema) {
    const invalidFiels = Object.keys(validationSchema).filter(
        (key) => !validationSchema[key](entity[key])
    );

    return invalidFiels.length === 0;
}

export function getInvalidFiels(entity, validationSchema) {
    const invalidFiels = Object.keys(validationSchema)
        .filter((key) => !validationSchema[key](entity[key]))
        .map((key) => `${key} is invalid`);

    return invalidFiels;
}
