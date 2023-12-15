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
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GraphQLAddBookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<BookCategory>;
  editorId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GraphQLAddBookResponse = {
  book?: Maybe<FieldWrapper<GraphQLBook>>;
  code: FieldWrapper<Scalars['String']['output']>;
  message: FieldWrapper<Scalars['String']['output']>;
  success: FieldWrapper<Scalars['Boolean']['output']>;
};

export type GraphQLBook = {
  author: FieldWrapper<Scalars['String']['output']>;
  category: FieldWrapper<BookCategory>;
  editor: FieldWrapper<GraphQLEditor>;
  id: FieldWrapper<Scalars['ID']['output']>;
  pages: Array<Maybe<FieldWrapper<GraphQLPage>>>;
  title: FieldWrapper<Scalars['String']['output']>;
};

export { BookCategory };

export type GraphQLEditor = {
  id: FieldWrapper<Scalars['ID']['output']>;
};

export type GraphQLMutation = {
  addBook?: Maybe<FieldWrapper<GraphQLAddBookResponse>>;
};


export type GraphQLMutationAddBookArgs = {
  input?: InputMaybe<GraphQLAddBookInput>;
};

export type GraphQLPage = {
  content: FieldWrapper<Scalars['String']['output']>;
  number: FieldWrapper<Scalars['Int']['output']>;
};

export type GraphQLQuery = {
  books: Array<FieldWrapper<GraphQLBook>>;
  pages: Array<FieldWrapper<GraphQLPage>>;
};


export type GraphQLQueryPagesArgs = {
  bookId: Scalars['ID']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


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
  AddBookInput: GraphQLAddBookInput;
  AddBookResponse: ResolverTypeWrapper<GraphQLAddBookResponse>;
  Book: ResolverTypeWrapper<GraphQLBook>;
  BookCategory: BookCategory;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Editor: ResolverTypeWrapper<GraphQLEditor>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Page: ResolverTypeWrapper<GraphQLPage>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = ResolversObject<{
  AddBookInput: GraphQLAddBookInput;
  AddBookResponse: GraphQLAddBookResponse;
  Book: GraphQLBook;
  Boolean: Scalars['Boolean']['output'];
  Editor: GraphQLEditor;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Page: GraphQLPage;
  Query: {};
  String: Scalars['String']['output'];
}>;

export type GraphQLExtendsDirectiveArgs = { };

export type GraphQLExtendsDirectiveResolver<Result, Parent, ContextType = MyContext, Args = GraphQLExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GraphQLExternalDirectiveArgs = { };

export type GraphQLExternalDirectiveResolver<Result, Parent, ContextType = MyContext, Args = GraphQLExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GraphQLKeyDirectiveArgs = {
  fields?: Maybe<Scalars['String']['input']>;
};

export type GraphQLKeyDirectiveResolver<Result, Parent, ContextType = MyContext, Args = GraphQLKeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type GraphQLAddBookResponseResolvers<ContextType = MyContext, ParentType extends GraphQLResolversParentTypes['AddBookResponse'] = GraphQLResolversParentTypes['AddBookResponse']> = ResolversObject<{
  book?: Resolver<Maybe<GraphQLResolversTypes['Book']>, ParentType, ContextType>;
  code?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<GraphQLResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLBookResolvers<ContextType = MyContext, ParentType extends GraphQLResolversParentTypes['Book'] = GraphQLResolversParentTypes['Book']> = ResolversObject<{
  author?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<GraphQLResolversTypes['BookCategory'], ParentType, ContextType>;
  editor?: Resolver<GraphQLResolversTypes['Editor'], ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  pages?: Resolver<Array<Maybe<GraphQLResolversTypes['Page']>>, ParentType, ContextType>;
  title?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLBookCategoryResolvers = EnumResolverSignature<{ BIOGRAPHY?: any, EDUCATION?: any, FICTION?: any, HISTORY?: any, POETRY?: any }, GraphQLResolversTypes['BookCategory']>;

export type GraphQLEditorResolvers<ContextType = MyContext, ParentType extends GraphQLResolversParentTypes['Editor'] = GraphQLResolversParentTypes['Editor']> = ResolversObject<{
  id?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLMutationResolvers<ContextType = MyContext, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = ResolversObject<{
  addBook?: Resolver<Maybe<GraphQLResolversTypes['AddBookResponse']>, ParentType, ContextType, Partial<GraphQLMutationAddBookArgs>>;
}>;

export type GraphQLPageResolvers<ContextType = MyContext, ParentType extends GraphQLResolversParentTypes['Page'] = GraphQLResolversParentTypes['Page']> = ResolversObject<{
  content?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<GraphQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLQueryResolvers<ContextType = MyContext, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = ResolversObject<{
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
  external?: GraphQLExternalDirectiveResolver<any, any, ContextType>;
  key?: GraphQLKeyDirectiveResolver<any, any, ContextType>;
}>;
