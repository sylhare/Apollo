import { BookCategory } from '../app/models';
import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../app/server';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type FieldWrapper<T> = T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
}

export interface GraphQLAddBookInput {
  author?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<BookCategory>;
  editorId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface GraphQLAddBookResponse {
  book?: Maybe<FieldWrapper<GraphQLBook>>;
  code: FieldWrapper<Scalars['String']['output']>;
  message: FieldWrapper<Scalars['String']['output']>;
  success: FieldWrapper<Scalars['Boolean']['output']>;
}

export interface GraphQLBook {
  author: FieldWrapper<Scalars['String']['output']>;
  category: FieldWrapper<BookCategory>;
  editor: FieldWrapper<GraphQLEditor>;
  id: FieldWrapper<Scalars['ID']['output']>;
  pages: Array<Maybe<FieldWrapper<GraphQLPage>>>;
  title: FieldWrapper<Scalars['String']['output']>;
}

export { BookCategory };

export interface GraphQLEditor {
  id: FieldWrapper<Scalars['ID']['output']>;
}

export interface GraphQLMutation {
  addBook?: Maybe<FieldWrapper<GraphQLAddBookResponse>>;
}


export interface GraphQLMutationAddBookArgs {
  input?: InputMaybe<GraphQLAddBookInput>;
}

export interface GraphQLPage {
  book?: Maybe<FieldWrapper<GraphQLBook>>;
  content: FieldWrapper<Scalars['String']['output']>;
  number: FieldWrapper<Scalars['Int']['output']>;
}

export interface GraphQLQuery {
  books: Array<FieldWrapper<GraphQLBook>>;
  pages: Array<FieldWrapper<GraphQLPage>>;
}


export interface GraphQLQueryPagesArgs {
  bookId: Scalars['ID']['input'];
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type UnwrappedObject<T> = {
        [P in keyof T]: T[P] extends infer R | Promise<infer R> | (() => infer R2 | Promise<infer R2>)
          ? R & R2 : T[P]
      };
export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GraphQLResolversTypes = ResolversObject<{
  AddBookInput: ResolverTypeWrapper<Partial<GraphQLAddBookInput>>;
  AddBookResponse: ResolverTypeWrapper<Partial<Omit<GraphQLAddBookResponse, 'book'> & { book?: Maybe<GraphQLResolversTypes['Book']> }>>;
  Book: ResolverTypeWrapper<Partial<Omit<GraphQLBook, 'category' | 'pages'> & { category: GraphQLResolversTypes['BookCategory'], pages: Array<Maybe<GraphQLResolversTypes['Page']>> }>>;
  BookCategory: ResolverTypeWrapper<BookCategory>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
  Editor: ResolverTypeWrapper<Partial<GraphQLEditor>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']['output']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
  Mutation: ResolverTypeWrapper<{}>;
  Page: ResolverTypeWrapper<Partial<Omit<GraphQLPage, 'book'> & { book?: Maybe<GraphQLResolversTypes['Book']> }>>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = ResolversObject<{
  AddBookInput: Partial<GraphQLAddBookInput>;
  AddBookResponse: Partial<Omit<GraphQLAddBookResponse, 'book'> & { book?: Maybe<GraphQLResolversParentTypes['Book']> }>;
  Book: Partial<Omit<GraphQLBook, 'pages'> & { pages: Array<Maybe<GraphQLResolversParentTypes['Page']>> }>;
  Boolean: Partial<Scalars['Boolean']['output']>;
  Editor: Partial<GraphQLEditor>;
  ID: Partial<Scalars['ID']['output']>;
  Int: Partial<Scalars['Int']['output']>;
  Mutation: {};
  Page: Partial<Omit<GraphQLPage, 'book'> & { book?: Maybe<GraphQLResolversParentTypes['Book']> }>;
  Query: {};
  String: Partial<Scalars['String']['output']>;
}>;

export type GraphQLExtendsDirectiveArgs = { };

export type GraphQLExtendsDirectiveResolver<Result, Parent, ContextType = MyContext, Args = GraphQLExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GraphQLAddBookResponseResolvers<ContextType = MyContext, ParentType = GraphQLResolversParentTypes['AddBookResponse']> = ResolversObject<{
  book?: Resolver<Maybe<GraphQLResolversTypes['Book']>, ParentType, ContextType>;
  code?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<GraphQLResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLBookResolvers<ContextType = MyContext, ParentType = GraphQLResolversParentTypes['Book']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<GraphQLResolversTypes['Book']>, { __typename: 'Book' } & GraphQLRecursivePick<UnwrappedObject<ParentType>, {"id":true}>, ContextType>;
  author?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<GraphQLResolversTypes['BookCategory'], ParentType, ContextType>;
  editor?: Resolver<GraphQLResolversTypes['Editor'], ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  pages?: Resolver<Array<Maybe<GraphQLResolversTypes['Page']>>, ParentType, ContextType>;
  title?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLBookCategoryResolvers = EnumResolverSignature<{ BIOGRAPHY?: any, EDUCATION?: any, FICTION?: any, HISTORY?: any, POETRY?: any }, GraphQLResolversTypes['BookCategory']>;

export type GraphQLEditorResolvers<ContextType = MyContext, ParentType = GraphQLResolversParentTypes['Editor']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<GraphQLResolversTypes['Editor']>, { __typename: 'Editor' } & GraphQLRecursivePick<UnwrappedObject<ParentType>, {"id":true}>, ContextType>;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLMutationResolvers<ContextType = MyContext, ParentType = GraphQLResolversParentTypes['Mutation']> = ResolversObject<{
  addBook?: Resolver<Maybe<GraphQLResolversTypes['AddBookResponse']>, ParentType, ContextType, Partial<GraphQLMutationAddBookArgs>>;
}>;

export type GraphQLPageResolvers<ContextType = MyContext, ParentType = GraphQLResolversParentTypes['Page']> = ResolversObject<{
  book?: Resolver<Maybe<GraphQLResolversTypes['Book']>, ParentType, ContextType>;
  content?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLQueryResolvers<ContextType = MyContext, ParentType = GraphQLResolversParentTypes['Query']> = ResolversObject<{
  books?: Resolver<Array<GraphQLResolversTypes['Book']>, ParentType, ContextType>;
  pages?: Resolver<Array<GraphQLResolversTypes['Page']>, ParentType, ContextType, RequireFields<GraphQLQueryPagesArgs, 'bookId'>>;
}>;

export type GraphQLResolvers<ContextType = MyContext> = ResolversObject<{
  AddBookResponse?: GraphQLAddBookResponseResolvers<ContextType>;
  Book?: GraphQLBookResolvers<ContextType>;
  BookCategory?: GraphQLBookCategoryResolvers;
  Editor?: GraphQLEditorResolvers<ContextType>;
  Mutation?: GraphQLMutationResolvers<ContextType>;
  Page?: GraphQLPageResolvers<ContextType>;
  Query?: GraphQLQueryResolvers<ContextType>;
}>;

export type GraphQLDirectiveResolvers<ContextType = MyContext> = ResolversObject<{
  extends?: GraphQLExtendsDirectiveResolver<any, any, ContextType>;
}>;
