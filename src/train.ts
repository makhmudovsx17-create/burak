function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

/* Frontend development
    Traditional FD  => BSSR  => EJS    => Admin
    Modern FD       => SPA   => REACT  => User application
*/

/* Project Standarts:
    - Logging Standards  => Through MORGAN_FORMAT
    - Naming Standards
        * function, method, variable => CAMEL case  goHome
        * class => PASCAL case                      MemberService
        * folder, file => KEBAB case
        * css => SNAKE case                         button_style
    - Error handlings
*/

/* Most used APIs:
    - Traditional API
    - Rest(ful) API
    - GraphQL API
*/

/* Cookies:
    request join
    self destroy
*/

/* Validations:
    -  Frontend validation
    -  Backend validation
    -  Database validation
*/
