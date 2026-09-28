
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model ScreeningRun
 * 
 */
export type ScreeningRun = $Result.DefaultSelection<Prisma.$ScreeningRunPayload>
/**
 * Model ResumeEvaluation
 * 
 */
export type ResumeEvaluation = $Result.DefaultSelection<Prisma.$ResumeEvaluationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Resumes
 * const resumes = await prisma.resume.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Resumes
   * const resumes = await prisma.resume.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.screeningRun`: Exposes CRUD operations for the **ScreeningRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScreeningRuns
    * const screeningRuns = await prisma.screeningRun.findMany()
    * ```
    */
  get screeningRun(): Prisma.ScreeningRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resumeEvaluation`: Exposes CRUD operations for the **ResumeEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeEvaluations
    * const resumeEvaluations = await prisma.resumeEvaluation.findMany()
    * ```
    */
  get resumeEvaluation(): Prisma.ResumeEvaluationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Resume: 'Resume',
    Job: 'Job',
    ScreeningRun: 'ScreeningRun',
    ResumeEvaluation: 'ResumeEvaluation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "resume" | "job" | "screeningRun" | "resumeEvaluation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      ScreeningRun: {
        payload: Prisma.$ScreeningRunPayload<ExtArgs>
        fields: Prisma.ScreeningRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreeningRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreeningRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>
          }
          findFirst: {
            args: Prisma.ScreeningRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreeningRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>
          }
          findMany: {
            args: Prisma.ScreeningRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>[]
          }
          create: {
            args: Prisma.ScreeningRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>
          }
          createMany: {
            args: Prisma.ScreeningRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreeningRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>[]
          }
          delete: {
            args: Prisma.ScreeningRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>
          }
          update: {
            args: Prisma.ScreeningRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>
          }
          deleteMany: {
            args: Prisma.ScreeningRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreeningRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreeningRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>[]
          }
          upsert: {
            args: Prisma.ScreeningRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreeningRunPayload>
          }
          aggregate: {
            args: Prisma.ScreeningRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreeningRun>
          }
          groupBy: {
            args: Prisma.ScreeningRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreeningRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreeningRunCountArgs<ExtArgs>
            result: $Utils.Optional<ScreeningRunCountAggregateOutputType> | number
          }
        }
      }
      ResumeEvaluation: {
        payload: Prisma.$ResumeEvaluationPayload<ExtArgs>
        fields: Prisma.ResumeEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>
          }
          findFirst: {
            args: Prisma.ResumeEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>
          }
          findMany: {
            args: Prisma.ResumeEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>[]
          }
          create: {
            args: Prisma.ResumeEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>
          }
          createMany: {
            args: Prisma.ResumeEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>[]
          }
          delete: {
            args: Prisma.ResumeEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>
          }
          update: {
            args: Prisma.ResumeEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.ResumeEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeEvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>[]
          }
          upsert: {
            args: Prisma.ResumeEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumeEvaluationPayload>
          }
          aggregate: {
            args: Prisma.ResumeEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumeEvaluation>
          }
          groupBy: {
            args: Prisma.ResumeEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeEvaluationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    resume?: ResumeOmit
    job?: JobOmit
    screeningRun?: ScreeningRunOmit
    resumeEvaluation?: ResumeEvaluationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    evaluations: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | ResumeCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeEvaluationWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    screeningRuns: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screeningRuns?: boolean | JobCountOutputTypeCountScreeningRunsArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountScreeningRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningRunWhereInput
  }


  /**
   * Count Type ScreeningRunCountOutputType
   */

  export type ScreeningRunCountOutputType = {
    evaluations: number
  }

  export type ScreeningRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | ScreeningRunCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * ScreeningRunCountOutputType without action
   */
  export type ScreeningRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRunCountOutputType
     */
    select?: ScreeningRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreeningRunCountOutputType without action
   */
  export type ScreeningRunCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeEvaluationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    sourceRow: number | null
  }

  export type ResumeSumAggregateOutputType = {
    sourceRow: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    externalId: string | null
    sourceFileName: string | null
    sourceRow: number | null
    originalCategory: string | null
    datasetName: string | null
    rawText: string | null
    sanitizedText: string | null
    resumeHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    externalId: string | null
    sourceFileName: string | null
    sourceRow: number | null
    originalCategory: string | null
    datasetName: string | null
    rawText: string | null
    sanitizedText: string | null
    resumeHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    externalId: number
    sourceFileName: number
    sourceRow: number
    originalCategory: number
    datasetName: number
    rawText: number
    sanitizedText: number
    resumeHtml: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    sourceRow?: true
  }

  export type ResumeSumAggregateInputType = {
    sourceRow?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    externalId?: true
    sourceFileName?: true
    sourceRow?: true
    originalCategory?: true
    datasetName?: true
    rawText?: true
    sanitizedText?: true
    resumeHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    externalId?: true
    sourceFileName?: true
    sourceRow?: true
    originalCategory?: true
    datasetName?: true
    rawText?: true
    sanitizedText?: true
    resumeHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    externalId?: true
    sourceFileName?: true
    sourceRow?: true
    originalCategory?: true
    datasetName?: true
    rawText?: true
    sanitizedText?: true
    resumeHtml?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    externalId: string | null
    sourceFileName: string | null
    sourceRow: number | null
    originalCategory: string | null
    datasetName: string | null
    rawText: string
    sanitizedText: string
    resumeHtml: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    sourceFileName?: boolean
    sourceRow?: boolean
    originalCategory?: boolean
    datasetName?: boolean
    rawText?: boolean
    sanitizedText?: boolean
    resumeHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    evaluations?: boolean | Resume$evaluationsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    sourceFileName?: boolean
    sourceRow?: boolean
    originalCategory?: boolean
    datasetName?: boolean
    rawText?: boolean
    sanitizedText?: boolean
    resumeHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    sourceFileName?: boolean
    sourceRow?: boolean
    originalCategory?: boolean
    datasetName?: boolean
    rawText?: boolean
    sanitizedText?: boolean
    resumeHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    externalId?: boolean
    sourceFileName?: boolean
    sourceRow?: boolean
    originalCategory?: boolean
    datasetName?: boolean
    rawText?: boolean
    sanitizedText?: boolean
    resumeHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "sourceFileName" | "sourceRow" | "originalCategory" | "datasetName" | "rawText" | "sanitizedText" | "resumeHtml" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | Resume$evaluationsArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      evaluations: Prisma.$ResumeEvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: string | null
      sourceFileName: string | null
      sourceRow: number | null
      originalCategory: string | null
      datasetName: string | null
      rawText: string
      sanitizedText: string
      resumeHtml: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluations<T extends Resume$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly externalId: FieldRef<"Resume", 'String'>
    readonly sourceFileName: FieldRef<"Resume", 'String'>
    readonly sourceRow: FieldRef<"Resume", 'Int'>
    readonly originalCategory: FieldRef<"Resume", 'String'>
    readonly datasetName: FieldRef<"Resume", 'String'>
    readonly rawText: FieldRef<"Resume", 'String'>
    readonly sanitizedText: FieldRef<"Resume", 'String'>
    readonly resumeHtml: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.evaluations
   */
  export type Resume$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    where?: ResumeEvaluationWhereInput
    orderBy?: ResumeEvaluationOrderByWithRelationInput | ResumeEvaluationOrderByWithRelationInput[]
    cursor?: ResumeEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeEvaluationScalarFieldEnum | ResumeEvaluationScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    extractedProfileJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    extractedProfileJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    extractedProfileJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    extractedProfileJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    extractedProfileJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    extractedProfileJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    title: string
    description: string
    extractedProfileJson: string
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    extractedProfileJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screeningRuns?: boolean | Job$screeningRunsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    extractedProfileJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    extractedProfileJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    extractedProfileJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "extractedProfileJson" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screeningRuns?: boolean | Job$screeningRunsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      screeningRuns: Prisma.$ScreeningRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      extractedProfileJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    screeningRuns<T extends Job$screeningRunsArgs<ExtArgs> = {}>(args?: Subset<T, Job$screeningRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly extractedProfileJson: FieldRef<"Job", 'String'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.screeningRuns
   */
  export type Job$screeningRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    where?: ScreeningRunWhereInput
    orderBy?: ScreeningRunOrderByWithRelationInput | ScreeningRunOrderByWithRelationInput[]
    cursor?: ScreeningRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScreeningRunScalarFieldEnum | ScreeningRunScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model ScreeningRun
   */

  export type AggregateScreeningRun = {
    _count: ScreeningRunCountAggregateOutputType | null
    _avg: ScreeningRunAvgAggregateOutputType | null
    _sum: ScreeningRunSumAggregateOutputType | null
    _min: ScreeningRunMinAggregateOutputType | null
    _max: ScreeningRunMaxAggregateOutputType | null
  }

  export type ScreeningRunAvgAggregateOutputType = {
    totalCandidates: number | null
    processedCount: number | null
    failedCount: number | null
    datasetCandidates: number | null
    sourceCandidates: number | null
    originalInputCharacters: number | null
    filteredInputCharacters: number | null
  }

  export type ScreeningRunSumAggregateOutputType = {
    totalCandidates: number | null
    processedCount: number | null
    failedCount: number | null
    datasetCandidates: number | null
    sourceCandidates: number | null
    originalInputCharacters: number | null
    filteredInputCharacters: number | null
  }

  export type ScreeningRunMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    status: string | null
    modelName: string | null
    promptVersion: string | null
    totalCandidates: number | null
    processedCount: number | null
    failedCount: number | null
    datasetCategory: string | null
    datasetCandidates: number | null
    sourceCandidates: number | null
    originalInputCharacters: number | null
    filteredInputCharacters: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type ScreeningRunMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    status: string | null
    modelName: string | null
    promptVersion: string | null
    totalCandidates: number | null
    processedCount: number | null
    failedCount: number | null
    datasetCategory: string | null
    datasetCandidates: number | null
    sourceCandidates: number | null
    originalInputCharacters: number | null
    filteredInputCharacters: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type ScreeningRunCountAggregateOutputType = {
    id: number
    jobId: number
    status: number
    modelName: number
    promptVersion: number
    totalCandidates: number
    processedCount: number
    failedCount: number
    datasetCategory: number
    datasetCandidates: number
    sourceCandidates: number
    originalInputCharacters: number
    filteredInputCharacters: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type ScreeningRunAvgAggregateInputType = {
    totalCandidates?: true
    processedCount?: true
    failedCount?: true
    datasetCandidates?: true
    sourceCandidates?: true
    originalInputCharacters?: true
    filteredInputCharacters?: true
  }

  export type ScreeningRunSumAggregateInputType = {
    totalCandidates?: true
    processedCount?: true
    failedCount?: true
    datasetCandidates?: true
    sourceCandidates?: true
    originalInputCharacters?: true
    filteredInputCharacters?: true
  }

  export type ScreeningRunMinAggregateInputType = {
    id?: true
    jobId?: true
    status?: true
    modelName?: true
    promptVersion?: true
    totalCandidates?: true
    processedCount?: true
    failedCount?: true
    datasetCategory?: true
    datasetCandidates?: true
    sourceCandidates?: true
    originalInputCharacters?: true
    filteredInputCharacters?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type ScreeningRunMaxAggregateInputType = {
    id?: true
    jobId?: true
    status?: true
    modelName?: true
    promptVersion?: true
    totalCandidates?: true
    processedCount?: true
    failedCount?: true
    datasetCategory?: true
    datasetCandidates?: true
    sourceCandidates?: true
    originalInputCharacters?: true
    filteredInputCharacters?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type ScreeningRunCountAggregateInputType = {
    id?: true
    jobId?: true
    status?: true
    modelName?: true
    promptVersion?: true
    totalCandidates?: true
    processedCount?: true
    failedCount?: true
    datasetCategory?: true
    datasetCandidates?: true
    sourceCandidates?: true
    originalInputCharacters?: true
    filteredInputCharacters?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ScreeningRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreeningRun to aggregate.
     */
    where?: ScreeningRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningRuns to fetch.
     */
    orderBy?: ScreeningRunOrderByWithRelationInput | ScreeningRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreeningRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScreeningRuns
    **/
    _count?: true | ScreeningRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreeningRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreeningRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreeningRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreeningRunMaxAggregateInputType
  }

  export type GetScreeningRunAggregateType<T extends ScreeningRunAggregateArgs> = {
        [P in keyof T & keyof AggregateScreeningRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreeningRun[P]>
      : GetScalarType<T[P], AggregateScreeningRun[P]>
  }




  export type ScreeningRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreeningRunWhereInput
    orderBy?: ScreeningRunOrderByWithAggregationInput | ScreeningRunOrderByWithAggregationInput[]
    by: ScreeningRunScalarFieldEnum[] | ScreeningRunScalarFieldEnum
    having?: ScreeningRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreeningRunCountAggregateInputType | true
    _avg?: ScreeningRunAvgAggregateInputType
    _sum?: ScreeningRunSumAggregateInputType
    _min?: ScreeningRunMinAggregateInputType
    _max?: ScreeningRunMaxAggregateInputType
  }

  export type ScreeningRunGroupByOutputType = {
    id: string
    jobId: string
    status: string
    modelName: string
    promptVersion: string
    totalCandidates: number
    processedCount: number
    failedCount: number
    datasetCategory: string | null
    datasetCandidates: number
    sourceCandidates: number
    originalInputCharacters: number
    filteredInputCharacters: number
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: ScreeningRunCountAggregateOutputType | null
    _avg: ScreeningRunAvgAggregateOutputType | null
    _sum: ScreeningRunSumAggregateOutputType | null
    _min: ScreeningRunMinAggregateOutputType | null
    _max: ScreeningRunMaxAggregateOutputType | null
  }

  type GetScreeningRunGroupByPayload<T extends ScreeningRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreeningRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreeningRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreeningRunGroupByOutputType[P]>
            : GetScalarType<T[P], ScreeningRunGroupByOutputType[P]>
        }
      >
    >


  export type ScreeningRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    status?: boolean
    modelName?: boolean
    promptVersion?: boolean
    totalCandidates?: boolean
    processedCount?: boolean
    failedCount?: boolean
    datasetCategory?: boolean
    datasetCandidates?: boolean
    sourceCandidates?: boolean
    originalInputCharacters?: boolean
    filteredInputCharacters?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    evaluations?: boolean | ScreeningRun$evaluationsArgs<ExtArgs>
    _count?: boolean | ScreeningRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screeningRun"]>

  export type ScreeningRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    status?: boolean
    modelName?: boolean
    promptVersion?: boolean
    totalCandidates?: boolean
    processedCount?: boolean
    failedCount?: boolean
    datasetCategory?: boolean
    datasetCandidates?: boolean
    sourceCandidates?: boolean
    originalInputCharacters?: boolean
    filteredInputCharacters?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screeningRun"]>

  export type ScreeningRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    status?: boolean
    modelName?: boolean
    promptVersion?: boolean
    totalCandidates?: boolean
    processedCount?: boolean
    failedCount?: boolean
    datasetCategory?: boolean
    datasetCandidates?: boolean
    sourceCandidates?: boolean
    originalInputCharacters?: boolean
    filteredInputCharacters?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screeningRun"]>

  export type ScreeningRunSelectScalar = {
    id?: boolean
    jobId?: boolean
    status?: boolean
    modelName?: boolean
    promptVersion?: boolean
    totalCandidates?: boolean
    processedCount?: boolean
    failedCount?: boolean
    datasetCategory?: boolean
    datasetCandidates?: boolean
    sourceCandidates?: boolean
    originalInputCharacters?: boolean
    filteredInputCharacters?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type ScreeningRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "status" | "modelName" | "promptVersion" | "totalCandidates" | "processedCount" | "failedCount" | "datasetCategory" | "datasetCandidates" | "sourceCandidates" | "originalInputCharacters" | "filteredInputCharacters" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["screeningRun"]>
  export type ScreeningRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    evaluations?: boolean | ScreeningRun$evaluationsArgs<ExtArgs>
    _count?: boolean | ScreeningRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScreeningRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }
  export type ScreeningRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
  }

  export type $ScreeningRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScreeningRun"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      evaluations: Prisma.$ResumeEvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      status: string
      modelName: string
      promptVersion: string
      totalCandidates: number
      processedCount: number
      failedCount: number
      datasetCategory: string | null
      datasetCandidates: number
      sourceCandidates: number
      originalInputCharacters: number
      filteredInputCharacters: number
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["screeningRun"]>
    composites: {}
  }

  type ScreeningRunGetPayload<S extends boolean | null | undefined | ScreeningRunDefaultArgs> = $Result.GetResult<Prisma.$ScreeningRunPayload, S>

  type ScreeningRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreeningRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreeningRunCountAggregateInputType | true
    }

  export interface ScreeningRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScreeningRun'], meta: { name: 'ScreeningRun' } }
    /**
     * Find zero or one ScreeningRun that matches the filter.
     * @param {ScreeningRunFindUniqueArgs} args - Arguments to find a ScreeningRun
     * @example
     * // Get one ScreeningRun
     * const screeningRun = await prisma.screeningRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreeningRunFindUniqueArgs>(args: SelectSubset<T, ScreeningRunFindUniqueArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScreeningRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreeningRunFindUniqueOrThrowArgs} args - Arguments to find a ScreeningRun
     * @example
     * // Get one ScreeningRun
     * const screeningRun = await prisma.screeningRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreeningRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreeningRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreeningRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunFindFirstArgs} args - Arguments to find a ScreeningRun
     * @example
     * // Get one ScreeningRun
     * const screeningRun = await prisma.screeningRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreeningRunFindFirstArgs>(args?: SelectSubset<T, ScreeningRunFindFirstArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScreeningRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunFindFirstOrThrowArgs} args - Arguments to find a ScreeningRun
     * @example
     * // Get one ScreeningRun
     * const screeningRun = await prisma.screeningRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreeningRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreeningRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScreeningRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScreeningRuns
     * const screeningRuns = await prisma.screeningRun.findMany()
     * 
     * // Get first 10 ScreeningRuns
     * const screeningRuns = await prisma.screeningRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screeningRunWithIdOnly = await prisma.screeningRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreeningRunFindManyArgs>(args?: SelectSubset<T, ScreeningRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScreeningRun.
     * @param {ScreeningRunCreateArgs} args - Arguments to create a ScreeningRun.
     * @example
     * // Create one ScreeningRun
     * const ScreeningRun = await prisma.screeningRun.create({
     *   data: {
     *     // ... data to create a ScreeningRun
     *   }
     * })
     * 
     */
    create<T extends ScreeningRunCreateArgs>(args: SelectSubset<T, ScreeningRunCreateArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScreeningRuns.
     * @param {ScreeningRunCreateManyArgs} args - Arguments to create many ScreeningRuns.
     * @example
     * // Create many ScreeningRuns
     * const screeningRun = await prisma.screeningRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreeningRunCreateManyArgs>(args?: SelectSubset<T, ScreeningRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScreeningRuns and returns the data saved in the database.
     * @param {ScreeningRunCreateManyAndReturnArgs} args - Arguments to create many ScreeningRuns.
     * @example
     * // Create many ScreeningRuns
     * const screeningRun = await prisma.screeningRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScreeningRuns and only return the `id`
     * const screeningRunWithIdOnly = await prisma.screeningRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreeningRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreeningRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScreeningRun.
     * @param {ScreeningRunDeleteArgs} args - Arguments to delete one ScreeningRun.
     * @example
     * // Delete one ScreeningRun
     * const ScreeningRun = await prisma.screeningRun.delete({
     *   where: {
     *     // ... filter to delete one ScreeningRun
     *   }
     * })
     * 
     */
    delete<T extends ScreeningRunDeleteArgs>(args: SelectSubset<T, ScreeningRunDeleteArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScreeningRun.
     * @param {ScreeningRunUpdateArgs} args - Arguments to update one ScreeningRun.
     * @example
     * // Update one ScreeningRun
     * const screeningRun = await prisma.screeningRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreeningRunUpdateArgs>(args: SelectSubset<T, ScreeningRunUpdateArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScreeningRuns.
     * @param {ScreeningRunDeleteManyArgs} args - Arguments to filter ScreeningRuns to delete.
     * @example
     * // Delete a few ScreeningRuns
     * const { count } = await prisma.screeningRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreeningRunDeleteManyArgs>(args?: SelectSubset<T, ScreeningRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreeningRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScreeningRuns
     * const screeningRun = await prisma.screeningRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreeningRunUpdateManyArgs>(args: SelectSubset<T, ScreeningRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScreeningRuns and returns the data updated in the database.
     * @param {ScreeningRunUpdateManyAndReturnArgs} args - Arguments to update many ScreeningRuns.
     * @example
     * // Update many ScreeningRuns
     * const screeningRun = await prisma.screeningRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScreeningRuns and only return the `id`
     * const screeningRunWithIdOnly = await prisma.screeningRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScreeningRunUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreeningRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScreeningRun.
     * @param {ScreeningRunUpsertArgs} args - Arguments to update or create a ScreeningRun.
     * @example
     * // Update or create a ScreeningRun
     * const screeningRun = await prisma.screeningRun.upsert({
     *   create: {
     *     // ... data to create a ScreeningRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScreeningRun we want to update
     *   }
     * })
     */
    upsert<T extends ScreeningRunUpsertArgs>(args: SelectSubset<T, ScreeningRunUpsertArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScreeningRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunCountArgs} args - Arguments to filter ScreeningRuns to count.
     * @example
     * // Count the number of ScreeningRuns
     * const count = await prisma.screeningRun.count({
     *   where: {
     *     // ... the filter for the ScreeningRuns we want to count
     *   }
     * })
    **/
    count<T extends ScreeningRunCountArgs>(
      args?: Subset<T, ScreeningRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreeningRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScreeningRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScreeningRunAggregateArgs>(args: Subset<T, ScreeningRunAggregateArgs>): Prisma.PrismaPromise<GetScreeningRunAggregateType<T>>

    /**
     * Group by ScreeningRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreeningRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScreeningRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreeningRunGroupByArgs['orderBy'] }
        : { orderBy?: ScreeningRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreeningRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScreeningRun model
   */
  readonly fields: ScreeningRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScreeningRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreeningRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluations<T extends ScreeningRun$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, ScreeningRun$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScreeningRun model
   */
  interface ScreeningRunFieldRefs {
    readonly id: FieldRef<"ScreeningRun", 'String'>
    readonly jobId: FieldRef<"ScreeningRun", 'String'>
    readonly status: FieldRef<"ScreeningRun", 'String'>
    readonly modelName: FieldRef<"ScreeningRun", 'String'>
    readonly promptVersion: FieldRef<"ScreeningRun", 'String'>
    readonly totalCandidates: FieldRef<"ScreeningRun", 'Int'>
    readonly processedCount: FieldRef<"ScreeningRun", 'Int'>
    readonly failedCount: FieldRef<"ScreeningRun", 'Int'>
    readonly datasetCategory: FieldRef<"ScreeningRun", 'String'>
    readonly datasetCandidates: FieldRef<"ScreeningRun", 'Int'>
    readonly sourceCandidates: FieldRef<"ScreeningRun", 'Int'>
    readonly originalInputCharacters: FieldRef<"ScreeningRun", 'Int'>
    readonly filteredInputCharacters: FieldRef<"ScreeningRun", 'Int'>
    readonly startedAt: FieldRef<"ScreeningRun", 'DateTime'>
    readonly completedAt: FieldRef<"ScreeningRun", 'DateTime'>
    readonly createdAt: FieldRef<"ScreeningRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScreeningRun findUnique
   */
  export type ScreeningRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningRun to fetch.
     */
    where: ScreeningRunWhereUniqueInput
  }

  /**
   * ScreeningRun findUniqueOrThrow
   */
  export type ScreeningRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningRun to fetch.
     */
    where: ScreeningRunWhereUniqueInput
  }

  /**
   * ScreeningRun findFirst
   */
  export type ScreeningRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningRun to fetch.
     */
    where?: ScreeningRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningRuns to fetch.
     */
    orderBy?: ScreeningRunOrderByWithRelationInput | ScreeningRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreeningRuns.
     */
    cursor?: ScreeningRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreeningRuns.
     */
    distinct?: ScreeningRunScalarFieldEnum | ScreeningRunScalarFieldEnum[]
  }

  /**
   * ScreeningRun findFirstOrThrow
   */
  export type ScreeningRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningRun to fetch.
     */
    where?: ScreeningRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningRuns to fetch.
     */
    orderBy?: ScreeningRunOrderByWithRelationInput | ScreeningRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScreeningRuns.
     */
    cursor?: ScreeningRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScreeningRuns.
     */
    distinct?: ScreeningRunScalarFieldEnum | ScreeningRunScalarFieldEnum[]
  }

  /**
   * ScreeningRun findMany
   */
  export type ScreeningRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * Filter, which ScreeningRuns to fetch.
     */
    where?: ScreeningRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScreeningRuns to fetch.
     */
    orderBy?: ScreeningRunOrderByWithRelationInput | ScreeningRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScreeningRuns.
     */
    cursor?: ScreeningRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScreeningRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScreeningRuns.
     */
    skip?: number
    distinct?: ScreeningRunScalarFieldEnum | ScreeningRunScalarFieldEnum[]
  }

  /**
   * ScreeningRun create
   */
  export type ScreeningRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ScreeningRun.
     */
    data: XOR<ScreeningRunCreateInput, ScreeningRunUncheckedCreateInput>
  }

  /**
   * ScreeningRun createMany
   */
  export type ScreeningRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScreeningRuns.
     */
    data: ScreeningRunCreateManyInput | ScreeningRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScreeningRun createManyAndReturn
   */
  export type ScreeningRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * The data used to create many ScreeningRuns.
     */
    data: ScreeningRunCreateManyInput | ScreeningRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreeningRun update
   */
  export type ScreeningRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ScreeningRun.
     */
    data: XOR<ScreeningRunUpdateInput, ScreeningRunUncheckedUpdateInput>
    /**
     * Choose, which ScreeningRun to update.
     */
    where: ScreeningRunWhereUniqueInput
  }

  /**
   * ScreeningRun updateMany
   */
  export type ScreeningRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScreeningRuns.
     */
    data: XOR<ScreeningRunUpdateManyMutationInput, ScreeningRunUncheckedUpdateManyInput>
    /**
     * Filter which ScreeningRuns to update
     */
    where?: ScreeningRunWhereInput
    /**
     * Limit how many ScreeningRuns to update.
     */
    limit?: number
  }

  /**
   * ScreeningRun updateManyAndReturn
   */
  export type ScreeningRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * The data used to update ScreeningRuns.
     */
    data: XOR<ScreeningRunUpdateManyMutationInput, ScreeningRunUncheckedUpdateManyInput>
    /**
     * Filter which ScreeningRuns to update
     */
    where?: ScreeningRunWhereInput
    /**
     * Limit how many ScreeningRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScreeningRun upsert
   */
  export type ScreeningRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ScreeningRun to update in case it exists.
     */
    where: ScreeningRunWhereUniqueInput
    /**
     * In case the ScreeningRun found by the `where` argument doesn't exist, create a new ScreeningRun with this data.
     */
    create: XOR<ScreeningRunCreateInput, ScreeningRunUncheckedCreateInput>
    /**
     * In case the ScreeningRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreeningRunUpdateInput, ScreeningRunUncheckedUpdateInput>
  }

  /**
   * ScreeningRun delete
   */
  export type ScreeningRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
    /**
     * Filter which ScreeningRun to delete.
     */
    where: ScreeningRunWhereUniqueInput
  }

  /**
   * ScreeningRun deleteMany
   */
  export type ScreeningRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScreeningRuns to delete
     */
    where?: ScreeningRunWhereInput
    /**
     * Limit how many ScreeningRuns to delete.
     */
    limit?: number
  }

  /**
   * ScreeningRun.evaluations
   */
  export type ScreeningRun$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    where?: ResumeEvaluationWhereInput
    orderBy?: ResumeEvaluationOrderByWithRelationInput | ResumeEvaluationOrderByWithRelationInput[]
    cursor?: ResumeEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeEvaluationScalarFieldEnum | ResumeEvaluationScalarFieldEnum[]
  }

  /**
   * ScreeningRun without action
   */
  export type ScreeningRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreeningRun
     */
    select?: ScreeningRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScreeningRun
     */
    omit?: ScreeningRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreeningRunInclude<ExtArgs> | null
  }


  /**
   * Model ResumeEvaluation
   */

  export type AggregateResumeEvaluation = {
    _count: ResumeEvaluationCountAggregateOutputType | null
    _avg: ResumeEvaluationAvgAggregateOutputType | null
    _sum: ResumeEvaluationSumAggregateOutputType | null
    _min: ResumeEvaluationMinAggregateOutputType | null
    _max: ResumeEvaluationMaxAggregateOutputType | null
  }

  export type ResumeEvaluationAvgAggregateOutputType = {
    preScreenScore: number | null
    fitScore: number | null
    confidence: number | null
  }

  export type ResumeEvaluationSumAggregateOutputType = {
    preScreenScore: number | null
    fitScore: number | null
    confidence: number | null
  }

  export type ResumeEvaluationMinAggregateOutputType = {
    id: string | null
    runId: string | null
    resumeId: string | null
    status: string | null
    preScreenScore: number | null
    fitScore: number | null
    matchLabel: string | null
    confidence: number | null
    matchedRequirementsJson: string | null
    missingRequirementsJson: string | null
    supportingEvidenceJson: string | null
    summary: string | null
    needsHumanReview: boolean | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeEvaluationMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    resumeId: string | null
    status: string | null
    preScreenScore: number | null
    fitScore: number | null
    matchLabel: string | null
    confidence: number | null
    matchedRequirementsJson: string | null
    missingRequirementsJson: string | null
    supportingEvidenceJson: string | null
    summary: string | null
    needsHumanReview: boolean | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeEvaluationCountAggregateOutputType = {
    id: number
    runId: number
    resumeId: number
    status: number
    preScreenScore: number
    fitScore: number
    matchLabel: number
    confidence: number
    matchedRequirementsJson: number
    missingRequirementsJson: number
    supportingEvidenceJson: number
    summary: number
    needsHumanReview: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeEvaluationAvgAggregateInputType = {
    preScreenScore?: true
    fitScore?: true
    confidence?: true
  }

  export type ResumeEvaluationSumAggregateInputType = {
    preScreenScore?: true
    fitScore?: true
    confidence?: true
  }

  export type ResumeEvaluationMinAggregateInputType = {
    id?: true
    runId?: true
    resumeId?: true
    status?: true
    preScreenScore?: true
    fitScore?: true
    matchLabel?: true
    confidence?: true
    matchedRequirementsJson?: true
    missingRequirementsJson?: true
    supportingEvidenceJson?: true
    summary?: true
    needsHumanReview?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeEvaluationMaxAggregateInputType = {
    id?: true
    runId?: true
    resumeId?: true
    status?: true
    preScreenScore?: true
    fitScore?: true
    matchLabel?: true
    confidence?: true
    matchedRequirementsJson?: true
    missingRequirementsJson?: true
    supportingEvidenceJson?: true
    summary?: true
    needsHumanReview?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeEvaluationCountAggregateInputType = {
    id?: true
    runId?: true
    resumeId?: true
    status?: true
    preScreenScore?: true
    fitScore?: true
    matchLabel?: true
    confidence?: true
    matchedRequirementsJson?: true
    missingRequirementsJson?: true
    supportingEvidenceJson?: true
    summary?: true
    needsHumanReview?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeEvaluation to aggregate.
     */
    where?: ResumeEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvaluations to fetch.
     */
    orderBy?: ResumeEvaluationOrderByWithRelationInput | ResumeEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeEvaluations
    **/
    _count?: true | ResumeEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeEvaluationMaxAggregateInputType
  }

  export type GetResumeEvaluationAggregateType<T extends ResumeEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeEvaluation[P]>
      : GetScalarType<T[P], AggregateResumeEvaluation[P]>
  }




  export type ResumeEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeEvaluationWhereInput
    orderBy?: ResumeEvaluationOrderByWithAggregationInput | ResumeEvaluationOrderByWithAggregationInput[]
    by: ResumeEvaluationScalarFieldEnum[] | ResumeEvaluationScalarFieldEnum
    having?: ResumeEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeEvaluationCountAggregateInputType | true
    _avg?: ResumeEvaluationAvgAggregateInputType
    _sum?: ResumeEvaluationSumAggregateInputType
    _min?: ResumeEvaluationMinAggregateInputType
    _max?: ResumeEvaluationMaxAggregateInputType
  }

  export type ResumeEvaluationGroupByOutputType = {
    id: string
    runId: string
    resumeId: string
    status: string
    preScreenScore: number | null
    fitScore: number | null
    matchLabel: string | null
    confidence: number | null
    matchedRequirementsJson: string | null
    missingRequirementsJson: string | null
    supportingEvidenceJson: string | null
    summary: string | null
    needsHumanReview: boolean
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeEvaluationCountAggregateOutputType | null
    _avg: ResumeEvaluationAvgAggregateOutputType | null
    _sum: ResumeEvaluationSumAggregateOutputType | null
    _min: ResumeEvaluationMinAggregateOutputType | null
    _max: ResumeEvaluationMaxAggregateOutputType | null
  }

  type GetResumeEvaluationGroupByPayload<T extends ResumeEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type ResumeEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    resumeId?: boolean
    status?: boolean
    preScreenScore?: boolean
    fitScore?: boolean
    matchLabel?: boolean
    confidence?: boolean
    matchedRequirementsJson?: boolean
    missingRequirementsJson?: boolean
    supportingEvidenceJson?: boolean
    summary?: boolean
    needsHumanReview?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | ScreeningRunDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeEvaluation"]>

  export type ResumeEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    resumeId?: boolean
    status?: boolean
    preScreenScore?: boolean
    fitScore?: boolean
    matchLabel?: boolean
    confidence?: boolean
    matchedRequirementsJson?: boolean
    missingRequirementsJson?: boolean
    supportingEvidenceJson?: boolean
    summary?: boolean
    needsHumanReview?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | ScreeningRunDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeEvaluation"]>

  export type ResumeEvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    resumeId?: boolean
    status?: boolean
    preScreenScore?: boolean
    fitScore?: boolean
    matchLabel?: boolean
    confidence?: boolean
    matchedRequirementsJson?: boolean
    missingRequirementsJson?: boolean
    supportingEvidenceJson?: boolean
    summary?: boolean
    needsHumanReview?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | ScreeningRunDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumeEvaluation"]>

  export type ResumeEvaluationSelectScalar = {
    id?: boolean
    runId?: boolean
    resumeId?: boolean
    status?: boolean
    preScreenScore?: boolean
    fitScore?: boolean
    matchLabel?: boolean
    confidence?: boolean
    matchedRequirementsJson?: boolean
    missingRequirementsJson?: boolean
    supportingEvidenceJson?: boolean
    summary?: boolean
    needsHumanReview?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeEvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "resumeId" | "status" | "preScreenScore" | "fitScore" | "matchLabel" | "confidence" | "matchedRequirementsJson" | "missingRequirementsJson" | "supportingEvidenceJson" | "summary" | "needsHumanReview" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["resumeEvaluation"]>
  export type ResumeEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | ScreeningRunDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | ScreeningRunDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }
  export type ResumeEvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | ScreeningRunDefaultArgs<ExtArgs>
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ResumeEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeEvaluation"
    objects: {
      run: Prisma.$ScreeningRunPayload<ExtArgs>
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      resumeId: string
      status: string
      preScreenScore: number | null
      fitScore: number | null
      matchLabel: string | null
      confidence: number | null
      matchedRequirementsJson: string | null
      missingRequirementsJson: string | null
      supportingEvidenceJson: string | null
      summary: string | null
      needsHumanReview: boolean
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resumeEvaluation"]>
    composites: {}
  }

  type ResumeEvaluationGetPayload<S extends boolean | null | undefined | ResumeEvaluationDefaultArgs> = $Result.GetResult<Prisma.$ResumeEvaluationPayload, S>

  type ResumeEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeEvaluationCountAggregateInputType | true
    }

  export interface ResumeEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeEvaluation'], meta: { name: 'ResumeEvaluation' } }
    /**
     * Find zero or one ResumeEvaluation that matches the filter.
     * @param {ResumeEvaluationFindUniqueArgs} args - Arguments to find a ResumeEvaluation
     * @example
     * // Get one ResumeEvaluation
     * const resumeEvaluation = await prisma.resumeEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeEvaluationFindUniqueArgs>(args: SelectSubset<T, ResumeEvaluationFindUniqueArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResumeEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeEvaluationFindUniqueOrThrowArgs} args - Arguments to find a ResumeEvaluation
     * @example
     * // Get one ResumeEvaluation
     * const resumeEvaluation = await prisma.resumeEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationFindFirstArgs} args - Arguments to find a ResumeEvaluation
     * @example
     * // Get one ResumeEvaluation
     * const resumeEvaluation = await prisma.resumeEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeEvaluationFindFirstArgs>(args?: SelectSubset<T, ResumeEvaluationFindFirstArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResumeEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationFindFirstOrThrowArgs} args - Arguments to find a ResumeEvaluation
     * @example
     * // Get one ResumeEvaluation
     * const resumeEvaluation = await prisma.resumeEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResumeEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeEvaluations
     * const resumeEvaluations = await prisma.resumeEvaluation.findMany()
     * 
     * // Get first 10 ResumeEvaluations
     * const resumeEvaluations = await prisma.resumeEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeEvaluationWithIdOnly = await prisma.resumeEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeEvaluationFindManyArgs>(args?: SelectSubset<T, ResumeEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResumeEvaluation.
     * @param {ResumeEvaluationCreateArgs} args - Arguments to create a ResumeEvaluation.
     * @example
     * // Create one ResumeEvaluation
     * const ResumeEvaluation = await prisma.resumeEvaluation.create({
     *   data: {
     *     // ... data to create a ResumeEvaluation
     *   }
     * })
     * 
     */
    create<T extends ResumeEvaluationCreateArgs>(args: SelectSubset<T, ResumeEvaluationCreateArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResumeEvaluations.
     * @param {ResumeEvaluationCreateManyArgs} args - Arguments to create many ResumeEvaluations.
     * @example
     * // Create many ResumeEvaluations
     * const resumeEvaluation = await prisma.resumeEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeEvaluationCreateManyArgs>(args?: SelectSubset<T, ResumeEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResumeEvaluations and returns the data saved in the database.
     * @param {ResumeEvaluationCreateManyAndReturnArgs} args - Arguments to create many ResumeEvaluations.
     * @example
     * // Create many ResumeEvaluations
     * const resumeEvaluation = await prisma.resumeEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResumeEvaluations and only return the `id`
     * const resumeEvaluationWithIdOnly = await prisma.resumeEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResumeEvaluation.
     * @param {ResumeEvaluationDeleteArgs} args - Arguments to delete one ResumeEvaluation.
     * @example
     * // Delete one ResumeEvaluation
     * const ResumeEvaluation = await prisma.resumeEvaluation.delete({
     *   where: {
     *     // ... filter to delete one ResumeEvaluation
     *   }
     * })
     * 
     */
    delete<T extends ResumeEvaluationDeleteArgs>(args: SelectSubset<T, ResumeEvaluationDeleteArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResumeEvaluation.
     * @param {ResumeEvaluationUpdateArgs} args - Arguments to update one ResumeEvaluation.
     * @example
     * // Update one ResumeEvaluation
     * const resumeEvaluation = await prisma.resumeEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeEvaluationUpdateArgs>(args: SelectSubset<T, ResumeEvaluationUpdateArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResumeEvaluations.
     * @param {ResumeEvaluationDeleteManyArgs} args - Arguments to filter ResumeEvaluations to delete.
     * @example
     * // Delete a few ResumeEvaluations
     * const { count } = await prisma.resumeEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeEvaluationDeleteManyArgs>(args?: SelectSubset<T, ResumeEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeEvaluations
     * const resumeEvaluation = await prisma.resumeEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeEvaluationUpdateManyArgs>(args: SelectSubset<T, ResumeEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeEvaluations and returns the data updated in the database.
     * @param {ResumeEvaluationUpdateManyAndReturnArgs} args - Arguments to update many ResumeEvaluations.
     * @example
     * // Update many ResumeEvaluations
     * const resumeEvaluation = await prisma.resumeEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResumeEvaluations and only return the `id`
     * const resumeEvaluationWithIdOnly = await prisma.resumeEvaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeEvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResumeEvaluation.
     * @param {ResumeEvaluationUpsertArgs} args - Arguments to update or create a ResumeEvaluation.
     * @example
     * // Update or create a ResumeEvaluation
     * const resumeEvaluation = await prisma.resumeEvaluation.upsert({
     *   create: {
     *     // ... data to create a ResumeEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends ResumeEvaluationUpsertArgs>(args: SelectSubset<T, ResumeEvaluationUpsertArgs<ExtArgs>>): Prisma__ResumeEvaluationClient<$Result.GetResult<Prisma.$ResumeEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResumeEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationCountArgs} args - Arguments to filter ResumeEvaluations to count.
     * @example
     * // Count the number of ResumeEvaluations
     * const count = await prisma.resumeEvaluation.count({
     *   where: {
     *     // ... the filter for the ResumeEvaluations we want to count
     *   }
     * })
    **/
    count<T extends ResumeEvaluationCountArgs>(
      args?: Subset<T, ResumeEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeEvaluationAggregateArgs>(args: Subset<T, ResumeEvaluationAggregateArgs>): Prisma.PrismaPromise<GetResumeEvaluationAggregateType<T>>

    /**
     * Group by ResumeEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeEvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: ResumeEvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeEvaluation model
   */
  readonly fields: ResumeEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends ScreeningRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScreeningRunDefaultArgs<ExtArgs>>): Prisma__ScreeningRunClient<$Result.GetResult<Prisma.$ScreeningRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResumeEvaluation model
   */
  interface ResumeEvaluationFieldRefs {
    readonly id: FieldRef<"ResumeEvaluation", 'String'>
    readonly runId: FieldRef<"ResumeEvaluation", 'String'>
    readonly resumeId: FieldRef<"ResumeEvaluation", 'String'>
    readonly status: FieldRef<"ResumeEvaluation", 'String'>
    readonly preScreenScore: FieldRef<"ResumeEvaluation", 'Int'>
    readonly fitScore: FieldRef<"ResumeEvaluation", 'Int'>
    readonly matchLabel: FieldRef<"ResumeEvaluation", 'String'>
    readonly confidence: FieldRef<"ResumeEvaluation", 'Float'>
    readonly matchedRequirementsJson: FieldRef<"ResumeEvaluation", 'String'>
    readonly missingRequirementsJson: FieldRef<"ResumeEvaluation", 'String'>
    readonly supportingEvidenceJson: FieldRef<"ResumeEvaluation", 'String'>
    readonly summary: FieldRef<"ResumeEvaluation", 'String'>
    readonly needsHumanReview: FieldRef<"ResumeEvaluation", 'Boolean'>
    readonly errorMessage: FieldRef<"ResumeEvaluation", 'String'>
    readonly createdAt: FieldRef<"ResumeEvaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"ResumeEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeEvaluation findUnique
   */
  export type ResumeEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvaluation to fetch.
     */
    where: ResumeEvaluationWhereUniqueInput
  }

  /**
   * ResumeEvaluation findUniqueOrThrow
   */
  export type ResumeEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvaluation to fetch.
     */
    where: ResumeEvaluationWhereUniqueInput
  }

  /**
   * ResumeEvaluation findFirst
   */
  export type ResumeEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvaluation to fetch.
     */
    where?: ResumeEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvaluations to fetch.
     */
    orderBy?: ResumeEvaluationOrderByWithRelationInput | ResumeEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeEvaluations.
     */
    cursor?: ResumeEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeEvaluations.
     */
    distinct?: ResumeEvaluationScalarFieldEnum | ResumeEvaluationScalarFieldEnum[]
  }

  /**
   * ResumeEvaluation findFirstOrThrow
   */
  export type ResumeEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvaluation to fetch.
     */
    where?: ResumeEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvaluations to fetch.
     */
    orderBy?: ResumeEvaluationOrderByWithRelationInput | ResumeEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeEvaluations.
     */
    cursor?: ResumeEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeEvaluations.
     */
    distinct?: ResumeEvaluationScalarFieldEnum | ResumeEvaluationScalarFieldEnum[]
  }

  /**
   * ResumeEvaluation findMany
   */
  export type ResumeEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which ResumeEvaluations to fetch.
     */
    where?: ResumeEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeEvaluations to fetch.
     */
    orderBy?: ResumeEvaluationOrderByWithRelationInput | ResumeEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeEvaluations.
     */
    cursor?: ResumeEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeEvaluations.
     */
    skip?: number
    distinct?: ResumeEvaluationScalarFieldEnum | ResumeEvaluationScalarFieldEnum[]
  }

  /**
   * ResumeEvaluation create
   */
  export type ResumeEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a ResumeEvaluation.
     */
    data: XOR<ResumeEvaluationCreateInput, ResumeEvaluationUncheckedCreateInput>
  }

  /**
   * ResumeEvaluation createMany
   */
  export type ResumeEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeEvaluations.
     */
    data: ResumeEvaluationCreateManyInput | ResumeEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeEvaluation createManyAndReturn
   */
  export type ResumeEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many ResumeEvaluations.
     */
    data: ResumeEvaluationCreateManyInput | ResumeEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeEvaluation update
   */
  export type ResumeEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a ResumeEvaluation.
     */
    data: XOR<ResumeEvaluationUpdateInput, ResumeEvaluationUncheckedUpdateInput>
    /**
     * Choose, which ResumeEvaluation to update.
     */
    where: ResumeEvaluationWhereUniqueInput
  }

  /**
   * ResumeEvaluation updateMany
   */
  export type ResumeEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeEvaluations.
     */
    data: XOR<ResumeEvaluationUpdateManyMutationInput, ResumeEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which ResumeEvaluations to update
     */
    where?: ResumeEvaluationWhereInput
    /**
     * Limit how many ResumeEvaluations to update.
     */
    limit?: number
  }

  /**
   * ResumeEvaluation updateManyAndReturn
   */
  export type ResumeEvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * The data used to update ResumeEvaluations.
     */
    data: XOR<ResumeEvaluationUpdateManyMutationInput, ResumeEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which ResumeEvaluations to update
     */
    where?: ResumeEvaluationWhereInput
    /**
     * Limit how many ResumeEvaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResumeEvaluation upsert
   */
  export type ResumeEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the ResumeEvaluation to update in case it exists.
     */
    where: ResumeEvaluationWhereUniqueInput
    /**
     * In case the ResumeEvaluation found by the `where` argument doesn't exist, create a new ResumeEvaluation with this data.
     */
    create: XOR<ResumeEvaluationCreateInput, ResumeEvaluationUncheckedCreateInput>
    /**
     * In case the ResumeEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeEvaluationUpdateInput, ResumeEvaluationUncheckedUpdateInput>
  }

  /**
   * ResumeEvaluation delete
   */
  export type ResumeEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
    /**
     * Filter which ResumeEvaluation to delete.
     */
    where: ResumeEvaluationWhereUniqueInput
  }

  /**
   * ResumeEvaluation deleteMany
   */
  export type ResumeEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeEvaluations to delete
     */
    where?: ResumeEvaluationWhereInput
    /**
     * Limit how many ResumeEvaluations to delete.
     */
    limit?: number
  }

  /**
   * ResumeEvaluation without action
   */
  export type ResumeEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeEvaluation
     */
    select?: ResumeEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResumeEvaluation
     */
    omit?: ResumeEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeEvaluationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    sourceFileName: 'sourceFileName',
    sourceRow: 'sourceRow',
    originalCategory: 'originalCategory',
    datasetName: 'datasetName',
    rawText: 'rawText',
    sanitizedText: 'sanitizedText',
    resumeHtml: 'resumeHtml',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    extractedProfileJson: 'extractedProfileJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ScreeningRunScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    status: 'status',
    modelName: 'modelName',
    promptVersion: 'promptVersion',
    totalCandidates: 'totalCandidates',
    processedCount: 'processedCount',
    failedCount: 'failedCount',
    datasetCategory: 'datasetCategory',
    datasetCandidates: 'datasetCandidates',
    sourceCandidates: 'sourceCandidates',
    originalInputCharacters: 'originalInputCharacters',
    filteredInputCharacters: 'filteredInputCharacters',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type ScreeningRunScalarFieldEnum = (typeof ScreeningRunScalarFieldEnum)[keyof typeof ScreeningRunScalarFieldEnum]


  export const ResumeEvaluationScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    resumeId: 'resumeId',
    status: 'status',
    preScreenScore: 'preScreenScore',
    fitScore: 'fitScore',
    matchLabel: 'matchLabel',
    confidence: 'confidence',
    matchedRequirementsJson: 'matchedRequirementsJson',
    missingRequirementsJson: 'missingRequirementsJson',
    supportingEvidenceJson: 'supportingEvidenceJson',
    summary: 'summary',
    needsHumanReview: 'needsHumanReview',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeEvaluationScalarFieldEnum = (typeof ResumeEvaluationScalarFieldEnum)[keyof typeof ResumeEvaluationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    externalId?: StringNullableFilter<"Resume"> | string | null
    sourceFileName?: StringNullableFilter<"Resume"> | string | null
    sourceRow?: IntNullableFilter<"Resume"> | number | null
    originalCategory?: StringNullableFilter<"Resume"> | string | null
    datasetName?: StringNullableFilter<"Resume"> | string | null
    rawText?: StringFilter<"Resume"> | string
    sanitizedText?: StringFilter<"Resume"> | string
    resumeHtml?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    evaluations?: ResumeEvaluationListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    sourceFileName?: SortOrderInput | SortOrder
    sourceRow?: SortOrderInput | SortOrder
    originalCategory?: SortOrderInput | SortOrder
    datasetName?: SortOrderInput | SortOrder
    rawText?: SortOrder
    sanitizedText?: SortOrder
    resumeHtml?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    evaluations?: ResumeEvaluationOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    datasetName_externalId?: ResumeDatasetNameExternalIdCompoundUniqueInput
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    externalId?: StringNullableFilter<"Resume"> | string | null
    sourceFileName?: StringNullableFilter<"Resume"> | string | null
    sourceRow?: IntNullableFilter<"Resume"> | number | null
    originalCategory?: StringNullableFilter<"Resume"> | string | null
    datasetName?: StringNullableFilter<"Resume"> | string | null
    rawText?: StringFilter<"Resume"> | string
    sanitizedText?: StringFilter<"Resume"> | string
    resumeHtml?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    evaluations?: ResumeEvaluationListRelationFilter
  }, "id" | "datasetName_externalId">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrderInput | SortOrder
    sourceFileName?: SortOrderInput | SortOrder
    sourceRow?: SortOrderInput | SortOrder
    originalCategory?: SortOrderInput | SortOrder
    datasetName?: SortOrderInput | SortOrder
    rawText?: SortOrder
    sanitizedText?: SortOrder
    resumeHtml?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    externalId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    sourceFileName?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    sourceRow?: IntNullableWithAggregatesFilter<"Resume"> | number | null
    originalCategory?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    datasetName?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    rawText?: StringWithAggregatesFilter<"Resume"> | string
    sanitizedText?: StringWithAggregatesFilter<"Resume"> | string
    resumeHtml?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    extractedProfileJson?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    screeningRuns?: ScreeningRunListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    extractedProfileJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screeningRuns?: ScreeningRunOrderByRelationAggregateInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    extractedProfileJson?: StringFilter<"Job"> | string
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    screeningRuns?: ScreeningRunListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    extractedProfileJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    extractedProfileJson?: StringWithAggregatesFilter<"Job"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type ScreeningRunWhereInput = {
    AND?: ScreeningRunWhereInput | ScreeningRunWhereInput[]
    OR?: ScreeningRunWhereInput[]
    NOT?: ScreeningRunWhereInput | ScreeningRunWhereInput[]
    id?: StringFilter<"ScreeningRun"> | string
    jobId?: StringFilter<"ScreeningRun"> | string
    status?: StringFilter<"ScreeningRun"> | string
    modelName?: StringFilter<"ScreeningRun"> | string
    promptVersion?: StringFilter<"ScreeningRun"> | string
    totalCandidates?: IntFilter<"ScreeningRun"> | number
    processedCount?: IntFilter<"ScreeningRun"> | number
    failedCount?: IntFilter<"ScreeningRun"> | number
    datasetCategory?: StringNullableFilter<"ScreeningRun"> | string | null
    datasetCandidates?: IntFilter<"ScreeningRun"> | number
    sourceCandidates?: IntFilter<"ScreeningRun"> | number
    originalInputCharacters?: IntFilter<"ScreeningRun"> | number
    filteredInputCharacters?: IntFilter<"ScreeningRun"> | number
    startedAt?: DateTimeNullableFilter<"ScreeningRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScreeningRun"> | Date | string | null
    createdAt?: DateTimeFilter<"ScreeningRun"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    evaluations?: ResumeEvaluationListRelationFilter
  }

  export type ScreeningRunOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCategory?: SortOrderInput | SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    job?: JobOrderByWithRelationInput
    evaluations?: ResumeEvaluationOrderByRelationAggregateInput
  }

  export type ScreeningRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScreeningRunWhereInput | ScreeningRunWhereInput[]
    OR?: ScreeningRunWhereInput[]
    NOT?: ScreeningRunWhereInput | ScreeningRunWhereInput[]
    jobId?: StringFilter<"ScreeningRun"> | string
    status?: StringFilter<"ScreeningRun"> | string
    modelName?: StringFilter<"ScreeningRun"> | string
    promptVersion?: StringFilter<"ScreeningRun"> | string
    totalCandidates?: IntFilter<"ScreeningRun"> | number
    processedCount?: IntFilter<"ScreeningRun"> | number
    failedCount?: IntFilter<"ScreeningRun"> | number
    datasetCategory?: StringNullableFilter<"ScreeningRun"> | string | null
    datasetCandidates?: IntFilter<"ScreeningRun"> | number
    sourceCandidates?: IntFilter<"ScreeningRun"> | number
    originalInputCharacters?: IntFilter<"ScreeningRun"> | number
    filteredInputCharacters?: IntFilter<"ScreeningRun"> | number
    startedAt?: DateTimeNullableFilter<"ScreeningRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScreeningRun"> | Date | string | null
    createdAt?: DateTimeFilter<"ScreeningRun"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    evaluations?: ResumeEvaluationListRelationFilter
  }, "id">

  export type ScreeningRunOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCategory?: SortOrderInput | SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScreeningRunCountOrderByAggregateInput
    _avg?: ScreeningRunAvgOrderByAggregateInput
    _max?: ScreeningRunMaxOrderByAggregateInput
    _min?: ScreeningRunMinOrderByAggregateInput
    _sum?: ScreeningRunSumOrderByAggregateInput
  }

  export type ScreeningRunScalarWhereWithAggregatesInput = {
    AND?: ScreeningRunScalarWhereWithAggregatesInput | ScreeningRunScalarWhereWithAggregatesInput[]
    OR?: ScreeningRunScalarWhereWithAggregatesInput[]
    NOT?: ScreeningRunScalarWhereWithAggregatesInput | ScreeningRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScreeningRun"> | string
    jobId?: StringWithAggregatesFilter<"ScreeningRun"> | string
    status?: StringWithAggregatesFilter<"ScreeningRun"> | string
    modelName?: StringWithAggregatesFilter<"ScreeningRun"> | string
    promptVersion?: StringWithAggregatesFilter<"ScreeningRun"> | string
    totalCandidates?: IntWithAggregatesFilter<"ScreeningRun"> | number
    processedCount?: IntWithAggregatesFilter<"ScreeningRun"> | number
    failedCount?: IntWithAggregatesFilter<"ScreeningRun"> | number
    datasetCategory?: StringNullableWithAggregatesFilter<"ScreeningRun"> | string | null
    datasetCandidates?: IntWithAggregatesFilter<"ScreeningRun"> | number
    sourceCandidates?: IntWithAggregatesFilter<"ScreeningRun"> | number
    originalInputCharacters?: IntWithAggregatesFilter<"ScreeningRun"> | number
    filteredInputCharacters?: IntWithAggregatesFilter<"ScreeningRun"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"ScreeningRun"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScreeningRun"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScreeningRun"> | Date | string
  }

  export type ResumeEvaluationWhereInput = {
    AND?: ResumeEvaluationWhereInput | ResumeEvaluationWhereInput[]
    OR?: ResumeEvaluationWhereInput[]
    NOT?: ResumeEvaluationWhereInput | ResumeEvaluationWhereInput[]
    id?: StringFilter<"ResumeEvaluation"> | string
    runId?: StringFilter<"ResumeEvaluation"> | string
    resumeId?: StringFilter<"ResumeEvaluation"> | string
    status?: StringFilter<"ResumeEvaluation"> | string
    preScreenScore?: IntNullableFilter<"ResumeEvaluation"> | number | null
    fitScore?: IntNullableFilter<"ResumeEvaluation"> | number | null
    matchLabel?: StringNullableFilter<"ResumeEvaluation"> | string | null
    confidence?: FloatNullableFilter<"ResumeEvaluation"> | number | null
    matchedRequirementsJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    missingRequirementsJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    supportingEvidenceJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    summary?: StringNullableFilter<"ResumeEvaluation"> | string | null
    needsHumanReview?: BoolFilter<"ResumeEvaluation"> | boolean
    errorMessage?: StringNullableFilter<"ResumeEvaluation"> | string | null
    createdAt?: DateTimeFilter<"ResumeEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeEvaluation"> | Date | string
    run?: XOR<ScreeningRunScalarRelationFilter, ScreeningRunWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ResumeEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    preScreenScore?: SortOrderInput | SortOrder
    fitScore?: SortOrderInput | SortOrder
    matchLabel?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    matchedRequirementsJson?: SortOrderInput | SortOrder
    missingRequirementsJson?: SortOrderInput | SortOrder
    supportingEvidenceJson?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    needsHumanReview?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    run?: ScreeningRunOrderByWithRelationInput
    resume?: ResumeOrderByWithRelationInput
  }

  export type ResumeEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId_resumeId?: ResumeEvaluationRunIdResumeIdCompoundUniqueInput
    AND?: ResumeEvaluationWhereInput | ResumeEvaluationWhereInput[]
    OR?: ResumeEvaluationWhereInput[]
    NOT?: ResumeEvaluationWhereInput | ResumeEvaluationWhereInput[]
    runId?: StringFilter<"ResumeEvaluation"> | string
    resumeId?: StringFilter<"ResumeEvaluation"> | string
    status?: StringFilter<"ResumeEvaluation"> | string
    preScreenScore?: IntNullableFilter<"ResumeEvaluation"> | number | null
    fitScore?: IntNullableFilter<"ResumeEvaluation"> | number | null
    matchLabel?: StringNullableFilter<"ResumeEvaluation"> | string | null
    confidence?: FloatNullableFilter<"ResumeEvaluation"> | number | null
    matchedRequirementsJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    missingRequirementsJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    supportingEvidenceJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    summary?: StringNullableFilter<"ResumeEvaluation"> | string | null
    needsHumanReview?: BoolFilter<"ResumeEvaluation"> | boolean
    errorMessage?: StringNullableFilter<"ResumeEvaluation"> | string | null
    createdAt?: DateTimeFilter<"ResumeEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeEvaluation"> | Date | string
    run?: XOR<ScreeningRunScalarRelationFilter, ScreeningRunWhereInput>
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id" | "runId_resumeId">

  export type ResumeEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    preScreenScore?: SortOrderInput | SortOrder
    fitScore?: SortOrderInput | SortOrder
    matchLabel?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    matchedRequirementsJson?: SortOrderInput | SortOrder
    missingRequirementsJson?: SortOrderInput | SortOrder
    supportingEvidenceJson?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    needsHumanReview?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeEvaluationCountOrderByAggregateInput
    _avg?: ResumeEvaluationAvgOrderByAggregateInput
    _max?: ResumeEvaluationMaxOrderByAggregateInput
    _min?: ResumeEvaluationMinOrderByAggregateInput
    _sum?: ResumeEvaluationSumOrderByAggregateInput
  }

  export type ResumeEvaluationScalarWhereWithAggregatesInput = {
    AND?: ResumeEvaluationScalarWhereWithAggregatesInput | ResumeEvaluationScalarWhereWithAggregatesInput[]
    OR?: ResumeEvaluationScalarWhereWithAggregatesInput[]
    NOT?: ResumeEvaluationScalarWhereWithAggregatesInput | ResumeEvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResumeEvaluation"> | string
    runId?: StringWithAggregatesFilter<"ResumeEvaluation"> | string
    resumeId?: StringWithAggregatesFilter<"ResumeEvaluation"> | string
    status?: StringWithAggregatesFilter<"ResumeEvaluation"> | string
    preScreenScore?: IntNullableWithAggregatesFilter<"ResumeEvaluation"> | number | null
    fitScore?: IntNullableWithAggregatesFilter<"ResumeEvaluation"> | number | null
    matchLabel?: StringNullableWithAggregatesFilter<"ResumeEvaluation"> | string | null
    confidence?: FloatNullableWithAggregatesFilter<"ResumeEvaluation"> | number | null
    matchedRequirementsJson?: StringNullableWithAggregatesFilter<"ResumeEvaluation"> | string | null
    missingRequirementsJson?: StringNullableWithAggregatesFilter<"ResumeEvaluation"> | string | null
    supportingEvidenceJson?: StringNullableWithAggregatesFilter<"ResumeEvaluation"> | string | null
    summary?: StringNullableWithAggregatesFilter<"ResumeEvaluation"> | string | null
    needsHumanReview?: BoolWithAggregatesFilter<"ResumeEvaluation"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"ResumeEvaluation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ResumeEvaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResumeEvaluation"> | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    externalId?: string | null
    sourceFileName?: string | null
    sourceRow?: number | null
    originalCategory?: string | null
    datasetName?: string | null
    rawText: string
    sanitizedText: string
    resumeHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: ResumeEvaluationCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    externalId?: string | null
    sourceFileName?: string | null
    sourceRow?: number | null
    originalCategory?: string | null
    datasetName?: string | null
    rawText: string
    sanitizedText: string
    resumeHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: ResumeEvaluationUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceFileName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRow?: NullableIntFieldUpdateOperationsInput | number | null
    originalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetName?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    sanitizedText?: StringFieldUpdateOperationsInput | string
    resumeHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: ResumeEvaluationUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceFileName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRow?: NullableIntFieldUpdateOperationsInput | number | null
    originalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetName?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    sanitizedText?: StringFieldUpdateOperationsInput | string
    resumeHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: ResumeEvaluationUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    externalId?: string | null
    sourceFileName?: string | null
    sourceRow?: number | null
    originalCategory?: string | null
    datasetName?: string | null
    rawText: string
    sanitizedText: string
    resumeHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceFileName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRow?: NullableIntFieldUpdateOperationsInput | number | null
    originalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetName?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    sanitizedText?: StringFieldUpdateOperationsInput | string
    resumeHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceFileName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRow?: NullableIntFieldUpdateOperationsInput | number | null
    originalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetName?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    sanitizedText?: StringFieldUpdateOperationsInput | string
    resumeHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    title: string
    description: string
    extractedProfileJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    screeningRuns?: ScreeningRunCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    extractedProfileJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    screeningRuns?: ScreeningRunUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    extractedProfileJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screeningRuns?: ScreeningRunUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    extractedProfileJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screeningRuns?: ScreeningRunUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    title: string
    description: string
    extractedProfileJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    extractedProfileJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    extractedProfileJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningRunCreateInput = {
    id?: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutScreeningRunsInput
    evaluations?: ResumeEvaluationCreateNestedManyWithoutRunInput
  }

  export type ScreeningRunUncheckedCreateInput = {
    id?: string
    jobId: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    evaluations?: ResumeEvaluationUncheckedCreateNestedManyWithoutRunInput
  }

  export type ScreeningRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutScreeningRunsNestedInput
    evaluations?: ResumeEvaluationUpdateManyWithoutRunNestedInput
  }

  export type ScreeningRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: ResumeEvaluationUncheckedUpdateManyWithoutRunNestedInput
  }

  export type ScreeningRunCreateManyInput = {
    id?: string
    jobId: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ScreeningRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationCreateInput = {
    id?: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    run: ScreeningRunCreateNestedOneWithoutEvaluationsInput
    resume: ResumeCreateNestedOneWithoutEvaluationsInput
  }

  export type ResumeEvaluationUncheckedCreateInput = {
    id?: string
    runId: string
    resumeId: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: ScreeningRunUpdateOneRequiredWithoutEvaluationsNestedInput
    resume?: ResumeUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type ResumeEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationCreateManyInput = {
    id?: string
    runId: string
    resumeId: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResumeEvaluationListRelationFilter = {
    every?: ResumeEvaluationWhereInput
    some?: ResumeEvaluationWhereInput
    none?: ResumeEvaluationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeDatasetNameExternalIdCompoundUniqueInput = {
    datasetName: string
    externalId: string
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    sourceFileName?: SortOrder
    sourceRow?: SortOrder
    originalCategory?: SortOrder
    datasetName?: SortOrder
    rawText?: SortOrder
    sanitizedText?: SortOrder
    resumeHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    sourceRow?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    sourceFileName?: SortOrder
    sourceRow?: SortOrder
    originalCategory?: SortOrder
    datasetName?: SortOrder
    rawText?: SortOrder
    sanitizedText?: SortOrder
    resumeHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    sourceFileName?: SortOrder
    sourceRow?: SortOrder
    originalCategory?: SortOrder
    datasetName?: SortOrder
    rawText?: SortOrder
    sanitizedText?: SortOrder
    resumeHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    sourceRow?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ScreeningRunListRelationFilter = {
    every?: ScreeningRunWhereInput
    some?: ScreeningRunWhereInput
    none?: ScreeningRunWhereInput
  }

  export type ScreeningRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    extractedProfileJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    extractedProfileJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    extractedProfileJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ScreeningRunCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCategory?: SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningRunAvgOrderByAggregateInput = {
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
  }

  export type ScreeningRunMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCategory?: SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningRunMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    modelName?: SortOrder
    promptVersion?: SortOrder
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCategory?: SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ScreeningRunSumOrderByAggregateInput = {
    totalCandidates?: SortOrder
    processedCount?: SortOrder
    failedCount?: SortOrder
    datasetCandidates?: SortOrder
    sourceCandidates?: SortOrder
    originalInputCharacters?: SortOrder
    filteredInputCharacters?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ScreeningRunScalarRelationFilter = {
    is?: ScreeningRunWhereInput
    isNot?: ScreeningRunWhereInput
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type ResumeEvaluationRunIdResumeIdCompoundUniqueInput = {
    runId: string
    resumeId: string
  }

  export type ResumeEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    preScreenScore?: SortOrder
    fitScore?: SortOrder
    matchLabel?: SortOrder
    confidence?: SortOrder
    matchedRequirementsJson?: SortOrder
    missingRequirementsJson?: SortOrder
    supportingEvidenceJson?: SortOrder
    summary?: SortOrder
    needsHumanReview?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeEvaluationAvgOrderByAggregateInput = {
    preScreenScore?: SortOrder
    fitScore?: SortOrder
    confidence?: SortOrder
  }

  export type ResumeEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    preScreenScore?: SortOrder
    fitScore?: SortOrder
    matchLabel?: SortOrder
    confidence?: SortOrder
    matchedRequirementsJson?: SortOrder
    missingRequirementsJson?: SortOrder
    supportingEvidenceJson?: SortOrder
    summary?: SortOrder
    needsHumanReview?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    resumeId?: SortOrder
    status?: SortOrder
    preScreenScore?: SortOrder
    fitScore?: SortOrder
    matchLabel?: SortOrder
    confidence?: SortOrder
    matchedRequirementsJson?: SortOrder
    missingRequirementsJson?: SortOrder
    supportingEvidenceJson?: SortOrder
    summary?: SortOrder
    needsHumanReview?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeEvaluationSumOrderByAggregateInput = {
    preScreenScore?: SortOrder
    fitScore?: SortOrder
    confidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ResumeEvaluationCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeEvaluationCreateWithoutResumeInput, ResumeEvaluationUncheckedCreateWithoutResumeInput> | ResumeEvaluationCreateWithoutResumeInput[] | ResumeEvaluationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutResumeInput | ResumeEvaluationCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeEvaluationCreateManyResumeInputEnvelope
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
  }

  export type ResumeEvaluationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ResumeEvaluationCreateWithoutResumeInput, ResumeEvaluationUncheckedCreateWithoutResumeInput> | ResumeEvaluationCreateWithoutResumeInput[] | ResumeEvaluationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutResumeInput | ResumeEvaluationCreateOrConnectWithoutResumeInput[]
    createMany?: ResumeEvaluationCreateManyResumeInputEnvelope
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResumeEvaluationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeEvaluationCreateWithoutResumeInput, ResumeEvaluationUncheckedCreateWithoutResumeInput> | ResumeEvaluationCreateWithoutResumeInput[] | ResumeEvaluationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutResumeInput | ResumeEvaluationCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeEvaluationUpsertWithWhereUniqueWithoutResumeInput | ResumeEvaluationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeEvaluationCreateManyResumeInputEnvelope
    set?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    disconnect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    delete?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    update?: ResumeEvaluationUpdateWithWhereUniqueWithoutResumeInput | ResumeEvaluationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeEvaluationUpdateManyWithWhereWithoutResumeInput | ResumeEvaluationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeEvaluationScalarWhereInput | ResumeEvaluationScalarWhereInput[]
  }

  export type ResumeEvaluationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ResumeEvaluationCreateWithoutResumeInput, ResumeEvaluationUncheckedCreateWithoutResumeInput> | ResumeEvaluationCreateWithoutResumeInput[] | ResumeEvaluationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutResumeInput | ResumeEvaluationCreateOrConnectWithoutResumeInput[]
    upsert?: ResumeEvaluationUpsertWithWhereUniqueWithoutResumeInput | ResumeEvaluationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ResumeEvaluationCreateManyResumeInputEnvelope
    set?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    disconnect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    delete?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    update?: ResumeEvaluationUpdateWithWhereUniqueWithoutResumeInput | ResumeEvaluationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ResumeEvaluationUpdateManyWithWhereWithoutResumeInput | ResumeEvaluationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ResumeEvaluationScalarWhereInput | ResumeEvaluationScalarWhereInput[]
  }

  export type ScreeningRunCreateNestedManyWithoutJobInput = {
    create?: XOR<ScreeningRunCreateWithoutJobInput, ScreeningRunUncheckedCreateWithoutJobInput> | ScreeningRunCreateWithoutJobInput[] | ScreeningRunUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ScreeningRunCreateOrConnectWithoutJobInput | ScreeningRunCreateOrConnectWithoutJobInput[]
    createMany?: ScreeningRunCreateManyJobInputEnvelope
    connect?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
  }

  export type ScreeningRunUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ScreeningRunCreateWithoutJobInput, ScreeningRunUncheckedCreateWithoutJobInput> | ScreeningRunCreateWithoutJobInput[] | ScreeningRunUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ScreeningRunCreateOrConnectWithoutJobInput | ScreeningRunCreateOrConnectWithoutJobInput[]
    createMany?: ScreeningRunCreateManyJobInputEnvelope
    connect?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
  }

  export type ScreeningRunUpdateManyWithoutJobNestedInput = {
    create?: XOR<ScreeningRunCreateWithoutJobInput, ScreeningRunUncheckedCreateWithoutJobInput> | ScreeningRunCreateWithoutJobInput[] | ScreeningRunUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ScreeningRunCreateOrConnectWithoutJobInput | ScreeningRunCreateOrConnectWithoutJobInput[]
    upsert?: ScreeningRunUpsertWithWhereUniqueWithoutJobInput | ScreeningRunUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ScreeningRunCreateManyJobInputEnvelope
    set?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    disconnect?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    delete?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    connect?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    update?: ScreeningRunUpdateWithWhereUniqueWithoutJobInput | ScreeningRunUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ScreeningRunUpdateManyWithWhereWithoutJobInput | ScreeningRunUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ScreeningRunScalarWhereInput | ScreeningRunScalarWhereInput[]
  }

  export type ScreeningRunUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ScreeningRunCreateWithoutJobInput, ScreeningRunUncheckedCreateWithoutJobInput> | ScreeningRunCreateWithoutJobInput[] | ScreeningRunUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ScreeningRunCreateOrConnectWithoutJobInput | ScreeningRunCreateOrConnectWithoutJobInput[]
    upsert?: ScreeningRunUpsertWithWhereUniqueWithoutJobInput | ScreeningRunUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ScreeningRunCreateManyJobInputEnvelope
    set?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    disconnect?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    delete?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    connect?: ScreeningRunWhereUniqueInput | ScreeningRunWhereUniqueInput[]
    update?: ScreeningRunUpdateWithWhereUniqueWithoutJobInput | ScreeningRunUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ScreeningRunUpdateManyWithWhereWithoutJobInput | ScreeningRunUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ScreeningRunScalarWhereInput | ScreeningRunScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutScreeningRunsInput = {
    create?: XOR<JobCreateWithoutScreeningRunsInput, JobUncheckedCreateWithoutScreeningRunsInput>
    connectOrCreate?: JobCreateOrConnectWithoutScreeningRunsInput
    connect?: JobWhereUniqueInput
  }

  export type ResumeEvaluationCreateNestedManyWithoutRunInput = {
    create?: XOR<ResumeEvaluationCreateWithoutRunInput, ResumeEvaluationUncheckedCreateWithoutRunInput> | ResumeEvaluationCreateWithoutRunInput[] | ResumeEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutRunInput | ResumeEvaluationCreateOrConnectWithoutRunInput[]
    createMany?: ResumeEvaluationCreateManyRunInputEnvelope
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
  }

  export type ResumeEvaluationUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<ResumeEvaluationCreateWithoutRunInput, ResumeEvaluationUncheckedCreateWithoutRunInput> | ResumeEvaluationCreateWithoutRunInput[] | ResumeEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutRunInput | ResumeEvaluationCreateOrConnectWithoutRunInput[]
    createMany?: ResumeEvaluationCreateManyRunInputEnvelope
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type JobUpdateOneRequiredWithoutScreeningRunsNestedInput = {
    create?: XOR<JobCreateWithoutScreeningRunsInput, JobUncheckedCreateWithoutScreeningRunsInput>
    connectOrCreate?: JobCreateOrConnectWithoutScreeningRunsInput
    upsert?: JobUpsertWithoutScreeningRunsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutScreeningRunsInput, JobUpdateWithoutScreeningRunsInput>, JobUncheckedUpdateWithoutScreeningRunsInput>
  }

  export type ResumeEvaluationUpdateManyWithoutRunNestedInput = {
    create?: XOR<ResumeEvaluationCreateWithoutRunInput, ResumeEvaluationUncheckedCreateWithoutRunInput> | ResumeEvaluationCreateWithoutRunInput[] | ResumeEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutRunInput | ResumeEvaluationCreateOrConnectWithoutRunInput[]
    upsert?: ResumeEvaluationUpsertWithWhereUniqueWithoutRunInput | ResumeEvaluationUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: ResumeEvaluationCreateManyRunInputEnvelope
    set?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    disconnect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    delete?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    update?: ResumeEvaluationUpdateWithWhereUniqueWithoutRunInput | ResumeEvaluationUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: ResumeEvaluationUpdateManyWithWhereWithoutRunInput | ResumeEvaluationUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: ResumeEvaluationScalarWhereInput | ResumeEvaluationScalarWhereInput[]
  }

  export type ResumeEvaluationUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<ResumeEvaluationCreateWithoutRunInput, ResumeEvaluationUncheckedCreateWithoutRunInput> | ResumeEvaluationCreateWithoutRunInput[] | ResumeEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: ResumeEvaluationCreateOrConnectWithoutRunInput | ResumeEvaluationCreateOrConnectWithoutRunInput[]
    upsert?: ResumeEvaluationUpsertWithWhereUniqueWithoutRunInput | ResumeEvaluationUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: ResumeEvaluationCreateManyRunInputEnvelope
    set?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    disconnect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    delete?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    connect?: ResumeEvaluationWhereUniqueInput | ResumeEvaluationWhereUniqueInput[]
    update?: ResumeEvaluationUpdateWithWhereUniqueWithoutRunInput | ResumeEvaluationUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: ResumeEvaluationUpdateManyWithWhereWithoutRunInput | ResumeEvaluationUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: ResumeEvaluationScalarWhereInput | ResumeEvaluationScalarWhereInput[]
  }

  export type ScreeningRunCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<ScreeningRunCreateWithoutEvaluationsInput, ScreeningRunUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ScreeningRunCreateOrConnectWithoutEvaluationsInput
    connect?: ScreeningRunWhereUniqueInput
  }

  export type ResumeCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<ResumeCreateWithoutEvaluationsInput, ResumeUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEvaluationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ScreeningRunUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<ScreeningRunCreateWithoutEvaluationsInput, ScreeningRunUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ScreeningRunCreateOrConnectWithoutEvaluationsInput
    upsert?: ScreeningRunUpsertWithoutEvaluationsInput
    connect?: ScreeningRunWhereUniqueInput
    update?: XOR<XOR<ScreeningRunUpdateToOneWithWhereWithoutEvaluationsInput, ScreeningRunUpdateWithoutEvaluationsInput>, ScreeningRunUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ResumeUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<ResumeCreateWithoutEvaluationsInput, ResumeUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEvaluationsInput
    upsert?: ResumeUpsertWithoutEvaluationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutEvaluationsInput, ResumeUpdateWithoutEvaluationsInput>, ResumeUncheckedUpdateWithoutEvaluationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ResumeEvaluationCreateWithoutResumeInput = {
    id?: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    run: ScreeningRunCreateNestedOneWithoutEvaluationsInput
  }

  export type ResumeEvaluationUncheckedCreateWithoutResumeInput = {
    id?: string
    runId: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeEvaluationCreateOrConnectWithoutResumeInput = {
    where: ResumeEvaluationWhereUniqueInput
    create: XOR<ResumeEvaluationCreateWithoutResumeInput, ResumeEvaluationUncheckedCreateWithoutResumeInput>
  }

  export type ResumeEvaluationCreateManyResumeInputEnvelope = {
    data: ResumeEvaluationCreateManyResumeInput | ResumeEvaluationCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type ResumeEvaluationUpsertWithWhereUniqueWithoutResumeInput = {
    where: ResumeEvaluationWhereUniqueInput
    update: XOR<ResumeEvaluationUpdateWithoutResumeInput, ResumeEvaluationUncheckedUpdateWithoutResumeInput>
    create: XOR<ResumeEvaluationCreateWithoutResumeInput, ResumeEvaluationUncheckedCreateWithoutResumeInput>
  }

  export type ResumeEvaluationUpdateWithWhereUniqueWithoutResumeInput = {
    where: ResumeEvaluationWhereUniqueInput
    data: XOR<ResumeEvaluationUpdateWithoutResumeInput, ResumeEvaluationUncheckedUpdateWithoutResumeInput>
  }

  export type ResumeEvaluationUpdateManyWithWhereWithoutResumeInput = {
    where: ResumeEvaluationScalarWhereInput
    data: XOR<ResumeEvaluationUpdateManyMutationInput, ResumeEvaluationUncheckedUpdateManyWithoutResumeInput>
  }

  export type ResumeEvaluationScalarWhereInput = {
    AND?: ResumeEvaluationScalarWhereInput | ResumeEvaluationScalarWhereInput[]
    OR?: ResumeEvaluationScalarWhereInput[]
    NOT?: ResumeEvaluationScalarWhereInput | ResumeEvaluationScalarWhereInput[]
    id?: StringFilter<"ResumeEvaluation"> | string
    runId?: StringFilter<"ResumeEvaluation"> | string
    resumeId?: StringFilter<"ResumeEvaluation"> | string
    status?: StringFilter<"ResumeEvaluation"> | string
    preScreenScore?: IntNullableFilter<"ResumeEvaluation"> | number | null
    fitScore?: IntNullableFilter<"ResumeEvaluation"> | number | null
    matchLabel?: StringNullableFilter<"ResumeEvaluation"> | string | null
    confidence?: FloatNullableFilter<"ResumeEvaluation"> | number | null
    matchedRequirementsJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    missingRequirementsJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    supportingEvidenceJson?: StringNullableFilter<"ResumeEvaluation"> | string | null
    summary?: StringNullableFilter<"ResumeEvaluation"> | string | null
    needsHumanReview?: BoolFilter<"ResumeEvaluation"> | boolean
    errorMessage?: StringNullableFilter<"ResumeEvaluation"> | string | null
    createdAt?: DateTimeFilter<"ResumeEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeEvaluation"> | Date | string
  }

  export type ScreeningRunCreateWithoutJobInput = {
    id?: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    evaluations?: ResumeEvaluationCreateNestedManyWithoutRunInput
  }

  export type ScreeningRunUncheckedCreateWithoutJobInput = {
    id?: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    evaluations?: ResumeEvaluationUncheckedCreateNestedManyWithoutRunInput
  }

  export type ScreeningRunCreateOrConnectWithoutJobInput = {
    where: ScreeningRunWhereUniqueInput
    create: XOR<ScreeningRunCreateWithoutJobInput, ScreeningRunUncheckedCreateWithoutJobInput>
  }

  export type ScreeningRunCreateManyJobInputEnvelope = {
    data: ScreeningRunCreateManyJobInput | ScreeningRunCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ScreeningRunUpsertWithWhereUniqueWithoutJobInput = {
    where: ScreeningRunWhereUniqueInput
    update: XOR<ScreeningRunUpdateWithoutJobInput, ScreeningRunUncheckedUpdateWithoutJobInput>
    create: XOR<ScreeningRunCreateWithoutJobInput, ScreeningRunUncheckedCreateWithoutJobInput>
  }

  export type ScreeningRunUpdateWithWhereUniqueWithoutJobInput = {
    where: ScreeningRunWhereUniqueInput
    data: XOR<ScreeningRunUpdateWithoutJobInput, ScreeningRunUncheckedUpdateWithoutJobInput>
  }

  export type ScreeningRunUpdateManyWithWhereWithoutJobInput = {
    where: ScreeningRunScalarWhereInput
    data: XOR<ScreeningRunUpdateManyMutationInput, ScreeningRunUncheckedUpdateManyWithoutJobInput>
  }

  export type ScreeningRunScalarWhereInput = {
    AND?: ScreeningRunScalarWhereInput | ScreeningRunScalarWhereInput[]
    OR?: ScreeningRunScalarWhereInput[]
    NOT?: ScreeningRunScalarWhereInput | ScreeningRunScalarWhereInput[]
    id?: StringFilter<"ScreeningRun"> | string
    jobId?: StringFilter<"ScreeningRun"> | string
    status?: StringFilter<"ScreeningRun"> | string
    modelName?: StringFilter<"ScreeningRun"> | string
    promptVersion?: StringFilter<"ScreeningRun"> | string
    totalCandidates?: IntFilter<"ScreeningRun"> | number
    processedCount?: IntFilter<"ScreeningRun"> | number
    failedCount?: IntFilter<"ScreeningRun"> | number
    datasetCategory?: StringNullableFilter<"ScreeningRun"> | string | null
    datasetCandidates?: IntFilter<"ScreeningRun"> | number
    sourceCandidates?: IntFilter<"ScreeningRun"> | number
    originalInputCharacters?: IntFilter<"ScreeningRun"> | number
    filteredInputCharacters?: IntFilter<"ScreeningRun"> | number
    startedAt?: DateTimeNullableFilter<"ScreeningRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScreeningRun"> | Date | string | null
    createdAt?: DateTimeFilter<"ScreeningRun"> | Date | string
  }

  export type JobCreateWithoutScreeningRunsInput = {
    id?: string
    title: string
    description: string
    extractedProfileJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUncheckedCreateWithoutScreeningRunsInput = {
    id?: string
    title: string
    description: string
    extractedProfileJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobCreateOrConnectWithoutScreeningRunsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutScreeningRunsInput, JobUncheckedCreateWithoutScreeningRunsInput>
  }

  export type ResumeEvaluationCreateWithoutRunInput = {
    id?: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resume: ResumeCreateNestedOneWithoutEvaluationsInput
  }

  export type ResumeEvaluationUncheckedCreateWithoutRunInput = {
    id?: string
    resumeId: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeEvaluationCreateOrConnectWithoutRunInput = {
    where: ResumeEvaluationWhereUniqueInput
    create: XOR<ResumeEvaluationCreateWithoutRunInput, ResumeEvaluationUncheckedCreateWithoutRunInput>
  }

  export type ResumeEvaluationCreateManyRunInputEnvelope = {
    data: ResumeEvaluationCreateManyRunInput | ResumeEvaluationCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithoutScreeningRunsInput = {
    update: XOR<JobUpdateWithoutScreeningRunsInput, JobUncheckedUpdateWithoutScreeningRunsInput>
    create: XOR<JobCreateWithoutScreeningRunsInput, JobUncheckedCreateWithoutScreeningRunsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutScreeningRunsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutScreeningRunsInput, JobUncheckedUpdateWithoutScreeningRunsInput>
  }

  export type JobUpdateWithoutScreeningRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    extractedProfileJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateWithoutScreeningRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    extractedProfileJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationUpsertWithWhereUniqueWithoutRunInput = {
    where: ResumeEvaluationWhereUniqueInput
    update: XOR<ResumeEvaluationUpdateWithoutRunInput, ResumeEvaluationUncheckedUpdateWithoutRunInput>
    create: XOR<ResumeEvaluationCreateWithoutRunInput, ResumeEvaluationUncheckedCreateWithoutRunInput>
  }

  export type ResumeEvaluationUpdateWithWhereUniqueWithoutRunInput = {
    where: ResumeEvaluationWhereUniqueInput
    data: XOR<ResumeEvaluationUpdateWithoutRunInput, ResumeEvaluationUncheckedUpdateWithoutRunInput>
  }

  export type ResumeEvaluationUpdateManyWithWhereWithoutRunInput = {
    where: ResumeEvaluationScalarWhereInput
    data: XOR<ResumeEvaluationUpdateManyMutationInput, ResumeEvaluationUncheckedUpdateManyWithoutRunInput>
  }

  export type ScreeningRunCreateWithoutEvaluationsInput = {
    id?: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutScreeningRunsInput
  }

  export type ScreeningRunUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    jobId: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ScreeningRunCreateOrConnectWithoutEvaluationsInput = {
    where: ScreeningRunWhereUniqueInput
    create: XOR<ScreeningRunCreateWithoutEvaluationsInput, ScreeningRunUncheckedCreateWithoutEvaluationsInput>
  }

  export type ResumeCreateWithoutEvaluationsInput = {
    id?: string
    externalId?: string | null
    sourceFileName?: string | null
    sourceRow?: number | null
    originalCategory?: string | null
    datasetName?: string | null
    rawText: string
    sanitizedText: string
    resumeHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    externalId?: string | null
    sourceFileName?: string | null
    sourceRow?: number | null
    originalCategory?: string | null
    datasetName?: string | null
    rawText: string
    sanitizedText: string
    resumeHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeCreateOrConnectWithoutEvaluationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutEvaluationsInput, ResumeUncheckedCreateWithoutEvaluationsInput>
  }

  export type ScreeningRunUpsertWithoutEvaluationsInput = {
    update: XOR<ScreeningRunUpdateWithoutEvaluationsInput, ScreeningRunUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<ScreeningRunCreateWithoutEvaluationsInput, ScreeningRunUncheckedCreateWithoutEvaluationsInput>
    where?: ScreeningRunWhereInput
  }

  export type ScreeningRunUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: ScreeningRunWhereInput
    data: XOR<ScreeningRunUpdateWithoutEvaluationsInput, ScreeningRunUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ScreeningRunUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutScreeningRunsNestedInput
  }

  export type ScreeningRunUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUpsertWithoutEvaluationsInput = {
    update: XOR<ResumeUpdateWithoutEvaluationsInput, ResumeUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<ResumeCreateWithoutEvaluationsInput, ResumeUncheckedCreateWithoutEvaluationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutEvaluationsInput, ResumeUncheckedUpdateWithoutEvaluationsInput>
  }

  export type ResumeUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceFileName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRow?: NullableIntFieldUpdateOperationsInput | number | null
    originalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetName?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    sanitizedText?: StringFieldUpdateOperationsInput | string
    resumeHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceFileName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRow?: NullableIntFieldUpdateOperationsInput | number | null
    originalCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetName?: NullableStringFieldUpdateOperationsInput | string | null
    rawText?: StringFieldUpdateOperationsInput | string
    sanitizedText?: StringFieldUpdateOperationsInput | string
    resumeHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationCreateManyResumeInput = {
    id?: string
    runId: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeEvaluationUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: ScreeningRunUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type ResumeEvaluationUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreeningRunCreateManyJobInput = {
    id?: string
    status?: string
    modelName: string
    promptVersion?: string
    totalCandidates?: number
    processedCount?: number
    failedCount?: number
    datasetCategory?: string | null
    datasetCandidates?: number
    sourceCandidates?: number
    originalInputCharacters?: number
    filteredInputCharacters?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ScreeningRunUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: ResumeEvaluationUpdateManyWithoutRunNestedInput
  }

  export type ScreeningRunUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: ResumeEvaluationUncheckedUpdateManyWithoutRunNestedInput
  }

  export type ScreeningRunUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    promptVersion?: StringFieldUpdateOperationsInput | string
    totalCandidates?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    datasetCategory?: NullableStringFieldUpdateOperationsInput | string | null
    datasetCandidates?: IntFieldUpdateOperationsInput | number
    sourceCandidates?: IntFieldUpdateOperationsInput | number
    originalInputCharacters?: IntFieldUpdateOperationsInput | number
    filteredInputCharacters?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationCreateManyRunInput = {
    id?: string
    resumeId: string
    status?: string
    preScreenScore?: number | null
    fitScore?: number | null
    matchLabel?: string | null
    confidence?: number | null
    matchedRequirementsJson?: string | null
    missingRequirementsJson?: string | null
    supportingEvidenceJson?: string | null
    summary?: string | null
    needsHumanReview?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeEvaluationUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type ResumeEvaluationUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeEvaluationUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    preScreenScore?: NullableIntFieldUpdateOperationsInput | number | null
    fitScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLabel?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    matchedRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    missingRequirementsJson?: NullableStringFieldUpdateOperationsInput | string | null
    supportingEvidenceJson?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    needsHumanReview?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}