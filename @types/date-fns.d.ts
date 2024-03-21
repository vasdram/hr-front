declare module 'date-fns/locale/_lib/buildLocalizeFn' {
  interface BuildLocalizeFnParams {
    values: {
      short?: Array<string>;
      wide?: Array<string>;
      narrow?: Array<string>;
      abbreviated?: Array<string>;
    };

    defaultWidth: string;
  }

  const buildLocalizeFn =
    (params: BuildLocalizeFnParams) =>
    (...args: Array<any>) =>
      any;

  export default buildLocalizeFn;
}
