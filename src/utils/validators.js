export const required = value => {
    return value ? undefined : "Required"
}

export const maxLengthCreator = (maxLength) => (value) => {
    return value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined
}


