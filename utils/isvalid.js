export const isValid = ( ...args ) => {
    return args.every( el => typeof el === 'string' && el.length > 0 )
}