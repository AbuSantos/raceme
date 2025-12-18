
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model DriverSession
 * 
 */
export type DriverSession = $Result.DefaultSelection<Prisma.$DriverSessionPayload>
/**
 * Model Presence
 * 
 */
export type Presence = $Result.DefaultSelection<Prisma.$PresencePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RouteSegment
 * 
 */
export type RouteSegment = $Result.DefaultSelection<Prisma.$RouteSegmentPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model RaceParticipant
 * 
 */
export type RaceParticipant = $Result.DefaultSelection<Prisma.$RaceParticipantPayload>
/**
 * Model TelemetryWindow
 * 
 */
export type TelemetryWindow = $Result.DefaultSelection<Prisma.$TelemetryWindowPayload>
/**
 * Model RaceScore
 * 
 */
export type RaceScore = $Result.DefaultSelection<Prisma.$RaceScorePayload>
/**
 * Model RaceResult
 * 
 */
export type RaceResult = $Result.DefaultSelection<Prisma.$RaceResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DRIVERSTATE: {
  DRIVING: 'DRIVING',
  PARKED: 'PARKED',
  RACING: 'RACING',
  NOT_RACING: 'NOT_RACING'
};

export type DRIVERSTATE = (typeof DRIVERSTATE)[keyof typeof DRIVERSTATE]


export const SpeedBucket: {
  SLOW: 'SLOW',
  MEDIUM: 'MEDIUM',
  FAST: 'FAST'
};

export type SpeedBucket = (typeof SpeedBucket)[keyof typeof SpeedBucket]


export const RaceState: {
  REQUESTED: 'REQUESTED',
  LOCKED: 'LOCKED',
  RACING: 'RACING',
  FINISHED: 'FINISHED',
  ABORTED: 'ABORTED'
};

export type RaceState = (typeof RaceState)[keyof typeof RaceState]


export const ReadyToRace: {
  READY: 'READY',
  RACING: 'RACING',
  DROPPED: 'DROPPED'
};

export type ReadyToRace = (typeof ReadyToRace)[keyof typeof ReadyToRace]

}

export type DRIVERSTATE = $Enums.DRIVERSTATE

export const DRIVERSTATE: typeof $Enums.DRIVERSTATE

export type SpeedBucket = $Enums.SpeedBucket

export const SpeedBucket: typeof $Enums.SpeedBucket

export type RaceState = $Enums.RaceState

export const RaceState: typeof $Enums.RaceState

export type ReadyToRace = $Enums.ReadyToRace

export const ReadyToRace: typeof $Enums.ReadyToRace

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drivers
 * const drivers = await prisma.driver.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Drivers
   * const drivers = await prisma.driver.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverSession`: Exposes CRUD operations for the **DriverSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverSessions
    * const driverSessions = await prisma.driverSession.findMany()
    * ```
    */
  get driverSession(): Prisma.DriverSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presence`: Exposes CRUD operations for the **Presence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presences
    * const presences = await prisma.presence.findMany()
    * ```
    */
  get presence(): Prisma.PresenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeSegment`: Exposes CRUD operations for the **RouteSegment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteSegments
    * const routeSegments = await prisma.routeSegment.findMany()
    * ```
    */
  get routeSegment(): Prisma.RouteSegmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceParticipant`: Exposes CRUD operations for the **RaceParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceParticipants
    * const raceParticipants = await prisma.raceParticipant.findMany()
    * ```
    */
  get raceParticipant(): Prisma.RaceParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telemetryWindow`: Exposes CRUD operations for the **TelemetryWindow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelemetryWindows
    * const telemetryWindows = await prisma.telemetryWindow.findMany()
    * ```
    */
  get telemetryWindow(): Prisma.TelemetryWindowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceScore`: Exposes CRUD operations for the **RaceScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceScores
    * const raceScores = await prisma.raceScore.findMany()
    * ```
    */
  get raceScore(): Prisma.RaceScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceResult`: Exposes CRUD operations for the **RaceResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceResults
    * const raceResults = await prisma.raceResult.findMany()
    * ```
    */
  get raceResult(): Prisma.RaceResultDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Driver: 'Driver',
    DriverSession: 'DriverSession',
    Presence: 'Presence',
    Route: 'Route',
    RouteSegment: 'RouteSegment',
    Race: 'Race',
    RaceParticipant: 'RaceParticipant',
    TelemetryWindow: 'TelemetryWindow',
    RaceScore: 'RaceScore',
    RaceResult: 'RaceResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "driver" | "driverSession" | "presence" | "route" | "routeSegment" | "race" | "raceParticipant" | "telemetryWindow" | "raceScore" | "raceResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      DriverSession: {
        payload: Prisma.$DriverSessionPayload<ExtArgs>
        fields: Prisma.DriverSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>
          }
          findFirst: {
            args: Prisma.DriverSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>
          }
          findMany: {
            args: Prisma.DriverSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>[]
          }
          create: {
            args: Prisma.DriverSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>
          }
          createMany: {
            args: Prisma.DriverSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>[]
          }
          delete: {
            args: Prisma.DriverSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>
          }
          update: {
            args: Prisma.DriverSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>
          }
          deleteMany: {
            args: Prisma.DriverSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>[]
          }
          upsert: {
            args: Prisma.DriverSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverSessionPayload>
          }
          aggregate: {
            args: Prisma.DriverSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverSession>
          }
          groupBy: {
            args: Prisma.DriverSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverSessionCountArgs<ExtArgs>
            result: $Utils.Optional<DriverSessionCountAggregateOutputType> | number
          }
        }
      }
      Presence: {
        payload: Prisma.$PresencePayload<ExtArgs>
        fields: Prisma.PresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          findFirst: {
            args: Prisma.PresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          findMany: {
            args: Prisma.PresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          create: {
            args: Prisma.PresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          createMany: {
            args: Prisma.PresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          delete: {
            args: Prisma.PresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          update: {
            args: Prisma.PresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          deleteMany: {
            args: Prisma.PresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          upsert: {
            args: Prisma.PresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          aggregate: {
            args: Prisma.PresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresence>
          }
          groupBy: {
            args: Prisma.PresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresenceCountArgs<ExtArgs>
            result: $Utils.Optional<PresenceCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RouteSegment: {
        payload: Prisma.$RouteSegmentPayload<ExtArgs>
        fields: Prisma.RouteSegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteSegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteSegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>
          }
          findFirst: {
            args: Prisma.RouteSegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteSegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>
          }
          findMany: {
            args: Prisma.RouteSegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>[]
          }
          create: {
            args: Prisma.RouteSegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>
          }
          createMany: {
            args: Prisma.RouteSegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteSegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>[]
          }
          delete: {
            args: Prisma.RouteSegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>
          }
          update: {
            args: Prisma.RouteSegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>
          }
          deleteMany: {
            args: Prisma.RouteSegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteSegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteSegmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>[]
          }
          upsert: {
            args: Prisma.RouteSegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSegmentPayload>
          }
          aggregate: {
            args: Prisma.RouteSegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteSegment>
          }
          groupBy: {
            args: Prisma.RouteSegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteSegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteSegmentCountArgs<ExtArgs>
            result: $Utils.Optional<RouteSegmentCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      RaceParticipant: {
        payload: Prisma.$RaceParticipantPayload<ExtArgs>
        fields: Prisma.RaceParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          findFirst: {
            args: Prisma.RaceParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          findMany: {
            args: Prisma.RaceParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          create: {
            args: Prisma.RaceParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          createMany: {
            args: Prisma.RaceParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          delete: {
            args: Prisma.RaceParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          update: {
            args: Prisma.RaceParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RaceParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RaceParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          aggregate: {
            args: Prisma.RaceParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceParticipant>
          }
          groupBy: {
            args: Prisma.RaceParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RaceParticipantCountAggregateOutputType> | number
          }
        }
      }
      TelemetryWindow: {
        payload: Prisma.$TelemetryWindowPayload<ExtArgs>
        fields: Prisma.TelemetryWindowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelemetryWindowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelemetryWindowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>
          }
          findFirst: {
            args: Prisma.TelemetryWindowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelemetryWindowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>
          }
          findMany: {
            args: Prisma.TelemetryWindowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>[]
          }
          create: {
            args: Prisma.TelemetryWindowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>
          }
          createMany: {
            args: Prisma.TelemetryWindowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelemetryWindowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>[]
          }
          delete: {
            args: Prisma.TelemetryWindowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>
          }
          update: {
            args: Prisma.TelemetryWindowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>
          }
          deleteMany: {
            args: Prisma.TelemetryWindowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelemetryWindowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelemetryWindowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>[]
          }
          upsert: {
            args: Prisma.TelemetryWindowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryWindowPayload>
          }
          aggregate: {
            args: Prisma.TelemetryWindowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelemetryWindow>
          }
          groupBy: {
            args: Prisma.TelemetryWindowGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelemetryWindowGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelemetryWindowCountArgs<ExtArgs>
            result: $Utils.Optional<TelemetryWindowCountAggregateOutputType> | number
          }
        }
      }
      RaceScore: {
        payload: Prisma.$RaceScorePayload<ExtArgs>
        fields: Prisma.RaceScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>
          }
          findFirst: {
            args: Prisma.RaceScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>
          }
          findMany: {
            args: Prisma.RaceScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>[]
          }
          create: {
            args: Prisma.RaceScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>
          }
          createMany: {
            args: Prisma.RaceScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>[]
          }
          delete: {
            args: Prisma.RaceScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>
          }
          update: {
            args: Prisma.RaceScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>
          }
          deleteMany: {
            args: Prisma.RaceScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>[]
          }
          upsert: {
            args: Prisma.RaceScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceScorePayload>
          }
          aggregate: {
            args: Prisma.RaceScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceScore>
          }
          groupBy: {
            args: Prisma.RaceScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceScoreCountArgs<ExtArgs>
            result: $Utils.Optional<RaceScoreCountAggregateOutputType> | number
          }
        }
      }
      RaceResult: {
        payload: Prisma.$RaceResultPayload<ExtArgs>
        fields: Prisma.RaceResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          findFirst: {
            args: Prisma.RaceResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          findMany: {
            args: Prisma.RaceResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>[]
          }
          create: {
            args: Prisma.RaceResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          createMany: {
            args: Prisma.RaceResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>[]
          }
          delete: {
            args: Prisma.RaceResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          update: {
            args: Prisma.RaceResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          deleteMany: {
            args: Prisma.RaceResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>[]
          }
          upsert: {
            args: Prisma.RaceResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          aggregate: {
            args: Prisma.RaceResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceResult>
          }
          groupBy: {
            args: Prisma.RaceResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceResultCountArgs<ExtArgs>
            result: $Utils.Optional<RaceResultCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    driver?: DriverOmit
    driverSession?: DriverSessionOmit
    presence?: PresenceOmit
    route?: RouteOmit
    routeSegment?: RouteSegmentOmit
    race?: RaceOmit
    raceParticipant?: RaceParticipantOmit
    telemetryWindow?: TelemetryWindowOmit
    raceScore?: RaceScoreOmit
    raceResult?: RaceResultOmit
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
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    driverSessions: number
    presences: number
    raceParticipants: number
    telemetryWindows: number
    raceScores: number
    raceResults: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverSessions?: boolean | DriverCountOutputTypeCountDriverSessionsArgs
    presences?: boolean | DriverCountOutputTypeCountPresencesArgs
    raceParticipants?: boolean | DriverCountOutputTypeCountRaceParticipantsArgs
    telemetryWindows?: boolean | DriverCountOutputTypeCountTelemetryWindowsArgs
    raceScores?: boolean | DriverCountOutputTypeCountRaceScoresArgs
    raceResults?: boolean | DriverCountOutputTypeCountRaceResultsArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountDriverSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverSessionWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRaceParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTelemetryWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWindowWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRaceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceScoreWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRaceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceResultWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    routeSegments: number
    races: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routeSegments?: boolean | RouteCountOutputTypeCountRouteSegmentsArgs
    races?: boolean | RouteCountOutputTypeCountRacesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountRouteSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteSegmentWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }


  /**
   * Count Type RouteSegmentCountOutputType
   */

  export type RouteSegmentCountOutputType = {
    races: number
    telemetryWindows: number
  }

  export type RouteSegmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races?: boolean | RouteSegmentCountOutputTypeCountRacesArgs
    telemetryWindows?: boolean | RouteSegmentCountOutputTypeCountTelemetryWindowsArgs
  }

  // Custom InputTypes
  /**
   * RouteSegmentCountOutputType without action
   */
  export type RouteSegmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegmentCountOutputType
     */
    select?: RouteSegmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteSegmentCountOutputType without action
   */
  export type RouteSegmentCountOutputTypeCountRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }

  /**
   * RouteSegmentCountOutputType without action
   */
  export type RouteSegmentCountOutputTypeCountTelemetryWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWindowWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    raceParticipants: number
    telemetryWindows: number
    raceScores: number
    raceResults: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raceParticipants?: boolean | RaceCountOutputTypeCountRaceParticipantsArgs
    telemetryWindows?: boolean | RaceCountOutputTypeCountTelemetryWindowsArgs
    raceScores?: boolean | RaceCountOutputTypeCountRaceScoresArgs
    raceResults?: boolean | RaceCountOutputTypeCountRaceResultsArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountRaceParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountTelemetryWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWindowWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountRaceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceScoreWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountRaceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    emailVerified: number
    image: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    email: string
    emailVerified: Date | null
    image: string | null
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driverSessions?: boolean | Driver$driverSessionsArgs<ExtArgs>
    presences?: boolean | Driver$presencesArgs<ExtArgs>
    raceParticipants?: boolean | Driver$raceParticipantsArgs<ExtArgs>
    telemetryWindows?: boolean | Driver$telemetryWindowsArgs<ExtArgs>
    raceScores?: boolean | Driver$raceScoresArgs<ExtArgs>
    raceResults?: boolean | Driver$raceResultsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "emailVerified" | "image" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driverSessions?: boolean | Driver$driverSessionsArgs<ExtArgs>
    presences?: boolean | Driver$presencesArgs<ExtArgs>
    raceParticipants?: boolean | Driver$raceParticipantsArgs<ExtArgs>
    telemetryWindows?: boolean | Driver$telemetryWindowsArgs<ExtArgs>
    raceScores?: boolean | Driver$raceScoresArgs<ExtArgs>
    raceResults?: boolean | Driver$raceResultsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      driverSessions: Prisma.$DriverSessionPayload<ExtArgs>[]
      presences: Prisma.$PresencePayload<ExtArgs>[]
      raceParticipants: Prisma.$RaceParticipantPayload<ExtArgs>[]
      telemetryWindows: Prisma.$TelemetryWindowPayload<ExtArgs>[]
      raceScores: Prisma.$RaceScorePayload<ExtArgs>[]
      raceResults: Prisma.$RaceResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      email: string
      emailVerified: Date | null
      image: string | null
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driverSessions<T extends Driver$driverSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$driverSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presences<T extends Driver$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceParticipants<T extends Driver$raceParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$raceParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telemetryWindows<T extends Driver$telemetryWindowsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$telemetryWindowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceScores<T extends Driver$raceScoresArgs<ExtArgs> = {}>(args?: Subset<T, Driver$raceScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceResults<T extends Driver$raceResultsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$raceResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly firstname: FieldRef<"Driver", 'String'>
    readonly lastname: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly emailVerified: FieldRef<"Driver", 'DateTime'>
    readonly image: FieldRef<"Driver", 'String'>
    readonly username: FieldRef<"Driver", 'String'>
    readonly password: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.driverSessions
   */
  export type Driver$driverSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    where?: DriverSessionWhereInput
    orderBy?: DriverSessionOrderByWithRelationInput | DriverSessionOrderByWithRelationInput[]
    cursor?: DriverSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverSessionScalarFieldEnum | DriverSessionScalarFieldEnum[]
  }

  /**
   * Driver.presences
   */
  export type Driver$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    cursor?: PresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Driver.raceParticipants
   */
  export type Driver$raceParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    cursor?: RaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * Driver.telemetryWindows
   */
  export type Driver$telemetryWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    where?: TelemetryWindowWhereInput
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    cursor?: TelemetryWindowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelemetryWindowScalarFieldEnum | TelemetryWindowScalarFieldEnum[]
  }

  /**
   * Driver.raceScores
   */
  export type Driver$raceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    where?: RaceScoreWhereInput
    orderBy?: RaceScoreOrderByWithRelationInput | RaceScoreOrderByWithRelationInput[]
    cursor?: RaceScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScoreScalarFieldEnum | RaceScoreScalarFieldEnum[]
  }

  /**
   * Driver.raceResults
   */
  export type Driver$raceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    where?: RaceResultWhereInput
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    cursor?: RaceResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model DriverSession
   */

  export type AggregateDriverSession = {
    _count: DriverSessionCountAggregateOutputType | null
    _min: DriverSessionMinAggregateOutputType | null
    _max: DriverSessionMaxAggregateOutputType | null
  }

  export type DriverSessionMinAggregateOutputType = {
    id: string | null
    lastSeen: Date | null
    isActive: boolean | null
    driverId: string | null
  }

  export type DriverSessionMaxAggregateOutputType = {
    id: string | null
    lastSeen: Date | null
    isActive: boolean | null
    driverId: string | null
  }

  export type DriverSessionCountAggregateOutputType = {
    id: number
    lastSeen: number
    isActive: number
    driverId: number
    _all: number
  }


  export type DriverSessionMinAggregateInputType = {
    id?: true
    lastSeen?: true
    isActive?: true
    driverId?: true
  }

  export type DriverSessionMaxAggregateInputType = {
    id?: true
    lastSeen?: true
    isActive?: true
    driverId?: true
  }

  export type DriverSessionCountAggregateInputType = {
    id?: true
    lastSeen?: true
    isActive?: true
    driverId?: true
    _all?: true
  }

  export type DriverSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverSession to aggregate.
     */
    where?: DriverSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverSessions to fetch.
     */
    orderBy?: DriverSessionOrderByWithRelationInput | DriverSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverSessions
    **/
    _count?: true | DriverSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverSessionMaxAggregateInputType
  }

  export type GetDriverSessionAggregateType<T extends DriverSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverSession[P]>
      : GetScalarType<T[P], AggregateDriverSession[P]>
  }




  export type DriverSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverSessionWhereInput
    orderBy?: DriverSessionOrderByWithAggregationInput | DriverSessionOrderByWithAggregationInput[]
    by: DriverSessionScalarFieldEnum[] | DriverSessionScalarFieldEnum
    having?: DriverSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverSessionCountAggregateInputType | true
    _min?: DriverSessionMinAggregateInputType
    _max?: DriverSessionMaxAggregateInputType
  }

  export type DriverSessionGroupByOutputType = {
    id: string
    lastSeen: Date
    isActive: boolean
    driverId: string
    _count: DriverSessionCountAggregateOutputType | null
    _min: DriverSessionMinAggregateOutputType | null
    _max: DriverSessionMaxAggregateOutputType | null
  }

  type GetDriverSessionGroupByPayload<T extends DriverSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverSessionGroupByOutputType[P]>
            : GetScalarType<T[P], DriverSessionGroupByOutputType[P]>
        }
      >
    >


  export type DriverSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastSeen?: boolean
    isActive?: boolean
    driverId?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverSession"]>

  export type DriverSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastSeen?: boolean
    isActive?: boolean
    driverId?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverSession"]>

  export type DriverSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastSeen?: boolean
    isActive?: boolean
    driverId?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverSession"]>

  export type DriverSessionSelectScalar = {
    id?: boolean
    lastSeen?: boolean
    isActive?: boolean
    driverId?: boolean
  }

  export type DriverSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastSeen" | "isActive" | "driverId", ExtArgs["result"]["driverSession"]>
  export type DriverSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriverSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverSession"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastSeen: Date
      isActive: boolean
      driverId: string
    }, ExtArgs["result"]["driverSession"]>
    composites: {}
  }

  type DriverSessionGetPayload<S extends boolean | null | undefined | DriverSessionDefaultArgs> = $Result.GetResult<Prisma.$DriverSessionPayload, S>

  type DriverSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverSessionCountAggregateInputType | true
    }

  export interface DriverSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverSession'], meta: { name: 'DriverSession' } }
    /**
     * Find zero or one DriverSession that matches the filter.
     * @param {DriverSessionFindUniqueArgs} args - Arguments to find a DriverSession
     * @example
     * // Get one DriverSession
     * const driverSession = await prisma.driverSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverSessionFindUniqueArgs>(args: SelectSubset<T, DriverSessionFindUniqueArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverSessionFindUniqueOrThrowArgs} args - Arguments to find a DriverSession
     * @example
     * // Get one DriverSession
     * const driverSession = await prisma.driverSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionFindFirstArgs} args - Arguments to find a DriverSession
     * @example
     * // Get one DriverSession
     * const driverSession = await prisma.driverSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverSessionFindFirstArgs>(args?: SelectSubset<T, DriverSessionFindFirstArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionFindFirstOrThrowArgs} args - Arguments to find a DriverSession
     * @example
     * // Get one DriverSession
     * const driverSession = await prisma.driverSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverSessions
     * const driverSessions = await prisma.driverSession.findMany()
     * 
     * // Get first 10 DriverSessions
     * const driverSessions = await prisma.driverSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverSessionWithIdOnly = await prisma.driverSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverSessionFindManyArgs>(args?: SelectSubset<T, DriverSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverSession.
     * @param {DriverSessionCreateArgs} args - Arguments to create a DriverSession.
     * @example
     * // Create one DriverSession
     * const DriverSession = await prisma.driverSession.create({
     *   data: {
     *     // ... data to create a DriverSession
     *   }
     * })
     * 
     */
    create<T extends DriverSessionCreateArgs>(args: SelectSubset<T, DriverSessionCreateArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverSessions.
     * @param {DriverSessionCreateManyArgs} args - Arguments to create many DriverSessions.
     * @example
     * // Create many DriverSessions
     * const driverSession = await prisma.driverSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverSessionCreateManyArgs>(args?: SelectSubset<T, DriverSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverSessions and returns the data saved in the database.
     * @param {DriverSessionCreateManyAndReturnArgs} args - Arguments to create many DriverSessions.
     * @example
     * // Create many DriverSessions
     * const driverSession = await prisma.driverSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverSessions and only return the `id`
     * const driverSessionWithIdOnly = await prisma.driverSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverSession.
     * @param {DriverSessionDeleteArgs} args - Arguments to delete one DriverSession.
     * @example
     * // Delete one DriverSession
     * const DriverSession = await prisma.driverSession.delete({
     *   where: {
     *     // ... filter to delete one DriverSession
     *   }
     * })
     * 
     */
    delete<T extends DriverSessionDeleteArgs>(args: SelectSubset<T, DriverSessionDeleteArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverSession.
     * @param {DriverSessionUpdateArgs} args - Arguments to update one DriverSession.
     * @example
     * // Update one DriverSession
     * const driverSession = await prisma.driverSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverSessionUpdateArgs>(args: SelectSubset<T, DriverSessionUpdateArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverSessions.
     * @param {DriverSessionDeleteManyArgs} args - Arguments to filter DriverSessions to delete.
     * @example
     * // Delete a few DriverSessions
     * const { count } = await prisma.driverSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverSessionDeleteManyArgs>(args?: SelectSubset<T, DriverSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverSessions
     * const driverSession = await prisma.driverSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverSessionUpdateManyArgs>(args: SelectSubset<T, DriverSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverSessions and returns the data updated in the database.
     * @param {DriverSessionUpdateManyAndReturnArgs} args - Arguments to update many DriverSessions.
     * @example
     * // Update many DriverSessions
     * const driverSession = await prisma.driverSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverSessions and only return the `id`
     * const driverSessionWithIdOnly = await prisma.driverSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverSession.
     * @param {DriverSessionUpsertArgs} args - Arguments to update or create a DriverSession.
     * @example
     * // Update or create a DriverSession
     * const driverSession = await prisma.driverSession.upsert({
     *   create: {
     *     // ... data to create a DriverSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverSession we want to update
     *   }
     * })
     */
    upsert<T extends DriverSessionUpsertArgs>(args: SelectSubset<T, DriverSessionUpsertArgs<ExtArgs>>): Prisma__DriverSessionClient<$Result.GetResult<Prisma.$DriverSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionCountArgs} args - Arguments to filter DriverSessions to count.
     * @example
     * // Count the number of DriverSessions
     * const count = await prisma.driverSession.count({
     *   where: {
     *     // ... the filter for the DriverSessions we want to count
     *   }
     * })
    **/
    count<T extends DriverSessionCountArgs>(
      args?: Subset<T, DriverSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverSessionAggregateArgs>(args: Subset<T, DriverSessionAggregateArgs>): Prisma.PrismaPromise<GetDriverSessionAggregateType<T>>

    /**
     * Group by DriverSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverSessionGroupByArgs} args - Group by arguments.
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
      T extends DriverSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverSessionGroupByArgs['orderBy'] }
        : { orderBy?: DriverSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverSession model
   */
  readonly fields: DriverSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DriverSession model
   */
  interface DriverSessionFieldRefs {
    readonly id: FieldRef<"DriverSession", 'String'>
    readonly lastSeen: FieldRef<"DriverSession", 'DateTime'>
    readonly isActive: FieldRef<"DriverSession", 'Boolean'>
    readonly driverId: FieldRef<"DriverSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DriverSession findUnique
   */
  export type DriverSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * Filter, which DriverSession to fetch.
     */
    where: DriverSessionWhereUniqueInput
  }

  /**
   * DriverSession findUniqueOrThrow
   */
  export type DriverSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * Filter, which DriverSession to fetch.
     */
    where: DriverSessionWhereUniqueInput
  }

  /**
   * DriverSession findFirst
   */
  export type DriverSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * Filter, which DriverSession to fetch.
     */
    where?: DriverSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverSessions to fetch.
     */
    orderBy?: DriverSessionOrderByWithRelationInput | DriverSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverSessions.
     */
    cursor?: DriverSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverSessions.
     */
    distinct?: DriverSessionScalarFieldEnum | DriverSessionScalarFieldEnum[]
  }

  /**
   * DriverSession findFirstOrThrow
   */
  export type DriverSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * Filter, which DriverSession to fetch.
     */
    where?: DriverSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverSessions to fetch.
     */
    orderBy?: DriverSessionOrderByWithRelationInput | DriverSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverSessions.
     */
    cursor?: DriverSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverSessions.
     */
    distinct?: DriverSessionScalarFieldEnum | DriverSessionScalarFieldEnum[]
  }

  /**
   * DriverSession findMany
   */
  export type DriverSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * Filter, which DriverSessions to fetch.
     */
    where?: DriverSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverSessions to fetch.
     */
    orderBy?: DriverSessionOrderByWithRelationInput | DriverSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverSessions.
     */
    cursor?: DriverSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverSessions.
     */
    skip?: number
    distinct?: DriverSessionScalarFieldEnum | DriverSessionScalarFieldEnum[]
  }

  /**
   * DriverSession create
   */
  export type DriverSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverSession.
     */
    data: XOR<DriverSessionCreateInput, DriverSessionUncheckedCreateInput>
  }

  /**
   * DriverSession createMany
   */
  export type DriverSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverSessions.
     */
    data: DriverSessionCreateManyInput | DriverSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverSession createManyAndReturn
   */
  export type DriverSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * The data used to create many DriverSessions.
     */
    data: DriverSessionCreateManyInput | DriverSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverSession update
   */
  export type DriverSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverSession.
     */
    data: XOR<DriverSessionUpdateInput, DriverSessionUncheckedUpdateInput>
    /**
     * Choose, which DriverSession to update.
     */
    where: DriverSessionWhereUniqueInput
  }

  /**
   * DriverSession updateMany
   */
  export type DriverSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverSessions.
     */
    data: XOR<DriverSessionUpdateManyMutationInput, DriverSessionUncheckedUpdateManyInput>
    /**
     * Filter which DriverSessions to update
     */
    where?: DriverSessionWhereInput
    /**
     * Limit how many DriverSessions to update.
     */
    limit?: number
  }

  /**
   * DriverSession updateManyAndReturn
   */
  export type DriverSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * The data used to update DriverSessions.
     */
    data: XOR<DriverSessionUpdateManyMutationInput, DriverSessionUncheckedUpdateManyInput>
    /**
     * Filter which DriverSessions to update
     */
    where?: DriverSessionWhereInput
    /**
     * Limit how many DriverSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverSession upsert
   */
  export type DriverSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverSession to update in case it exists.
     */
    where: DriverSessionWhereUniqueInput
    /**
     * In case the DriverSession found by the `where` argument doesn't exist, create a new DriverSession with this data.
     */
    create: XOR<DriverSessionCreateInput, DriverSessionUncheckedCreateInput>
    /**
     * In case the DriverSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverSessionUpdateInput, DriverSessionUncheckedUpdateInput>
  }

  /**
   * DriverSession delete
   */
  export type DriverSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
    /**
     * Filter which DriverSession to delete.
     */
    where: DriverSessionWhereUniqueInput
  }

  /**
   * DriverSession deleteMany
   */
  export type DriverSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverSessions to delete
     */
    where?: DriverSessionWhereInput
    /**
     * Limit how many DriverSessions to delete.
     */
    limit?: number
  }

  /**
   * DriverSession without action
   */
  export type DriverSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverSession
     */
    select?: DriverSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverSession
     */
    omit?: DriverSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverSessionInclude<ExtArgs> | null
  }


  /**
   * Model Presence
   */

  export type AggregatePresence = {
    _count: PresenceCountAggregateOutputType | null
    _avg: PresenceAvgAggregateOutputType | null
    _sum: PresenceSumAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  export type PresenceAvgAggregateOutputType = {
    lat: number | null
    lon: number | null
    heading: number | null
  }

  export type PresenceSumAggregateOutputType = {
    lat: bigint | null
    lon: bigint | null
    heading: bigint | null
  }

  export type PresenceMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    lat: bigint | null
    lon: bigint | null
    heading: bigint | null
    speedBucket: $Enums.SpeedBucket | null
    updatedAt: Date | null
  }

  export type PresenceMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    lat: bigint | null
    lon: bigint | null
    heading: bigint | null
    speedBucket: $Enums.SpeedBucket | null
    updatedAt: Date | null
  }

  export type PresenceCountAggregateOutputType = {
    id: number
    driverId: number
    lat: number
    lon: number
    heading: number
    speedBucket: number
    updatedAt: number
    _all: number
  }


  export type PresenceAvgAggregateInputType = {
    lat?: true
    lon?: true
    heading?: true
  }

  export type PresenceSumAggregateInputType = {
    lat?: true
    lon?: true
    heading?: true
  }

  export type PresenceMinAggregateInputType = {
    id?: true
    driverId?: true
    lat?: true
    lon?: true
    heading?: true
    speedBucket?: true
    updatedAt?: true
  }

  export type PresenceMaxAggregateInputType = {
    id?: true
    driverId?: true
    lat?: true
    lon?: true
    heading?: true
    speedBucket?: true
    updatedAt?: true
  }

  export type PresenceCountAggregateInputType = {
    id?: true
    driverId?: true
    lat?: true
    lon?: true
    heading?: true
    speedBucket?: true
    updatedAt?: true
    _all?: true
  }

  export type PresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presence to aggregate.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presences
    **/
    _count?: true | PresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresenceMaxAggregateInputType
  }

  export type GetPresenceAggregateType<T extends PresenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresence[P]>
      : GetScalarType<T[P], AggregatePresence[P]>
  }




  export type PresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithAggregationInput | PresenceOrderByWithAggregationInput[]
    by: PresenceScalarFieldEnum[] | PresenceScalarFieldEnum
    having?: PresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresenceCountAggregateInputType | true
    _avg?: PresenceAvgAggregateInputType
    _sum?: PresenceSumAggregateInputType
    _min?: PresenceMinAggregateInputType
    _max?: PresenceMaxAggregateInputType
  }

  export type PresenceGroupByOutputType = {
    id: string
    driverId: string
    lat: bigint
    lon: bigint
    heading: bigint
    speedBucket: $Enums.SpeedBucket
    updatedAt: Date
    _count: PresenceCountAggregateOutputType | null
    _avg: PresenceAvgAggregateOutputType | null
    _sum: PresenceSumAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  type GetPresenceGroupByPayload<T extends PresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenceGroupByOutputType[P]>
            : GetScalarType<T[P], PresenceGroupByOutputType[P]>
        }
      >
    >


  export type PresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    lat?: boolean
    lon?: boolean
    heading?: boolean
    speedBucket?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    lat?: boolean
    lon?: boolean
    heading?: boolean
    speedBucket?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    lat?: boolean
    lon?: boolean
    heading?: boolean
    speedBucket?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectScalar = {
    id?: boolean
    driverId?: boolean
    lat?: boolean
    lon?: boolean
    heading?: boolean
    speedBucket?: boolean
    updatedAt?: boolean
  }

  export type PresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "lat" | "lon" | "heading" | "speedBucket" | "updatedAt", ExtArgs["result"]["presence"]>
  export type PresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type PresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type PresenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $PresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presence"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      lat: bigint
      lon: bigint
      heading: bigint
      speedBucket: $Enums.SpeedBucket
      updatedAt: Date
    }, ExtArgs["result"]["presence"]>
    composites: {}
  }

  type PresenceGetPayload<S extends boolean | null | undefined | PresenceDefaultArgs> = $Result.GetResult<Prisma.$PresencePayload, S>

  type PresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresenceCountAggregateInputType | true
    }

  export interface PresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presence'], meta: { name: 'Presence' } }
    /**
     * Find zero or one Presence that matches the filter.
     * @param {PresenceFindUniqueArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresenceFindUniqueArgs>(args: SelectSubset<T, PresenceFindUniqueArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresenceFindUniqueOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindFirstArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresenceFindFirstArgs>(args?: SelectSubset<T, PresenceFindFirstArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindFirstOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presences
     * const presences = await prisma.presence.findMany()
     * 
     * // Get first 10 Presences
     * const presences = await prisma.presence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presenceWithIdOnly = await prisma.presence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresenceFindManyArgs>(args?: SelectSubset<T, PresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presence.
     * @param {PresenceCreateArgs} args - Arguments to create a Presence.
     * @example
     * // Create one Presence
     * const Presence = await prisma.presence.create({
     *   data: {
     *     // ... data to create a Presence
     *   }
     * })
     * 
     */
    create<T extends PresenceCreateArgs>(args: SelectSubset<T, PresenceCreateArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presences.
     * @param {PresenceCreateManyArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresenceCreateManyArgs>(args?: SelectSubset<T, PresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presences and returns the data saved in the database.
     * @param {PresenceCreateManyAndReturnArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presences and only return the `id`
     * const presenceWithIdOnly = await prisma.presence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presence.
     * @param {PresenceDeleteArgs} args - Arguments to delete one Presence.
     * @example
     * // Delete one Presence
     * const Presence = await prisma.presence.delete({
     *   where: {
     *     // ... filter to delete one Presence
     *   }
     * })
     * 
     */
    delete<T extends PresenceDeleteArgs>(args: SelectSubset<T, PresenceDeleteArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presence.
     * @param {PresenceUpdateArgs} args - Arguments to update one Presence.
     * @example
     * // Update one Presence
     * const presence = await prisma.presence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresenceUpdateArgs>(args: SelectSubset<T, PresenceUpdateArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presences.
     * @param {PresenceDeleteManyArgs} args - Arguments to filter Presences to delete.
     * @example
     * // Delete a few Presences
     * const { count } = await prisma.presence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresenceDeleteManyArgs>(args?: SelectSubset<T, PresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresenceUpdateManyArgs>(args: SelectSubset<T, PresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences and returns the data updated in the database.
     * @param {PresenceUpdateManyAndReturnArgs} args - Arguments to update many Presences.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presences and only return the `id`
     * const presenceWithIdOnly = await prisma.presence.updateManyAndReturn({
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
    updateManyAndReturn<T extends PresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presence.
     * @param {PresenceUpsertArgs} args - Arguments to update or create a Presence.
     * @example
     * // Update or create a Presence
     * const presence = await prisma.presence.upsert({
     *   create: {
     *     // ... data to create a Presence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presence we want to update
     *   }
     * })
     */
    upsert<T extends PresenceUpsertArgs>(args: SelectSubset<T, PresenceUpsertArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceCountArgs} args - Arguments to filter Presences to count.
     * @example
     * // Count the number of Presences
     * const count = await prisma.presence.count({
     *   where: {
     *     // ... the filter for the Presences we want to count
     *   }
     * })
    **/
    count<T extends PresenceCountArgs>(
      args?: Subset<T, PresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresenceAggregateArgs>(args: Subset<T, PresenceAggregateArgs>): Prisma.PrismaPromise<GetPresenceAggregateType<T>>

    /**
     * Group by Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceGroupByArgs} args - Group by arguments.
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
      T extends PresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresenceGroupByArgs['orderBy'] }
        : { orderBy?: PresenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presence model
   */
  readonly fields: PresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Presence model
   */
  interface PresenceFieldRefs {
    readonly id: FieldRef<"Presence", 'String'>
    readonly driverId: FieldRef<"Presence", 'String'>
    readonly lat: FieldRef<"Presence", 'BigInt'>
    readonly lon: FieldRef<"Presence", 'BigInt'>
    readonly heading: FieldRef<"Presence", 'BigInt'>
    readonly speedBucket: FieldRef<"Presence", 'SpeedBucket'>
    readonly updatedAt: FieldRef<"Presence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presence findUnique
   */
  export type PresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence findUniqueOrThrow
   */
  export type PresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence findFirst
   */
  export type PresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence findFirstOrThrow
   */
  export type PresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence findMany
   */
  export type PresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presences to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence create
   */
  export type PresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Presence.
     */
    data: XOR<PresenceCreateInput, PresenceUncheckedCreateInput>
  }

  /**
   * Presence createMany
   */
  export type PresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presences.
     */
    data: PresenceCreateManyInput | PresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presence createManyAndReturn
   */
  export type PresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * The data used to create many Presences.
     */
    data: PresenceCreateManyInput | PresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presence update
   */
  export type PresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Presence.
     */
    data: XOR<PresenceUpdateInput, PresenceUncheckedUpdateInput>
    /**
     * Choose, which Presence to update.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence updateMany
   */
  export type PresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presences.
     */
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyInput>
    /**
     * Filter which Presences to update
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to update.
     */
    limit?: number
  }

  /**
   * Presence updateManyAndReturn
   */
  export type PresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * The data used to update Presences.
     */
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyInput>
    /**
     * Filter which Presences to update
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presence upsert
   */
  export type PresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Presence to update in case it exists.
     */
    where: PresenceWhereUniqueInput
    /**
     * In case the Presence found by the `where` argument doesn't exist, create a new Presence with this data.
     */
    create: XOR<PresenceCreateInput, PresenceUncheckedCreateInput>
    /**
     * In case the Presence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresenceUpdateInput, PresenceUncheckedUpdateInput>
  }

  /**
   * Presence delete
   */
  export type PresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter which Presence to delete.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence deleteMany
   */
  export type PresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presences to delete
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to delete.
     */
    limit?: number
  }

  /**
   * Presence without action
   */
  export type PresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type RouteMinAggregateInputType = {
    id?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeSegments?: boolean | Route$routeSegmentsArgs<ExtArgs>
    races?: boolean | Route$racesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routeSegments?: boolean | Route$routeSegmentsArgs<ExtArgs>
    races?: boolean | Route$racesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      routeSegments: Prisma.$RouteSegmentPayload<ExtArgs>[]
      races: Prisma.$RacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
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
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
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
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routeSegments<T extends Route$routeSegmentsArgs<ExtArgs> = {}>(args?: Subset<T, Route$routeSegmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    races<T extends Route$racesArgs<ExtArgs> = {}>(args?: Subset<T, Route$racesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data?: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.routeSegments
   */
  export type Route$routeSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    where?: RouteSegmentWhereInput
    orderBy?: RouteSegmentOrderByWithRelationInput | RouteSegmentOrderByWithRelationInput[]
    cursor?: RouteSegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteSegmentScalarFieldEnum | RouteSegmentScalarFieldEnum[]
  }

  /**
   * Route.races
   */
  export type Route$racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RouteSegment
   */

  export type AggregateRouteSegment = {
    _count: RouteSegmentCountAggregateOutputType | null
    _avg: RouteSegmentAvgAggregateOutputType | null
    _sum: RouteSegmentSumAggregateOutputType | null
    _min: RouteSegmentMinAggregateOutputType | null
    _max: RouteSegmentMaxAggregateOutputType | null
  }

  export type RouteSegmentAvgAggregateOutputType = {
    index: number | null
  }

  export type RouteSegmentSumAggregateOutputType = {
    index: number | null
  }

  export type RouteSegmentMinAggregateOutputType = {
    id: string | null
    routeId: string | null
    index: number | null
  }

  export type RouteSegmentMaxAggregateOutputType = {
    id: string | null
    routeId: string | null
    index: number | null
  }

  export type RouteSegmentCountAggregateOutputType = {
    id: number
    routeId: number
    index: number
    start: number
    end: number
    _all: number
  }


  export type RouteSegmentAvgAggregateInputType = {
    index?: true
  }

  export type RouteSegmentSumAggregateInputType = {
    index?: true
  }

  export type RouteSegmentMinAggregateInputType = {
    id?: true
    routeId?: true
    index?: true
  }

  export type RouteSegmentMaxAggregateInputType = {
    id?: true
    routeId?: true
    index?: true
  }

  export type RouteSegmentCountAggregateInputType = {
    id?: true
    routeId?: true
    index?: true
    start?: true
    end?: true
    _all?: true
  }

  export type RouteSegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteSegment to aggregate.
     */
    where?: RouteSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSegments to fetch.
     */
    orderBy?: RouteSegmentOrderByWithRelationInput | RouteSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteSegments
    **/
    _count?: true | RouteSegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteSegmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSegmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteSegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteSegmentMaxAggregateInputType
  }

  export type GetRouteSegmentAggregateType<T extends RouteSegmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteSegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteSegment[P]>
      : GetScalarType<T[P], AggregateRouteSegment[P]>
  }




  export type RouteSegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteSegmentWhereInput
    orderBy?: RouteSegmentOrderByWithAggregationInput | RouteSegmentOrderByWithAggregationInput[]
    by: RouteSegmentScalarFieldEnum[] | RouteSegmentScalarFieldEnum
    having?: RouteSegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteSegmentCountAggregateInputType | true
    _avg?: RouteSegmentAvgAggregateInputType
    _sum?: RouteSegmentSumAggregateInputType
    _min?: RouteSegmentMinAggregateInputType
    _max?: RouteSegmentMaxAggregateInputType
  }

  export type RouteSegmentGroupByOutputType = {
    id: string
    routeId: string
    index: number
    start: JsonValue
    end: JsonValue
    _count: RouteSegmentCountAggregateOutputType | null
    _avg: RouteSegmentAvgAggregateOutputType | null
    _sum: RouteSegmentSumAggregateOutputType | null
    _min: RouteSegmentMinAggregateOutputType | null
    _max: RouteSegmentMaxAggregateOutputType | null
  }

  type GetRouteSegmentGroupByPayload<T extends RouteSegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteSegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteSegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteSegmentGroupByOutputType[P]>
            : GetScalarType<T[P], RouteSegmentGroupByOutputType[P]>
        }
      >
    >


  export type RouteSegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    index?: boolean
    start?: boolean
    end?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    races?: boolean | RouteSegment$racesArgs<ExtArgs>
    telemetryWindows?: boolean | RouteSegment$telemetryWindowsArgs<ExtArgs>
    _count?: boolean | RouteSegmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSegment"]>

  export type RouteSegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    index?: boolean
    start?: boolean
    end?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSegment"]>

  export type RouteSegmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    index?: boolean
    start?: boolean
    end?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSegment"]>

  export type RouteSegmentSelectScalar = {
    id?: boolean
    routeId?: boolean
    index?: boolean
    start?: boolean
    end?: boolean
  }

  export type RouteSegmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "index" | "start" | "end", ExtArgs["result"]["routeSegment"]>
  export type RouteSegmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    races?: boolean | RouteSegment$racesArgs<ExtArgs>
    telemetryWindows?: boolean | RouteSegment$telemetryWindowsArgs<ExtArgs>
    _count?: boolean | RouteSegmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteSegmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RouteSegmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $RouteSegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteSegment"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      races: Prisma.$RacePayload<ExtArgs>[]
      telemetryWindows: Prisma.$TelemetryWindowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeId: string
      index: number
      start: Prisma.JsonValue
      end: Prisma.JsonValue
    }, ExtArgs["result"]["routeSegment"]>
    composites: {}
  }

  type RouteSegmentGetPayload<S extends boolean | null | undefined | RouteSegmentDefaultArgs> = $Result.GetResult<Prisma.$RouteSegmentPayload, S>

  type RouteSegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteSegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteSegmentCountAggregateInputType | true
    }

  export interface RouteSegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteSegment'], meta: { name: 'RouteSegment' } }
    /**
     * Find zero or one RouteSegment that matches the filter.
     * @param {RouteSegmentFindUniqueArgs} args - Arguments to find a RouteSegment
     * @example
     * // Get one RouteSegment
     * const routeSegment = await prisma.routeSegment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteSegmentFindUniqueArgs>(args: SelectSubset<T, RouteSegmentFindUniqueArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteSegment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteSegmentFindUniqueOrThrowArgs} args - Arguments to find a RouteSegment
     * @example
     * // Get one RouteSegment
     * const routeSegment = await prisma.routeSegment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteSegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteSegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteSegment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentFindFirstArgs} args - Arguments to find a RouteSegment
     * @example
     * // Get one RouteSegment
     * const routeSegment = await prisma.routeSegment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteSegmentFindFirstArgs>(args?: SelectSubset<T, RouteSegmentFindFirstArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteSegment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentFindFirstOrThrowArgs} args - Arguments to find a RouteSegment
     * @example
     * // Get one RouteSegment
     * const routeSegment = await prisma.routeSegment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteSegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteSegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteSegments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteSegments
     * const routeSegments = await prisma.routeSegment.findMany()
     * 
     * // Get first 10 RouteSegments
     * const routeSegments = await prisma.routeSegment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeSegmentWithIdOnly = await prisma.routeSegment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteSegmentFindManyArgs>(args?: SelectSubset<T, RouteSegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteSegment.
     * @param {RouteSegmentCreateArgs} args - Arguments to create a RouteSegment.
     * @example
     * // Create one RouteSegment
     * const RouteSegment = await prisma.routeSegment.create({
     *   data: {
     *     // ... data to create a RouteSegment
     *   }
     * })
     * 
     */
    create<T extends RouteSegmentCreateArgs>(args: SelectSubset<T, RouteSegmentCreateArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteSegments.
     * @param {RouteSegmentCreateManyArgs} args - Arguments to create many RouteSegments.
     * @example
     * // Create many RouteSegments
     * const routeSegment = await prisma.routeSegment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteSegmentCreateManyArgs>(args?: SelectSubset<T, RouteSegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteSegments and returns the data saved in the database.
     * @param {RouteSegmentCreateManyAndReturnArgs} args - Arguments to create many RouteSegments.
     * @example
     * // Create many RouteSegments
     * const routeSegment = await prisma.routeSegment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteSegments and only return the `id`
     * const routeSegmentWithIdOnly = await prisma.routeSegment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteSegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteSegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteSegment.
     * @param {RouteSegmentDeleteArgs} args - Arguments to delete one RouteSegment.
     * @example
     * // Delete one RouteSegment
     * const RouteSegment = await prisma.routeSegment.delete({
     *   where: {
     *     // ... filter to delete one RouteSegment
     *   }
     * })
     * 
     */
    delete<T extends RouteSegmentDeleteArgs>(args: SelectSubset<T, RouteSegmentDeleteArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteSegment.
     * @param {RouteSegmentUpdateArgs} args - Arguments to update one RouteSegment.
     * @example
     * // Update one RouteSegment
     * const routeSegment = await prisma.routeSegment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteSegmentUpdateArgs>(args: SelectSubset<T, RouteSegmentUpdateArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteSegments.
     * @param {RouteSegmentDeleteManyArgs} args - Arguments to filter RouteSegments to delete.
     * @example
     * // Delete a few RouteSegments
     * const { count } = await prisma.routeSegment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteSegmentDeleteManyArgs>(args?: SelectSubset<T, RouteSegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteSegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteSegments
     * const routeSegment = await prisma.routeSegment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteSegmentUpdateManyArgs>(args: SelectSubset<T, RouteSegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteSegments and returns the data updated in the database.
     * @param {RouteSegmentUpdateManyAndReturnArgs} args - Arguments to update many RouteSegments.
     * @example
     * // Update many RouteSegments
     * const routeSegment = await prisma.routeSegment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteSegments and only return the `id`
     * const routeSegmentWithIdOnly = await prisma.routeSegment.updateManyAndReturn({
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
    updateManyAndReturn<T extends RouteSegmentUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteSegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteSegment.
     * @param {RouteSegmentUpsertArgs} args - Arguments to update or create a RouteSegment.
     * @example
     * // Update or create a RouteSegment
     * const routeSegment = await prisma.routeSegment.upsert({
     *   create: {
     *     // ... data to create a RouteSegment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteSegment we want to update
     *   }
     * })
     */
    upsert<T extends RouteSegmentUpsertArgs>(args: SelectSubset<T, RouteSegmentUpsertArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteSegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentCountArgs} args - Arguments to filter RouteSegments to count.
     * @example
     * // Count the number of RouteSegments
     * const count = await prisma.routeSegment.count({
     *   where: {
     *     // ... the filter for the RouteSegments we want to count
     *   }
     * })
    **/
    count<T extends RouteSegmentCountArgs>(
      args?: Subset<T, RouteSegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteSegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteSegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteSegmentAggregateArgs>(args: Subset<T, RouteSegmentAggregateArgs>): Prisma.PrismaPromise<GetRouteSegmentAggregateType<T>>

    /**
     * Group by RouteSegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteSegmentGroupByArgs} args - Group by arguments.
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
      T extends RouteSegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteSegmentGroupByArgs['orderBy'] }
        : { orderBy?: RouteSegmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteSegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteSegment model
   */
  readonly fields: RouteSegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteSegment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteSegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    races<T extends RouteSegment$racesArgs<ExtArgs> = {}>(args?: Subset<T, RouteSegment$racesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telemetryWindows<T extends RouteSegment$telemetryWindowsArgs<ExtArgs> = {}>(args?: Subset<T, RouteSegment$telemetryWindowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RouteSegment model
   */
  interface RouteSegmentFieldRefs {
    readonly id: FieldRef<"RouteSegment", 'String'>
    readonly routeId: FieldRef<"RouteSegment", 'String'>
    readonly index: FieldRef<"RouteSegment", 'Int'>
    readonly start: FieldRef<"RouteSegment", 'Json'>
    readonly end: FieldRef<"RouteSegment", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * RouteSegment findUnique
   */
  export type RouteSegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteSegment to fetch.
     */
    where: RouteSegmentWhereUniqueInput
  }

  /**
   * RouteSegment findUniqueOrThrow
   */
  export type RouteSegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteSegment to fetch.
     */
    where: RouteSegmentWhereUniqueInput
  }

  /**
   * RouteSegment findFirst
   */
  export type RouteSegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteSegment to fetch.
     */
    where?: RouteSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSegments to fetch.
     */
    orderBy?: RouteSegmentOrderByWithRelationInput | RouteSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteSegments.
     */
    cursor?: RouteSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteSegments.
     */
    distinct?: RouteSegmentScalarFieldEnum | RouteSegmentScalarFieldEnum[]
  }

  /**
   * RouteSegment findFirstOrThrow
   */
  export type RouteSegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteSegment to fetch.
     */
    where?: RouteSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSegments to fetch.
     */
    orderBy?: RouteSegmentOrderByWithRelationInput | RouteSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteSegments.
     */
    cursor?: RouteSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteSegments.
     */
    distinct?: RouteSegmentScalarFieldEnum | RouteSegmentScalarFieldEnum[]
  }

  /**
   * RouteSegment findMany
   */
  export type RouteSegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteSegments to fetch.
     */
    where?: RouteSegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSegments to fetch.
     */
    orderBy?: RouteSegmentOrderByWithRelationInput | RouteSegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteSegments.
     */
    cursor?: RouteSegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSegments.
     */
    skip?: number
    distinct?: RouteSegmentScalarFieldEnum | RouteSegmentScalarFieldEnum[]
  }

  /**
   * RouteSegment create
   */
  export type RouteSegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteSegment.
     */
    data: XOR<RouteSegmentCreateInput, RouteSegmentUncheckedCreateInput>
  }

  /**
   * RouteSegment createMany
   */
  export type RouteSegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteSegments.
     */
    data: RouteSegmentCreateManyInput | RouteSegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteSegment createManyAndReturn
   */
  export type RouteSegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * The data used to create many RouteSegments.
     */
    data: RouteSegmentCreateManyInput | RouteSegmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteSegment update
   */
  export type RouteSegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteSegment.
     */
    data: XOR<RouteSegmentUpdateInput, RouteSegmentUncheckedUpdateInput>
    /**
     * Choose, which RouteSegment to update.
     */
    where: RouteSegmentWhereUniqueInput
  }

  /**
   * RouteSegment updateMany
   */
  export type RouteSegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteSegments.
     */
    data: XOR<RouteSegmentUpdateManyMutationInput, RouteSegmentUncheckedUpdateManyInput>
    /**
     * Filter which RouteSegments to update
     */
    where?: RouteSegmentWhereInput
    /**
     * Limit how many RouteSegments to update.
     */
    limit?: number
  }

  /**
   * RouteSegment updateManyAndReturn
   */
  export type RouteSegmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * The data used to update RouteSegments.
     */
    data: XOR<RouteSegmentUpdateManyMutationInput, RouteSegmentUncheckedUpdateManyInput>
    /**
     * Filter which RouteSegments to update
     */
    where?: RouteSegmentWhereInput
    /**
     * Limit how many RouteSegments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteSegment upsert
   */
  export type RouteSegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteSegment to update in case it exists.
     */
    where: RouteSegmentWhereUniqueInput
    /**
     * In case the RouteSegment found by the `where` argument doesn't exist, create a new RouteSegment with this data.
     */
    create: XOR<RouteSegmentCreateInput, RouteSegmentUncheckedCreateInput>
    /**
     * In case the RouteSegment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteSegmentUpdateInput, RouteSegmentUncheckedUpdateInput>
  }

  /**
   * RouteSegment delete
   */
  export type RouteSegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
    /**
     * Filter which RouteSegment to delete.
     */
    where: RouteSegmentWhereUniqueInput
  }

  /**
   * RouteSegment deleteMany
   */
  export type RouteSegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteSegments to delete
     */
    where?: RouteSegmentWhereInput
    /**
     * Limit how many RouteSegments to delete.
     */
    limit?: number
  }

  /**
   * RouteSegment.races
   */
  export type RouteSegment$racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * RouteSegment.telemetryWindows
   */
  export type RouteSegment$telemetryWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    where?: TelemetryWindowWhereInput
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    cursor?: TelemetryWindowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelemetryWindowScalarFieldEnum | TelemetryWindowScalarFieldEnum[]
  }

  /**
   * RouteSegment without action
   */
  export type RouteSegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSegment
     */
    select?: RouteSegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSegment
     */
    omit?: RouteSegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteSegmentInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    durationSec: number | null
  }

  export type RaceSumAggregateOutputType = {
    durationSec: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: string | null
    routeId: string | null
    state: $Enums.RaceState | null
    startAt: Date | null
    durationSec: number | null
    createdAt: Date | null
    routeSegmentId: string | null
  }

  export type RaceMaxAggregateOutputType = {
    id: string | null
    routeId: string | null
    state: $Enums.RaceState | null
    startAt: Date | null
    durationSec: number | null
    createdAt: Date | null
    routeSegmentId: string | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    routeId: number
    state: number
    startAt: number
    durationSec: number
    createdAt: number
    routeSegmentId: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    durationSec?: true
  }

  export type RaceSumAggregateInputType = {
    durationSec?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    routeId?: true
    state?: true
    startAt?: true
    durationSec?: true
    createdAt?: true
    routeSegmentId?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    routeId?: true
    state?: true
    startAt?: true
    durationSec?: true
    createdAt?: true
    routeSegmentId?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    routeId?: true
    state?: true
    startAt?: true
    durationSec?: true
    createdAt?: true
    routeSegmentId?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date
    durationSec: number
    createdAt: Date
    routeSegmentId: string
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    state?: boolean
    startAt?: boolean
    durationSec?: boolean
    createdAt?: boolean
    routeSegmentId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
    raceParticipants?: boolean | Race$raceParticipantsArgs<ExtArgs>
    telemetryWindows?: boolean | Race$telemetryWindowsArgs<ExtArgs>
    raceScores?: boolean | Race$raceScoresArgs<ExtArgs>
    raceResults?: boolean | Race$raceResultsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    state?: boolean
    startAt?: boolean
    durationSec?: boolean
    createdAt?: boolean
    routeSegmentId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    state?: boolean
    startAt?: boolean
    durationSec?: boolean
    createdAt?: boolean
    routeSegmentId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    routeId?: boolean
    state?: boolean
    startAt?: boolean
    durationSec?: boolean
    createdAt?: boolean
    routeSegmentId?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "state" | "startAt" | "durationSec" | "createdAt" | "routeSegmentId", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
    raceParticipants?: boolean | Race$raceParticipantsArgs<ExtArgs>
    telemetryWindows?: boolean | Race$telemetryWindowsArgs<ExtArgs>
    raceScores?: boolean | Race$raceScoresArgs<ExtArgs>
    raceResults?: boolean | Race$raceResultsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      segment: Prisma.$RouteSegmentPayload<ExtArgs>
      raceParticipants: Prisma.$RaceParticipantPayload<ExtArgs>[]
      telemetryWindows: Prisma.$TelemetryWindowPayload<ExtArgs>[]
      raceScores: Prisma.$RaceScorePayload<ExtArgs>[]
      raceResults: Prisma.$RaceResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeId: string
      state: $Enums.RaceState
      startAt: Date
      durationSec: number
      createdAt: Date
      routeSegmentId: string
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
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
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
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
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    segment<T extends RouteSegmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteSegmentDefaultArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raceParticipants<T extends Race$raceParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, Race$raceParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telemetryWindows<T extends Race$telemetryWindowsArgs<ExtArgs> = {}>(args?: Subset<T, Race$telemetryWindowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceScores<T extends Race$raceScoresArgs<ExtArgs> = {}>(args?: Subset<T, Race$raceScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceResults<T extends Race$raceResultsArgs<ExtArgs> = {}>(args?: Subset<T, Race$raceResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'String'>
    readonly routeId: FieldRef<"Race", 'String'>
    readonly state: FieldRef<"Race", 'RaceState'>
    readonly startAt: FieldRef<"Race", 'DateTime'>
    readonly durationSec: FieldRef<"Race", 'Int'>
    readonly createdAt: FieldRef<"Race", 'DateTime'>
    readonly routeSegmentId: FieldRef<"Race", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.raceParticipants
   */
  export type Race$raceParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    cursor?: RaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * Race.telemetryWindows
   */
  export type Race$telemetryWindowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    where?: TelemetryWindowWhereInput
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    cursor?: TelemetryWindowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelemetryWindowScalarFieldEnum | TelemetryWindowScalarFieldEnum[]
  }

  /**
   * Race.raceScores
   */
  export type Race$raceScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    where?: RaceScoreWhereInput
    orderBy?: RaceScoreOrderByWithRelationInput | RaceScoreOrderByWithRelationInput[]
    cursor?: RaceScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScoreScalarFieldEnum | RaceScoreScalarFieldEnum[]
  }

  /**
   * Race.raceResults
   */
  export type Race$raceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    where?: RaceResultWhereInput
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    cursor?: RaceResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model RaceParticipant
   */

  export type AggregateRaceParticipant = {
    _count: RaceParticipantCountAggregateOutputType | null
    _min: RaceParticipantMinAggregateOutputType | null
    _max: RaceParticipantMaxAggregateOutputType | null
  }

  export type RaceParticipantMinAggregateOutputType = {
    id: string | null
    raceId: string | null
    driverId: string | null
    joinedAt: Date | null
    status: $Enums.ReadyToRace | null
  }

  export type RaceParticipantMaxAggregateOutputType = {
    id: string | null
    raceId: string | null
    driverId: string | null
    joinedAt: Date | null
    status: $Enums.ReadyToRace | null
  }

  export type RaceParticipantCountAggregateOutputType = {
    id: number
    raceId: number
    driverId: number
    joinedAt: number
    status: number
    _all: number
  }


  export type RaceParticipantMinAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    joinedAt?: true
    status?: true
  }

  export type RaceParticipantMaxAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    joinedAt?: true
    status?: true
  }

  export type RaceParticipantCountAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    joinedAt?: true
    status?: true
    _all?: true
  }

  export type RaceParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceParticipant to aggregate.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceParticipants
    **/
    _count?: true | RaceParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceParticipantMaxAggregateInputType
  }

  export type GetRaceParticipantAggregateType<T extends RaceParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceParticipant[P]>
      : GetScalarType<T[P], AggregateRaceParticipant[P]>
  }




  export type RaceParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithAggregationInput | RaceParticipantOrderByWithAggregationInput[]
    by: RaceParticipantScalarFieldEnum[] | RaceParticipantScalarFieldEnum
    having?: RaceParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceParticipantCountAggregateInputType | true
    _min?: RaceParticipantMinAggregateInputType
    _max?: RaceParticipantMaxAggregateInputType
  }

  export type RaceParticipantGroupByOutputType = {
    id: string
    raceId: string
    driverId: string
    joinedAt: Date
    status: $Enums.ReadyToRace
    _count: RaceParticipantCountAggregateOutputType | null
    _min: RaceParticipantMinAggregateOutputType | null
    _max: RaceParticipantMaxAggregateOutputType | null
  }

  type GetRaceParticipantGroupByPayload<T extends RaceParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RaceParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RaceParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    joinedAt?: boolean
    status?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    joinedAt?: boolean
    status?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    joinedAt?: boolean
    status?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectScalar = {
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    joinedAt?: boolean
    status?: boolean
  }

  export type RaceParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "driverId" | "joinedAt" | "status", ExtArgs["result"]["raceParticipant"]>
  export type RaceParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
  }
  export type RaceParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
  }
  export type RaceParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
  }

  export type $RaceParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceParticipant"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
      race: Prisma.$RacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raceId: string
      driverId: string
      joinedAt: Date
      status: $Enums.ReadyToRace
    }, ExtArgs["result"]["raceParticipant"]>
    composites: {}
  }

  type RaceParticipantGetPayload<S extends boolean | null | undefined | RaceParticipantDefaultArgs> = $Result.GetResult<Prisma.$RaceParticipantPayload, S>

  type RaceParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceParticipantCountAggregateInputType | true
    }

  export interface RaceParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceParticipant'], meta: { name: 'RaceParticipant' } }
    /**
     * Find zero or one RaceParticipant that matches the filter.
     * @param {RaceParticipantFindUniqueArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceParticipantFindUniqueArgs>(args: SelectSubset<T, RaceParticipantFindUniqueArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceParticipantFindUniqueOrThrowArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindFirstArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceParticipantFindFirstArgs>(args?: SelectSubset<T, RaceParticipantFindFirstArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindFirstOrThrowArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceParticipants
     * const raceParticipants = await prisma.raceParticipant.findMany()
     * 
     * // Get first 10 RaceParticipants
     * const raceParticipants = await prisma.raceParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceParticipantFindManyArgs>(args?: SelectSubset<T, RaceParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceParticipant.
     * @param {RaceParticipantCreateArgs} args - Arguments to create a RaceParticipant.
     * @example
     * // Create one RaceParticipant
     * const RaceParticipant = await prisma.raceParticipant.create({
     *   data: {
     *     // ... data to create a RaceParticipant
     *   }
     * })
     * 
     */
    create<T extends RaceParticipantCreateArgs>(args: SelectSubset<T, RaceParticipantCreateArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceParticipants.
     * @param {RaceParticipantCreateManyArgs} args - Arguments to create many RaceParticipants.
     * @example
     * // Create many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceParticipantCreateManyArgs>(args?: SelectSubset<T, RaceParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceParticipants and returns the data saved in the database.
     * @param {RaceParticipantCreateManyAndReturnArgs} args - Arguments to create many RaceParticipants.
     * @example
     * // Create many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceParticipants and only return the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceParticipant.
     * @param {RaceParticipantDeleteArgs} args - Arguments to delete one RaceParticipant.
     * @example
     * // Delete one RaceParticipant
     * const RaceParticipant = await prisma.raceParticipant.delete({
     *   where: {
     *     // ... filter to delete one RaceParticipant
     *   }
     * })
     * 
     */
    delete<T extends RaceParticipantDeleteArgs>(args: SelectSubset<T, RaceParticipantDeleteArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceParticipant.
     * @param {RaceParticipantUpdateArgs} args - Arguments to update one RaceParticipant.
     * @example
     * // Update one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceParticipantUpdateArgs>(args: SelectSubset<T, RaceParticipantUpdateArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceParticipants.
     * @param {RaceParticipantDeleteManyArgs} args - Arguments to filter RaceParticipants to delete.
     * @example
     * // Delete a few RaceParticipants
     * const { count } = await prisma.raceParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceParticipantDeleteManyArgs>(args?: SelectSubset<T, RaceParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceParticipantUpdateManyArgs>(args: SelectSubset<T, RaceParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceParticipants and returns the data updated in the database.
     * @param {RaceParticipantUpdateManyAndReturnArgs} args - Arguments to update many RaceParticipants.
     * @example
     * // Update many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceParticipants and only return the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends RaceParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceParticipant.
     * @param {RaceParticipantUpsertArgs} args - Arguments to update or create a RaceParticipant.
     * @example
     * // Update or create a RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.upsert({
     *   create: {
     *     // ... data to create a RaceParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RaceParticipantUpsertArgs>(args: SelectSubset<T, RaceParticipantUpsertArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantCountArgs} args - Arguments to filter RaceParticipants to count.
     * @example
     * // Count the number of RaceParticipants
     * const count = await prisma.raceParticipant.count({
     *   where: {
     *     // ... the filter for the RaceParticipants we want to count
     *   }
     * })
    **/
    count<T extends RaceParticipantCountArgs>(
      args?: Subset<T, RaceParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceParticipantAggregateArgs>(args: Subset<T, RaceParticipantAggregateArgs>): Prisma.PrismaPromise<GetRaceParticipantAggregateType<T>>

    /**
     * Group by RaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantGroupByArgs} args - Group by arguments.
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
      T extends RaceParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RaceParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceParticipant model
   */
  readonly fields: RaceParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RaceParticipant model
   */
  interface RaceParticipantFieldRefs {
    readonly id: FieldRef<"RaceParticipant", 'String'>
    readonly raceId: FieldRef<"RaceParticipant", 'String'>
    readonly driverId: FieldRef<"RaceParticipant", 'String'>
    readonly joinedAt: FieldRef<"RaceParticipant", 'DateTime'>
    readonly status: FieldRef<"RaceParticipant", 'ReadyToRace'>
  }
    

  // Custom InputTypes
  /**
   * RaceParticipant findUnique
   */
  export type RaceParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant findUniqueOrThrow
   */
  export type RaceParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant findFirst
   */
  export type RaceParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceParticipants.
     */
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant findFirstOrThrow
   */
  export type RaceParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceParticipants.
     */
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant findMany
   */
  export type RaceParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipants to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant create
   */
  export type RaceParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceParticipant.
     */
    data: XOR<RaceParticipantCreateInput, RaceParticipantUncheckedCreateInput>
  }

  /**
   * RaceParticipant createMany
   */
  export type RaceParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceParticipants.
     */
    data: RaceParticipantCreateManyInput | RaceParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceParticipant createManyAndReturn
   */
  export type RaceParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RaceParticipants.
     */
    data: RaceParticipantCreateManyInput | RaceParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceParticipant update
   */
  export type RaceParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceParticipant.
     */
    data: XOR<RaceParticipantUpdateInput, RaceParticipantUncheckedUpdateInput>
    /**
     * Choose, which RaceParticipant to update.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant updateMany
   */
  export type RaceParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceParticipants.
     */
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RaceParticipants to update
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to update.
     */
    limit?: number
  }

  /**
   * RaceParticipant updateManyAndReturn
   */
  export type RaceParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RaceParticipants.
     */
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RaceParticipants to update
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceParticipant upsert
   */
  export type RaceParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceParticipant to update in case it exists.
     */
    where: RaceParticipantWhereUniqueInput
    /**
     * In case the RaceParticipant found by the `where` argument doesn't exist, create a new RaceParticipant with this data.
     */
    create: XOR<RaceParticipantCreateInput, RaceParticipantUncheckedCreateInput>
    /**
     * In case the RaceParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceParticipantUpdateInput, RaceParticipantUncheckedUpdateInput>
  }

  /**
   * RaceParticipant delete
   */
  export type RaceParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter which RaceParticipant to delete.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant deleteMany
   */
  export type RaceParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceParticipants to delete
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to delete.
     */
    limit?: number
  }

  /**
   * RaceParticipant without action
   */
  export type RaceParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
  }


  /**
   * Model TelemetryWindow
   */

  export type AggregateTelemetryWindow = {
    _count: TelemetryWindowCountAggregateOutputType | null
    _avg: TelemetryWindowAvgAggregateOutputType | null
    _sum: TelemetryWindowSumAggregateOutputType | null
    _min: TelemetryWindowMinAggregateOutputType | null
    _max: TelemetryWindowMaxAggregateOutputType | null
  }

  export type TelemetryWindowAvgAggregateOutputType = {
    avgSpeed: number | null
    distance: number | null
  }

  export type TelemetryWindowSumAggregateOutputType = {
    avgSpeed: number | null
    distance: number | null
  }

  export type TelemetryWindowMinAggregateOutputType = {
    id: string | null
    windowStart: Date | null
    windowEnd: Date | null
    avgSpeed: number | null
    distance: number | null
    raceId: string | null
    driverId: string | null
    routeSegmentId: string | null
  }

  export type TelemetryWindowMaxAggregateOutputType = {
    id: string | null
    windowStart: Date | null
    windowEnd: Date | null
    avgSpeed: number | null
    distance: number | null
    raceId: string | null
    driverId: string | null
    routeSegmentId: string | null
  }

  export type TelemetryWindowCountAggregateOutputType = {
    id: number
    windowStart: number
    windowEnd: number
    avgSpeed: number
    distance: number
    raceId: number
    driverId: number
    routeSegmentId: number
    _all: number
  }


  export type TelemetryWindowAvgAggregateInputType = {
    avgSpeed?: true
    distance?: true
  }

  export type TelemetryWindowSumAggregateInputType = {
    avgSpeed?: true
    distance?: true
  }

  export type TelemetryWindowMinAggregateInputType = {
    id?: true
    windowStart?: true
    windowEnd?: true
    avgSpeed?: true
    distance?: true
    raceId?: true
    driverId?: true
    routeSegmentId?: true
  }

  export type TelemetryWindowMaxAggregateInputType = {
    id?: true
    windowStart?: true
    windowEnd?: true
    avgSpeed?: true
    distance?: true
    raceId?: true
    driverId?: true
    routeSegmentId?: true
  }

  export type TelemetryWindowCountAggregateInputType = {
    id?: true
    windowStart?: true
    windowEnd?: true
    avgSpeed?: true
    distance?: true
    raceId?: true
    driverId?: true
    routeSegmentId?: true
    _all?: true
  }

  export type TelemetryWindowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelemetryWindow to aggregate.
     */
    where?: TelemetryWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryWindows to fetch.
     */
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelemetryWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelemetryWindows
    **/
    _count?: true | TelemetryWindowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelemetryWindowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelemetryWindowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelemetryWindowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelemetryWindowMaxAggregateInputType
  }

  export type GetTelemetryWindowAggregateType<T extends TelemetryWindowAggregateArgs> = {
        [P in keyof T & keyof AggregateTelemetryWindow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelemetryWindow[P]>
      : GetScalarType<T[P], AggregateTelemetryWindow[P]>
  }




  export type TelemetryWindowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWindowWhereInput
    orderBy?: TelemetryWindowOrderByWithAggregationInput | TelemetryWindowOrderByWithAggregationInput[]
    by: TelemetryWindowScalarFieldEnum[] | TelemetryWindowScalarFieldEnum
    having?: TelemetryWindowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelemetryWindowCountAggregateInputType | true
    _avg?: TelemetryWindowAvgAggregateInputType
    _sum?: TelemetryWindowSumAggregateInputType
    _min?: TelemetryWindowMinAggregateInputType
    _max?: TelemetryWindowMaxAggregateInputType
  }

  export type TelemetryWindowGroupByOutputType = {
    id: string
    windowStart: Date
    windowEnd: Date
    avgSpeed: number
    distance: number
    raceId: string
    driverId: string
    routeSegmentId: string
    _count: TelemetryWindowCountAggregateOutputType | null
    _avg: TelemetryWindowAvgAggregateOutputType | null
    _sum: TelemetryWindowSumAggregateOutputType | null
    _min: TelemetryWindowMinAggregateOutputType | null
    _max: TelemetryWindowMaxAggregateOutputType | null
  }

  type GetTelemetryWindowGroupByPayload<T extends TelemetryWindowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelemetryWindowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelemetryWindowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelemetryWindowGroupByOutputType[P]>
            : GetScalarType<T[P], TelemetryWindowGroupByOutputType[P]>
        }
      >
    >


  export type TelemetryWindowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    avgSpeed?: boolean
    distance?: boolean
    raceId?: boolean
    driverId?: boolean
    routeSegmentId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetryWindow"]>

  export type TelemetryWindowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    avgSpeed?: boolean
    distance?: boolean
    raceId?: boolean
    driverId?: boolean
    routeSegmentId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetryWindow"]>

  export type TelemetryWindowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    avgSpeed?: boolean
    distance?: boolean
    raceId?: boolean
    driverId?: boolean
    routeSegmentId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetryWindow"]>

  export type TelemetryWindowSelectScalar = {
    id?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    avgSpeed?: boolean
    distance?: boolean
    raceId?: boolean
    driverId?: boolean
    routeSegmentId?: boolean
  }

  export type TelemetryWindowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "windowStart" | "windowEnd" | "avgSpeed" | "distance" | "raceId" | "driverId" | "routeSegmentId", ExtArgs["result"]["telemetryWindow"]>
  export type TelemetryWindowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }
  export type TelemetryWindowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }
  export type TelemetryWindowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    segment?: boolean | RouteSegmentDefaultArgs<ExtArgs>
  }

  export type $TelemetryWindowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelemetryWindow"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
      segment: Prisma.$RouteSegmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      windowStart: Date
      windowEnd: Date
      avgSpeed: number
      distance: number
      raceId: string
      driverId: string
      routeSegmentId: string
    }, ExtArgs["result"]["telemetryWindow"]>
    composites: {}
  }

  type TelemetryWindowGetPayload<S extends boolean | null | undefined | TelemetryWindowDefaultArgs> = $Result.GetResult<Prisma.$TelemetryWindowPayload, S>

  type TelemetryWindowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelemetryWindowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelemetryWindowCountAggregateInputType | true
    }

  export interface TelemetryWindowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelemetryWindow'], meta: { name: 'TelemetryWindow' } }
    /**
     * Find zero or one TelemetryWindow that matches the filter.
     * @param {TelemetryWindowFindUniqueArgs} args - Arguments to find a TelemetryWindow
     * @example
     * // Get one TelemetryWindow
     * const telemetryWindow = await prisma.telemetryWindow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelemetryWindowFindUniqueArgs>(args: SelectSubset<T, TelemetryWindowFindUniqueArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelemetryWindow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelemetryWindowFindUniqueOrThrowArgs} args - Arguments to find a TelemetryWindow
     * @example
     * // Get one TelemetryWindow
     * const telemetryWindow = await prisma.telemetryWindow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelemetryWindowFindUniqueOrThrowArgs>(args: SelectSubset<T, TelemetryWindowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelemetryWindow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowFindFirstArgs} args - Arguments to find a TelemetryWindow
     * @example
     * // Get one TelemetryWindow
     * const telemetryWindow = await prisma.telemetryWindow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelemetryWindowFindFirstArgs>(args?: SelectSubset<T, TelemetryWindowFindFirstArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelemetryWindow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowFindFirstOrThrowArgs} args - Arguments to find a TelemetryWindow
     * @example
     * // Get one TelemetryWindow
     * const telemetryWindow = await prisma.telemetryWindow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelemetryWindowFindFirstOrThrowArgs>(args?: SelectSubset<T, TelemetryWindowFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelemetryWindows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelemetryWindows
     * const telemetryWindows = await prisma.telemetryWindow.findMany()
     * 
     * // Get first 10 TelemetryWindows
     * const telemetryWindows = await prisma.telemetryWindow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telemetryWindowWithIdOnly = await prisma.telemetryWindow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelemetryWindowFindManyArgs>(args?: SelectSubset<T, TelemetryWindowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelemetryWindow.
     * @param {TelemetryWindowCreateArgs} args - Arguments to create a TelemetryWindow.
     * @example
     * // Create one TelemetryWindow
     * const TelemetryWindow = await prisma.telemetryWindow.create({
     *   data: {
     *     // ... data to create a TelemetryWindow
     *   }
     * })
     * 
     */
    create<T extends TelemetryWindowCreateArgs>(args: SelectSubset<T, TelemetryWindowCreateArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelemetryWindows.
     * @param {TelemetryWindowCreateManyArgs} args - Arguments to create many TelemetryWindows.
     * @example
     * // Create many TelemetryWindows
     * const telemetryWindow = await prisma.telemetryWindow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelemetryWindowCreateManyArgs>(args?: SelectSubset<T, TelemetryWindowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelemetryWindows and returns the data saved in the database.
     * @param {TelemetryWindowCreateManyAndReturnArgs} args - Arguments to create many TelemetryWindows.
     * @example
     * // Create many TelemetryWindows
     * const telemetryWindow = await prisma.telemetryWindow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelemetryWindows and only return the `id`
     * const telemetryWindowWithIdOnly = await prisma.telemetryWindow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelemetryWindowCreateManyAndReturnArgs>(args?: SelectSubset<T, TelemetryWindowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelemetryWindow.
     * @param {TelemetryWindowDeleteArgs} args - Arguments to delete one TelemetryWindow.
     * @example
     * // Delete one TelemetryWindow
     * const TelemetryWindow = await prisma.telemetryWindow.delete({
     *   where: {
     *     // ... filter to delete one TelemetryWindow
     *   }
     * })
     * 
     */
    delete<T extends TelemetryWindowDeleteArgs>(args: SelectSubset<T, TelemetryWindowDeleteArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelemetryWindow.
     * @param {TelemetryWindowUpdateArgs} args - Arguments to update one TelemetryWindow.
     * @example
     * // Update one TelemetryWindow
     * const telemetryWindow = await prisma.telemetryWindow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelemetryWindowUpdateArgs>(args: SelectSubset<T, TelemetryWindowUpdateArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelemetryWindows.
     * @param {TelemetryWindowDeleteManyArgs} args - Arguments to filter TelemetryWindows to delete.
     * @example
     * // Delete a few TelemetryWindows
     * const { count } = await prisma.telemetryWindow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelemetryWindowDeleteManyArgs>(args?: SelectSubset<T, TelemetryWindowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelemetryWindows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelemetryWindows
     * const telemetryWindow = await prisma.telemetryWindow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelemetryWindowUpdateManyArgs>(args: SelectSubset<T, TelemetryWindowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelemetryWindows and returns the data updated in the database.
     * @param {TelemetryWindowUpdateManyAndReturnArgs} args - Arguments to update many TelemetryWindows.
     * @example
     * // Update many TelemetryWindows
     * const telemetryWindow = await prisma.telemetryWindow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelemetryWindows and only return the `id`
     * const telemetryWindowWithIdOnly = await prisma.telemetryWindow.updateManyAndReturn({
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
    updateManyAndReturn<T extends TelemetryWindowUpdateManyAndReturnArgs>(args: SelectSubset<T, TelemetryWindowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelemetryWindow.
     * @param {TelemetryWindowUpsertArgs} args - Arguments to update or create a TelemetryWindow.
     * @example
     * // Update or create a TelemetryWindow
     * const telemetryWindow = await prisma.telemetryWindow.upsert({
     *   create: {
     *     // ... data to create a TelemetryWindow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelemetryWindow we want to update
     *   }
     * })
     */
    upsert<T extends TelemetryWindowUpsertArgs>(args: SelectSubset<T, TelemetryWindowUpsertArgs<ExtArgs>>): Prisma__TelemetryWindowClient<$Result.GetResult<Prisma.$TelemetryWindowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelemetryWindows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowCountArgs} args - Arguments to filter TelemetryWindows to count.
     * @example
     * // Count the number of TelemetryWindows
     * const count = await prisma.telemetryWindow.count({
     *   where: {
     *     // ... the filter for the TelemetryWindows we want to count
     *   }
     * })
    **/
    count<T extends TelemetryWindowCountArgs>(
      args?: Subset<T, TelemetryWindowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelemetryWindowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelemetryWindow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelemetryWindowAggregateArgs>(args: Subset<T, TelemetryWindowAggregateArgs>): Prisma.PrismaPromise<GetTelemetryWindowAggregateType<T>>

    /**
     * Group by TelemetryWindow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryWindowGroupByArgs} args - Group by arguments.
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
      T extends TelemetryWindowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelemetryWindowGroupByArgs['orderBy'] }
        : { orderBy?: TelemetryWindowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelemetryWindowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelemetryWindowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelemetryWindow model
   */
  readonly fields: TelemetryWindowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelemetryWindow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelemetryWindowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    segment<T extends RouteSegmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteSegmentDefaultArgs<ExtArgs>>): Prisma__RouteSegmentClient<$Result.GetResult<Prisma.$RouteSegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TelemetryWindow model
   */
  interface TelemetryWindowFieldRefs {
    readonly id: FieldRef<"TelemetryWindow", 'String'>
    readonly windowStart: FieldRef<"TelemetryWindow", 'DateTime'>
    readonly windowEnd: FieldRef<"TelemetryWindow", 'DateTime'>
    readonly avgSpeed: FieldRef<"TelemetryWindow", 'Int'>
    readonly distance: FieldRef<"TelemetryWindow", 'Int'>
    readonly raceId: FieldRef<"TelemetryWindow", 'String'>
    readonly driverId: FieldRef<"TelemetryWindow", 'String'>
    readonly routeSegmentId: FieldRef<"TelemetryWindow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TelemetryWindow findUnique
   */
  export type TelemetryWindowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryWindow to fetch.
     */
    where: TelemetryWindowWhereUniqueInput
  }

  /**
   * TelemetryWindow findUniqueOrThrow
   */
  export type TelemetryWindowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryWindow to fetch.
     */
    where: TelemetryWindowWhereUniqueInput
  }

  /**
   * TelemetryWindow findFirst
   */
  export type TelemetryWindowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryWindow to fetch.
     */
    where?: TelemetryWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryWindows to fetch.
     */
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelemetryWindows.
     */
    cursor?: TelemetryWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelemetryWindows.
     */
    distinct?: TelemetryWindowScalarFieldEnum | TelemetryWindowScalarFieldEnum[]
  }

  /**
   * TelemetryWindow findFirstOrThrow
   */
  export type TelemetryWindowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryWindow to fetch.
     */
    where?: TelemetryWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryWindows to fetch.
     */
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelemetryWindows.
     */
    cursor?: TelemetryWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryWindows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelemetryWindows.
     */
    distinct?: TelemetryWindowScalarFieldEnum | TelemetryWindowScalarFieldEnum[]
  }

  /**
   * TelemetryWindow findMany
   */
  export type TelemetryWindowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * Filter, which TelemetryWindows to fetch.
     */
    where?: TelemetryWindowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelemetryWindows to fetch.
     */
    orderBy?: TelemetryWindowOrderByWithRelationInput | TelemetryWindowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelemetryWindows.
     */
    cursor?: TelemetryWindowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelemetryWindows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelemetryWindows.
     */
    skip?: number
    distinct?: TelemetryWindowScalarFieldEnum | TelemetryWindowScalarFieldEnum[]
  }

  /**
   * TelemetryWindow create
   */
  export type TelemetryWindowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * The data needed to create a TelemetryWindow.
     */
    data: XOR<TelemetryWindowCreateInput, TelemetryWindowUncheckedCreateInput>
  }

  /**
   * TelemetryWindow createMany
   */
  export type TelemetryWindowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelemetryWindows.
     */
    data: TelemetryWindowCreateManyInput | TelemetryWindowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelemetryWindow createManyAndReturn
   */
  export type TelemetryWindowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * The data used to create many TelemetryWindows.
     */
    data: TelemetryWindowCreateManyInput | TelemetryWindowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelemetryWindow update
   */
  export type TelemetryWindowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * The data needed to update a TelemetryWindow.
     */
    data: XOR<TelemetryWindowUpdateInput, TelemetryWindowUncheckedUpdateInput>
    /**
     * Choose, which TelemetryWindow to update.
     */
    where: TelemetryWindowWhereUniqueInput
  }

  /**
   * TelemetryWindow updateMany
   */
  export type TelemetryWindowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelemetryWindows.
     */
    data: XOR<TelemetryWindowUpdateManyMutationInput, TelemetryWindowUncheckedUpdateManyInput>
    /**
     * Filter which TelemetryWindows to update
     */
    where?: TelemetryWindowWhereInput
    /**
     * Limit how many TelemetryWindows to update.
     */
    limit?: number
  }

  /**
   * TelemetryWindow updateManyAndReturn
   */
  export type TelemetryWindowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * The data used to update TelemetryWindows.
     */
    data: XOR<TelemetryWindowUpdateManyMutationInput, TelemetryWindowUncheckedUpdateManyInput>
    /**
     * Filter which TelemetryWindows to update
     */
    where?: TelemetryWindowWhereInput
    /**
     * Limit how many TelemetryWindows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelemetryWindow upsert
   */
  export type TelemetryWindowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * The filter to search for the TelemetryWindow to update in case it exists.
     */
    where: TelemetryWindowWhereUniqueInput
    /**
     * In case the TelemetryWindow found by the `where` argument doesn't exist, create a new TelemetryWindow with this data.
     */
    create: XOR<TelemetryWindowCreateInput, TelemetryWindowUncheckedCreateInput>
    /**
     * In case the TelemetryWindow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelemetryWindowUpdateInput, TelemetryWindowUncheckedUpdateInput>
  }

  /**
   * TelemetryWindow delete
   */
  export type TelemetryWindowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
    /**
     * Filter which TelemetryWindow to delete.
     */
    where: TelemetryWindowWhereUniqueInput
  }

  /**
   * TelemetryWindow deleteMany
   */
  export type TelemetryWindowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelemetryWindows to delete
     */
    where?: TelemetryWindowWhereInput
    /**
     * Limit how many TelemetryWindows to delete.
     */
    limit?: number
  }

  /**
   * TelemetryWindow without action
   */
  export type TelemetryWindowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelemetryWindow
     */
    select?: TelemetryWindowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelemetryWindow
     */
    omit?: TelemetryWindowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryWindowInclude<ExtArgs> | null
  }


  /**
   * Model RaceScore
   */

  export type AggregateRaceScore = {
    _count: RaceScoreCountAggregateOutputType | null
    _avg: RaceScoreAvgAggregateOutputType | null
    _sum: RaceScoreSumAggregateOutputType | null
    _min: RaceScoreMinAggregateOutputType | null
    _max: RaceScoreMaxAggregateOutputType | null
  }

  export type RaceScoreAvgAggregateOutputType = {
    totalDistance: number | null
    lastDelta: number | null
  }

  export type RaceScoreSumAggregateOutputType = {
    totalDistance: number | null
    lastDelta: number | null
  }

  export type RaceScoreMinAggregateOutputType = {
    id: string | null
    totalDistance: number | null
    lastDelta: number | null
    raceId: string | null
    driverId: string | null
  }

  export type RaceScoreMaxAggregateOutputType = {
    id: string | null
    totalDistance: number | null
    lastDelta: number | null
    raceId: string | null
    driverId: string | null
  }

  export type RaceScoreCountAggregateOutputType = {
    id: number
    totalDistance: number
    lastDelta: number
    raceId: number
    driverId: number
    _all: number
  }


  export type RaceScoreAvgAggregateInputType = {
    totalDistance?: true
    lastDelta?: true
  }

  export type RaceScoreSumAggregateInputType = {
    totalDistance?: true
    lastDelta?: true
  }

  export type RaceScoreMinAggregateInputType = {
    id?: true
    totalDistance?: true
    lastDelta?: true
    raceId?: true
    driverId?: true
  }

  export type RaceScoreMaxAggregateInputType = {
    id?: true
    totalDistance?: true
    lastDelta?: true
    raceId?: true
    driverId?: true
  }

  export type RaceScoreCountAggregateInputType = {
    id?: true
    totalDistance?: true
    lastDelta?: true
    raceId?: true
    driverId?: true
    _all?: true
  }

  export type RaceScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceScore to aggregate.
     */
    where?: RaceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceScores to fetch.
     */
    orderBy?: RaceScoreOrderByWithRelationInput | RaceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceScores
    **/
    _count?: true | RaceScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceScoreMaxAggregateInputType
  }

  export type GetRaceScoreAggregateType<T extends RaceScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceScore[P]>
      : GetScalarType<T[P], AggregateRaceScore[P]>
  }




  export type RaceScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceScoreWhereInput
    orderBy?: RaceScoreOrderByWithAggregationInput | RaceScoreOrderByWithAggregationInput[]
    by: RaceScoreScalarFieldEnum[] | RaceScoreScalarFieldEnum
    having?: RaceScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceScoreCountAggregateInputType | true
    _avg?: RaceScoreAvgAggregateInputType
    _sum?: RaceScoreSumAggregateInputType
    _min?: RaceScoreMinAggregateInputType
    _max?: RaceScoreMaxAggregateInputType
  }

  export type RaceScoreGroupByOutputType = {
    id: string
    totalDistance: number
    lastDelta: number
    raceId: string
    driverId: string
    _count: RaceScoreCountAggregateOutputType | null
    _avg: RaceScoreAvgAggregateOutputType | null
    _sum: RaceScoreSumAggregateOutputType | null
    _min: RaceScoreMinAggregateOutputType | null
    _max: RaceScoreMaxAggregateOutputType | null
  }

  type GetRaceScoreGroupByPayload<T extends RaceScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceScoreGroupByOutputType[P]>
            : GetScalarType<T[P], RaceScoreGroupByOutputType[P]>
        }
      >
    >


  export type RaceScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalDistance?: boolean
    lastDelta?: boolean
    raceId?: boolean
    driverId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceScore"]>

  export type RaceScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalDistance?: boolean
    lastDelta?: boolean
    raceId?: boolean
    driverId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceScore"]>

  export type RaceScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalDistance?: boolean
    lastDelta?: boolean
    raceId?: boolean
    driverId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceScore"]>

  export type RaceScoreSelectScalar = {
    id?: boolean
    totalDistance?: boolean
    lastDelta?: boolean
    raceId?: boolean
    driverId?: boolean
  }

  export type RaceScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalDistance" | "lastDelta" | "raceId" | "driverId", ExtArgs["result"]["raceScore"]>
  export type RaceScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type RaceScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type RaceScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $RaceScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceScore"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalDistance: number
      lastDelta: number
      raceId: string
      driverId: string
    }, ExtArgs["result"]["raceScore"]>
    composites: {}
  }

  type RaceScoreGetPayload<S extends boolean | null | undefined | RaceScoreDefaultArgs> = $Result.GetResult<Prisma.$RaceScorePayload, S>

  type RaceScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceScoreCountAggregateInputType | true
    }

  export interface RaceScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceScore'], meta: { name: 'RaceScore' } }
    /**
     * Find zero or one RaceScore that matches the filter.
     * @param {RaceScoreFindUniqueArgs} args - Arguments to find a RaceScore
     * @example
     * // Get one RaceScore
     * const raceScore = await prisma.raceScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceScoreFindUniqueArgs>(args: SelectSubset<T, RaceScoreFindUniqueArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceScoreFindUniqueOrThrowArgs} args - Arguments to find a RaceScore
     * @example
     * // Get one RaceScore
     * const raceScore = await prisma.raceScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreFindFirstArgs} args - Arguments to find a RaceScore
     * @example
     * // Get one RaceScore
     * const raceScore = await prisma.raceScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceScoreFindFirstArgs>(args?: SelectSubset<T, RaceScoreFindFirstArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreFindFirstOrThrowArgs} args - Arguments to find a RaceScore
     * @example
     * // Get one RaceScore
     * const raceScore = await prisma.raceScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceScores
     * const raceScores = await prisma.raceScore.findMany()
     * 
     * // Get first 10 RaceScores
     * const raceScores = await prisma.raceScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceScoreWithIdOnly = await prisma.raceScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceScoreFindManyArgs>(args?: SelectSubset<T, RaceScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceScore.
     * @param {RaceScoreCreateArgs} args - Arguments to create a RaceScore.
     * @example
     * // Create one RaceScore
     * const RaceScore = await prisma.raceScore.create({
     *   data: {
     *     // ... data to create a RaceScore
     *   }
     * })
     * 
     */
    create<T extends RaceScoreCreateArgs>(args: SelectSubset<T, RaceScoreCreateArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceScores.
     * @param {RaceScoreCreateManyArgs} args - Arguments to create many RaceScores.
     * @example
     * // Create many RaceScores
     * const raceScore = await prisma.raceScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceScoreCreateManyArgs>(args?: SelectSubset<T, RaceScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceScores and returns the data saved in the database.
     * @param {RaceScoreCreateManyAndReturnArgs} args - Arguments to create many RaceScores.
     * @example
     * // Create many RaceScores
     * const raceScore = await prisma.raceScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceScores and only return the `id`
     * const raceScoreWithIdOnly = await prisma.raceScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceScore.
     * @param {RaceScoreDeleteArgs} args - Arguments to delete one RaceScore.
     * @example
     * // Delete one RaceScore
     * const RaceScore = await prisma.raceScore.delete({
     *   where: {
     *     // ... filter to delete one RaceScore
     *   }
     * })
     * 
     */
    delete<T extends RaceScoreDeleteArgs>(args: SelectSubset<T, RaceScoreDeleteArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceScore.
     * @param {RaceScoreUpdateArgs} args - Arguments to update one RaceScore.
     * @example
     * // Update one RaceScore
     * const raceScore = await prisma.raceScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceScoreUpdateArgs>(args: SelectSubset<T, RaceScoreUpdateArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceScores.
     * @param {RaceScoreDeleteManyArgs} args - Arguments to filter RaceScores to delete.
     * @example
     * // Delete a few RaceScores
     * const { count } = await prisma.raceScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceScoreDeleteManyArgs>(args?: SelectSubset<T, RaceScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceScores
     * const raceScore = await prisma.raceScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceScoreUpdateManyArgs>(args: SelectSubset<T, RaceScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceScores and returns the data updated in the database.
     * @param {RaceScoreUpdateManyAndReturnArgs} args - Arguments to update many RaceScores.
     * @example
     * // Update many RaceScores
     * const raceScore = await prisma.raceScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceScores and only return the `id`
     * const raceScoreWithIdOnly = await prisma.raceScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends RaceScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceScore.
     * @param {RaceScoreUpsertArgs} args - Arguments to update or create a RaceScore.
     * @example
     * // Update or create a RaceScore
     * const raceScore = await prisma.raceScore.upsert({
     *   create: {
     *     // ... data to create a RaceScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceScore we want to update
     *   }
     * })
     */
    upsert<T extends RaceScoreUpsertArgs>(args: SelectSubset<T, RaceScoreUpsertArgs<ExtArgs>>): Prisma__RaceScoreClient<$Result.GetResult<Prisma.$RaceScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreCountArgs} args - Arguments to filter RaceScores to count.
     * @example
     * // Count the number of RaceScores
     * const count = await prisma.raceScore.count({
     *   where: {
     *     // ... the filter for the RaceScores we want to count
     *   }
     * })
    **/
    count<T extends RaceScoreCountArgs>(
      args?: Subset<T, RaceScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceScoreAggregateArgs>(args: Subset<T, RaceScoreAggregateArgs>): Prisma.PrismaPromise<GetRaceScoreAggregateType<T>>

    /**
     * Group by RaceScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceScoreGroupByArgs} args - Group by arguments.
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
      T extends RaceScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceScoreGroupByArgs['orderBy'] }
        : { orderBy?: RaceScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceScore model
   */
  readonly fields: RaceScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RaceScore model
   */
  interface RaceScoreFieldRefs {
    readonly id: FieldRef<"RaceScore", 'String'>
    readonly totalDistance: FieldRef<"RaceScore", 'Int'>
    readonly lastDelta: FieldRef<"RaceScore", 'Int'>
    readonly raceId: FieldRef<"RaceScore", 'String'>
    readonly driverId: FieldRef<"RaceScore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaceScore findUnique
   */
  export type RaceScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * Filter, which RaceScore to fetch.
     */
    where: RaceScoreWhereUniqueInput
  }

  /**
   * RaceScore findUniqueOrThrow
   */
  export type RaceScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * Filter, which RaceScore to fetch.
     */
    where: RaceScoreWhereUniqueInput
  }

  /**
   * RaceScore findFirst
   */
  export type RaceScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * Filter, which RaceScore to fetch.
     */
    where?: RaceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceScores to fetch.
     */
    orderBy?: RaceScoreOrderByWithRelationInput | RaceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceScores.
     */
    cursor?: RaceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceScores.
     */
    distinct?: RaceScoreScalarFieldEnum | RaceScoreScalarFieldEnum[]
  }

  /**
   * RaceScore findFirstOrThrow
   */
  export type RaceScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * Filter, which RaceScore to fetch.
     */
    where?: RaceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceScores to fetch.
     */
    orderBy?: RaceScoreOrderByWithRelationInput | RaceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceScores.
     */
    cursor?: RaceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceScores.
     */
    distinct?: RaceScoreScalarFieldEnum | RaceScoreScalarFieldEnum[]
  }

  /**
   * RaceScore findMany
   */
  export type RaceScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * Filter, which RaceScores to fetch.
     */
    where?: RaceScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceScores to fetch.
     */
    orderBy?: RaceScoreOrderByWithRelationInput | RaceScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceScores.
     */
    cursor?: RaceScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceScores.
     */
    skip?: number
    distinct?: RaceScoreScalarFieldEnum | RaceScoreScalarFieldEnum[]
  }

  /**
   * RaceScore create
   */
  export type RaceScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceScore.
     */
    data: XOR<RaceScoreCreateInput, RaceScoreUncheckedCreateInput>
  }

  /**
   * RaceScore createMany
   */
  export type RaceScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceScores.
     */
    data: RaceScoreCreateManyInput | RaceScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceScore createManyAndReturn
   */
  export type RaceScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * The data used to create many RaceScores.
     */
    data: RaceScoreCreateManyInput | RaceScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceScore update
   */
  export type RaceScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceScore.
     */
    data: XOR<RaceScoreUpdateInput, RaceScoreUncheckedUpdateInput>
    /**
     * Choose, which RaceScore to update.
     */
    where: RaceScoreWhereUniqueInput
  }

  /**
   * RaceScore updateMany
   */
  export type RaceScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceScores.
     */
    data: XOR<RaceScoreUpdateManyMutationInput, RaceScoreUncheckedUpdateManyInput>
    /**
     * Filter which RaceScores to update
     */
    where?: RaceScoreWhereInput
    /**
     * Limit how many RaceScores to update.
     */
    limit?: number
  }

  /**
   * RaceScore updateManyAndReturn
   */
  export type RaceScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * The data used to update RaceScores.
     */
    data: XOR<RaceScoreUpdateManyMutationInput, RaceScoreUncheckedUpdateManyInput>
    /**
     * Filter which RaceScores to update
     */
    where?: RaceScoreWhereInput
    /**
     * Limit how many RaceScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceScore upsert
   */
  export type RaceScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceScore to update in case it exists.
     */
    where: RaceScoreWhereUniqueInput
    /**
     * In case the RaceScore found by the `where` argument doesn't exist, create a new RaceScore with this data.
     */
    create: XOR<RaceScoreCreateInput, RaceScoreUncheckedCreateInput>
    /**
     * In case the RaceScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceScoreUpdateInput, RaceScoreUncheckedUpdateInput>
  }

  /**
   * RaceScore delete
   */
  export type RaceScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
    /**
     * Filter which RaceScore to delete.
     */
    where: RaceScoreWhereUniqueInput
  }

  /**
   * RaceScore deleteMany
   */
  export type RaceScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceScores to delete
     */
    where?: RaceScoreWhereInput
    /**
     * Limit how many RaceScores to delete.
     */
    limit?: number
  }

  /**
   * RaceScore without action
   */
  export type RaceScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceScore
     */
    select?: RaceScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceScore
     */
    omit?: RaceScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceScoreInclude<ExtArgs> | null
  }


  /**
   * Model RaceResult
   */

  export type AggregateRaceResult = {
    _count: RaceResultCountAggregateOutputType | null
    _avg: RaceResultAvgAggregateOutputType | null
    _sum: RaceResultSumAggregateOutputType | null
    _min: RaceResultMinAggregateOutputType | null
    _max: RaceResultMaxAggregateOutputType | null
  }

  export type RaceResultAvgAggregateOutputType = {
    finalDelta: number | null
  }

  export type RaceResultSumAggregateOutputType = {
    finalDelta: number | null
  }

  export type RaceResultMinAggregateOutputType = {
    id: string | null
    finalDelta: number | null
    finishedAt: Date | null
    raceId: string | null
    driverId: string | null
  }

  export type RaceResultMaxAggregateOutputType = {
    id: string | null
    finalDelta: number | null
    finishedAt: Date | null
    raceId: string | null
    driverId: string | null
  }

  export type RaceResultCountAggregateOutputType = {
    id: number
    finalDelta: number
    finishedAt: number
    raceId: number
    driverId: number
    _all: number
  }


  export type RaceResultAvgAggregateInputType = {
    finalDelta?: true
  }

  export type RaceResultSumAggregateInputType = {
    finalDelta?: true
  }

  export type RaceResultMinAggregateInputType = {
    id?: true
    finalDelta?: true
    finishedAt?: true
    raceId?: true
    driverId?: true
  }

  export type RaceResultMaxAggregateInputType = {
    id?: true
    finalDelta?: true
    finishedAt?: true
    raceId?: true
    driverId?: true
  }

  export type RaceResultCountAggregateInputType = {
    id?: true
    finalDelta?: true
    finishedAt?: true
    raceId?: true
    driverId?: true
    _all?: true
  }

  export type RaceResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceResult to aggregate.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceResults
    **/
    _count?: true | RaceResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceResultMaxAggregateInputType
  }

  export type GetRaceResultAggregateType<T extends RaceResultAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceResult[P]>
      : GetScalarType<T[P], AggregateRaceResult[P]>
  }




  export type RaceResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceResultWhereInput
    orderBy?: RaceResultOrderByWithAggregationInput | RaceResultOrderByWithAggregationInput[]
    by: RaceResultScalarFieldEnum[] | RaceResultScalarFieldEnum
    having?: RaceResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceResultCountAggregateInputType | true
    _avg?: RaceResultAvgAggregateInputType
    _sum?: RaceResultSumAggregateInputType
    _min?: RaceResultMinAggregateInputType
    _max?: RaceResultMaxAggregateInputType
  }

  export type RaceResultGroupByOutputType = {
    id: string
    finalDelta: number
    finishedAt: Date
    raceId: string
    driverId: string
    _count: RaceResultCountAggregateOutputType | null
    _avg: RaceResultAvgAggregateOutputType | null
    _sum: RaceResultSumAggregateOutputType | null
    _min: RaceResultMinAggregateOutputType | null
    _max: RaceResultMaxAggregateOutputType | null
  }

  type GetRaceResultGroupByPayload<T extends RaceResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceResultGroupByOutputType[P]>
            : GetScalarType<T[P], RaceResultGroupByOutputType[P]>
        }
      >
    >


  export type RaceResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finalDelta?: boolean
    finishedAt?: boolean
    raceId?: boolean
    driverId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    winnerDriver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceResult"]>

  export type RaceResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finalDelta?: boolean
    finishedAt?: boolean
    raceId?: boolean
    driverId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    winnerDriver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceResult"]>

  export type RaceResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finalDelta?: boolean
    finishedAt?: boolean
    raceId?: boolean
    driverId?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    winnerDriver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceResult"]>

  export type RaceResultSelectScalar = {
    id?: boolean
    finalDelta?: boolean
    finishedAt?: boolean
    raceId?: boolean
    driverId?: boolean
  }

  export type RaceResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "finalDelta" | "finishedAt" | "raceId" | "driverId", ExtArgs["result"]["raceResult"]>
  export type RaceResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    winnerDriver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type RaceResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    winnerDriver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type RaceResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    winnerDriver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $RaceResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceResult"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      winnerDriver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      finalDelta: number
      finishedAt: Date
      raceId: string
      driverId: string
    }, ExtArgs["result"]["raceResult"]>
    composites: {}
  }

  type RaceResultGetPayload<S extends boolean | null | undefined | RaceResultDefaultArgs> = $Result.GetResult<Prisma.$RaceResultPayload, S>

  type RaceResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceResultCountAggregateInputType | true
    }

  export interface RaceResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceResult'], meta: { name: 'RaceResult' } }
    /**
     * Find zero or one RaceResult that matches the filter.
     * @param {RaceResultFindUniqueArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceResultFindUniqueArgs>(args: SelectSubset<T, RaceResultFindUniqueArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceResultFindUniqueOrThrowArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceResultFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultFindFirstArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceResultFindFirstArgs>(args?: SelectSubset<T, RaceResultFindFirstArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultFindFirstOrThrowArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceResultFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceResults
     * const raceResults = await prisma.raceResult.findMany()
     * 
     * // Get first 10 RaceResults
     * const raceResults = await prisma.raceResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceResultWithIdOnly = await prisma.raceResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceResultFindManyArgs>(args?: SelectSubset<T, RaceResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceResult.
     * @param {RaceResultCreateArgs} args - Arguments to create a RaceResult.
     * @example
     * // Create one RaceResult
     * const RaceResult = await prisma.raceResult.create({
     *   data: {
     *     // ... data to create a RaceResult
     *   }
     * })
     * 
     */
    create<T extends RaceResultCreateArgs>(args: SelectSubset<T, RaceResultCreateArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceResults.
     * @param {RaceResultCreateManyArgs} args - Arguments to create many RaceResults.
     * @example
     * // Create many RaceResults
     * const raceResult = await prisma.raceResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceResultCreateManyArgs>(args?: SelectSubset<T, RaceResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceResults and returns the data saved in the database.
     * @param {RaceResultCreateManyAndReturnArgs} args - Arguments to create many RaceResults.
     * @example
     * // Create many RaceResults
     * const raceResult = await prisma.raceResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceResults and only return the `id`
     * const raceResultWithIdOnly = await prisma.raceResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceResultCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceResult.
     * @param {RaceResultDeleteArgs} args - Arguments to delete one RaceResult.
     * @example
     * // Delete one RaceResult
     * const RaceResult = await prisma.raceResult.delete({
     *   where: {
     *     // ... filter to delete one RaceResult
     *   }
     * })
     * 
     */
    delete<T extends RaceResultDeleteArgs>(args: SelectSubset<T, RaceResultDeleteArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceResult.
     * @param {RaceResultUpdateArgs} args - Arguments to update one RaceResult.
     * @example
     * // Update one RaceResult
     * const raceResult = await prisma.raceResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceResultUpdateArgs>(args: SelectSubset<T, RaceResultUpdateArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceResults.
     * @param {RaceResultDeleteManyArgs} args - Arguments to filter RaceResults to delete.
     * @example
     * // Delete a few RaceResults
     * const { count } = await prisma.raceResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceResultDeleteManyArgs>(args?: SelectSubset<T, RaceResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceResults
     * const raceResult = await prisma.raceResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceResultUpdateManyArgs>(args: SelectSubset<T, RaceResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceResults and returns the data updated in the database.
     * @param {RaceResultUpdateManyAndReturnArgs} args - Arguments to update many RaceResults.
     * @example
     * // Update many RaceResults
     * const raceResult = await prisma.raceResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceResults and only return the `id`
     * const raceResultWithIdOnly = await prisma.raceResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends RaceResultUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceResult.
     * @param {RaceResultUpsertArgs} args - Arguments to update or create a RaceResult.
     * @example
     * // Update or create a RaceResult
     * const raceResult = await prisma.raceResult.upsert({
     *   create: {
     *     // ... data to create a RaceResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceResult we want to update
     *   }
     * })
     */
    upsert<T extends RaceResultUpsertArgs>(args: SelectSubset<T, RaceResultUpsertArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultCountArgs} args - Arguments to filter RaceResults to count.
     * @example
     * // Count the number of RaceResults
     * const count = await prisma.raceResult.count({
     *   where: {
     *     // ... the filter for the RaceResults we want to count
     *   }
     * })
    **/
    count<T extends RaceResultCountArgs>(
      args?: Subset<T, RaceResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceResultAggregateArgs>(args: Subset<T, RaceResultAggregateArgs>): Prisma.PrismaPromise<GetRaceResultAggregateType<T>>

    /**
     * Group by RaceResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultGroupByArgs} args - Group by arguments.
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
      T extends RaceResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceResultGroupByArgs['orderBy'] }
        : { orderBy?: RaceResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceResult model
   */
  readonly fields: RaceResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winnerDriver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RaceResult model
   */
  interface RaceResultFieldRefs {
    readonly id: FieldRef<"RaceResult", 'String'>
    readonly finalDelta: FieldRef<"RaceResult", 'Int'>
    readonly finishedAt: FieldRef<"RaceResult", 'DateTime'>
    readonly raceId: FieldRef<"RaceResult", 'String'>
    readonly driverId: FieldRef<"RaceResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaceResult findUnique
   */
  export type RaceResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult findUniqueOrThrow
   */
  export type RaceResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult findFirst
   */
  export type RaceResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceResults.
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceResults.
     */
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * RaceResult findFirstOrThrow
   */
  export type RaceResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceResults.
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceResults.
     */
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * RaceResult findMany
   */
  export type RaceResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResults to fetch.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceResults.
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * RaceResult create
   */
  export type RaceResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceResult.
     */
    data: XOR<RaceResultCreateInput, RaceResultUncheckedCreateInput>
  }

  /**
   * RaceResult createMany
   */
  export type RaceResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceResults.
     */
    data: RaceResultCreateManyInput | RaceResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceResult createManyAndReturn
   */
  export type RaceResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * The data used to create many RaceResults.
     */
    data: RaceResultCreateManyInput | RaceResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceResult update
   */
  export type RaceResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceResult.
     */
    data: XOR<RaceResultUpdateInput, RaceResultUncheckedUpdateInput>
    /**
     * Choose, which RaceResult to update.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult updateMany
   */
  export type RaceResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceResults.
     */
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyInput>
    /**
     * Filter which RaceResults to update
     */
    where?: RaceResultWhereInput
    /**
     * Limit how many RaceResults to update.
     */
    limit?: number
  }

  /**
   * RaceResult updateManyAndReturn
   */
  export type RaceResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * The data used to update RaceResults.
     */
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyInput>
    /**
     * Filter which RaceResults to update
     */
    where?: RaceResultWhereInput
    /**
     * Limit how many RaceResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceResult upsert
   */
  export type RaceResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceResult to update in case it exists.
     */
    where: RaceResultWhereUniqueInput
    /**
     * In case the RaceResult found by the `where` argument doesn't exist, create a new RaceResult with this data.
     */
    create: XOR<RaceResultCreateInput, RaceResultUncheckedCreateInput>
    /**
     * In case the RaceResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceResultUpdateInput, RaceResultUncheckedUpdateInput>
  }

  /**
   * RaceResult delete
   */
  export type RaceResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter which RaceResult to delete.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult deleteMany
   */
  export type RaceResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceResults to delete
     */
    where?: RaceResultWhereInput
    /**
     * Limit how many RaceResults to delete.
     */
    limit?: number
  }

  /**
   * RaceResult without action
   */
  export type RaceResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
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


  export const DriverScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const DriverSessionScalarFieldEnum: {
    id: 'id',
    lastSeen: 'lastSeen',
    isActive: 'isActive',
    driverId: 'driverId'
  };

  export type DriverSessionScalarFieldEnum = (typeof DriverSessionScalarFieldEnum)[keyof typeof DriverSessionScalarFieldEnum]


  export const PresenceScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    lat: 'lat',
    lon: 'lon',
    heading: 'heading',
    speedBucket: 'speedBucket',
    updatedAt: 'updatedAt'
  };

  export type PresenceScalarFieldEnum = (typeof PresenceScalarFieldEnum)[keyof typeof PresenceScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RouteSegmentScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    index: 'index',
    start: 'start',
    end: 'end'
  };

  export type RouteSegmentScalarFieldEnum = (typeof RouteSegmentScalarFieldEnum)[keyof typeof RouteSegmentScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    state: 'state',
    startAt: 'startAt',
    durationSec: 'durationSec',
    createdAt: 'createdAt',
    routeSegmentId: 'routeSegmentId'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const RaceParticipantScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    driverId: 'driverId',
    joinedAt: 'joinedAt',
    status: 'status'
  };

  export type RaceParticipantScalarFieldEnum = (typeof RaceParticipantScalarFieldEnum)[keyof typeof RaceParticipantScalarFieldEnum]


  export const TelemetryWindowScalarFieldEnum: {
    id: 'id',
    windowStart: 'windowStart',
    windowEnd: 'windowEnd',
    avgSpeed: 'avgSpeed',
    distance: 'distance',
    raceId: 'raceId',
    driverId: 'driverId',
    routeSegmentId: 'routeSegmentId'
  };

  export type TelemetryWindowScalarFieldEnum = (typeof TelemetryWindowScalarFieldEnum)[keyof typeof TelemetryWindowScalarFieldEnum]


  export const RaceScoreScalarFieldEnum: {
    id: 'id',
    totalDistance: 'totalDistance',
    lastDelta: 'lastDelta',
    raceId: 'raceId',
    driverId: 'driverId'
  };

  export type RaceScoreScalarFieldEnum = (typeof RaceScoreScalarFieldEnum)[keyof typeof RaceScoreScalarFieldEnum]


  export const RaceResultScalarFieldEnum: {
    id: 'id',
    finalDelta: 'finalDelta',
    finishedAt: 'finishedAt',
    raceId: 'raceId',
    driverId: 'driverId'
  };

  export type RaceResultScalarFieldEnum = (typeof RaceResultScalarFieldEnum)[keyof typeof RaceResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'SpeedBucket'
   */
  export type EnumSpeedBucketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpeedBucket'>
    


  /**
   * Reference to a field of type 'SpeedBucket[]'
   */
  export type ListEnumSpeedBucketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpeedBucket[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RaceState'
   */
  export type EnumRaceStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaceState'>
    


  /**
   * Reference to a field of type 'RaceState[]'
   */
  export type ListEnumRaceStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaceState[]'>
    


  /**
   * Reference to a field of type 'ReadyToRace'
   */
  export type EnumReadyToRaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReadyToRace'>
    


  /**
   * Reference to a field of type 'ReadyToRace[]'
   */
  export type ListEnumReadyToRaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReadyToRace[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    firstname?: StringFilter<"Driver"> | string
    lastname?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    emailVerified?: DateTimeNullableFilter<"Driver"> | Date | string | null
    image?: StringNullableFilter<"Driver"> | string | null
    username?: StringFilter<"Driver"> | string
    password?: StringFilter<"Driver"> | string
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    driverSessions?: DriverSessionListRelationFilter
    presences?: PresenceListRelationFilter
    raceParticipants?: RaceParticipantListRelationFilter
    telemetryWindows?: TelemetryWindowListRelationFilter
    raceScores?: RaceScoreListRelationFilter
    raceResults?: RaceResultListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driverSessions?: DriverSessionOrderByRelationAggregateInput
    presences?: PresenceOrderByRelationAggregateInput
    raceParticipants?: RaceParticipantOrderByRelationAggregateInput
    telemetryWindows?: TelemetryWindowOrderByRelationAggregateInput
    raceScores?: RaceScoreOrderByRelationAggregateInput
    raceResults?: RaceResultOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    firstname?: StringFilter<"Driver"> | string
    lastname?: StringFilter<"Driver"> | string
    emailVerified?: DateTimeNullableFilter<"Driver"> | Date | string | null
    image?: StringNullableFilter<"Driver"> | string | null
    password?: StringFilter<"Driver"> | string
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    driverSessions?: DriverSessionListRelationFilter
    presences?: PresenceListRelationFilter
    raceParticipants?: RaceParticipantListRelationFilter
    telemetryWindows?: TelemetryWindowListRelationFilter
    raceScores?: RaceScoreListRelationFilter
    raceResults?: RaceResultListRelationFilter
  }, "id" | "email" | "username">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    firstname?: StringWithAggregatesFilter<"Driver"> | string
    lastname?: StringWithAggregatesFilter<"Driver"> | string
    email?: StringWithAggregatesFilter<"Driver"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    username?: StringWithAggregatesFilter<"Driver"> | string
    password?: StringWithAggregatesFilter<"Driver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type DriverSessionWhereInput = {
    AND?: DriverSessionWhereInput | DriverSessionWhereInput[]
    OR?: DriverSessionWhereInput[]
    NOT?: DriverSessionWhereInput | DriverSessionWhereInput[]
    id?: StringFilter<"DriverSession"> | string
    lastSeen?: DateTimeFilter<"DriverSession"> | Date | string
    isActive?: BoolFilter<"DriverSession"> | boolean
    driverId?: StringFilter<"DriverSession"> | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DriverSessionOrderByWithRelationInput = {
    id?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    driverId?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DriverSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DriverSessionWhereInput | DriverSessionWhereInput[]
    OR?: DriverSessionWhereInput[]
    NOT?: DriverSessionWhereInput | DriverSessionWhereInput[]
    lastSeen?: DateTimeFilter<"DriverSession"> | Date | string
    isActive?: BoolFilter<"DriverSession"> | boolean
    driverId?: StringFilter<"DriverSession"> | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DriverSessionOrderByWithAggregationInput = {
    id?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    driverId?: SortOrder
    _count?: DriverSessionCountOrderByAggregateInput
    _max?: DriverSessionMaxOrderByAggregateInput
    _min?: DriverSessionMinOrderByAggregateInput
  }

  export type DriverSessionScalarWhereWithAggregatesInput = {
    AND?: DriverSessionScalarWhereWithAggregatesInput | DriverSessionScalarWhereWithAggregatesInput[]
    OR?: DriverSessionScalarWhereWithAggregatesInput[]
    NOT?: DriverSessionScalarWhereWithAggregatesInput | DriverSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverSession"> | string
    lastSeen?: DateTimeWithAggregatesFilter<"DriverSession"> | Date | string
    isActive?: BoolWithAggregatesFilter<"DriverSession"> | boolean
    driverId?: StringWithAggregatesFilter<"DriverSession"> | string
  }

  export type PresenceWhereInput = {
    AND?: PresenceWhereInput | PresenceWhereInput[]
    OR?: PresenceWhereInput[]
    NOT?: PresenceWhereInput | PresenceWhereInput[]
    id?: StringFilter<"Presence"> | string
    driverId?: StringFilter<"Presence"> | string
    lat?: BigIntFilter<"Presence"> | bigint | number
    lon?: BigIntFilter<"Presence"> | bigint | number
    heading?: BigIntFilter<"Presence"> | bigint | number
    speedBucket?: EnumSpeedBucketFilter<"Presence"> | $Enums.SpeedBucket
    updatedAt?: DateTimeFilter<"Presence"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type PresenceOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
    speedBucket?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type PresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PresenceWhereInput | PresenceWhereInput[]
    OR?: PresenceWhereInput[]
    NOT?: PresenceWhereInput | PresenceWhereInput[]
    driverId?: StringFilter<"Presence"> | string
    lat?: BigIntFilter<"Presence"> | bigint | number
    lon?: BigIntFilter<"Presence"> | bigint | number
    heading?: BigIntFilter<"Presence"> | bigint | number
    speedBucket?: EnumSpeedBucketFilter<"Presence"> | $Enums.SpeedBucket
    updatedAt?: DateTimeFilter<"Presence"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type PresenceOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
    speedBucket?: SortOrder
    updatedAt?: SortOrder
    _count?: PresenceCountOrderByAggregateInput
    _avg?: PresenceAvgOrderByAggregateInput
    _max?: PresenceMaxOrderByAggregateInput
    _min?: PresenceMinOrderByAggregateInput
    _sum?: PresenceSumOrderByAggregateInput
  }

  export type PresenceScalarWhereWithAggregatesInput = {
    AND?: PresenceScalarWhereWithAggregatesInput | PresenceScalarWhereWithAggregatesInput[]
    OR?: PresenceScalarWhereWithAggregatesInput[]
    NOT?: PresenceScalarWhereWithAggregatesInput | PresenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Presence"> | string
    driverId?: StringWithAggregatesFilter<"Presence"> | string
    lat?: BigIntWithAggregatesFilter<"Presence"> | bigint | number
    lon?: BigIntWithAggregatesFilter<"Presence"> | bigint | number
    heading?: BigIntWithAggregatesFilter<"Presence"> | bigint | number
    speedBucket?: EnumSpeedBucketWithAggregatesFilter<"Presence"> | $Enums.SpeedBucket
    updatedAt?: DateTimeWithAggregatesFilter<"Presence"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    routeSegments?: RouteSegmentListRelationFilter
    races?: RaceListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    routeSegments?: RouteSegmentOrderByRelationAggregateInput
    races?: RaceOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    routeSegments?: RouteSegmentListRelationFilter
    races?: RaceListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
  }

  export type RouteSegmentWhereInput = {
    AND?: RouteSegmentWhereInput | RouteSegmentWhereInput[]
    OR?: RouteSegmentWhereInput[]
    NOT?: RouteSegmentWhereInput | RouteSegmentWhereInput[]
    id?: StringFilter<"RouteSegment"> | string
    routeId?: StringFilter<"RouteSegment"> | string
    index?: IntFilter<"RouteSegment"> | number
    start?: JsonFilter<"RouteSegment">
    end?: JsonFilter<"RouteSegment">
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    races?: RaceListRelationFilter
    telemetryWindows?: TelemetryWindowListRelationFilter
  }

  export type RouteSegmentOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    index?: SortOrder
    start?: SortOrder
    end?: SortOrder
    route?: RouteOrderByWithRelationInput
    races?: RaceOrderByRelationAggregateInput
    telemetryWindows?: TelemetryWindowOrderByRelationAggregateInput
  }

  export type RouteSegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteSegmentWhereInput | RouteSegmentWhereInput[]
    OR?: RouteSegmentWhereInput[]
    NOT?: RouteSegmentWhereInput | RouteSegmentWhereInput[]
    routeId?: StringFilter<"RouteSegment"> | string
    index?: IntFilter<"RouteSegment"> | number
    start?: JsonFilter<"RouteSegment">
    end?: JsonFilter<"RouteSegment">
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    races?: RaceListRelationFilter
    telemetryWindows?: TelemetryWindowListRelationFilter
  }, "id">

  export type RouteSegmentOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    index?: SortOrder
    start?: SortOrder
    end?: SortOrder
    _count?: RouteSegmentCountOrderByAggregateInput
    _avg?: RouteSegmentAvgOrderByAggregateInput
    _max?: RouteSegmentMaxOrderByAggregateInput
    _min?: RouteSegmentMinOrderByAggregateInput
    _sum?: RouteSegmentSumOrderByAggregateInput
  }

  export type RouteSegmentScalarWhereWithAggregatesInput = {
    AND?: RouteSegmentScalarWhereWithAggregatesInput | RouteSegmentScalarWhereWithAggregatesInput[]
    OR?: RouteSegmentScalarWhereWithAggregatesInput[]
    NOT?: RouteSegmentScalarWhereWithAggregatesInput | RouteSegmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RouteSegment"> | string
    routeId?: StringWithAggregatesFilter<"RouteSegment"> | string
    index?: IntWithAggregatesFilter<"RouteSegment"> | number
    start?: JsonWithAggregatesFilter<"RouteSegment">
    end?: JsonWithAggregatesFilter<"RouteSegment">
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: StringFilter<"Race"> | string
    routeId?: StringFilter<"Race"> | string
    state?: EnumRaceStateFilter<"Race"> | $Enums.RaceState
    startAt?: DateTimeFilter<"Race"> | Date | string
    durationSec?: IntFilter<"Race"> | number
    createdAt?: DateTimeFilter<"Race"> | Date | string
    routeSegmentId?: StringFilter<"Race"> | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    segment?: XOR<RouteSegmentScalarRelationFilter, RouteSegmentWhereInput>
    raceParticipants?: RaceParticipantListRelationFilter
    telemetryWindows?: TelemetryWindowListRelationFilter
    raceScores?: RaceScoreListRelationFilter
    raceResults?: RaceResultListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    state?: SortOrder
    startAt?: SortOrder
    durationSec?: SortOrder
    createdAt?: SortOrder
    routeSegmentId?: SortOrder
    route?: RouteOrderByWithRelationInput
    segment?: RouteSegmentOrderByWithRelationInput
    raceParticipants?: RaceParticipantOrderByRelationAggregateInput
    telemetryWindows?: TelemetryWindowOrderByRelationAggregateInput
    raceScores?: RaceScoreOrderByRelationAggregateInput
    raceResults?: RaceResultOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    routeId?: StringFilter<"Race"> | string
    state?: EnumRaceStateFilter<"Race"> | $Enums.RaceState
    startAt?: DateTimeFilter<"Race"> | Date | string
    durationSec?: IntFilter<"Race"> | number
    createdAt?: DateTimeFilter<"Race"> | Date | string
    routeSegmentId?: StringFilter<"Race"> | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    segment?: XOR<RouteSegmentScalarRelationFilter, RouteSegmentWhereInput>
    raceParticipants?: RaceParticipantListRelationFilter
    telemetryWindows?: TelemetryWindowListRelationFilter
    raceScores?: RaceScoreListRelationFilter
    raceResults?: RaceResultListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    state?: SortOrder
    startAt?: SortOrder
    durationSec?: SortOrder
    createdAt?: SortOrder
    routeSegmentId?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Race"> | string
    routeId?: StringWithAggregatesFilter<"Race"> | string
    state?: EnumRaceStateWithAggregatesFilter<"Race"> | $Enums.RaceState
    startAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    durationSec?: IntWithAggregatesFilter<"Race"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    routeSegmentId?: StringWithAggregatesFilter<"Race"> | string
  }

  export type RaceParticipantWhereInput = {
    AND?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    OR?: RaceParticipantWhereInput[]
    NOT?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    id?: StringFilter<"RaceParticipant"> | string
    raceId?: StringFilter<"RaceParticipant"> | string
    driverId?: StringFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeFilter<"RaceParticipant"> | Date | string
    status?: EnumReadyToRaceFilter<"RaceParticipant"> | $Enums.ReadyToRace
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
  }

  export type RaceParticipantOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
    driver?: DriverOrderByWithRelationInput
    race?: RaceOrderByWithRelationInput
  }

  export type RaceParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    raceId_driverId?: RaceParticipantRaceIdDriverIdCompoundUniqueInput
    AND?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    OR?: RaceParticipantWhereInput[]
    NOT?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    raceId?: StringFilter<"RaceParticipant"> | string
    driverId?: StringFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeFilter<"RaceParticipant"> | Date | string
    status?: EnumReadyToRaceFilter<"RaceParticipant"> | $Enums.ReadyToRace
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
  }, "id" | "raceId_driverId">

  export type RaceParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
    _count?: RaceParticipantCountOrderByAggregateInput
    _max?: RaceParticipantMaxOrderByAggregateInput
    _min?: RaceParticipantMinOrderByAggregateInput
  }

  export type RaceParticipantScalarWhereWithAggregatesInput = {
    AND?: RaceParticipantScalarWhereWithAggregatesInput | RaceParticipantScalarWhereWithAggregatesInput[]
    OR?: RaceParticipantScalarWhereWithAggregatesInput[]
    NOT?: RaceParticipantScalarWhereWithAggregatesInput | RaceParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaceParticipant"> | string
    raceId?: StringWithAggregatesFilter<"RaceParticipant"> | string
    driverId?: StringWithAggregatesFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"RaceParticipant"> | Date | string
    status?: EnumReadyToRaceWithAggregatesFilter<"RaceParticipant"> | $Enums.ReadyToRace
  }

  export type TelemetryWindowWhereInput = {
    AND?: TelemetryWindowWhereInput | TelemetryWindowWhereInput[]
    OR?: TelemetryWindowWhereInput[]
    NOT?: TelemetryWindowWhereInput | TelemetryWindowWhereInput[]
    id?: StringFilter<"TelemetryWindow"> | string
    windowStart?: DateTimeFilter<"TelemetryWindow"> | Date | string
    windowEnd?: DateTimeFilter<"TelemetryWindow"> | Date | string
    avgSpeed?: IntFilter<"TelemetryWindow"> | number
    distance?: IntFilter<"TelemetryWindow"> | number
    raceId?: StringFilter<"TelemetryWindow"> | string
    driverId?: StringFilter<"TelemetryWindow"> | string
    routeSegmentId?: StringFilter<"TelemetryWindow"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    segment?: XOR<RouteSegmentScalarRelationFilter, RouteSegmentWhereInput>
  }

  export type TelemetryWindowOrderByWithRelationInput = {
    id?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    avgSpeed?: SortOrder
    distance?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    routeSegmentId?: SortOrder
    race?: RaceOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    segment?: RouteSegmentOrderByWithRelationInput
  }

  export type TelemetryWindowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    raceId_driverId?: TelemetryWindowRaceIdDriverIdCompoundUniqueInput
    AND?: TelemetryWindowWhereInput | TelemetryWindowWhereInput[]
    OR?: TelemetryWindowWhereInput[]
    NOT?: TelemetryWindowWhereInput | TelemetryWindowWhereInput[]
    windowStart?: DateTimeFilter<"TelemetryWindow"> | Date | string
    windowEnd?: DateTimeFilter<"TelemetryWindow"> | Date | string
    avgSpeed?: IntFilter<"TelemetryWindow"> | number
    distance?: IntFilter<"TelemetryWindow"> | number
    raceId?: StringFilter<"TelemetryWindow"> | string
    driverId?: StringFilter<"TelemetryWindow"> | string
    routeSegmentId?: StringFilter<"TelemetryWindow"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    segment?: XOR<RouteSegmentScalarRelationFilter, RouteSegmentWhereInput>
  }, "id" | "raceId_driverId">

  export type TelemetryWindowOrderByWithAggregationInput = {
    id?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    avgSpeed?: SortOrder
    distance?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    routeSegmentId?: SortOrder
    _count?: TelemetryWindowCountOrderByAggregateInput
    _avg?: TelemetryWindowAvgOrderByAggregateInput
    _max?: TelemetryWindowMaxOrderByAggregateInput
    _min?: TelemetryWindowMinOrderByAggregateInput
    _sum?: TelemetryWindowSumOrderByAggregateInput
  }

  export type TelemetryWindowScalarWhereWithAggregatesInput = {
    AND?: TelemetryWindowScalarWhereWithAggregatesInput | TelemetryWindowScalarWhereWithAggregatesInput[]
    OR?: TelemetryWindowScalarWhereWithAggregatesInput[]
    NOT?: TelemetryWindowScalarWhereWithAggregatesInput | TelemetryWindowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelemetryWindow"> | string
    windowStart?: DateTimeWithAggregatesFilter<"TelemetryWindow"> | Date | string
    windowEnd?: DateTimeWithAggregatesFilter<"TelemetryWindow"> | Date | string
    avgSpeed?: IntWithAggregatesFilter<"TelemetryWindow"> | number
    distance?: IntWithAggregatesFilter<"TelemetryWindow"> | number
    raceId?: StringWithAggregatesFilter<"TelemetryWindow"> | string
    driverId?: StringWithAggregatesFilter<"TelemetryWindow"> | string
    routeSegmentId?: StringWithAggregatesFilter<"TelemetryWindow"> | string
  }

  export type RaceScoreWhereInput = {
    AND?: RaceScoreWhereInput | RaceScoreWhereInput[]
    OR?: RaceScoreWhereInput[]
    NOT?: RaceScoreWhereInput | RaceScoreWhereInput[]
    id?: StringFilter<"RaceScore"> | string
    totalDistance?: IntFilter<"RaceScore"> | number
    lastDelta?: IntFilter<"RaceScore"> | number
    raceId?: StringFilter<"RaceScore"> | string
    driverId?: StringFilter<"RaceScore"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type RaceScoreOrderByWithRelationInput = {
    id?: SortOrder
    totalDistance?: SortOrder
    lastDelta?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    race?: RaceOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type RaceScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceScoreWhereInput | RaceScoreWhereInput[]
    OR?: RaceScoreWhereInput[]
    NOT?: RaceScoreWhereInput | RaceScoreWhereInput[]
    totalDistance?: IntFilter<"RaceScore"> | number
    lastDelta?: IntFilter<"RaceScore"> | number
    raceId?: StringFilter<"RaceScore"> | string
    driverId?: StringFilter<"RaceScore"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type RaceScoreOrderByWithAggregationInput = {
    id?: SortOrder
    totalDistance?: SortOrder
    lastDelta?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    _count?: RaceScoreCountOrderByAggregateInput
    _avg?: RaceScoreAvgOrderByAggregateInput
    _max?: RaceScoreMaxOrderByAggregateInput
    _min?: RaceScoreMinOrderByAggregateInput
    _sum?: RaceScoreSumOrderByAggregateInput
  }

  export type RaceScoreScalarWhereWithAggregatesInput = {
    AND?: RaceScoreScalarWhereWithAggregatesInput | RaceScoreScalarWhereWithAggregatesInput[]
    OR?: RaceScoreScalarWhereWithAggregatesInput[]
    NOT?: RaceScoreScalarWhereWithAggregatesInput | RaceScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaceScore"> | string
    totalDistance?: IntWithAggregatesFilter<"RaceScore"> | number
    lastDelta?: IntWithAggregatesFilter<"RaceScore"> | number
    raceId?: StringWithAggregatesFilter<"RaceScore"> | string
    driverId?: StringWithAggregatesFilter<"RaceScore"> | string
  }

  export type RaceResultWhereInput = {
    AND?: RaceResultWhereInput | RaceResultWhereInput[]
    OR?: RaceResultWhereInput[]
    NOT?: RaceResultWhereInput | RaceResultWhereInput[]
    id?: StringFilter<"RaceResult"> | string
    finalDelta?: IntFilter<"RaceResult"> | number
    finishedAt?: DateTimeFilter<"RaceResult"> | Date | string
    raceId?: StringFilter<"RaceResult"> | string
    driverId?: StringFilter<"RaceResult"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    winnerDriver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type RaceResultOrderByWithRelationInput = {
    id?: SortOrder
    finalDelta?: SortOrder
    finishedAt?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    race?: RaceOrderByWithRelationInput
    winnerDriver?: DriverOrderByWithRelationInput
  }

  export type RaceResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceResultWhereInput | RaceResultWhereInput[]
    OR?: RaceResultWhereInput[]
    NOT?: RaceResultWhereInput | RaceResultWhereInput[]
    finalDelta?: IntFilter<"RaceResult"> | number
    finishedAt?: DateTimeFilter<"RaceResult"> | Date | string
    raceId?: StringFilter<"RaceResult"> | string
    driverId?: StringFilter<"RaceResult"> | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    winnerDriver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type RaceResultOrderByWithAggregationInput = {
    id?: SortOrder
    finalDelta?: SortOrder
    finishedAt?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    _count?: RaceResultCountOrderByAggregateInput
    _avg?: RaceResultAvgOrderByAggregateInput
    _max?: RaceResultMaxOrderByAggregateInput
    _min?: RaceResultMinOrderByAggregateInput
    _sum?: RaceResultSumOrderByAggregateInput
  }

  export type RaceResultScalarWhereWithAggregatesInput = {
    AND?: RaceResultScalarWhereWithAggregatesInput | RaceResultScalarWhereWithAggregatesInput[]
    OR?: RaceResultScalarWhereWithAggregatesInput[]
    NOT?: RaceResultScalarWhereWithAggregatesInput | RaceResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RaceResult"> | string
    finalDelta?: IntWithAggregatesFilter<"RaceResult"> | number
    finishedAt?: DateTimeWithAggregatesFilter<"RaceResult"> | Date | string
    raceId?: StringWithAggregatesFilter<"RaceResult"> | string
    driverId?: StringWithAggregatesFilter<"RaceResult"> | string
  }

  export type DriverCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionCreateNestedManyWithoutDriverInput
    presences?: PresenceCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionUncheckedCreateNestedManyWithoutDriverInput
    presences?: PresenceUncheckedCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUpdateManyWithoutDriverNestedInput
    presences?: PresenceUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUncheckedUpdateManyWithoutDriverNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverSessionCreateInput = {
    id?: string
    lastSeen: Date | string
    isActive: boolean
    driver: DriverCreateNestedOneWithoutDriverSessionsInput
  }

  export type DriverSessionUncheckedCreateInput = {
    id?: string
    lastSeen: Date | string
    isActive: boolean
    driverId: string
  }

  export type DriverSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    driver?: DriverUpdateOneRequiredWithoutDriverSessionsNestedInput
  }

  export type DriverSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type DriverSessionCreateManyInput = {
    id?: string
    lastSeen: Date | string
    isActive: boolean
    driverId: string
  }

  export type DriverSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DriverSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type PresenceCreateInput = {
    id?: string
    lat: bigint | number
    lon: bigint | number
    heading: bigint | number
    speedBucket: $Enums.SpeedBucket
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateInput = {
    id?: string
    driverId: string
    lat: bigint | number
    lon: bigint | number
    heading: bigint | number
    speedBucket: $Enums.SpeedBucket
    updatedAt?: Date | string
  }

  export type PresenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceCreateManyInput = {
    id?: string
    driverId: string
    lat: bigint | number
    lon: bigint | number
    heading: bigint | number
    speedBucket: $Enums.SpeedBucket
    updatedAt?: Date | string
  }

  export type PresenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    id?: string
    routeSegments?: RouteSegmentCreateNestedManyWithoutRouteInput
    races?: RaceCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    routeSegments?: RouteSegmentUncheckedCreateNestedManyWithoutRouteInput
    races?: RaceUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeSegments?: RouteSegmentUpdateManyWithoutRouteNestedInput
    races?: RaceUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeSegments?: RouteSegmentUncheckedUpdateManyWithoutRouteNestedInput
    races?: RaceUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RouteSegmentCreateInput = {
    id?: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    route: RouteCreateNestedOneWithoutRouteSegmentsInput
    races?: RaceCreateNestedManyWithoutSegmentInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentUncheckedCreateInput = {
    id?: string
    routeId: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    races?: RaceUncheckedCreateNestedManyWithoutSegmentInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    route?: RouteUpdateOneRequiredWithoutRouteSegmentsNestedInput
    races?: RaceUpdateManyWithoutSegmentNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutSegmentNestedInput
  }

  export type RouteSegmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    races?: RaceUncheckedUpdateManyWithoutSegmentNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type RouteSegmentCreateManyInput = {
    id?: string
    routeId: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
  }

  export type RouteSegmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
  }

  export type RouteSegmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
  }

  export type RaceCreateInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    route: RouteCreateNestedOneWithoutRacesInput
    segment: RouteSegmentCreateNestedOneWithoutRacesInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRacesNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutRacesNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
  }

  export type RaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceParticipantCreateInput = {
    id?: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
    driver: DriverCreateNestedOneWithoutRaceParticipantsInput
    race: RaceCreateNestedOneWithoutRaceParticipantsInput
  }

  export type RaceParticipantUncheckedCreateInput = {
    id?: string
    raceId: string
    driverId: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
  }

  export type RaceParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
    driver?: DriverUpdateOneRequiredWithoutRaceParticipantsNestedInput
    race?: RaceUpdateOneRequiredWithoutRaceParticipantsNestedInput
  }

  export type RaceParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type RaceParticipantCreateManyInput = {
    id?: string
    raceId: string
    driverId: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
  }

  export type RaceParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type RaceParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type TelemetryWindowCreateInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    race: RaceCreateNestedOneWithoutTelemetryWindowsInput
    driver: DriverCreateNestedOneWithoutTelemetryWindowsInput
    segment: RouteSegmentCreateNestedOneWithoutTelemetryWindowsInput
  }

  export type TelemetryWindowUncheckedCreateInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    raceId: string
    driverId: string
    routeSegmentId: string
  }

  export type TelemetryWindowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    race?: RaceUpdateOneRequiredWithoutTelemetryWindowsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTelemetryWindowsNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutTelemetryWindowsNestedInput
  }

  export type TelemetryWindowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type TelemetryWindowCreateManyInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    raceId: string
    driverId: string
    routeSegmentId: string
  }

  export type TelemetryWindowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
  }

  export type TelemetryWindowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceScoreCreateInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    race: RaceCreateNestedOneWithoutRaceScoresInput
    driver: DriverCreateNestedOneWithoutRaceScoresInput
  }

  export type RaceScoreUncheckedCreateInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    raceId: string
    driverId: string
  }

  export type RaceScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    race?: RaceUpdateOneRequiredWithoutRaceScoresNestedInput
    driver?: DriverUpdateOneRequiredWithoutRaceScoresNestedInput
  }

  export type RaceScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceScoreCreateManyInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    raceId: string
    driverId: string
  }

  export type RaceScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
  }

  export type RaceScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceResultCreateInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    race: RaceCreateNestedOneWithoutRaceResultsInput
    winnerDriver: DriverCreateNestedOneWithoutRaceResultsInput
  }

  export type RaceResultUncheckedCreateInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    raceId: string
    driverId: string
  }

  export type RaceResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutRaceResultsNestedInput
    winnerDriver?: DriverUpdateOneRequiredWithoutRaceResultsNestedInput
  }

  export type RaceResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceResultCreateManyInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    raceId: string
    driverId: string
  }

  export type RaceResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
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

  export type DriverSessionListRelationFilter = {
    every?: DriverSessionWhereInput
    some?: DriverSessionWhereInput
    none?: DriverSessionWhereInput
  }

  export type PresenceListRelationFilter = {
    every?: PresenceWhereInput
    some?: PresenceWhereInput
    none?: PresenceWhereInput
  }

  export type RaceParticipantListRelationFilter = {
    every?: RaceParticipantWhereInput
    some?: RaceParticipantWhereInput
    none?: RaceParticipantWhereInput
  }

  export type TelemetryWindowListRelationFilter = {
    every?: TelemetryWindowWhereInput
    some?: TelemetryWindowWhereInput
    none?: TelemetryWindowWhereInput
  }

  export type RaceScoreListRelationFilter = {
    every?: RaceScoreWhereInput
    some?: RaceScoreWhereInput
    none?: RaceScoreWhereInput
  }

  export type RaceResultListRelationFilter = {
    every?: RaceResultWhereInput
    some?: RaceResultWhereInput
    none?: RaceResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DriverSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TelemetryWindowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type DriverSessionCountOrderByAggregateInput = {
    id?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    driverId?: SortOrder
  }

  export type DriverSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    driverId?: SortOrder
  }

  export type DriverSessionMinOrderByAggregateInput = {
    id?: SortOrder
    lastSeen?: SortOrder
    isActive?: SortOrder
    driverId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumSpeedBucketFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeedBucket | EnumSpeedBucketFieldRefInput<$PrismaModel>
    in?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeedBucketFilter<$PrismaModel> | $Enums.SpeedBucket
  }

  export type PresenceCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
    speedBucket?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresenceAvgOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
  }

  export type PresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
    speedBucket?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresenceMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
    speedBucket?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresenceSumOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    heading?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumSpeedBucketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeedBucket | EnumSpeedBucketFieldRefInput<$PrismaModel>
    in?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeedBucketWithAggregatesFilter<$PrismaModel> | $Enums.SpeedBucket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeedBucketFilter<$PrismaModel>
    _max?: NestedEnumSpeedBucketFilter<$PrismaModel>
  }

  export type RouteSegmentListRelationFilter = {
    every?: RouteSegmentWhereInput
    some?: RouteSegmentWhereInput
    none?: RouteSegmentWhereInput
  }

  export type RaceListRelationFilter = {
    every?: RaceWhereInput
    some?: RaceWhereInput
    none?: RaceWhereInput
  }

  export type RouteSegmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type RouteSegmentCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    index?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type RouteSegmentAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type RouteSegmentMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    index?: SortOrder
  }

  export type RouteSegmentMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    index?: SortOrder
  }

  export type RouteSegmentSumOrderByAggregateInput = {
    index?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumRaceStateFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceState | EnumRaceStateFieldRefInput<$PrismaModel>
    in?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStateFilter<$PrismaModel> | $Enums.RaceState
  }

  export type RouteSegmentScalarRelationFilter = {
    is?: RouteSegmentWhereInput
    isNot?: RouteSegmentWhereInput
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    state?: SortOrder
    startAt?: SortOrder
    durationSec?: SortOrder
    createdAt?: SortOrder
    routeSegmentId?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    durationSec?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    state?: SortOrder
    startAt?: SortOrder
    durationSec?: SortOrder
    createdAt?: SortOrder
    routeSegmentId?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    state?: SortOrder
    startAt?: SortOrder
    durationSec?: SortOrder
    createdAt?: SortOrder
    routeSegmentId?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    durationSec?: SortOrder
  }

  export type EnumRaceStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceState | EnumRaceStateFieldRefInput<$PrismaModel>
    in?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStateWithAggregatesFilter<$PrismaModel> | $Enums.RaceState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceStateFilter<$PrismaModel>
    _max?: NestedEnumRaceStateFilter<$PrismaModel>
  }

  export type EnumReadyToRaceFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadyToRace | EnumReadyToRaceFieldRefInput<$PrismaModel>
    in?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumReadyToRaceFilter<$PrismaModel> | $Enums.ReadyToRace
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type RaceParticipantRaceIdDriverIdCompoundUniqueInput = {
    raceId: string
    driverId: string
  }

  export type RaceParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type RaceParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type RaceParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type EnumReadyToRaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadyToRace | EnumReadyToRaceFieldRefInput<$PrismaModel>
    in?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumReadyToRaceWithAggregatesFilter<$PrismaModel> | $Enums.ReadyToRace
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReadyToRaceFilter<$PrismaModel>
    _max?: NestedEnumReadyToRaceFilter<$PrismaModel>
  }

  export type TelemetryWindowRaceIdDriverIdCompoundUniqueInput = {
    raceId: string
    driverId: string
  }

  export type TelemetryWindowCountOrderByAggregateInput = {
    id?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    avgSpeed?: SortOrder
    distance?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    routeSegmentId?: SortOrder
  }

  export type TelemetryWindowAvgOrderByAggregateInput = {
    avgSpeed?: SortOrder
    distance?: SortOrder
  }

  export type TelemetryWindowMaxOrderByAggregateInput = {
    id?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    avgSpeed?: SortOrder
    distance?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    routeSegmentId?: SortOrder
  }

  export type TelemetryWindowMinOrderByAggregateInput = {
    id?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    avgSpeed?: SortOrder
    distance?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    routeSegmentId?: SortOrder
  }

  export type TelemetryWindowSumOrderByAggregateInput = {
    avgSpeed?: SortOrder
    distance?: SortOrder
  }

  export type RaceScoreCountOrderByAggregateInput = {
    id?: SortOrder
    totalDistance?: SortOrder
    lastDelta?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
  }

  export type RaceScoreAvgOrderByAggregateInput = {
    totalDistance?: SortOrder
    lastDelta?: SortOrder
  }

  export type RaceScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    totalDistance?: SortOrder
    lastDelta?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
  }

  export type RaceScoreMinOrderByAggregateInput = {
    id?: SortOrder
    totalDistance?: SortOrder
    lastDelta?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
  }

  export type RaceScoreSumOrderByAggregateInput = {
    totalDistance?: SortOrder
    lastDelta?: SortOrder
  }

  export type RaceResultCountOrderByAggregateInput = {
    id?: SortOrder
    finalDelta?: SortOrder
    finishedAt?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
  }

  export type RaceResultAvgOrderByAggregateInput = {
    finalDelta?: SortOrder
  }

  export type RaceResultMaxOrderByAggregateInput = {
    id?: SortOrder
    finalDelta?: SortOrder
    finishedAt?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
  }

  export type RaceResultMinOrderByAggregateInput = {
    id?: SortOrder
    finalDelta?: SortOrder
    finishedAt?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
  }

  export type RaceResultSumOrderByAggregateInput = {
    finalDelta?: SortOrder
  }

  export type DriverSessionCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverSessionCreateWithoutDriverInput, DriverSessionUncheckedCreateWithoutDriverInput> | DriverSessionCreateWithoutDriverInput[] | DriverSessionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverSessionCreateOrConnectWithoutDriverInput | DriverSessionCreateOrConnectWithoutDriverInput[]
    createMany?: DriverSessionCreateManyDriverInputEnvelope
    connect?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
  }

  export type PresenceCreateNestedManyWithoutDriverInput = {
    create?: XOR<PresenceCreateWithoutDriverInput, PresenceUncheckedCreateWithoutDriverInput> | PresenceCreateWithoutDriverInput[] | PresenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutDriverInput | PresenceCreateOrConnectWithoutDriverInput[]
    createMany?: PresenceCreateManyDriverInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type RaceParticipantCreateNestedManyWithoutDriverInput = {
    create?: XOR<RaceParticipantCreateWithoutDriverInput, RaceParticipantUncheckedCreateWithoutDriverInput> | RaceParticipantCreateWithoutDriverInput[] | RaceParticipantUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutDriverInput | RaceParticipantCreateOrConnectWithoutDriverInput[]
    createMany?: RaceParticipantCreateManyDriverInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type TelemetryWindowCreateNestedManyWithoutDriverInput = {
    create?: XOR<TelemetryWindowCreateWithoutDriverInput, TelemetryWindowUncheckedCreateWithoutDriverInput> | TelemetryWindowCreateWithoutDriverInput[] | TelemetryWindowUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutDriverInput | TelemetryWindowCreateOrConnectWithoutDriverInput[]
    createMany?: TelemetryWindowCreateManyDriverInputEnvelope
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
  }

  export type RaceScoreCreateNestedManyWithoutDriverInput = {
    create?: XOR<RaceScoreCreateWithoutDriverInput, RaceScoreUncheckedCreateWithoutDriverInput> | RaceScoreCreateWithoutDriverInput[] | RaceScoreUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutDriverInput | RaceScoreCreateOrConnectWithoutDriverInput[]
    createMany?: RaceScoreCreateManyDriverInputEnvelope
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
  }

  export type RaceResultCreateNestedManyWithoutWinnerDriverInput = {
    create?: XOR<RaceResultCreateWithoutWinnerDriverInput, RaceResultUncheckedCreateWithoutWinnerDriverInput> | RaceResultCreateWithoutWinnerDriverInput[] | RaceResultUncheckedCreateWithoutWinnerDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutWinnerDriverInput | RaceResultCreateOrConnectWithoutWinnerDriverInput[]
    createMany?: RaceResultCreateManyWinnerDriverInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type DriverSessionUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverSessionCreateWithoutDriverInput, DriverSessionUncheckedCreateWithoutDriverInput> | DriverSessionCreateWithoutDriverInput[] | DriverSessionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverSessionCreateOrConnectWithoutDriverInput | DriverSessionCreateOrConnectWithoutDriverInput[]
    createMany?: DriverSessionCreateManyDriverInputEnvelope
    connect?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
  }

  export type PresenceUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<PresenceCreateWithoutDriverInput, PresenceUncheckedCreateWithoutDriverInput> | PresenceCreateWithoutDriverInput[] | PresenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutDriverInput | PresenceCreateOrConnectWithoutDriverInput[]
    createMany?: PresenceCreateManyDriverInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type RaceParticipantUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RaceParticipantCreateWithoutDriverInput, RaceParticipantUncheckedCreateWithoutDriverInput> | RaceParticipantCreateWithoutDriverInput[] | RaceParticipantUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutDriverInput | RaceParticipantCreateOrConnectWithoutDriverInput[]
    createMany?: RaceParticipantCreateManyDriverInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TelemetryWindowCreateWithoutDriverInput, TelemetryWindowUncheckedCreateWithoutDriverInput> | TelemetryWindowCreateWithoutDriverInput[] | TelemetryWindowUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutDriverInput | TelemetryWindowCreateOrConnectWithoutDriverInput[]
    createMany?: TelemetryWindowCreateManyDriverInputEnvelope
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
  }

  export type RaceScoreUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RaceScoreCreateWithoutDriverInput, RaceScoreUncheckedCreateWithoutDriverInput> | RaceScoreCreateWithoutDriverInput[] | RaceScoreUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutDriverInput | RaceScoreCreateOrConnectWithoutDriverInput[]
    createMany?: RaceScoreCreateManyDriverInputEnvelope
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
  }

  export type RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput = {
    create?: XOR<RaceResultCreateWithoutWinnerDriverInput, RaceResultUncheckedCreateWithoutWinnerDriverInput> | RaceResultCreateWithoutWinnerDriverInput[] | RaceResultUncheckedCreateWithoutWinnerDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutWinnerDriverInput | RaceResultCreateOrConnectWithoutWinnerDriverInput[]
    createMany?: RaceResultCreateManyWinnerDriverInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DriverSessionUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverSessionCreateWithoutDriverInput, DriverSessionUncheckedCreateWithoutDriverInput> | DriverSessionCreateWithoutDriverInput[] | DriverSessionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverSessionCreateOrConnectWithoutDriverInput | DriverSessionCreateOrConnectWithoutDriverInput[]
    upsert?: DriverSessionUpsertWithWhereUniqueWithoutDriverInput | DriverSessionUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverSessionCreateManyDriverInputEnvelope
    set?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    disconnect?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    delete?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    connect?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    update?: DriverSessionUpdateWithWhereUniqueWithoutDriverInput | DriverSessionUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverSessionUpdateManyWithWhereWithoutDriverInput | DriverSessionUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverSessionScalarWhereInput | DriverSessionScalarWhereInput[]
  }

  export type PresenceUpdateManyWithoutDriverNestedInput = {
    create?: XOR<PresenceCreateWithoutDriverInput, PresenceUncheckedCreateWithoutDriverInput> | PresenceCreateWithoutDriverInput[] | PresenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutDriverInput | PresenceCreateOrConnectWithoutDriverInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutDriverInput | PresenceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: PresenceCreateManyDriverInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutDriverInput | PresenceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutDriverInput | PresenceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type RaceParticipantUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutDriverInput, RaceParticipantUncheckedCreateWithoutDriverInput> | RaceParticipantCreateWithoutDriverInput[] | RaceParticipantUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutDriverInput | RaceParticipantCreateOrConnectWithoutDriverInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutDriverInput | RaceParticipantUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RaceParticipantCreateManyDriverInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutDriverInput | RaceParticipantUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutDriverInput | RaceParticipantUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type TelemetryWindowUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TelemetryWindowCreateWithoutDriverInput, TelemetryWindowUncheckedCreateWithoutDriverInput> | TelemetryWindowCreateWithoutDriverInput[] | TelemetryWindowUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutDriverInput | TelemetryWindowCreateOrConnectWithoutDriverInput[]
    upsert?: TelemetryWindowUpsertWithWhereUniqueWithoutDriverInput | TelemetryWindowUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TelemetryWindowCreateManyDriverInputEnvelope
    set?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    disconnect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    delete?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    update?: TelemetryWindowUpdateWithWhereUniqueWithoutDriverInput | TelemetryWindowUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TelemetryWindowUpdateManyWithWhereWithoutDriverInput | TelemetryWindowUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
  }

  export type RaceScoreUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RaceScoreCreateWithoutDriverInput, RaceScoreUncheckedCreateWithoutDriverInput> | RaceScoreCreateWithoutDriverInput[] | RaceScoreUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutDriverInput | RaceScoreCreateOrConnectWithoutDriverInput[]
    upsert?: RaceScoreUpsertWithWhereUniqueWithoutDriverInput | RaceScoreUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RaceScoreCreateManyDriverInputEnvelope
    set?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    disconnect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    delete?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    update?: RaceScoreUpdateWithWhereUniqueWithoutDriverInput | RaceScoreUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RaceScoreUpdateManyWithWhereWithoutDriverInput | RaceScoreUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RaceScoreScalarWhereInput | RaceScoreScalarWhereInput[]
  }

  export type RaceResultUpdateManyWithoutWinnerDriverNestedInput = {
    create?: XOR<RaceResultCreateWithoutWinnerDriverInput, RaceResultUncheckedCreateWithoutWinnerDriverInput> | RaceResultCreateWithoutWinnerDriverInput[] | RaceResultUncheckedCreateWithoutWinnerDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutWinnerDriverInput | RaceResultCreateOrConnectWithoutWinnerDriverInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutWinnerDriverInput | RaceResultUpsertWithWhereUniqueWithoutWinnerDriverInput[]
    createMany?: RaceResultCreateManyWinnerDriverInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutWinnerDriverInput | RaceResultUpdateWithWhereUniqueWithoutWinnerDriverInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutWinnerDriverInput | RaceResultUpdateManyWithWhereWithoutWinnerDriverInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type DriverSessionUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverSessionCreateWithoutDriverInput, DriverSessionUncheckedCreateWithoutDriverInput> | DriverSessionCreateWithoutDriverInput[] | DriverSessionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverSessionCreateOrConnectWithoutDriverInput | DriverSessionCreateOrConnectWithoutDriverInput[]
    upsert?: DriverSessionUpsertWithWhereUniqueWithoutDriverInput | DriverSessionUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverSessionCreateManyDriverInputEnvelope
    set?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    disconnect?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    delete?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    connect?: DriverSessionWhereUniqueInput | DriverSessionWhereUniqueInput[]
    update?: DriverSessionUpdateWithWhereUniqueWithoutDriverInput | DriverSessionUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverSessionUpdateManyWithWhereWithoutDriverInput | DriverSessionUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverSessionScalarWhereInput | DriverSessionScalarWhereInput[]
  }

  export type PresenceUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<PresenceCreateWithoutDriverInput, PresenceUncheckedCreateWithoutDriverInput> | PresenceCreateWithoutDriverInput[] | PresenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutDriverInput | PresenceCreateOrConnectWithoutDriverInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutDriverInput | PresenceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: PresenceCreateManyDriverInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutDriverInput | PresenceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutDriverInput | PresenceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutDriverInput, RaceParticipantUncheckedCreateWithoutDriverInput> | RaceParticipantCreateWithoutDriverInput[] | RaceParticipantUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutDriverInput | RaceParticipantCreateOrConnectWithoutDriverInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutDriverInput | RaceParticipantUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RaceParticipantCreateManyDriverInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutDriverInput | RaceParticipantUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutDriverInput | RaceParticipantUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TelemetryWindowCreateWithoutDriverInput, TelemetryWindowUncheckedCreateWithoutDriverInput> | TelemetryWindowCreateWithoutDriverInput[] | TelemetryWindowUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutDriverInput | TelemetryWindowCreateOrConnectWithoutDriverInput[]
    upsert?: TelemetryWindowUpsertWithWhereUniqueWithoutDriverInput | TelemetryWindowUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TelemetryWindowCreateManyDriverInputEnvelope
    set?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    disconnect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    delete?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    update?: TelemetryWindowUpdateWithWhereUniqueWithoutDriverInput | TelemetryWindowUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TelemetryWindowUpdateManyWithWhereWithoutDriverInput | TelemetryWindowUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
  }

  export type RaceScoreUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RaceScoreCreateWithoutDriverInput, RaceScoreUncheckedCreateWithoutDriverInput> | RaceScoreCreateWithoutDriverInput[] | RaceScoreUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutDriverInput | RaceScoreCreateOrConnectWithoutDriverInput[]
    upsert?: RaceScoreUpsertWithWhereUniqueWithoutDriverInput | RaceScoreUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RaceScoreCreateManyDriverInputEnvelope
    set?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    disconnect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    delete?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    update?: RaceScoreUpdateWithWhereUniqueWithoutDriverInput | RaceScoreUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RaceScoreUpdateManyWithWhereWithoutDriverInput | RaceScoreUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RaceScoreScalarWhereInput | RaceScoreScalarWhereInput[]
  }

  export type RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput = {
    create?: XOR<RaceResultCreateWithoutWinnerDriverInput, RaceResultUncheckedCreateWithoutWinnerDriverInput> | RaceResultCreateWithoutWinnerDriverInput[] | RaceResultUncheckedCreateWithoutWinnerDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutWinnerDriverInput | RaceResultCreateOrConnectWithoutWinnerDriverInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutWinnerDriverInput | RaceResultUpsertWithWhereUniqueWithoutWinnerDriverInput[]
    createMany?: RaceResultCreateManyWinnerDriverInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutWinnerDriverInput | RaceResultUpdateWithWhereUniqueWithoutWinnerDriverInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutWinnerDriverInput | RaceResultUpdateManyWithWhereWithoutWinnerDriverInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type DriverCreateNestedOneWithoutDriverSessionsInput = {
    create?: XOR<DriverCreateWithoutDriverSessionsInput, DriverUncheckedCreateWithoutDriverSessionsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDriverSessionsInput
    connect?: DriverWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DriverUpdateOneRequiredWithoutDriverSessionsNestedInput = {
    create?: XOR<DriverCreateWithoutDriverSessionsInput, DriverUncheckedCreateWithoutDriverSessionsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDriverSessionsInput
    upsert?: DriverUpsertWithoutDriverSessionsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutDriverSessionsInput, DriverUpdateWithoutDriverSessionsInput>, DriverUncheckedUpdateWithoutDriverSessionsInput>
  }

  export type DriverCreateNestedOneWithoutPresencesInput = {
    create?: XOR<DriverCreateWithoutPresencesInput, DriverUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutPresencesInput
    connect?: DriverWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumSpeedBucketFieldUpdateOperationsInput = {
    set?: $Enums.SpeedBucket
  }

  export type DriverUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<DriverCreateWithoutPresencesInput, DriverUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutPresencesInput
    upsert?: DriverUpsertWithoutPresencesInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutPresencesInput, DriverUpdateWithoutPresencesInput>, DriverUncheckedUpdateWithoutPresencesInput>
  }

  export type RouteSegmentCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteSegmentCreateWithoutRouteInput, RouteSegmentUncheckedCreateWithoutRouteInput> | RouteSegmentCreateWithoutRouteInput[] | RouteSegmentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutRouteInput | RouteSegmentCreateOrConnectWithoutRouteInput[]
    createMany?: RouteSegmentCreateManyRouteInputEnvelope
    connect?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
  }

  export type RaceCreateNestedManyWithoutRouteInput = {
    create?: XOR<RaceCreateWithoutRouteInput, RaceUncheckedCreateWithoutRouteInput> | RaceCreateWithoutRouteInput[] | RaceUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutRouteInput | RaceCreateOrConnectWithoutRouteInput[]
    createMany?: RaceCreateManyRouteInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RouteSegmentUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteSegmentCreateWithoutRouteInput, RouteSegmentUncheckedCreateWithoutRouteInput> | RouteSegmentCreateWithoutRouteInput[] | RouteSegmentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutRouteInput | RouteSegmentCreateOrConnectWithoutRouteInput[]
    createMany?: RouteSegmentCreateManyRouteInputEnvelope
    connect?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RaceCreateWithoutRouteInput, RaceUncheckedCreateWithoutRouteInput> | RaceCreateWithoutRouteInput[] | RaceUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutRouteInput | RaceCreateOrConnectWithoutRouteInput[]
    createMany?: RaceCreateManyRouteInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RouteSegmentUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteSegmentCreateWithoutRouteInput, RouteSegmentUncheckedCreateWithoutRouteInput> | RouteSegmentCreateWithoutRouteInput[] | RouteSegmentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutRouteInput | RouteSegmentCreateOrConnectWithoutRouteInput[]
    upsert?: RouteSegmentUpsertWithWhereUniqueWithoutRouteInput | RouteSegmentUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteSegmentCreateManyRouteInputEnvelope
    set?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    disconnect?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    delete?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    connect?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    update?: RouteSegmentUpdateWithWhereUniqueWithoutRouteInput | RouteSegmentUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteSegmentUpdateManyWithWhereWithoutRouteInput | RouteSegmentUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteSegmentScalarWhereInput | RouteSegmentScalarWhereInput[]
  }

  export type RaceUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RaceCreateWithoutRouteInput, RaceUncheckedCreateWithoutRouteInput> | RaceCreateWithoutRouteInput[] | RaceUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutRouteInput | RaceCreateOrConnectWithoutRouteInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutRouteInput | RaceUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RaceCreateManyRouteInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutRouteInput | RaceUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutRouteInput | RaceUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RouteSegmentUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteSegmentCreateWithoutRouteInput, RouteSegmentUncheckedCreateWithoutRouteInput> | RouteSegmentCreateWithoutRouteInput[] | RouteSegmentUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutRouteInput | RouteSegmentCreateOrConnectWithoutRouteInput[]
    upsert?: RouteSegmentUpsertWithWhereUniqueWithoutRouteInput | RouteSegmentUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteSegmentCreateManyRouteInputEnvelope
    set?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    disconnect?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    delete?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    connect?: RouteSegmentWhereUniqueInput | RouteSegmentWhereUniqueInput[]
    update?: RouteSegmentUpdateWithWhereUniqueWithoutRouteInput | RouteSegmentUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteSegmentUpdateManyWithWhereWithoutRouteInput | RouteSegmentUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteSegmentScalarWhereInput | RouteSegmentScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RaceCreateWithoutRouteInput, RaceUncheckedCreateWithoutRouteInput> | RaceCreateWithoutRouteInput[] | RaceUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutRouteInput | RaceCreateOrConnectWithoutRouteInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutRouteInput | RaceUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RaceCreateManyRouteInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutRouteInput | RaceUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutRouteInput | RaceUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutRouteSegmentsInput = {
    create?: XOR<RouteCreateWithoutRouteSegmentsInput, RouteUncheckedCreateWithoutRouteSegmentsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteSegmentsInput
    connect?: RouteWhereUniqueInput
  }

  export type RaceCreateNestedManyWithoutSegmentInput = {
    create?: XOR<RaceCreateWithoutSegmentInput, RaceUncheckedCreateWithoutSegmentInput> | RaceCreateWithoutSegmentInput[] | RaceUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSegmentInput | RaceCreateOrConnectWithoutSegmentInput[]
    createMany?: RaceCreateManySegmentInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type TelemetryWindowCreateNestedManyWithoutSegmentInput = {
    create?: XOR<TelemetryWindowCreateWithoutSegmentInput, TelemetryWindowUncheckedCreateWithoutSegmentInput> | TelemetryWindowCreateWithoutSegmentInput[] | TelemetryWindowUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutSegmentInput | TelemetryWindowCreateOrConnectWithoutSegmentInput[]
    createMany?: TelemetryWindowCreateManySegmentInputEnvelope
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<RaceCreateWithoutSegmentInput, RaceUncheckedCreateWithoutSegmentInput> | RaceCreateWithoutSegmentInput[] | RaceUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSegmentInput | RaceCreateOrConnectWithoutSegmentInput[]
    createMany?: RaceCreateManySegmentInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type TelemetryWindowUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<TelemetryWindowCreateWithoutSegmentInput, TelemetryWindowUncheckedCreateWithoutSegmentInput> | TelemetryWindowCreateWithoutSegmentInput[] | TelemetryWindowUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutSegmentInput | TelemetryWindowCreateOrConnectWithoutSegmentInput[]
    createMany?: TelemetryWindowCreateManySegmentInputEnvelope
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RouteUpdateOneRequiredWithoutRouteSegmentsNestedInput = {
    create?: XOR<RouteCreateWithoutRouteSegmentsInput, RouteUncheckedCreateWithoutRouteSegmentsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteSegmentsInput
    upsert?: RouteUpsertWithoutRouteSegmentsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRouteSegmentsInput, RouteUpdateWithoutRouteSegmentsInput>, RouteUncheckedUpdateWithoutRouteSegmentsInput>
  }

  export type RaceUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<RaceCreateWithoutSegmentInput, RaceUncheckedCreateWithoutSegmentInput> | RaceCreateWithoutSegmentInput[] | RaceUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSegmentInput | RaceCreateOrConnectWithoutSegmentInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutSegmentInput | RaceUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: RaceCreateManySegmentInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutSegmentInput | RaceUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutSegmentInput | RaceUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type TelemetryWindowUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<TelemetryWindowCreateWithoutSegmentInput, TelemetryWindowUncheckedCreateWithoutSegmentInput> | TelemetryWindowCreateWithoutSegmentInput[] | TelemetryWindowUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutSegmentInput | TelemetryWindowCreateOrConnectWithoutSegmentInput[]
    upsert?: TelemetryWindowUpsertWithWhereUniqueWithoutSegmentInput | TelemetryWindowUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: TelemetryWindowCreateManySegmentInputEnvelope
    set?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    disconnect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    delete?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    update?: TelemetryWindowUpdateWithWhereUniqueWithoutSegmentInput | TelemetryWindowUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: TelemetryWindowUpdateManyWithWhereWithoutSegmentInput | TelemetryWindowUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<RaceCreateWithoutSegmentInput, RaceUncheckedCreateWithoutSegmentInput> | RaceCreateWithoutSegmentInput[] | RaceUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutSegmentInput | RaceCreateOrConnectWithoutSegmentInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutSegmentInput | RaceUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: RaceCreateManySegmentInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutSegmentInput | RaceUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutSegmentInput | RaceUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type TelemetryWindowUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<TelemetryWindowCreateWithoutSegmentInput, TelemetryWindowUncheckedCreateWithoutSegmentInput> | TelemetryWindowCreateWithoutSegmentInput[] | TelemetryWindowUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutSegmentInput | TelemetryWindowCreateOrConnectWithoutSegmentInput[]
    upsert?: TelemetryWindowUpsertWithWhereUniqueWithoutSegmentInput | TelemetryWindowUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: TelemetryWindowCreateManySegmentInputEnvelope
    set?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    disconnect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    delete?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    update?: TelemetryWindowUpdateWithWhereUniqueWithoutSegmentInput | TelemetryWindowUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: TelemetryWindowUpdateManyWithWhereWithoutSegmentInput | TelemetryWindowUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutRacesInput = {
    create?: XOR<RouteCreateWithoutRacesInput, RouteUncheckedCreateWithoutRacesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRacesInput
    connect?: RouteWhereUniqueInput
  }

  export type RouteSegmentCreateNestedOneWithoutRacesInput = {
    create?: XOR<RouteSegmentCreateWithoutRacesInput, RouteSegmentUncheckedCreateWithoutRacesInput>
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutRacesInput
    connect?: RouteSegmentWhereUniqueInput
  }

  export type RaceParticipantCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type TelemetryWindowCreateNestedManyWithoutRaceInput = {
    create?: XOR<TelemetryWindowCreateWithoutRaceInput, TelemetryWindowUncheckedCreateWithoutRaceInput> | TelemetryWindowCreateWithoutRaceInput[] | TelemetryWindowUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutRaceInput | TelemetryWindowCreateOrConnectWithoutRaceInput[]
    createMany?: TelemetryWindowCreateManyRaceInputEnvelope
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
  }

  export type RaceScoreCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceScoreCreateWithoutRaceInput, RaceScoreUncheckedCreateWithoutRaceInput> | RaceScoreCreateWithoutRaceInput[] | RaceScoreUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutRaceInput | RaceScoreCreateOrConnectWithoutRaceInput[]
    createMany?: RaceScoreCreateManyRaceInputEnvelope
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
  }

  export type RaceResultCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type RaceParticipantUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<TelemetryWindowCreateWithoutRaceInput, TelemetryWindowUncheckedCreateWithoutRaceInput> | TelemetryWindowCreateWithoutRaceInput[] | TelemetryWindowUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutRaceInput | TelemetryWindowCreateOrConnectWithoutRaceInput[]
    createMany?: TelemetryWindowCreateManyRaceInputEnvelope
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
  }

  export type RaceScoreUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceScoreCreateWithoutRaceInput, RaceScoreUncheckedCreateWithoutRaceInput> | RaceScoreCreateWithoutRaceInput[] | RaceScoreUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutRaceInput | RaceScoreCreateOrConnectWithoutRaceInput[]
    createMany?: RaceScoreCreateManyRaceInputEnvelope
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
  }

  export type RaceResultUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type EnumRaceStateFieldUpdateOperationsInput = {
    set?: $Enums.RaceState
  }

  export type RouteUpdateOneRequiredWithoutRacesNestedInput = {
    create?: XOR<RouteCreateWithoutRacesInput, RouteUncheckedCreateWithoutRacesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRacesInput
    upsert?: RouteUpsertWithoutRacesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRacesInput, RouteUpdateWithoutRacesInput>, RouteUncheckedUpdateWithoutRacesInput>
  }

  export type RouteSegmentUpdateOneRequiredWithoutRacesNestedInput = {
    create?: XOR<RouteSegmentCreateWithoutRacesInput, RouteSegmentUncheckedCreateWithoutRacesInput>
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutRacesInput
    upsert?: RouteSegmentUpsertWithoutRacesInput
    connect?: RouteSegmentWhereUniqueInput
    update?: XOR<XOR<RouteSegmentUpdateToOneWithWhereWithoutRacesInput, RouteSegmentUpdateWithoutRacesInput>, RouteSegmentUncheckedUpdateWithoutRacesInput>
  }

  export type RaceParticipantUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutRaceInput | RaceParticipantUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutRaceInput | RaceParticipantUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutRaceInput | RaceParticipantUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type TelemetryWindowUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TelemetryWindowCreateWithoutRaceInput, TelemetryWindowUncheckedCreateWithoutRaceInput> | TelemetryWindowCreateWithoutRaceInput[] | TelemetryWindowUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutRaceInput | TelemetryWindowCreateOrConnectWithoutRaceInput[]
    upsert?: TelemetryWindowUpsertWithWhereUniqueWithoutRaceInput | TelemetryWindowUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: TelemetryWindowCreateManyRaceInputEnvelope
    set?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    disconnect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    delete?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    update?: TelemetryWindowUpdateWithWhereUniqueWithoutRaceInput | TelemetryWindowUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TelemetryWindowUpdateManyWithWhereWithoutRaceInput | TelemetryWindowUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
  }

  export type RaceScoreUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceScoreCreateWithoutRaceInput, RaceScoreUncheckedCreateWithoutRaceInput> | RaceScoreCreateWithoutRaceInput[] | RaceScoreUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutRaceInput | RaceScoreCreateOrConnectWithoutRaceInput[]
    upsert?: RaceScoreUpsertWithWhereUniqueWithoutRaceInput | RaceScoreUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceScoreCreateManyRaceInputEnvelope
    set?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    disconnect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    delete?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    update?: RaceScoreUpdateWithWhereUniqueWithoutRaceInput | RaceScoreUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceScoreUpdateManyWithWhereWithoutRaceInput | RaceScoreUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceScoreScalarWhereInput | RaceScoreScalarWhereInput[]
  }

  export type RaceResultUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutRaceInput | RaceResultUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutRaceInput | RaceResultUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutRaceInput | RaceResultUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutRaceInput | RaceParticipantUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutRaceInput | RaceParticipantUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutRaceInput | RaceParticipantUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TelemetryWindowCreateWithoutRaceInput, TelemetryWindowUncheckedCreateWithoutRaceInput> | TelemetryWindowCreateWithoutRaceInput[] | TelemetryWindowUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TelemetryWindowCreateOrConnectWithoutRaceInput | TelemetryWindowCreateOrConnectWithoutRaceInput[]
    upsert?: TelemetryWindowUpsertWithWhereUniqueWithoutRaceInput | TelemetryWindowUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: TelemetryWindowCreateManyRaceInputEnvelope
    set?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    disconnect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    delete?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    connect?: TelemetryWindowWhereUniqueInput | TelemetryWindowWhereUniqueInput[]
    update?: TelemetryWindowUpdateWithWhereUniqueWithoutRaceInput | TelemetryWindowUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TelemetryWindowUpdateManyWithWhereWithoutRaceInput | TelemetryWindowUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
  }

  export type RaceScoreUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceScoreCreateWithoutRaceInput, RaceScoreUncheckedCreateWithoutRaceInput> | RaceScoreCreateWithoutRaceInput[] | RaceScoreUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceScoreCreateOrConnectWithoutRaceInput | RaceScoreCreateOrConnectWithoutRaceInput[]
    upsert?: RaceScoreUpsertWithWhereUniqueWithoutRaceInput | RaceScoreUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceScoreCreateManyRaceInputEnvelope
    set?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    disconnect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    delete?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    connect?: RaceScoreWhereUniqueInput | RaceScoreWhereUniqueInput[]
    update?: RaceScoreUpdateWithWhereUniqueWithoutRaceInput | RaceScoreUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceScoreUpdateManyWithWhereWithoutRaceInput | RaceScoreUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceScoreScalarWhereInput | RaceScoreScalarWhereInput[]
  }

  export type RaceResultUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutRaceInput | RaceResultUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutRaceInput | RaceResultUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutRaceInput | RaceResultUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type DriverCreateNestedOneWithoutRaceParticipantsInput = {
    create?: XOR<DriverCreateWithoutRaceParticipantsInput, DriverUncheckedCreateWithoutRaceParticipantsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceParticipantsInput
    connect?: DriverWhereUniqueInput
  }

  export type RaceCreateNestedOneWithoutRaceParticipantsInput = {
    create?: XOR<RaceCreateWithoutRaceParticipantsInput, RaceUncheckedCreateWithoutRaceParticipantsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceParticipantsInput
    connect?: RaceWhereUniqueInput
  }

  export type EnumReadyToRaceFieldUpdateOperationsInput = {
    set?: $Enums.ReadyToRace
  }

  export type DriverUpdateOneRequiredWithoutRaceParticipantsNestedInput = {
    create?: XOR<DriverCreateWithoutRaceParticipantsInput, DriverUncheckedCreateWithoutRaceParticipantsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceParticipantsInput
    upsert?: DriverUpsertWithoutRaceParticipantsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRaceParticipantsInput, DriverUpdateWithoutRaceParticipantsInput>, DriverUncheckedUpdateWithoutRaceParticipantsInput>
  }

  export type RaceUpdateOneRequiredWithoutRaceParticipantsNestedInput = {
    create?: XOR<RaceCreateWithoutRaceParticipantsInput, RaceUncheckedCreateWithoutRaceParticipantsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceParticipantsInput
    upsert?: RaceUpsertWithoutRaceParticipantsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutRaceParticipantsInput, RaceUpdateWithoutRaceParticipantsInput>, RaceUncheckedUpdateWithoutRaceParticipantsInput>
  }

  export type RaceCreateNestedOneWithoutTelemetryWindowsInput = {
    create?: XOR<RaceCreateWithoutTelemetryWindowsInput, RaceUncheckedCreateWithoutTelemetryWindowsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTelemetryWindowsInput
    connect?: RaceWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutTelemetryWindowsInput = {
    create?: XOR<DriverCreateWithoutTelemetryWindowsInput, DriverUncheckedCreateWithoutTelemetryWindowsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTelemetryWindowsInput
    connect?: DriverWhereUniqueInput
  }

  export type RouteSegmentCreateNestedOneWithoutTelemetryWindowsInput = {
    create?: XOR<RouteSegmentCreateWithoutTelemetryWindowsInput, RouteSegmentUncheckedCreateWithoutTelemetryWindowsInput>
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutTelemetryWindowsInput
    connect?: RouteSegmentWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutTelemetryWindowsNestedInput = {
    create?: XOR<RaceCreateWithoutTelemetryWindowsInput, RaceUncheckedCreateWithoutTelemetryWindowsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTelemetryWindowsInput
    upsert?: RaceUpsertWithoutTelemetryWindowsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutTelemetryWindowsInput, RaceUpdateWithoutTelemetryWindowsInput>, RaceUncheckedUpdateWithoutTelemetryWindowsInput>
  }

  export type DriverUpdateOneRequiredWithoutTelemetryWindowsNestedInput = {
    create?: XOR<DriverCreateWithoutTelemetryWindowsInput, DriverUncheckedCreateWithoutTelemetryWindowsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTelemetryWindowsInput
    upsert?: DriverUpsertWithoutTelemetryWindowsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutTelemetryWindowsInput, DriverUpdateWithoutTelemetryWindowsInput>, DriverUncheckedUpdateWithoutTelemetryWindowsInput>
  }

  export type RouteSegmentUpdateOneRequiredWithoutTelemetryWindowsNestedInput = {
    create?: XOR<RouteSegmentCreateWithoutTelemetryWindowsInput, RouteSegmentUncheckedCreateWithoutTelemetryWindowsInput>
    connectOrCreate?: RouteSegmentCreateOrConnectWithoutTelemetryWindowsInput
    upsert?: RouteSegmentUpsertWithoutTelemetryWindowsInput
    connect?: RouteSegmentWhereUniqueInput
    update?: XOR<XOR<RouteSegmentUpdateToOneWithWhereWithoutTelemetryWindowsInput, RouteSegmentUpdateWithoutTelemetryWindowsInput>, RouteSegmentUncheckedUpdateWithoutTelemetryWindowsInput>
  }

  export type RaceCreateNestedOneWithoutRaceScoresInput = {
    create?: XOR<RaceCreateWithoutRaceScoresInput, RaceUncheckedCreateWithoutRaceScoresInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceScoresInput
    connect?: RaceWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutRaceScoresInput = {
    create?: XOR<DriverCreateWithoutRaceScoresInput, DriverUncheckedCreateWithoutRaceScoresInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceScoresInput
    connect?: DriverWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutRaceScoresNestedInput = {
    create?: XOR<RaceCreateWithoutRaceScoresInput, RaceUncheckedCreateWithoutRaceScoresInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceScoresInput
    upsert?: RaceUpsertWithoutRaceScoresInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutRaceScoresInput, RaceUpdateWithoutRaceScoresInput>, RaceUncheckedUpdateWithoutRaceScoresInput>
  }

  export type DriverUpdateOneRequiredWithoutRaceScoresNestedInput = {
    create?: XOR<DriverCreateWithoutRaceScoresInput, DriverUncheckedCreateWithoutRaceScoresInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceScoresInput
    upsert?: DriverUpsertWithoutRaceScoresInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRaceScoresInput, DriverUpdateWithoutRaceScoresInput>, DriverUncheckedUpdateWithoutRaceScoresInput>
  }

  export type RaceCreateNestedOneWithoutRaceResultsInput = {
    create?: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceResultsInput
    connect?: RaceWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutRaceResultsInput = {
    create?: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceResultsInput
    connect?: DriverWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutRaceResultsNestedInput = {
    create?: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceResultsInput
    upsert?: RaceUpsertWithoutRaceResultsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutRaceResultsInput, RaceUpdateWithoutRaceResultsInput>, RaceUncheckedUpdateWithoutRaceResultsInput>
  }

  export type DriverUpdateOneRequiredWithoutRaceResultsNestedInput = {
    create?: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceResultsInput
    upsert?: DriverUpsertWithoutRaceResultsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRaceResultsInput, DriverUpdateWithoutRaceResultsInput>, DriverUncheckedUpdateWithoutRaceResultsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumSpeedBucketFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeedBucket | EnumSpeedBucketFieldRefInput<$PrismaModel>
    in?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeedBucketFilter<$PrismaModel> | $Enums.SpeedBucket
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumSpeedBucketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpeedBucket | EnumSpeedBucketFieldRefInput<$PrismaModel>
    in?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpeedBucket[] | ListEnumSpeedBucketFieldRefInput<$PrismaModel>
    not?: NestedEnumSpeedBucketWithAggregatesFilter<$PrismaModel> | $Enums.SpeedBucket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpeedBucketFilter<$PrismaModel>
    _max?: NestedEnumSpeedBucketFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRaceStateFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceState | EnumRaceStateFieldRefInput<$PrismaModel>
    in?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStateFilter<$PrismaModel> | $Enums.RaceState
  }

  export type NestedEnumRaceStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceState | EnumRaceStateFieldRefInput<$PrismaModel>
    in?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceState[] | ListEnumRaceStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStateWithAggregatesFilter<$PrismaModel> | $Enums.RaceState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceStateFilter<$PrismaModel>
    _max?: NestedEnumRaceStateFilter<$PrismaModel>
  }

  export type NestedEnumReadyToRaceFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadyToRace | EnumReadyToRaceFieldRefInput<$PrismaModel>
    in?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumReadyToRaceFilter<$PrismaModel> | $Enums.ReadyToRace
  }

  export type NestedEnumReadyToRaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReadyToRace | EnumReadyToRaceFieldRefInput<$PrismaModel>
    in?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReadyToRace[] | ListEnumReadyToRaceFieldRefInput<$PrismaModel>
    not?: NestedEnumReadyToRaceWithAggregatesFilter<$PrismaModel> | $Enums.ReadyToRace
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReadyToRaceFilter<$PrismaModel>
    _max?: NestedEnumReadyToRaceFilter<$PrismaModel>
  }

  export type DriverSessionCreateWithoutDriverInput = {
    id?: string
    lastSeen: Date | string
    isActive: boolean
  }

  export type DriverSessionUncheckedCreateWithoutDriverInput = {
    id?: string
    lastSeen: Date | string
    isActive: boolean
  }

  export type DriverSessionCreateOrConnectWithoutDriverInput = {
    where: DriverSessionWhereUniqueInput
    create: XOR<DriverSessionCreateWithoutDriverInput, DriverSessionUncheckedCreateWithoutDriverInput>
  }

  export type DriverSessionCreateManyDriverInputEnvelope = {
    data: DriverSessionCreateManyDriverInput | DriverSessionCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type PresenceCreateWithoutDriverInput = {
    id?: string
    lat: bigint | number
    lon: bigint | number
    heading: bigint | number
    speedBucket: $Enums.SpeedBucket
    updatedAt?: Date | string
  }

  export type PresenceUncheckedCreateWithoutDriverInput = {
    id?: string
    lat: bigint | number
    lon: bigint | number
    heading: bigint | number
    speedBucket: $Enums.SpeedBucket
    updatedAt?: Date | string
  }

  export type PresenceCreateOrConnectWithoutDriverInput = {
    where: PresenceWhereUniqueInput
    create: XOR<PresenceCreateWithoutDriverInput, PresenceUncheckedCreateWithoutDriverInput>
  }

  export type PresenceCreateManyDriverInputEnvelope = {
    data: PresenceCreateManyDriverInput | PresenceCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type RaceParticipantCreateWithoutDriverInput = {
    id?: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
    race: RaceCreateNestedOneWithoutRaceParticipantsInput
  }

  export type RaceParticipantUncheckedCreateWithoutDriverInput = {
    id?: string
    raceId: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
  }

  export type RaceParticipantCreateOrConnectWithoutDriverInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutDriverInput, RaceParticipantUncheckedCreateWithoutDriverInput>
  }

  export type RaceParticipantCreateManyDriverInputEnvelope = {
    data: RaceParticipantCreateManyDriverInput | RaceParticipantCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type TelemetryWindowCreateWithoutDriverInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    race: RaceCreateNestedOneWithoutTelemetryWindowsInput
    segment: RouteSegmentCreateNestedOneWithoutTelemetryWindowsInput
  }

  export type TelemetryWindowUncheckedCreateWithoutDriverInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    raceId: string
    routeSegmentId: string
  }

  export type TelemetryWindowCreateOrConnectWithoutDriverInput = {
    where: TelemetryWindowWhereUniqueInput
    create: XOR<TelemetryWindowCreateWithoutDriverInput, TelemetryWindowUncheckedCreateWithoutDriverInput>
  }

  export type TelemetryWindowCreateManyDriverInputEnvelope = {
    data: TelemetryWindowCreateManyDriverInput | TelemetryWindowCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type RaceScoreCreateWithoutDriverInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    race: RaceCreateNestedOneWithoutRaceScoresInput
  }

  export type RaceScoreUncheckedCreateWithoutDriverInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    raceId: string
  }

  export type RaceScoreCreateOrConnectWithoutDriverInput = {
    where: RaceScoreWhereUniqueInput
    create: XOR<RaceScoreCreateWithoutDriverInput, RaceScoreUncheckedCreateWithoutDriverInput>
  }

  export type RaceScoreCreateManyDriverInputEnvelope = {
    data: RaceScoreCreateManyDriverInput | RaceScoreCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type RaceResultCreateWithoutWinnerDriverInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    race: RaceCreateNestedOneWithoutRaceResultsInput
  }

  export type RaceResultUncheckedCreateWithoutWinnerDriverInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    raceId: string
  }

  export type RaceResultCreateOrConnectWithoutWinnerDriverInput = {
    where: RaceResultWhereUniqueInput
    create: XOR<RaceResultCreateWithoutWinnerDriverInput, RaceResultUncheckedCreateWithoutWinnerDriverInput>
  }

  export type RaceResultCreateManyWinnerDriverInputEnvelope = {
    data: RaceResultCreateManyWinnerDriverInput | RaceResultCreateManyWinnerDriverInput[]
    skipDuplicates?: boolean
  }

  export type DriverSessionUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriverSessionWhereUniqueInput
    update: XOR<DriverSessionUpdateWithoutDriverInput, DriverSessionUncheckedUpdateWithoutDriverInput>
    create: XOR<DriverSessionCreateWithoutDriverInput, DriverSessionUncheckedCreateWithoutDriverInput>
  }

  export type DriverSessionUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriverSessionWhereUniqueInput
    data: XOR<DriverSessionUpdateWithoutDriverInput, DriverSessionUncheckedUpdateWithoutDriverInput>
  }

  export type DriverSessionUpdateManyWithWhereWithoutDriverInput = {
    where: DriverSessionScalarWhereInput
    data: XOR<DriverSessionUpdateManyMutationInput, DriverSessionUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverSessionScalarWhereInput = {
    AND?: DriverSessionScalarWhereInput | DriverSessionScalarWhereInput[]
    OR?: DriverSessionScalarWhereInput[]
    NOT?: DriverSessionScalarWhereInput | DriverSessionScalarWhereInput[]
    id?: StringFilter<"DriverSession"> | string
    lastSeen?: DateTimeFilter<"DriverSession"> | Date | string
    isActive?: BoolFilter<"DriverSession"> | boolean
    driverId?: StringFilter<"DriverSession"> | string
  }

  export type PresenceUpsertWithWhereUniqueWithoutDriverInput = {
    where: PresenceWhereUniqueInput
    update: XOR<PresenceUpdateWithoutDriverInput, PresenceUncheckedUpdateWithoutDriverInput>
    create: XOR<PresenceCreateWithoutDriverInput, PresenceUncheckedCreateWithoutDriverInput>
  }

  export type PresenceUpdateWithWhereUniqueWithoutDriverInput = {
    where: PresenceWhereUniqueInput
    data: XOR<PresenceUpdateWithoutDriverInput, PresenceUncheckedUpdateWithoutDriverInput>
  }

  export type PresenceUpdateManyWithWhereWithoutDriverInput = {
    where: PresenceScalarWhereInput
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyWithoutDriverInput>
  }

  export type PresenceScalarWhereInput = {
    AND?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
    OR?: PresenceScalarWhereInput[]
    NOT?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
    id?: StringFilter<"Presence"> | string
    driverId?: StringFilter<"Presence"> | string
    lat?: BigIntFilter<"Presence"> | bigint | number
    lon?: BigIntFilter<"Presence"> | bigint | number
    heading?: BigIntFilter<"Presence"> | bigint | number
    speedBucket?: EnumSpeedBucketFilter<"Presence"> | $Enums.SpeedBucket
    updatedAt?: DateTimeFilter<"Presence"> | Date | string
  }

  export type RaceParticipantUpsertWithWhereUniqueWithoutDriverInput = {
    where: RaceParticipantWhereUniqueInput
    update: XOR<RaceParticipantUpdateWithoutDriverInput, RaceParticipantUncheckedUpdateWithoutDriverInput>
    create: XOR<RaceParticipantCreateWithoutDriverInput, RaceParticipantUncheckedCreateWithoutDriverInput>
  }

  export type RaceParticipantUpdateWithWhereUniqueWithoutDriverInput = {
    where: RaceParticipantWhereUniqueInput
    data: XOR<RaceParticipantUpdateWithoutDriverInput, RaceParticipantUncheckedUpdateWithoutDriverInput>
  }

  export type RaceParticipantUpdateManyWithWhereWithoutDriverInput = {
    where: RaceParticipantScalarWhereInput
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyWithoutDriverInput>
  }

  export type RaceParticipantScalarWhereInput = {
    AND?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
    OR?: RaceParticipantScalarWhereInput[]
    NOT?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
    id?: StringFilter<"RaceParticipant"> | string
    raceId?: StringFilter<"RaceParticipant"> | string
    driverId?: StringFilter<"RaceParticipant"> | string
    joinedAt?: DateTimeFilter<"RaceParticipant"> | Date | string
    status?: EnumReadyToRaceFilter<"RaceParticipant"> | $Enums.ReadyToRace
  }

  export type TelemetryWindowUpsertWithWhereUniqueWithoutDriverInput = {
    where: TelemetryWindowWhereUniqueInput
    update: XOR<TelemetryWindowUpdateWithoutDriverInput, TelemetryWindowUncheckedUpdateWithoutDriverInput>
    create: XOR<TelemetryWindowCreateWithoutDriverInput, TelemetryWindowUncheckedCreateWithoutDriverInput>
  }

  export type TelemetryWindowUpdateWithWhereUniqueWithoutDriverInput = {
    where: TelemetryWindowWhereUniqueInput
    data: XOR<TelemetryWindowUpdateWithoutDriverInput, TelemetryWindowUncheckedUpdateWithoutDriverInput>
  }

  export type TelemetryWindowUpdateManyWithWhereWithoutDriverInput = {
    where: TelemetryWindowScalarWhereInput
    data: XOR<TelemetryWindowUpdateManyMutationInput, TelemetryWindowUncheckedUpdateManyWithoutDriverInput>
  }

  export type TelemetryWindowScalarWhereInput = {
    AND?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
    OR?: TelemetryWindowScalarWhereInput[]
    NOT?: TelemetryWindowScalarWhereInput | TelemetryWindowScalarWhereInput[]
    id?: StringFilter<"TelemetryWindow"> | string
    windowStart?: DateTimeFilter<"TelemetryWindow"> | Date | string
    windowEnd?: DateTimeFilter<"TelemetryWindow"> | Date | string
    avgSpeed?: IntFilter<"TelemetryWindow"> | number
    distance?: IntFilter<"TelemetryWindow"> | number
    raceId?: StringFilter<"TelemetryWindow"> | string
    driverId?: StringFilter<"TelemetryWindow"> | string
    routeSegmentId?: StringFilter<"TelemetryWindow"> | string
  }

  export type RaceScoreUpsertWithWhereUniqueWithoutDriverInput = {
    where: RaceScoreWhereUniqueInput
    update: XOR<RaceScoreUpdateWithoutDriverInput, RaceScoreUncheckedUpdateWithoutDriverInput>
    create: XOR<RaceScoreCreateWithoutDriverInput, RaceScoreUncheckedCreateWithoutDriverInput>
  }

  export type RaceScoreUpdateWithWhereUniqueWithoutDriverInput = {
    where: RaceScoreWhereUniqueInput
    data: XOR<RaceScoreUpdateWithoutDriverInput, RaceScoreUncheckedUpdateWithoutDriverInput>
  }

  export type RaceScoreUpdateManyWithWhereWithoutDriverInput = {
    where: RaceScoreScalarWhereInput
    data: XOR<RaceScoreUpdateManyMutationInput, RaceScoreUncheckedUpdateManyWithoutDriverInput>
  }

  export type RaceScoreScalarWhereInput = {
    AND?: RaceScoreScalarWhereInput | RaceScoreScalarWhereInput[]
    OR?: RaceScoreScalarWhereInput[]
    NOT?: RaceScoreScalarWhereInput | RaceScoreScalarWhereInput[]
    id?: StringFilter<"RaceScore"> | string
    totalDistance?: IntFilter<"RaceScore"> | number
    lastDelta?: IntFilter<"RaceScore"> | number
    raceId?: StringFilter<"RaceScore"> | string
    driverId?: StringFilter<"RaceScore"> | string
  }

  export type RaceResultUpsertWithWhereUniqueWithoutWinnerDriverInput = {
    where: RaceResultWhereUniqueInput
    update: XOR<RaceResultUpdateWithoutWinnerDriverInput, RaceResultUncheckedUpdateWithoutWinnerDriverInput>
    create: XOR<RaceResultCreateWithoutWinnerDriverInput, RaceResultUncheckedCreateWithoutWinnerDriverInput>
  }

  export type RaceResultUpdateWithWhereUniqueWithoutWinnerDriverInput = {
    where: RaceResultWhereUniqueInput
    data: XOR<RaceResultUpdateWithoutWinnerDriverInput, RaceResultUncheckedUpdateWithoutWinnerDriverInput>
  }

  export type RaceResultUpdateManyWithWhereWithoutWinnerDriverInput = {
    where: RaceResultScalarWhereInput
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyWithoutWinnerDriverInput>
  }

  export type RaceResultScalarWhereInput = {
    AND?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
    OR?: RaceResultScalarWhereInput[]
    NOT?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
    id?: StringFilter<"RaceResult"> | string
    finalDelta?: IntFilter<"RaceResult"> | number
    finishedAt?: DateTimeFilter<"RaceResult"> | Date | string
    raceId?: StringFilter<"RaceResult"> | string
    driverId?: StringFilter<"RaceResult"> | string
  }

  export type DriverCreateWithoutDriverSessionsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: PresenceCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUncheckedCreateWithoutDriverSessionsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    presences?: PresenceUncheckedCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverCreateOrConnectWithoutDriverSessionsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDriverSessionsInput, DriverUncheckedCreateWithoutDriverSessionsInput>
  }

  export type DriverUpsertWithoutDriverSessionsInput = {
    update: XOR<DriverUpdateWithoutDriverSessionsInput, DriverUncheckedUpdateWithoutDriverSessionsInput>
    create: XOR<DriverCreateWithoutDriverSessionsInput, DriverUncheckedCreateWithoutDriverSessionsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutDriverSessionsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutDriverSessionsInput, DriverUncheckedUpdateWithoutDriverSessionsInput>
  }

  export type DriverUpdateWithoutDriverSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: PresenceUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutDriverSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presences?: PresenceUncheckedUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverCreateWithoutPresencesInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUncheckedCreateWithoutPresencesInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionUncheckedCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverCreateOrConnectWithoutPresencesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutPresencesInput, DriverUncheckedCreateWithoutPresencesInput>
  }

  export type DriverUpsertWithoutPresencesInput = {
    update: XOR<DriverUpdateWithoutPresencesInput, DriverUncheckedUpdateWithoutPresencesInput>
    create: XOR<DriverCreateWithoutPresencesInput, DriverUncheckedCreateWithoutPresencesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutPresencesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutPresencesInput, DriverUncheckedUpdateWithoutPresencesInput>
  }

  export type DriverUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutPresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUncheckedUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput
  }

  export type RouteSegmentCreateWithoutRouteInput = {
    id?: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    races?: RaceCreateNestedManyWithoutSegmentInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentUncheckedCreateWithoutRouteInput = {
    id?: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    races?: RaceUncheckedCreateNestedManyWithoutSegmentInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentCreateOrConnectWithoutRouteInput = {
    where: RouteSegmentWhereUniqueInput
    create: XOR<RouteSegmentCreateWithoutRouteInput, RouteSegmentUncheckedCreateWithoutRouteInput>
  }

  export type RouteSegmentCreateManyRouteInputEnvelope = {
    data: RouteSegmentCreateManyRouteInput | RouteSegmentCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type RaceCreateWithoutRouteInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    segment: RouteSegmentCreateNestedOneWithoutRacesInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutRouteInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutRouteInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutRouteInput, RaceUncheckedCreateWithoutRouteInput>
  }

  export type RaceCreateManyRouteInputEnvelope = {
    data: RaceCreateManyRouteInput | RaceCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type RouteSegmentUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteSegmentWhereUniqueInput
    update: XOR<RouteSegmentUpdateWithoutRouteInput, RouteSegmentUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteSegmentCreateWithoutRouteInput, RouteSegmentUncheckedCreateWithoutRouteInput>
  }

  export type RouteSegmentUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteSegmentWhereUniqueInput
    data: XOR<RouteSegmentUpdateWithoutRouteInput, RouteSegmentUncheckedUpdateWithoutRouteInput>
  }

  export type RouteSegmentUpdateManyWithWhereWithoutRouteInput = {
    where: RouteSegmentScalarWhereInput
    data: XOR<RouteSegmentUpdateManyMutationInput, RouteSegmentUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteSegmentScalarWhereInput = {
    AND?: RouteSegmentScalarWhereInput | RouteSegmentScalarWhereInput[]
    OR?: RouteSegmentScalarWhereInput[]
    NOT?: RouteSegmentScalarWhereInput | RouteSegmentScalarWhereInput[]
    id?: StringFilter<"RouteSegment"> | string
    routeId?: StringFilter<"RouteSegment"> | string
    index?: IntFilter<"RouteSegment"> | number
    start?: JsonFilter<"RouteSegment">
    end?: JsonFilter<"RouteSegment">
  }

  export type RaceUpsertWithWhereUniqueWithoutRouteInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutRouteInput, RaceUncheckedUpdateWithoutRouteInput>
    create: XOR<RaceCreateWithoutRouteInput, RaceUncheckedCreateWithoutRouteInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutRouteInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutRouteInput, RaceUncheckedUpdateWithoutRouteInput>
  }

  export type RaceUpdateManyWithWhereWithoutRouteInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutRouteInput>
  }

  export type RaceScalarWhereInput = {
    AND?: RaceScalarWhereInput | RaceScalarWhereInput[]
    OR?: RaceScalarWhereInput[]
    NOT?: RaceScalarWhereInput | RaceScalarWhereInput[]
    id?: StringFilter<"Race"> | string
    routeId?: StringFilter<"Race"> | string
    state?: EnumRaceStateFilter<"Race"> | $Enums.RaceState
    startAt?: DateTimeFilter<"Race"> | Date | string
    durationSec?: IntFilter<"Race"> | number
    createdAt?: DateTimeFilter<"Race"> | Date | string
    routeSegmentId?: StringFilter<"Race"> | string
  }

  export type RouteCreateWithoutRouteSegmentsInput = {
    id?: string
    races?: RaceCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRouteSegmentsInput = {
    id?: string
    races?: RaceUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRouteSegmentsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRouteSegmentsInput, RouteUncheckedCreateWithoutRouteSegmentsInput>
  }

  export type RaceCreateWithoutSegmentInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    route: RouteCreateNestedOneWithoutRacesInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutSegmentInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutSegmentInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutSegmentInput, RaceUncheckedCreateWithoutSegmentInput>
  }

  export type RaceCreateManySegmentInputEnvelope = {
    data: RaceCreateManySegmentInput | RaceCreateManySegmentInput[]
    skipDuplicates?: boolean
  }

  export type TelemetryWindowCreateWithoutSegmentInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    race: RaceCreateNestedOneWithoutTelemetryWindowsInput
    driver: DriverCreateNestedOneWithoutTelemetryWindowsInput
  }

  export type TelemetryWindowUncheckedCreateWithoutSegmentInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    raceId: string
    driverId: string
  }

  export type TelemetryWindowCreateOrConnectWithoutSegmentInput = {
    where: TelemetryWindowWhereUniqueInput
    create: XOR<TelemetryWindowCreateWithoutSegmentInput, TelemetryWindowUncheckedCreateWithoutSegmentInput>
  }

  export type TelemetryWindowCreateManySegmentInputEnvelope = {
    data: TelemetryWindowCreateManySegmentInput | TelemetryWindowCreateManySegmentInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithoutRouteSegmentsInput = {
    update: XOR<RouteUpdateWithoutRouteSegmentsInput, RouteUncheckedUpdateWithoutRouteSegmentsInput>
    create: XOR<RouteCreateWithoutRouteSegmentsInput, RouteUncheckedCreateWithoutRouteSegmentsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRouteSegmentsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRouteSegmentsInput, RouteUncheckedUpdateWithoutRouteSegmentsInput>
  }

  export type RouteUpdateWithoutRouteSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    races?: RaceUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRouteSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    races?: RaceUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RaceUpsertWithWhereUniqueWithoutSegmentInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutSegmentInput, RaceUncheckedUpdateWithoutSegmentInput>
    create: XOR<RaceCreateWithoutSegmentInput, RaceUncheckedCreateWithoutSegmentInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutSegmentInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutSegmentInput, RaceUncheckedUpdateWithoutSegmentInput>
  }

  export type RaceUpdateManyWithWhereWithoutSegmentInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutSegmentInput>
  }

  export type TelemetryWindowUpsertWithWhereUniqueWithoutSegmentInput = {
    where: TelemetryWindowWhereUniqueInput
    update: XOR<TelemetryWindowUpdateWithoutSegmentInput, TelemetryWindowUncheckedUpdateWithoutSegmentInput>
    create: XOR<TelemetryWindowCreateWithoutSegmentInput, TelemetryWindowUncheckedCreateWithoutSegmentInput>
  }

  export type TelemetryWindowUpdateWithWhereUniqueWithoutSegmentInput = {
    where: TelemetryWindowWhereUniqueInput
    data: XOR<TelemetryWindowUpdateWithoutSegmentInput, TelemetryWindowUncheckedUpdateWithoutSegmentInput>
  }

  export type TelemetryWindowUpdateManyWithWhereWithoutSegmentInput = {
    where: TelemetryWindowScalarWhereInput
    data: XOR<TelemetryWindowUpdateManyMutationInput, TelemetryWindowUncheckedUpdateManyWithoutSegmentInput>
  }

  export type RouteCreateWithoutRacesInput = {
    id?: string
    routeSegments?: RouteSegmentCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRacesInput = {
    id?: string
    routeSegments?: RouteSegmentUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRacesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRacesInput, RouteUncheckedCreateWithoutRacesInput>
  }

  export type RouteSegmentCreateWithoutRacesInput = {
    id?: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    route: RouteCreateNestedOneWithoutRouteSegmentsInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentUncheckedCreateWithoutRacesInput = {
    id?: string
    routeId: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentCreateOrConnectWithoutRacesInput = {
    where: RouteSegmentWhereUniqueInput
    create: XOR<RouteSegmentCreateWithoutRacesInput, RouteSegmentUncheckedCreateWithoutRacesInput>
  }

  export type RaceParticipantCreateWithoutRaceInput = {
    id?: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
    driver: DriverCreateNestedOneWithoutRaceParticipantsInput
  }

  export type RaceParticipantUncheckedCreateWithoutRaceInput = {
    id?: string
    driverId: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
  }

  export type RaceParticipantCreateOrConnectWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput>
  }

  export type RaceParticipantCreateManyRaceInputEnvelope = {
    data: RaceParticipantCreateManyRaceInput | RaceParticipantCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type TelemetryWindowCreateWithoutRaceInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    driver: DriverCreateNestedOneWithoutTelemetryWindowsInput
    segment: RouteSegmentCreateNestedOneWithoutTelemetryWindowsInput
  }

  export type TelemetryWindowUncheckedCreateWithoutRaceInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    driverId: string
    routeSegmentId: string
  }

  export type TelemetryWindowCreateOrConnectWithoutRaceInput = {
    where: TelemetryWindowWhereUniqueInput
    create: XOR<TelemetryWindowCreateWithoutRaceInput, TelemetryWindowUncheckedCreateWithoutRaceInput>
  }

  export type TelemetryWindowCreateManyRaceInputEnvelope = {
    data: TelemetryWindowCreateManyRaceInput | TelemetryWindowCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type RaceScoreCreateWithoutRaceInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    driver: DriverCreateNestedOneWithoutRaceScoresInput
  }

  export type RaceScoreUncheckedCreateWithoutRaceInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    driverId: string
  }

  export type RaceScoreCreateOrConnectWithoutRaceInput = {
    where: RaceScoreWhereUniqueInput
    create: XOR<RaceScoreCreateWithoutRaceInput, RaceScoreUncheckedCreateWithoutRaceInput>
  }

  export type RaceScoreCreateManyRaceInputEnvelope = {
    data: RaceScoreCreateManyRaceInput | RaceScoreCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type RaceResultCreateWithoutRaceInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    winnerDriver: DriverCreateNestedOneWithoutRaceResultsInput
  }

  export type RaceResultUncheckedCreateWithoutRaceInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    driverId: string
  }

  export type RaceResultCreateOrConnectWithoutRaceInput = {
    where: RaceResultWhereUniqueInput
    create: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput>
  }

  export type RaceResultCreateManyRaceInputEnvelope = {
    data: RaceResultCreateManyRaceInput | RaceResultCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithoutRacesInput = {
    update: XOR<RouteUpdateWithoutRacesInput, RouteUncheckedUpdateWithoutRacesInput>
    create: XOR<RouteCreateWithoutRacesInput, RouteUncheckedCreateWithoutRacesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRacesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRacesInput, RouteUncheckedUpdateWithoutRacesInput>
  }

  export type RouteUpdateWithoutRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeSegments?: RouteSegmentUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeSegments?: RouteSegmentUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteSegmentUpsertWithoutRacesInput = {
    update: XOR<RouteSegmentUpdateWithoutRacesInput, RouteSegmentUncheckedUpdateWithoutRacesInput>
    create: XOR<RouteSegmentCreateWithoutRacesInput, RouteSegmentUncheckedCreateWithoutRacesInput>
    where?: RouteSegmentWhereInput
  }

  export type RouteSegmentUpdateToOneWithWhereWithoutRacesInput = {
    where?: RouteSegmentWhereInput
    data: XOR<RouteSegmentUpdateWithoutRacesInput, RouteSegmentUncheckedUpdateWithoutRacesInput>
  }

  export type RouteSegmentUpdateWithoutRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    route?: RouteUpdateOneRequiredWithoutRouteSegmentsNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutSegmentNestedInput
  }

  export type RouteSegmentUncheckedUpdateWithoutRacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type RaceParticipantUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    update: XOR<RaceParticipantUpdateWithoutRaceInput, RaceParticipantUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput>
  }

  export type RaceParticipantUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    data: XOR<RaceParticipantUpdateWithoutRaceInput, RaceParticipantUncheckedUpdateWithoutRaceInput>
  }

  export type RaceParticipantUpdateManyWithWhereWithoutRaceInput = {
    where: RaceParticipantScalarWhereInput
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyWithoutRaceInput>
  }

  export type TelemetryWindowUpsertWithWhereUniqueWithoutRaceInput = {
    where: TelemetryWindowWhereUniqueInput
    update: XOR<TelemetryWindowUpdateWithoutRaceInput, TelemetryWindowUncheckedUpdateWithoutRaceInput>
    create: XOR<TelemetryWindowCreateWithoutRaceInput, TelemetryWindowUncheckedCreateWithoutRaceInput>
  }

  export type TelemetryWindowUpdateWithWhereUniqueWithoutRaceInput = {
    where: TelemetryWindowWhereUniqueInput
    data: XOR<TelemetryWindowUpdateWithoutRaceInput, TelemetryWindowUncheckedUpdateWithoutRaceInput>
  }

  export type TelemetryWindowUpdateManyWithWhereWithoutRaceInput = {
    where: TelemetryWindowScalarWhereInput
    data: XOR<TelemetryWindowUpdateManyMutationInput, TelemetryWindowUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceScoreUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceScoreWhereUniqueInput
    update: XOR<RaceScoreUpdateWithoutRaceInput, RaceScoreUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceScoreCreateWithoutRaceInput, RaceScoreUncheckedCreateWithoutRaceInput>
  }

  export type RaceScoreUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceScoreWhereUniqueInput
    data: XOR<RaceScoreUpdateWithoutRaceInput, RaceScoreUncheckedUpdateWithoutRaceInput>
  }

  export type RaceScoreUpdateManyWithWhereWithoutRaceInput = {
    where: RaceScoreScalarWhereInput
    data: XOR<RaceScoreUpdateManyMutationInput, RaceScoreUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceResultUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceResultWhereUniqueInput
    update: XOR<RaceResultUpdateWithoutRaceInput, RaceResultUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput>
  }

  export type RaceResultUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceResultWhereUniqueInput
    data: XOR<RaceResultUpdateWithoutRaceInput, RaceResultUncheckedUpdateWithoutRaceInput>
  }

  export type RaceResultUpdateManyWithWhereWithoutRaceInput = {
    where: RaceResultScalarWhereInput
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyWithoutRaceInput>
  }

  export type DriverCreateWithoutRaceParticipantsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionCreateNestedManyWithoutDriverInput
    presences?: PresenceCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUncheckedCreateWithoutRaceParticipantsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionUncheckedCreateNestedManyWithoutDriverInput
    presences?: PresenceUncheckedCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverCreateOrConnectWithoutRaceParticipantsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRaceParticipantsInput, DriverUncheckedCreateWithoutRaceParticipantsInput>
  }

  export type RaceCreateWithoutRaceParticipantsInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    route: RouteCreateNestedOneWithoutRacesInput
    segment: RouteSegmentCreateNestedOneWithoutRacesInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutRaceParticipantsInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutRaceParticipantsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutRaceParticipantsInput, RaceUncheckedCreateWithoutRaceParticipantsInput>
  }

  export type DriverUpsertWithoutRaceParticipantsInput = {
    update: XOR<DriverUpdateWithoutRaceParticipantsInput, DriverUncheckedUpdateWithoutRaceParticipantsInput>
    create: XOR<DriverCreateWithoutRaceParticipantsInput, DriverUncheckedCreateWithoutRaceParticipantsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRaceParticipantsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRaceParticipantsInput, DriverUncheckedUpdateWithoutRaceParticipantsInput>
  }

  export type DriverUpdateWithoutRaceParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUpdateManyWithoutDriverNestedInput
    presences?: PresenceUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutRaceParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUncheckedUpdateManyWithoutDriverNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput
  }

  export type RaceUpsertWithoutRaceParticipantsInput = {
    update: XOR<RaceUpdateWithoutRaceParticipantsInput, RaceUncheckedUpdateWithoutRaceParticipantsInput>
    create: XOR<RaceCreateWithoutRaceParticipantsInput, RaceUncheckedCreateWithoutRaceParticipantsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutRaceParticipantsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutRaceParticipantsInput, RaceUncheckedUpdateWithoutRaceParticipantsInput>
  }

  export type RaceUpdateWithoutRaceParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRacesNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutRacesNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutRaceParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateWithoutTelemetryWindowsInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    route: RouteCreateNestedOneWithoutRacesInput
    segment: RouteSegmentCreateNestedOneWithoutRacesInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutTelemetryWindowsInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutTelemetryWindowsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutTelemetryWindowsInput, RaceUncheckedCreateWithoutTelemetryWindowsInput>
  }

  export type DriverCreateWithoutTelemetryWindowsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionCreateNestedManyWithoutDriverInput
    presences?: PresenceCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUncheckedCreateWithoutTelemetryWindowsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionUncheckedCreateNestedManyWithoutDriverInput
    presences?: PresenceUncheckedCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverCreateOrConnectWithoutTelemetryWindowsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutTelemetryWindowsInput, DriverUncheckedCreateWithoutTelemetryWindowsInput>
  }

  export type RouteSegmentCreateWithoutTelemetryWindowsInput = {
    id?: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    route: RouteCreateNestedOneWithoutRouteSegmentsInput
    races?: RaceCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentUncheckedCreateWithoutTelemetryWindowsInput = {
    id?: string
    routeId: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
    races?: RaceUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type RouteSegmentCreateOrConnectWithoutTelemetryWindowsInput = {
    where: RouteSegmentWhereUniqueInput
    create: XOR<RouteSegmentCreateWithoutTelemetryWindowsInput, RouteSegmentUncheckedCreateWithoutTelemetryWindowsInput>
  }

  export type RaceUpsertWithoutTelemetryWindowsInput = {
    update: XOR<RaceUpdateWithoutTelemetryWindowsInput, RaceUncheckedUpdateWithoutTelemetryWindowsInput>
    create: XOR<RaceCreateWithoutTelemetryWindowsInput, RaceUncheckedCreateWithoutTelemetryWindowsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutTelemetryWindowsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutTelemetryWindowsInput, RaceUncheckedUpdateWithoutTelemetryWindowsInput>
  }

  export type RaceUpdateWithoutTelemetryWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRacesNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutRacesNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutTelemetryWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type DriverUpsertWithoutTelemetryWindowsInput = {
    update: XOR<DriverUpdateWithoutTelemetryWindowsInput, DriverUncheckedUpdateWithoutTelemetryWindowsInput>
    create: XOR<DriverCreateWithoutTelemetryWindowsInput, DriverUncheckedCreateWithoutTelemetryWindowsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutTelemetryWindowsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutTelemetryWindowsInput, DriverUncheckedUpdateWithoutTelemetryWindowsInput>
  }

  export type DriverUpdateWithoutTelemetryWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUpdateManyWithoutDriverNestedInput
    presences?: PresenceUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutTelemetryWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUncheckedUpdateManyWithoutDriverNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput
  }

  export type RouteSegmentUpsertWithoutTelemetryWindowsInput = {
    update: XOR<RouteSegmentUpdateWithoutTelemetryWindowsInput, RouteSegmentUncheckedUpdateWithoutTelemetryWindowsInput>
    create: XOR<RouteSegmentCreateWithoutTelemetryWindowsInput, RouteSegmentUncheckedCreateWithoutTelemetryWindowsInput>
    where?: RouteSegmentWhereInput
  }

  export type RouteSegmentUpdateToOneWithWhereWithoutTelemetryWindowsInput = {
    where?: RouteSegmentWhereInput
    data: XOR<RouteSegmentUpdateWithoutTelemetryWindowsInput, RouteSegmentUncheckedUpdateWithoutTelemetryWindowsInput>
  }

  export type RouteSegmentUpdateWithoutTelemetryWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    route?: RouteUpdateOneRequiredWithoutRouteSegmentsNestedInput
    races?: RaceUpdateManyWithoutSegmentNestedInput
  }

  export type RouteSegmentUncheckedUpdateWithoutTelemetryWindowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    races?: RaceUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type RaceCreateWithoutRaceScoresInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    route: RouteCreateNestedOneWithoutRacesInput
    segment: RouteSegmentCreateNestedOneWithoutRacesInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutRaceScoresInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutRaceScoresInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutRaceScoresInput, RaceUncheckedCreateWithoutRaceScoresInput>
  }

  export type DriverCreateWithoutRaceScoresInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionCreateNestedManyWithoutDriverInput
    presences?: PresenceCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverUncheckedCreateWithoutRaceScoresInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionUncheckedCreateNestedManyWithoutDriverInput
    presences?: PresenceUncheckedCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutWinnerDriverInput
  }

  export type DriverCreateOrConnectWithoutRaceScoresInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRaceScoresInput, DriverUncheckedCreateWithoutRaceScoresInput>
  }

  export type RaceUpsertWithoutRaceScoresInput = {
    update: XOR<RaceUpdateWithoutRaceScoresInput, RaceUncheckedUpdateWithoutRaceScoresInput>
    create: XOR<RaceCreateWithoutRaceScoresInput, RaceUncheckedCreateWithoutRaceScoresInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutRaceScoresInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutRaceScoresInput, RaceUncheckedUpdateWithoutRaceScoresInput>
  }

  export type RaceUpdateWithoutRaceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRacesNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutRacesNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutRaceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type DriverUpsertWithoutRaceScoresInput = {
    update: XOR<DriverUpdateWithoutRaceScoresInput, DriverUncheckedUpdateWithoutRaceScoresInput>
    create: XOR<DriverCreateWithoutRaceScoresInput, DriverUncheckedCreateWithoutRaceScoresInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRaceScoresInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRaceScoresInput, DriverUncheckedUpdateWithoutRaceScoresInput>
  }

  export type DriverUpdateWithoutRaceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUpdateManyWithoutDriverNestedInput
    presences?: PresenceUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutWinnerDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutRaceScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUncheckedUpdateManyWithoutDriverNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutWinnerDriverNestedInput
  }

  export type RaceCreateWithoutRaceResultsInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    route: RouteCreateNestedOneWithoutRacesInput
    segment: RouteSegmentCreateNestedOneWithoutRacesInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutRaceResultsInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutRaceInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutRaceResultsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
  }

  export type DriverCreateWithoutRaceResultsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionCreateNestedManyWithoutDriverInput
    presences?: PresenceCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutRaceResultsInput = {
    id?: string
    firstname: string
    lastname: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driverSessions?: DriverSessionUncheckedCreateNestedManyWithoutDriverInput
    presences?: PresenceUncheckedCreateNestedManyWithoutDriverInput
    raceParticipants?: RaceParticipantUncheckedCreateNestedManyWithoutDriverInput
    telemetryWindows?: TelemetryWindowUncheckedCreateNestedManyWithoutDriverInput
    raceScores?: RaceScoreUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutRaceResultsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
  }

  export type RaceUpsertWithoutRaceResultsInput = {
    update: XOR<RaceUpdateWithoutRaceResultsInput, RaceUncheckedUpdateWithoutRaceResultsInput>
    create: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutRaceResultsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutRaceResultsInput, RaceUncheckedUpdateWithoutRaceResultsInput>
  }

  export type RaceUpdateWithoutRaceResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRacesNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutRacesNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutRaceResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type DriverUpsertWithoutRaceResultsInput = {
    update: XOR<DriverUpdateWithoutRaceResultsInput, DriverUncheckedUpdateWithoutRaceResultsInput>
    create: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRaceResultsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRaceResultsInput, DriverUncheckedUpdateWithoutRaceResultsInput>
  }

  export type DriverUpdateWithoutRaceResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUpdateManyWithoutDriverNestedInput
    presences?: PresenceUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutRaceResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverSessions?: DriverSessionUncheckedUpdateManyWithoutDriverNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutDriverNestedInput
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutDriverNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutDriverNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverSessionCreateManyDriverInput = {
    id?: string
    lastSeen: Date | string
    isActive: boolean
  }

  export type PresenceCreateManyDriverInput = {
    id?: string
    lat: bigint | number
    lon: bigint | number
    heading: bigint | number
    speedBucket: $Enums.SpeedBucket
    updatedAt?: Date | string
  }

  export type RaceParticipantCreateManyDriverInput = {
    id?: string
    raceId: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
  }

  export type TelemetryWindowCreateManyDriverInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    raceId: string
    routeSegmentId: string
  }

  export type RaceScoreCreateManyDriverInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    raceId: string
  }

  export type RaceResultCreateManyWinnerDriverInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    raceId: string
  }

  export type DriverSessionUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DriverSessionUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DriverSessionUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PresenceUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: BigIntFieldUpdateOperationsInput | bigint | number
    lon?: BigIntFieldUpdateOperationsInput | bigint | number
    heading?: BigIntFieldUpdateOperationsInput | bigint | number
    speedBucket?: EnumSpeedBucketFieldUpdateOperationsInput | $Enums.SpeedBucket
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
    race?: RaceUpdateOneRequiredWithoutRaceParticipantsNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type RaceParticipantUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type TelemetryWindowUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    race?: RaceUpdateOneRequiredWithoutTelemetryWindowsNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutTelemetryWindowsNestedInput
  }

  export type TelemetryWindowUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type TelemetryWindowUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceScoreUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    race?: RaceUpdateOneRequiredWithoutRaceScoresNestedInput
  }

  export type RaceScoreUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceScoreUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceResultUpdateWithoutWinnerDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutRaceResultsNestedInput
  }

  export type RaceResultUncheckedUpdateWithoutWinnerDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceResultUncheckedUpdateManyWithoutWinnerDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteSegmentCreateManyRouteInput = {
    id?: string
    index: number
    start: JsonNullValueInput | InputJsonValue
    end: JsonNullValueInput | InputJsonValue
  }

  export type RaceCreateManyRouteInput = {
    id?: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
    routeSegmentId: string
  }

  export type RouteSegmentUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    races?: RaceUpdateManyWithoutSegmentNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutSegmentNestedInput
  }

  export type RouteSegmentUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
    races?: RaceUncheckedUpdateManyWithoutSegmentNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type RouteSegmentUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    start?: JsonNullValueInput | InputJsonValue
    end?: JsonNullValueInput | InputJsonValue
  }

  export type RaceUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segment?: RouteSegmentUpdateOneRequiredWithoutRacesNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceCreateManySegmentInput = {
    id?: string
    routeId: string
    state: $Enums.RaceState
    startAt: Date | string
    durationSec: number
    createdAt: Date | string
  }

  export type TelemetryWindowCreateManySegmentInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    raceId: string
    driverId: string
  }

  export type RaceUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutRacesNestedInput
    raceParticipants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raceParticipants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    telemetryWindows?: TelemetryWindowUncheckedUpdateManyWithoutRaceNestedInput
    raceScores?: RaceScoreUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    state?: EnumRaceStateFieldUpdateOperationsInput | $Enums.RaceState
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationSec?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelemetryWindowUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    race?: RaceUpdateOneRequiredWithoutTelemetryWindowsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTelemetryWindowsNestedInput
  }

  export type TelemetryWindowUncheckedUpdateWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type TelemetryWindowUncheckedUpdateManyWithoutSegmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    raceId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceParticipantCreateManyRaceInput = {
    id?: string
    driverId: string
    joinedAt?: Date | string
    status: $Enums.ReadyToRace
  }

  export type TelemetryWindowCreateManyRaceInput = {
    id?: string
    windowStart: Date | string
    windowEnd: Date | string
    avgSpeed: number
    distance: number
    driverId: string
    routeSegmentId: string
  }

  export type RaceScoreCreateManyRaceInput = {
    id?: string
    totalDistance: number
    lastDelta: number
    driverId: string
  }

  export type RaceResultCreateManyRaceInput = {
    id?: string
    finalDelta: number
    finishedAt: Date | string
    driverId: string
  }

  export type RaceParticipantUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
    driver?: DriverUpdateOneRequiredWithoutRaceParticipantsNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type RaceParticipantUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReadyToRaceFieldUpdateOperationsInput | $Enums.ReadyToRace
  }

  export type TelemetryWindowUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    driver?: DriverUpdateOneRequiredWithoutTelemetryWindowsNestedInput
    segment?: RouteSegmentUpdateOneRequiredWithoutTelemetryWindowsNestedInput
  }

  export type TelemetryWindowUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type TelemetryWindowUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    avgSpeed?: IntFieldUpdateOperationsInput | number
    distance?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    routeSegmentId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceScoreUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    driver?: DriverUpdateOneRequiredWithoutRaceScoresNestedInput
  }

  export type RaceScoreUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceScoreUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalDistance?: IntFieldUpdateOperationsInput | number
    lastDelta?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceResultUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerDriver?: DriverUpdateOneRequiredWithoutRaceResultsNestedInput
  }

  export type RaceResultUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceResultUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    finalDelta?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driverId?: StringFieldUpdateOperationsInput | string
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