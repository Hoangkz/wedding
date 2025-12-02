
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Wish
 * 
 */
export type Wish = $Result.DefaultSelection<Prisma.$WishPayload>
/**
 * Model Timeline
 * 
 */
export type Timeline = $Result.DefaultSelection<Prisma.$TimelinePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CustomerType: {
  Bride: 'Bride',
  Groom: 'Groom'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const UserType: {
  Bride: 'Bride',
  Groom: 'Groom',
  Undetermined: 'Undetermined'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type CustomerType = $Enums.CustomerType

export const CustomerType: typeof $Enums.CustomerType

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wish`: Exposes CRUD operations for the **Wish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishes
    * const wishes = await prisma.wish.findMany()
    * ```
    */
  get wish(): Prisma.WishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.TimelineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Customer: 'Customer',
    Wish: 'Wish',
    Timeline: 'Timeline',
    Schedule: 'Schedule'
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
      modelProps: "user" | "customer" | "wish" | "timeline" | "schedule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Wish: {
        payload: Prisma.$WishPayload<ExtArgs>
        fields: Prisma.WishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          findFirst: {
            args: Prisma.WishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          findMany: {
            args: Prisma.WishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          create: {
            args: Prisma.WishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          createMany: {
            args: Prisma.WishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          delete: {
            args: Prisma.WishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          update: {
            args: Prisma.WishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          deleteMany: {
            args: Prisma.WishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          upsert: {
            args: Prisma.WishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          aggregate: {
            args: Prisma.WishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWish>
          }
          groupBy: {
            args: Prisma.WishGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishCountArgs<ExtArgs>
            result: $Utils.Optional<WishCountAggregateOutputType> | number
          }
        }
      }
      Timeline: {
        payload: Prisma.$TimelinePayload<ExtArgs>
        fields: Prisma.TimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findFirst: {
            args: Prisma.TimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findMany: {
            args: Prisma.TimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          create: {
            args: Prisma.TimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          createMany: {
            args: Prisma.TimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          delete: {
            args: Prisma.TimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          update: {
            args: Prisma.TimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          deleteMany: {
            args: Prisma.TimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimelineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          upsert: {
            args: Prisma.TimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          aggregate: {
            args: Prisma.TimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeline>
          }
          groupBy: {
            args: Prisma.TimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
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
    user?: UserOmit
    customer?: CustomerOmit
    wish?: WishOmit
    timeline?: TimelineOmit
    schedule?: ScheduleOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    wishes: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wishes?: boolean | CustomerCountOutputTypeCountWishesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountWishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    password: string | null
    shortName: string | null
    name: string | null
    dob: Date | null
    phone: string | null
    type: $Enums.UserType | null
    qrCodeUrl: string | null
    avatar: string | null
    address: string | null
    mapUrl: string | null
    father: string | null
    mother: string | null
    bio: string | null
    note: string | null
    title: string | null
    bank: string | null
    account: string | null
    weddingDate: Date | null
    weddingTime: string | null
    lunarDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    password: string | null
    shortName: string | null
    name: string | null
    dob: Date | null
    phone: string | null
    type: $Enums.UserType | null
    qrCodeUrl: string | null
    avatar: string | null
    address: string | null
    mapUrl: string | null
    father: string | null
    mother: string | null
    bio: string | null
    note: string | null
    title: string | null
    bank: string | null
    account: string | null
    weddingDate: Date | null
    weddingTime: string | null
    lunarDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    shortName: number
    name: number
    dob: number
    phone: number
    type: number
    qrCodeUrl: number
    avatar: number
    address: number
    mapUrl: number
    father: number
    mother: number
    bio: number
    note: number
    title: number
    bank: number
    account: number
    weddingDate: number
    weddingTime: number
    lunarDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    shortName?: true
    name?: true
    dob?: true
    phone?: true
    type?: true
    qrCodeUrl?: true
    avatar?: true
    address?: true
    mapUrl?: true
    father?: true
    mother?: true
    bio?: true
    note?: true
    title?: true
    bank?: true
    account?: true
    weddingDate?: true
    weddingTime?: true
    lunarDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    shortName?: true
    name?: true
    dob?: true
    phone?: true
    type?: true
    qrCodeUrl?: true
    avatar?: true
    address?: true
    mapUrl?: true
    father?: true
    mother?: true
    bio?: true
    note?: true
    title?: true
    bank?: true
    account?: true
    weddingDate?: true
    weddingTime?: true
    lunarDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    shortName?: true
    name?: true
    dob?: true
    phone?: true
    type?: true
    qrCodeUrl?: true
    avatar?: true
    address?: true
    mapUrl?: true
    father?: true
    mother?: true
    bio?: true
    note?: true
    title?: true
    bank?: true
    account?: true
    weddingDate?: true
    weddingTime?: true
    lunarDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    password: string
    shortName: string | null
    name: string | null
    dob: Date | null
    phone: string | null
    type: $Enums.UserType
    qrCodeUrl: string | null
    avatar: string | null
    address: string | null
    mapUrl: string | null
    father: string | null
    mother: string | null
    bio: string | null
    note: string | null
    title: string | null
    bank: string | null
    account: string | null
    weddingDate: Date | null
    weddingTime: string | null
    lunarDate: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    shortName?: boolean
    name?: boolean
    dob?: boolean
    phone?: boolean
    type?: boolean
    qrCodeUrl?: boolean
    avatar?: boolean
    address?: boolean
    mapUrl?: boolean
    father?: boolean
    mother?: boolean
    bio?: boolean
    note?: boolean
    title?: boolean
    bank?: boolean
    account?: boolean
    weddingDate?: boolean
    weddingTime?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    shortName?: boolean
    name?: boolean
    dob?: boolean
    phone?: boolean
    type?: boolean
    qrCodeUrl?: boolean
    avatar?: boolean
    address?: boolean
    mapUrl?: boolean
    father?: boolean
    mother?: boolean
    bio?: boolean
    note?: boolean
    title?: boolean
    bank?: boolean
    account?: boolean
    weddingDate?: boolean
    weddingTime?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    shortName?: boolean
    name?: boolean
    dob?: boolean
    phone?: boolean
    type?: boolean
    qrCodeUrl?: boolean
    avatar?: boolean
    address?: boolean
    mapUrl?: boolean
    father?: boolean
    mother?: boolean
    bio?: boolean
    note?: boolean
    title?: boolean
    bank?: boolean
    account?: boolean
    weddingDate?: boolean
    weddingTime?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    password?: boolean
    shortName?: boolean
    name?: boolean
    dob?: boolean
    phone?: boolean
    type?: boolean
    qrCodeUrl?: boolean
    avatar?: boolean
    address?: boolean
    mapUrl?: boolean
    father?: boolean
    mother?: boolean
    bio?: boolean
    note?: boolean
    title?: boolean
    bank?: boolean
    account?: boolean
    weddingDate?: boolean
    weddingTime?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "password" | "shortName" | "name" | "dob" | "phone" | "type" | "qrCodeUrl" | "avatar" | "address" | "mapUrl" | "father" | "mother" | "bio" | "note" | "title" | "bank" | "account" | "weddingDate" | "weddingTime" | "lunarDate" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      password: string
      shortName: string | null
      name: string | null
      dob: Date | null
      phone: string | null
      type: $Enums.UserType
      qrCodeUrl: string | null
      avatar: string | null
      address: string | null
      mapUrl: string | null
      father: string | null
      mother: string | null
      bio: string | null
      note: string | null
      title: string | null
      bank: string | null
      account: string | null
      weddingDate: Date | null
      weddingTime: string | null
      lunarDate: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly shortName: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly phone: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly qrCodeUrl: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly mapUrl: FieldRef<"User", 'String'>
    readonly father: FieldRef<"User", 'String'>
    readonly mother: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly note: FieldRef<"User", 'String'>
    readonly title: FieldRef<"User", 'String'>
    readonly bank: FieldRef<"User", 'String'>
    readonly account: FieldRef<"User", 'String'>
    readonly weddingDate: FieldRef<"User", 'DateTime'>
    readonly weddingTime: FieldRef<"User", 'String'>
    readonly lunarDate: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    attended: number | null
  }

  export type CustomerSumAggregateOutputType = {
    attended: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CustomerType | null
    invitation: string | null
    invitedAt: Date | null
    attended: number | null
    lunarDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.CustomerType | null
    invitation: string | null
    invitedAt: Date | null
    attended: number | null
    lunarDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    type: number
    invitation: number
    invitedAt: number
    attended: number
    lunarDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    attended?: true
  }

  export type CustomerSumAggregateInputType = {
    attended?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    invitation?: true
    invitedAt?: true
    attended?: true
    lunarDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    invitation?: true
    invitedAt?: true
    attended?: true
    lunarDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    invitation?: true
    invitedAt?: true
    attended?: true
    lunarDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    type: $Enums.CustomerType
    invitation: string
    invitedAt: Date
    attended: number
    lunarDate: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    invitation?: boolean
    invitedAt?: boolean
    attended?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wishes?: boolean | Customer$wishesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    invitation?: boolean
    invitedAt?: boolean
    attended?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    invitation?: boolean
    invitedAt?: boolean
    attended?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    invitation?: boolean
    invitedAt?: boolean
    attended?: boolean
    lunarDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "invitation" | "invitedAt" | "attended" | "lunarDate" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wishes?: boolean | Customer$wishesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      wishes: Prisma.$WishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.CustomerType
      invitation: string
      invitedAt: Date
      attended: number
      lunarDate: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wishes<T extends Customer$wishesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$wishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly type: FieldRef<"Customer", 'CustomerType'>
    readonly invitation: FieldRef<"Customer", 'String'>
    readonly invitedAt: FieldRef<"Customer", 'DateTime'>
    readonly attended: FieldRef<"Customer", 'Int'>
    readonly lunarDate: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.wishes
   */
  export type Customer$wishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    where?: WishWhereInput
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    cursor?: WishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Wish
   */

  export type AggregateWish = {
    _count: WishCountAggregateOutputType | null
    _min: WishMinAggregateOutputType | null
    _max: WishMaxAggregateOutputType | null
  }

  export type WishMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    customerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    customerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WishCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    customerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WishMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WishMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WishCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wish to aggregate.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishes
    **/
    _count?: true | WishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishMaxAggregateInputType
  }

  export type GetWishAggregateType<T extends WishAggregateArgs> = {
        [P in keyof T & keyof AggregateWish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWish[P]>
      : GetScalarType<T[P], AggregateWish[P]>
  }




  export type WishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
    orderBy?: WishOrderByWithAggregationInput | WishOrderByWithAggregationInput[]
    by: WishScalarFieldEnum[] | WishScalarFieldEnum
    having?: WishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishCountAggregateInputType | true
    _min?: WishMinAggregateInputType
    _max?: WishMaxAggregateInputType
  }

  export type WishGroupByOutputType = {
    id: string
    name: string
    desc: string
    customerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WishCountAggregateOutputType | null
    _min: WishMinAggregateOutputType | null
    _max: WishMaxAggregateOutputType | null
  }

  type GetWishGroupByPayload<T extends WishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishGroupByOutputType[P]>
            : GetScalarType<T[P], WishGroupByOutputType[P]>
        }
      >
    >


  export type WishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | Wish$customerArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>

  export type WishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | Wish$customerArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>

  export type WishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | Wish$customerArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>

  export type WishSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "desc" | "customerId" | "createdAt" | "updatedAt", ExtArgs["result"]["wish"]>
  export type WishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Wish$customerArgs<ExtArgs>
  }
  export type WishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Wish$customerArgs<ExtArgs>
  }
  export type WishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Wish$customerArgs<ExtArgs>
  }

  export type $WishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wish"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string
      customerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wish"]>
    composites: {}
  }

  type WishGetPayload<S extends boolean | null | undefined | WishDefaultArgs> = $Result.GetResult<Prisma.$WishPayload, S>

  type WishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishCountAggregateInputType | true
    }

  export interface WishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wish'], meta: { name: 'Wish' } }
    /**
     * Find zero or one Wish that matches the filter.
     * @param {WishFindUniqueArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishFindUniqueArgs>(args: SelectSubset<T, WishFindUniqueArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishFindUniqueOrThrowArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishFindUniqueOrThrowArgs>(args: SelectSubset<T, WishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindFirstArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishFindFirstArgs>(args?: SelectSubset<T, WishFindFirstArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindFirstOrThrowArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishFindFirstOrThrowArgs>(args?: SelectSubset<T, WishFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishes
     * const wishes = await prisma.wish.findMany()
     * 
     * // Get first 10 Wishes
     * const wishes = await prisma.wish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishWithIdOnly = await prisma.wish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishFindManyArgs>(args?: SelectSubset<T, WishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wish.
     * @param {WishCreateArgs} args - Arguments to create a Wish.
     * @example
     * // Create one Wish
     * const Wish = await prisma.wish.create({
     *   data: {
     *     // ... data to create a Wish
     *   }
     * })
     * 
     */
    create<T extends WishCreateArgs>(args: SelectSubset<T, WishCreateArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishes.
     * @param {WishCreateManyArgs} args - Arguments to create many Wishes.
     * @example
     * // Create many Wishes
     * const wish = await prisma.wish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishCreateManyArgs>(args?: SelectSubset<T, WishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishes and returns the data saved in the database.
     * @param {WishCreateManyAndReturnArgs} args - Arguments to create many Wishes.
     * @example
     * // Create many Wishes
     * const wish = await prisma.wish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishes and only return the `id`
     * const wishWithIdOnly = await prisma.wish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishCreateManyAndReturnArgs>(args?: SelectSubset<T, WishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wish.
     * @param {WishDeleteArgs} args - Arguments to delete one Wish.
     * @example
     * // Delete one Wish
     * const Wish = await prisma.wish.delete({
     *   where: {
     *     // ... filter to delete one Wish
     *   }
     * })
     * 
     */
    delete<T extends WishDeleteArgs>(args: SelectSubset<T, WishDeleteArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wish.
     * @param {WishUpdateArgs} args - Arguments to update one Wish.
     * @example
     * // Update one Wish
     * const wish = await prisma.wish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishUpdateArgs>(args: SelectSubset<T, WishUpdateArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishes.
     * @param {WishDeleteManyArgs} args - Arguments to filter Wishes to delete.
     * @example
     * // Delete a few Wishes
     * const { count } = await prisma.wish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishDeleteManyArgs>(args?: SelectSubset<T, WishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishes
     * const wish = await prisma.wish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishUpdateManyArgs>(args: SelectSubset<T, WishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishes and returns the data updated in the database.
     * @param {WishUpdateManyAndReturnArgs} args - Arguments to update many Wishes.
     * @example
     * // Update many Wishes
     * const wish = await prisma.wish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishes and only return the `id`
     * const wishWithIdOnly = await prisma.wish.updateManyAndReturn({
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
    updateManyAndReturn<T extends WishUpdateManyAndReturnArgs>(args: SelectSubset<T, WishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wish.
     * @param {WishUpsertArgs} args - Arguments to update or create a Wish.
     * @example
     * // Update or create a Wish
     * const wish = await prisma.wish.upsert({
     *   create: {
     *     // ... data to create a Wish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wish we want to update
     *   }
     * })
     */
    upsert<T extends WishUpsertArgs>(args: SelectSubset<T, WishUpsertArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishCountArgs} args - Arguments to filter Wishes to count.
     * @example
     * // Count the number of Wishes
     * const count = await prisma.wish.count({
     *   where: {
     *     // ... the filter for the Wishes we want to count
     *   }
     * })
    **/
    count<T extends WishCountArgs>(
      args?: Subset<T, WishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishAggregateArgs>(args: Subset<T, WishAggregateArgs>): Prisma.PrismaPromise<GetWishAggregateType<T>>

    /**
     * Group by Wish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishGroupByArgs} args - Group by arguments.
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
      T extends WishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishGroupByArgs['orderBy'] }
        : { orderBy?: WishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wish model
   */
  readonly fields: WishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Wish$customerArgs<ExtArgs> = {}>(args?: Subset<T, Wish$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wish model
   */
  interface WishFieldRefs {
    readonly id: FieldRef<"Wish", 'String'>
    readonly name: FieldRef<"Wish", 'String'>
    readonly desc: FieldRef<"Wish", 'String'>
    readonly customerId: FieldRef<"Wish", 'String'>
    readonly createdAt: FieldRef<"Wish", 'DateTime'>
    readonly updatedAt: FieldRef<"Wish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wish findUnique
   */
  export type WishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish findUniqueOrThrow
   */
  export type WishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish findFirst
   */
  export type WishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishes.
     */
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish findFirstOrThrow
   */
  export type WishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishes.
     */
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish findMany
   */
  export type WishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wishes to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish create
   */
  export type WishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The data needed to create a Wish.
     */
    data: XOR<WishCreateInput, WishUncheckedCreateInput>
  }

  /**
   * Wish createMany
   */
  export type WishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishes.
     */
    data: WishCreateManyInput | WishCreateManyInput[]
  }

  /**
   * Wish createManyAndReturn
   */
  export type WishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * The data used to create many Wishes.
     */
    data: WishCreateManyInput | WishCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wish update
   */
  export type WishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The data needed to update a Wish.
     */
    data: XOR<WishUpdateInput, WishUncheckedUpdateInput>
    /**
     * Choose, which Wish to update.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish updateMany
   */
  export type WishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishes.
     */
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyInput>
    /**
     * Filter which Wishes to update
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to update.
     */
    limit?: number
  }

  /**
   * Wish updateManyAndReturn
   */
  export type WishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * The data used to update Wishes.
     */
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyInput>
    /**
     * Filter which Wishes to update
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wish upsert
   */
  export type WishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The filter to search for the Wish to update in case it exists.
     */
    where: WishWhereUniqueInput
    /**
     * In case the Wish found by the `where` argument doesn't exist, create a new Wish with this data.
     */
    create: XOR<WishCreateInput, WishUncheckedCreateInput>
    /**
     * In case the Wish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishUpdateInput, WishUncheckedUpdateInput>
  }

  /**
   * Wish delete
   */
  export type WishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter which Wish to delete.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish deleteMany
   */
  export type WishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishes to delete
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to delete.
     */
    limit?: number
  }

  /**
   * Wish.customer
   */
  export type Wish$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Wish without action
   */
  export type WishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
  }


  /**
   * Model Timeline
   */

  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _avg: TimelineAvgAggregateOutputType | null
    _sum: TimelineSumAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineAvgAggregateOutputType = {
    index: number | null
  }

  export type TimelineSumAggregateOutputType = {
    index: number | null
  }

  export type TimelineMinAggregateOutputType = {
    id: string | null
    title: string | null
    desc: string | null
    image: string | null
    index: number | null
  }

  export type TimelineMaxAggregateOutputType = {
    id: string | null
    title: string | null
    desc: string | null
    image: string | null
    index: number | null
  }

  export type TimelineCountAggregateOutputType = {
    id: number
    title: number
    desc: number
    image: number
    index: number
    _all: number
  }


  export type TimelineAvgAggregateInputType = {
    index?: true
  }

  export type TimelineSumAggregateInputType = {
    index?: true
  }

  export type TimelineMinAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    image?: true
    index?: true
  }

  export type TimelineMaxAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    image?: true
    index?: true
  }

  export type TimelineCountAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    image?: true
    index?: true
    _all?: true
  }

  export type TimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeline to aggregate.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithAggregationInput | TimelineOrderByWithAggregationInput[]
    by: TimelineScalarFieldEnum[] | TimelineScalarFieldEnum
    having?: TimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _avg?: TimelineAvgAggregateInputType
    _sum?: TimelineSumAggregateInputType
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }

  export type TimelineGroupByOutputType = {
    id: string
    title: string
    desc: string
    image: string | null
    index: number
    _count: TimelineCountAggregateOutputType | null
    _avg: TimelineAvgAggregateOutputType | null
    _sum: TimelineSumAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type TimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    image?: boolean
    index?: boolean
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    image?: boolean
    index?: boolean
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    image?: boolean
    index?: boolean
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectScalar = {
    id?: boolean
    title?: boolean
    desc?: boolean
    image?: boolean
    index?: boolean
  }

  export type TimelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "desc" | "image" | "index", ExtArgs["result"]["timeline"]>

  export type $TimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeline"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      desc: string
      image: string | null
      index: number
    }, ExtArgs["result"]["timeline"]>
    composites: {}
  }

  type TimelineGetPayload<S extends boolean | null | undefined | TimelineDefaultArgs> = $Result.GetResult<Prisma.$TimelinePayload, S>

  type TimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimelineCountAggregateInputType | true
    }

  export interface TimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeline'], meta: { name: 'Timeline' } }
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {TimelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineFindUniqueArgs>(args: SelectSubset<T, TimelineFindUniqueArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineFindFirstArgs>(args?: SelectSubset<T, TimelineFindFirstArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineWithIdOnly = await prisma.timeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineFindManyArgs>(args?: SelectSubset<T, TimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timeline.
     * @param {TimelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
     */
    create<T extends TimelineCreateArgs>(args: SelectSubset<T, TimelineCreateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timelines.
     * @param {TimelineCreateManyArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineCreateManyArgs>(args?: SelectSubset<T, TimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timelines and returns the data saved in the database.
     * @param {TimelineCreateManyAndReturnArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timelines and only return the `id`
     * const timelineWithIdOnly = await prisma.timeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timeline.
     * @param {TimelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
     */
    delete<T extends TimelineDeleteArgs>(args: SelectSubset<T, TimelineDeleteArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timeline.
     * @param {TimelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineUpdateArgs>(args: SelectSubset<T, TimelineUpdateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timelines.
     * @param {TimelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineDeleteManyArgs>(args?: SelectSubset<T, TimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineUpdateManyArgs>(args: SelectSubset<T, TimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines and returns the data updated in the database.
     * @param {TimelineUpdateManyAndReturnArgs} args - Arguments to update many Timelines.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timelines and only return the `id`
     * const timelineWithIdOnly = await prisma.timeline.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimelineUpdateManyAndReturnArgs>(args: SelectSubset<T, TimelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timeline.
     * @param {TimelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
     */
    upsert<T extends TimelineUpsertArgs>(args: SelectSubset<T, TimelineUpsertArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends TimelineCountArgs>(
      args?: Subset<T, TimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): Prisma.PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
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
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeline model
   */
  readonly fields: TimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Timeline model
   */
  interface TimelineFieldRefs {
    readonly id: FieldRef<"Timeline", 'String'>
    readonly title: FieldRef<"Timeline", 'String'>
    readonly desc: FieldRef<"Timeline", 'String'>
    readonly image: FieldRef<"Timeline", 'String'>
    readonly index: FieldRef<"Timeline", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Timeline findUnique
   */
  export type TimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findUniqueOrThrow
   */
  export type TimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findFirst
   */
  export type TimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findFirstOrThrow
   */
  export type TimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findMany
   */
  export type TimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Filter, which Timelines to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline create
   */
  export type TimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The data needed to create a Timeline.
     */
    data: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
  }

  /**
   * Timeline createMany
   */
  export type TimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
  }

  /**
   * Timeline createManyAndReturn
   */
  export type TimelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
  }

  /**
   * Timeline update
   */
  export type TimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The data needed to update a Timeline.
     */
    data: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
    /**
     * Choose, which Timeline to update.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline updateMany
   */
  export type TimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
    /**
     * Limit how many Timelines to update.
     */
    limit?: number
  }

  /**
   * Timeline updateManyAndReturn
   */
  export type TimelineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
    /**
     * Limit how many Timelines to update.
     */
    limit?: number
  }

  /**
   * Timeline upsert
   */
  export type TimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * The filter to search for the Timeline to update in case it exists.
     */
    where: TimelineWhereUniqueInput
    /**
     * In case the Timeline found by the `where` argument doesn't exist, create a new Timeline with this data.
     */
    create: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
    /**
     * In case the Timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
  }

  /**
   * Timeline delete
   */
  export type TimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
    /**
     * Filter which Timeline to delete.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline deleteMany
   */
  export type TimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timelines to delete
     */
    where?: TimelineWhereInput
    /**
     * Limit how many Timelines to delete.
     */
    limit?: number
  }

  /**
   * Timeline without action
   */
  export type TimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timeline
     */
    omit?: TimelineOmit<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    title: string | null
    desc: string | null
    address: string | null
    image: string | null
    day: Date | null
    time: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    desc: string | null
    address: string | null
    image: string | null
    day: Date | null
    time: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    title: number
    desc: number
    address: number
    image: number
    day: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    address?: true
    image?: true
    day?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    address?: true
    image?: true
    day?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    title?: true
    desc?: true
    address?: true
    image?: true
    day?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    title: string
    desc: string
    address: string
    image: string
    day: Date | null
    time: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    address?: boolean
    image?: boolean
    day?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    address?: boolean
    image?: boolean
    day?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    desc?: boolean
    address?: boolean
    image?: boolean
    day?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    title?: boolean
    desc?: boolean
    address?: boolean
    image?: boolean
    day?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "desc" | "address" | "image" | "day" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      desc: string
      address: string
      image: string
      day: Date | null
      time: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly title: FieldRef<"Schedule", 'String'>
    readonly desc: FieldRef<"Schedule", 'String'>
    readonly address: FieldRef<"Schedule", 'String'>
    readonly image: FieldRef<"Schedule", 'String'>
    readonly day: FieldRef<"Schedule", 'DateTime'>
    readonly time: FieldRef<"Schedule", 'DateTime'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    shortName: 'shortName',
    name: 'name',
    dob: 'dob',
    phone: 'phone',
    type: 'type',
    qrCodeUrl: 'qrCodeUrl',
    avatar: 'avatar',
    address: 'address',
    mapUrl: 'mapUrl',
    father: 'father',
    mother: 'mother',
    bio: 'bio',
    note: 'note',
    title: 'title',
    bank: 'bank',
    account: 'account',
    weddingDate: 'weddingDate',
    weddingTime: 'weddingTime',
    lunarDate: 'lunarDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    invitation: 'invitation',
    invitedAt: 'invitedAt',
    attended: 'attended',
    lunarDate: 'lunarDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const WishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WishScalarFieldEnum = (typeof WishScalarFieldEnum)[keyof typeof WishScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    desc: 'desc',
    image: 'image',
    index: 'index'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    desc: 'desc',
    address: 'address',
    image: 'image',
    day: 'day',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'CustomerType'
   */
  export type EnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    shortName?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    phone?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    qrCodeUrl?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    mapUrl?: StringNullableFilter<"User"> | string | null
    father?: StringNullableFilter<"User"> | string | null
    mother?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    note?: StringNullableFilter<"User"> | string | null
    title?: StringNullableFilter<"User"> | string | null
    bank?: StringNullableFilter<"User"> | string | null
    account?: StringNullableFilter<"User"> | string | null
    weddingDate?: DateTimeNullableFilter<"User"> | Date | string | null
    weddingTime?: StringNullableFilter<"User"> | string | null
    lunarDate?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    shortName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    type?: SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    mapUrl?: SortOrderInput | SortOrder
    father?: SortOrderInput | SortOrder
    mother?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    account?: SortOrderInput | SortOrder
    weddingDate?: SortOrderInput | SortOrder
    weddingTime?: SortOrderInput | SortOrder
    lunarDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    shortName?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    phone?: StringNullableFilter<"User"> | string | null
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    qrCodeUrl?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    mapUrl?: StringNullableFilter<"User"> | string | null
    father?: StringNullableFilter<"User"> | string | null
    mother?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    note?: StringNullableFilter<"User"> | string | null
    title?: StringNullableFilter<"User"> | string | null
    bank?: StringNullableFilter<"User"> | string | null
    account?: StringNullableFilter<"User"> | string | null
    weddingDate?: DateTimeNullableFilter<"User"> | Date | string | null
    weddingTime?: StringNullableFilter<"User"> | string | null
    lunarDate?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    shortName?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    type?: SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    mapUrl?: SortOrderInput | SortOrder
    father?: SortOrderInput | SortOrder
    mother?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    account?: SortOrderInput | SortOrder
    weddingDate?: SortOrderInput | SortOrder
    weddingTime?: SortOrderInput | SortOrder
    lunarDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    shortName?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    qrCodeUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    mapUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    father?: StringNullableWithAggregatesFilter<"User"> | string | null
    mother?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    note?: StringNullableWithAggregatesFilter<"User"> | string | null
    title?: StringNullableWithAggregatesFilter<"User"> | string | null
    bank?: StringNullableWithAggregatesFilter<"User"> | string | null
    account?: StringNullableWithAggregatesFilter<"User"> | string | null
    weddingDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    weddingTime?: StringNullableWithAggregatesFilter<"User"> | string | null
    lunarDate?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    type?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    invitation?: StringFilter<"Customer"> | string
    invitedAt?: DateTimeFilter<"Customer"> | Date | string
    attended?: IntFilter<"Customer"> | number
    lunarDate?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    wishes?: WishListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    invitation?: SortOrder
    invitedAt?: SortOrder
    attended?: SortOrder
    lunarDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wishes?: WishOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    type?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    invitation?: StringFilter<"Customer"> | string
    invitedAt?: DateTimeFilter<"Customer"> | Date | string
    attended?: IntFilter<"Customer"> | number
    lunarDate?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    wishes?: WishListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    invitation?: SortOrder
    invitedAt?: SortOrder
    attended?: SortOrder
    lunarDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    type?: EnumCustomerTypeWithAggregatesFilter<"Customer"> | $Enums.CustomerType
    invitation?: StringWithAggregatesFilter<"Customer"> | string
    invitedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    attended?: IntWithAggregatesFilter<"Customer"> | number
    lunarDate?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type WishWhereInput = {
    AND?: WishWhereInput | WishWhereInput[]
    OR?: WishWhereInput[]
    NOT?: WishWhereInput | WishWhereInput[]
    id?: StringFilter<"Wish"> | string
    name?: StringFilter<"Wish"> | string
    desc?: StringFilter<"Wish"> | string
    customerId?: StringNullableFilter<"Wish"> | string | null
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    updatedAt?: DateTimeFilter<"Wish"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type WishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type WishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WishWhereInput | WishWhereInput[]
    OR?: WishWhereInput[]
    NOT?: WishWhereInput | WishWhereInput[]
    name?: StringFilter<"Wish"> | string
    desc?: StringFilter<"Wish"> | string
    customerId?: StringNullableFilter<"Wish"> | string | null
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    updatedAt?: DateTimeFilter<"Wish"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type WishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    customerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WishCountOrderByAggregateInput
    _max?: WishMaxOrderByAggregateInput
    _min?: WishMinOrderByAggregateInput
  }

  export type WishScalarWhereWithAggregatesInput = {
    AND?: WishScalarWhereWithAggregatesInput | WishScalarWhereWithAggregatesInput[]
    OR?: WishScalarWhereWithAggregatesInput[]
    NOT?: WishScalarWhereWithAggregatesInput | WishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wish"> | string
    name?: StringWithAggregatesFilter<"Wish"> | string
    desc?: StringWithAggregatesFilter<"Wish"> | string
    customerId?: StringNullableWithAggregatesFilter<"Wish"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Wish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wish"> | Date | string
  }

  export type TimelineWhereInput = {
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    id?: StringFilter<"Timeline"> | string
    title?: StringFilter<"Timeline"> | string
    desc?: StringFilter<"Timeline"> | string
    image?: StringNullableFilter<"Timeline"> | string | null
    index?: IntFilter<"Timeline"> | number
  }

  export type TimelineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    image?: SortOrderInput | SortOrder
    index?: SortOrder
  }

  export type TimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    title?: StringFilter<"Timeline"> | string
    desc?: StringFilter<"Timeline"> | string
    image?: StringNullableFilter<"Timeline"> | string | null
    index?: IntFilter<"Timeline"> | number
  }, "id">

  export type TimelineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    image?: SortOrderInput | SortOrder
    index?: SortOrder
    _count?: TimelineCountOrderByAggregateInput
    _avg?: TimelineAvgOrderByAggregateInput
    _max?: TimelineMaxOrderByAggregateInput
    _min?: TimelineMinOrderByAggregateInput
    _sum?: TimelineSumOrderByAggregateInput
  }

  export type TimelineScalarWhereWithAggregatesInput = {
    AND?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    OR?: TimelineScalarWhereWithAggregatesInput[]
    NOT?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timeline"> | string
    title?: StringWithAggregatesFilter<"Timeline"> | string
    desc?: StringWithAggregatesFilter<"Timeline"> | string
    image?: StringNullableWithAggregatesFilter<"Timeline"> | string | null
    index?: IntWithAggregatesFilter<"Timeline"> | number
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    title?: StringFilter<"Schedule"> | string
    desc?: StringFilter<"Schedule"> | string
    address?: StringFilter<"Schedule"> | string
    image?: StringFilter<"Schedule"> | string
    day?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    time?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    address?: SortOrder
    image?: SortOrder
    day?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    title?: StringFilter<"Schedule"> | string
    desc?: StringFilter<"Schedule"> | string
    address?: StringFilter<"Schedule"> | string
    image?: StringFilter<"Schedule"> | string
    day?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    time?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    address?: SortOrder
    image?: SortOrder
    day?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    title?: StringWithAggregatesFilter<"Schedule"> | string
    desc?: StringWithAggregatesFilter<"Schedule"> | string
    address?: StringWithAggregatesFilter<"Schedule"> | string
    image?: StringWithAggregatesFilter<"Schedule"> | string
    day?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
    time?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    userName: string
    password: string
    shortName?: string | null
    name?: string | null
    dob?: Date | string | null
    phone?: string | null
    type?: $Enums.UserType
    qrCodeUrl?: string | null
    avatar?: string | null
    address?: string | null
    mapUrl?: string | null
    father?: string | null
    mother?: string | null
    bio?: string | null
    note?: string | null
    title?: string | null
    bank?: string | null
    account?: string | null
    weddingDate?: Date | string | null
    weddingTime?: string | null
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id: string
    userName: string
    password: string
    shortName?: string | null
    name?: string | null
    dob?: Date | string | null
    phone?: string | null
    type?: $Enums.UserType
    qrCodeUrl?: string | null
    avatar?: string | null
    address?: string | null
    mapUrl?: string | null
    father?: string | null
    mother?: string | null
    bio?: string | null
    note?: string | null
    title?: string | null
    bank?: string | null
    account?: string | null
    weddingDate?: Date | string | null
    weddingTime?: string | null
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weddingTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weddingTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id: string
    userName: string
    password: string
    shortName?: string | null
    name?: string | null
    dob?: Date | string | null
    phone?: string | null
    type?: $Enums.UserType
    qrCodeUrl?: string | null
    avatar?: string | null
    address?: string | null
    mapUrl?: string | null
    father?: string | null
    mother?: string | null
    bio?: string | null
    note?: string | null
    title?: string | null
    bank?: string | null
    account?: string | null
    weddingDate?: Date | string | null
    weddingTime?: string | null
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weddingTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    father?: NullableStringFieldUpdateOperationsInput | string | null
    mother?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    account?: NullableStringFieldUpdateOperationsInput | string | null
    weddingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weddingTime?: NullableStringFieldUpdateOperationsInput | string | null
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id: string
    name: string
    type: $Enums.CustomerType
    invitation: string
    invitedAt: Date | string
    attended: number
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wishes?: WishCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id: string
    name: string
    type: $Enums.CustomerType
    invitation: string
    invitedAt: Date | string
    attended: number
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wishes?: WishUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    invitation?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attended?: IntFieldUpdateOperationsInput | number
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishes?: WishUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    invitation?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attended?: IntFieldUpdateOperationsInput | number
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wishes?: WishUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id: string
    name: string
    type: $Enums.CustomerType
    invitation: string
    invitedAt: Date | string
    attended: number
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    invitation?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attended?: IntFieldUpdateOperationsInput | number
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    invitation?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attended?: IntFieldUpdateOperationsInput | number
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishCreateInput = {
    id: string
    name: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutWishesInput
  }

  export type WishUncheckedCreateInput = {
    id: string
    name: string
    desc: string
    customerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutWishesNestedInput
  }

  export type WishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishCreateManyInput = {
    id: string
    name: string
    desc: string
    customerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineCreateInput = {
    id: string
    title: string
    desc: string
    image?: string | null
    index: number
  }

  export type TimelineUncheckedCreateInput = {
    id: string
    title: string
    desc: string
    image?: string | null
    index: number
  }

  export type TimelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineCreateManyInput = {
    id: string
    title: string
    desc: string
    image?: string | null
    index: number
  }

  export type TimelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    index?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    id: string
    title: string
    desc: string
    address: string
    image: string
    day?: Date | string | null
    time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUncheckedCreateInput = {
    id: string
    title: string
    desc: string
    address: string
    image: string
    day?: Date | string | null
    time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id: string
    title: string
    desc: string
    address: string
    image: string
    day?: Date | string | null
    time?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    day?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    shortName?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    qrCodeUrl?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    mapUrl?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    bio?: SortOrder
    note?: SortOrder
    title?: SortOrder
    bank?: SortOrder
    account?: SortOrder
    weddingDate?: SortOrder
    weddingTime?: SortOrder
    lunarDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    shortName?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    qrCodeUrl?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    mapUrl?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    bio?: SortOrder
    note?: SortOrder
    title?: SortOrder
    bank?: SortOrder
    account?: SortOrder
    weddingDate?: SortOrder
    weddingTime?: SortOrder
    lunarDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    shortName?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    qrCodeUrl?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    mapUrl?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    bio?: SortOrder
    note?: SortOrder
    title?: SortOrder
    bank?: SortOrder
    account?: SortOrder
    weddingDate?: SortOrder
    weddingTime?: SortOrder
    lunarDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[]
    notIn?: $Enums.CustomerType[]
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WishListRelationFilter = {
    every?: WishWhereInput
    some?: WishWhereInput
    none?: WishWhereInput
  }

  export type WishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    invitation?: SortOrder
    invitedAt?: SortOrder
    attended?: SortOrder
    lunarDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    attended?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    invitation?: SortOrder
    invitedAt?: SortOrder
    attended?: SortOrder
    lunarDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    invitation?: SortOrder
    invitedAt?: SortOrder
    attended?: SortOrder
    lunarDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    attended?: SortOrder
  }

  export type EnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[]
    notIn?: $Enums.CustomerType[]
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type WishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TimelineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    index?: SortOrder
  }

  export type TimelineAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type TimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    index?: SortOrder
  }

  export type TimelineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    image?: SortOrder
    index?: SortOrder
  }

  export type TimelineSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    address?: SortOrder
    image?: SortOrder
    day?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    address?: SortOrder
    image?: SortOrder
    day?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    address?: SortOrder
    image?: SortOrder
    day?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WishCreateNestedManyWithoutCustomerInput = {
    create?: XOR<WishCreateWithoutCustomerInput, WishUncheckedCreateWithoutCustomerInput> | WishCreateWithoutCustomerInput[] | WishUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WishCreateOrConnectWithoutCustomerInput | WishCreateOrConnectWithoutCustomerInput[]
    createMany?: WishCreateManyCustomerInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type WishUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<WishCreateWithoutCustomerInput, WishUncheckedCreateWithoutCustomerInput> | WishCreateWithoutCustomerInput[] | WishUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WishCreateOrConnectWithoutCustomerInput | WishCreateOrConnectWithoutCustomerInput[]
    createMany?: WishCreateManyCustomerInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WishUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<WishCreateWithoutCustomerInput, WishUncheckedCreateWithoutCustomerInput> | WishCreateWithoutCustomerInput[] | WishUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WishCreateOrConnectWithoutCustomerInput | WishCreateOrConnectWithoutCustomerInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutCustomerInput | WishUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: WishCreateManyCustomerInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutCustomerInput | WishUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: WishUpdateManyWithWhereWithoutCustomerInput | WishUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type WishUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<WishCreateWithoutCustomerInput, WishUncheckedCreateWithoutCustomerInput> | WishCreateWithoutCustomerInput[] | WishUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: WishCreateOrConnectWithoutCustomerInput | WishCreateOrConnectWithoutCustomerInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutCustomerInput | WishUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: WishCreateManyCustomerInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutCustomerInput | WishUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: WishUpdateManyWithWhereWithoutCustomerInput | WishUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutWishesInput = {
    create?: XOR<CustomerCreateWithoutWishesInput, CustomerUncheckedCreateWithoutWishesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutWishesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutWishesNestedInput = {
    create?: XOR<CustomerCreateWithoutWishesInput, CustomerUncheckedCreateWithoutWishesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutWishesInput
    upsert?: CustomerUpsertWithoutWishesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutWishesInput, CustomerUpdateWithoutWishesInput>, CustomerUncheckedUpdateWithoutWishesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[]
    notIn?: $Enums.CustomerType[]
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[]
    notIn?: $Enums.CustomerType[]
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WishCreateWithoutCustomerInput = {
    id: string
    name: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishUncheckedCreateWithoutCustomerInput = {
    id: string
    name: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishCreateOrConnectWithoutCustomerInput = {
    where: WishWhereUniqueInput
    create: XOR<WishCreateWithoutCustomerInput, WishUncheckedCreateWithoutCustomerInput>
  }

  export type WishCreateManyCustomerInputEnvelope = {
    data: WishCreateManyCustomerInput | WishCreateManyCustomerInput[]
  }

  export type WishUpsertWithWhereUniqueWithoutCustomerInput = {
    where: WishWhereUniqueInput
    update: XOR<WishUpdateWithoutCustomerInput, WishUncheckedUpdateWithoutCustomerInput>
    create: XOR<WishCreateWithoutCustomerInput, WishUncheckedCreateWithoutCustomerInput>
  }

  export type WishUpdateWithWhereUniqueWithoutCustomerInput = {
    where: WishWhereUniqueInput
    data: XOR<WishUpdateWithoutCustomerInput, WishUncheckedUpdateWithoutCustomerInput>
  }

  export type WishUpdateManyWithWhereWithoutCustomerInput = {
    where: WishScalarWhereInput
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyWithoutCustomerInput>
  }

  export type WishScalarWhereInput = {
    AND?: WishScalarWhereInput | WishScalarWhereInput[]
    OR?: WishScalarWhereInput[]
    NOT?: WishScalarWhereInput | WishScalarWhereInput[]
    id?: StringFilter<"Wish"> | string
    name?: StringFilter<"Wish"> | string
    desc?: StringFilter<"Wish"> | string
    customerId?: StringNullableFilter<"Wish"> | string | null
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    updatedAt?: DateTimeFilter<"Wish"> | Date | string
  }

  export type CustomerCreateWithoutWishesInput = {
    id: string
    name: string
    type: $Enums.CustomerType
    invitation: string
    invitedAt: Date | string
    attended: number
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutWishesInput = {
    id: string
    name: string
    type: $Enums.CustomerType
    invitation: string
    invitedAt: Date | string
    attended: number
    lunarDate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutWishesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutWishesInput, CustomerUncheckedCreateWithoutWishesInput>
  }

  export type CustomerUpsertWithoutWishesInput = {
    update: XOR<CustomerUpdateWithoutWishesInput, CustomerUncheckedUpdateWithoutWishesInput>
    create: XOR<CustomerCreateWithoutWishesInput, CustomerUncheckedCreateWithoutWishesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutWishesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutWishesInput, CustomerUncheckedUpdateWithoutWishesInput>
  }

  export type CustomerUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    invitation?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attended?: IntFieldUpdateOperationsInput | number
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    invitation?: StringFieldUpdateOperationsInput | string
    invitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attended?: IntFieldUpdateOperationsInput | number
    lunarDate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishCreateManyCustomerInput = {
    id: string
    name: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WishUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
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