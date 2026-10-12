const countChars = (s: string): Record<string, number> =>
    [...s].reduce(
        (o, c) => ({ ...o, [c]: (o[c] ?? 0) + 1 }),
        {} as Record<string, number>,
    );

console.log(countChars("hello"));

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
