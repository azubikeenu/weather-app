export const santizeQuery = ( ...args ) => {
    return args.map( el => el.trim() )
}