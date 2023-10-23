import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { useFetchData } from '@/hooks/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ContractAddress: any;
  Cursor: any;
  DateTime: any;
  Enum: any;
  bool: any;
  felt252: any;
  u8: any;
  u32: any;
  u64: any;
  u128: any;
  usize: any;
};

export type Drug = {
  __typename?: 'Drug';
  drug_id?: Maybe<Scalars['Enum']>;
  entity?: Maybe<Entity>;
  game_id?: Maybe<Scalars['u32']>;
  player_id?: Maybe<Scalars['ContractAddress']>;
  quantity?: Maybe<Scalars['usize']>;
};

export type DrugConnection = {
  __typename?: 'DrugConnection';
  edges?: Maybe<Array<Maybe<DrugEdge>>>;
  total_count: Scalars['Int'];
};

export type DrugEdge = {
  __typename?: 'DrugEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Drug>;
};

export type DrugOrder = {
  direction: OrderDirection;
  field: DrugOrderField;
};

export enum DrugOrderField {
  DrugId = 'DRUG_ID',
  GameId = 'GAME_ID',
  PlayerId = 'PLAYER_ID',
  Quantity = 'QUANTITY'
}

export type DrugWhereInput = {
  drug_id?: InputMaybe<Scalars['Enum']>;
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  player_id?: InputMaybe<Scalars['ContractAddress']>;
  player_idEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idGT?: InputMaybe<Scalars['ContractAddress']>;
  player_idGTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idLT?: InputMaybe<Scalars['ContractAddress']>;
  player_idLTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idNEQ?: InputMaybe<Scalars['ContractAddress']>;
  quantity?: InputMaybe<Scalars['usize']>;
  quantityEQ?: InputMaybe<Scalars['usize']>;
  quantityGT?: InputMaybe<Scalars['usize']>;
  quantityGTE?: InputMaybe<Scalars['usize']>;
  quantityLT?: InputMaybe<Scalars['usize']>;
  quantityLTE?: InputMaybe<Scalars['usize']>;
  quantityNEQ?: InputMaybe<Scalars['usize']>;
};

export type Entity = {
  __typename?: 'Entity';
  created_at?: Maybe<Scalars['DateTime']>;
  event_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  model_names?: Maybe<Scalars['String']>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EntityConnection = {
  __typename?: 'EntityConnection';
  edges?: Maybe<Array<Maybe<EntityEdge>>>;
  total_count: Scalars['Int'];
};

export type EntityEdge = {
  __typename?: 'EntityEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Entity>;
};

export type Event = {
  __typename?: 'Event';
  created_at?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  systemCall: SystemCall;
  transaction_hash?: Maybe<Scalars['String']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<EventEdge>>>;
  total_count: Scalars['Int'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Event>;
};

export type Game = {
  __typename?: 'Game';
  creator?: Maybe<Scalars['ContractAddress']>;
  entity?: Maybe<Entity>;
  game_id?: Maybe<Scalars['u32']>;
  game_mode?: Maybe<Scalars['Enum']>;
  is_finished?: Maybe<Scalars['bool']>;
  max_players?: Maybe<Scalars['usize']>;
  max_turns?: Maybe<Scalars['usize']>;
  num_players?: Maybe<Scalars['usize']>;
  start_time?: Maybe<Scalars['u64']>;
};

export type GameConnection = {
  __typename?: 'GameConnection';
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  total_count: Scalars['Int'];
};

export type GameEdge = {
  __typename?: 'GameEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Game>;
};

export type GameOrder = {
  direction: OrderDirection;
  field: GameOrderField;
};

export enum GameOrderField {
  Creator = 'CREATOR',
  GameId = 'GAME_ID',
  GameMode = 'GAME_MODE',
  IsFinished = 'IS_FINISHED',
  MaxPlayers = 'MAX_PLAYERS',
  MaxTurns = 'MAX_TURNS',
  NumPlayers = 'NUM_PLAYERS',
  StartTime = 'START_TIME'
}

export type GameWhereInput = {
  creator?: InputMaybe<Scalars['ContractAddress']>;
  creatorEQ?: InputMaybe<Scalars['ContractAddress']>;
  creatorGT?: InputMaybe<Scalars['ContractAddress']>;
  creatorGTE?: InputMaybe<Scalars['ContractAddress']>;
  creatorLT?: InputMaybe<Scalars['ContractAddress']>;
  creatorLTE?: InputMaybe<Scalars['ContractAddress']>;
  creatorNEQ?: InputMaybe<Scalars['ContractAddress']>;
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  game_mode?: InputMaybe<Scalars['Enum']>;
  is_finished?: InputMaybe<Scalars['bool']>;
  is_finishedEQ?: InputMaybe<Scalars['bool']>;
  is_finishedGT?: InputMaybe<Scalars['bool']>;
  is_finishedGTE?: InputMaybe<Scalars['bool']>;
  is_finishedLT?: InputMaybe<Scalars['bool']>;
  is_finishedLTE?: InputMaybe<Scalars['bool']>;
  is_finishedNEQ?: InputMaybe<Scalars['bool']>;
  max_players?: InputMaybe<Scalars['usize']>;
  max_playersEQ?: InputMaybe<Scalars['usize']>;
  max_playersGT?: InputMaybe<Scalars['usize']>;
  max_playersGTE?: InputMaybe<Scalars['usize']>;
  max_playersLT?: InputMaybe<Scalars['usize']>;
  max_playersLTE?: InputMaybe<Scalars['usize']>;
  max_playersNEQ?: InputMaybe<Scalars['usize']>;
  max_turns?: InputMaybe<Scalars['usize']>;
  max_turnsEQ?: InputMaybe<Scalars['usize']>;
  max_turnsGT?: InputMaybe<Scalars['usize']>;
  max_turnsGTE?: InputMaybe<Scalars['usize']>;
  max_turnsLT?: InputMaybe<Scalars['usize']>;
  max_turnsLTE?: InputMaybe<Scalars['usize']>;
  max_turnsNEQ?: InputMaybe<Scalars['usize']>;
  num_players?: InputMaybe<Scalars['usize']>;
  num_playersEQ?: InputMaybe<Scalars['usize']>;
  num_playersGT?: InputMaybe<Scalars['usize']>;
  num_playersGTE?: InputMaybe<Scalars['usize']>;
  num_playersLT?: InputMaybe<Scalars['usize']>;
  num_playersLTE?: InputMaybe<Scalars['usize']>;
  num_playersNEQ?: InputMaybe<Scalars['usize']>;
  start_time?: InputMaybe<Scalars['u64']>;
  start_timeEQ?: InputMaybe<Scalars['u64']>;
  start_timeGT?: InputMaybe<Scalars['u64']>;
  start_timeGTE?: InputMaybe<Scalars['u64']>;
  start_timeLT?: InputMaybe<Scalars['u64']>;
  start_timeLTE?: InputMaybe<Scalars['u64']>;
  start_timeNEQ?: InputMaybe<Scalars['u64']>;
};

export type Item = {
  __typename?: 'Item';
  entity?: Maybe<Entity>;
  game_id?: Maybe<Scalars['u32']>;
  item_id?: Maybe<Scalars['Enum']>;
  level?: Maybe<Scalars['u8']>;
  name?: Maybe<Scalars['felt252']>;
  player_id?: Maybe<Scalars['ContractAddress']>;
  value?: Maybe<Scalars['usize']>;
};

export type ItemConnection = {
  __typename?: 'ItemConnection';
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  total_count: Scalars['Int'];
};

export type ItemEdge = {
  __typename?: 'ItemEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Item>;
};

export type ItemOrder = {
  direction: OrderDirection;
  field: ItemOrderField;
};

export enum ItemOrderField {
  GameId = 'GAME_ID',
  ItemId = 'ITEM_ID',
  Level = 'LEVEL',
  Name = 'NAME',
  PlayerId = 'PLAYER_ID',
  Value = 'VALUE'
}

export type ItemWhereInput = {
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  item_id?: InputMaybe<Scalars['Enum']>;
  level?: InputMaybe<Scalars['u8']>;
  levelEQ?: InputMaybe<Scalars['u8']>;
  levelGT?: InputMaybe<Scalars['u8']>;
  levelGTE?: InputMaybe<Scalars['u8']>;
  levelLT?: InputMaybe<Scalars['u8']>;
  levelLTE?: InputMaybe<Scalars['u8']>;
  levelNEQ?: InputMaybe<Scalars['u8']>;
  name?: InputMaybe<Scalars['felt252']>;
  nameEQ?: InputMaybe<Scalars['felt252']>;
  nameGT?: InputMaybe<Scalars['felt252']>;
  nameGTE?: InputMaybe<Scalars['felt252']>;
  nameLT?: InputMaybe<Scalars['felt252']>;
  nameLTE?: InputMaybe<Scalars['felt252']>;
  nameNEQ?: InputMaybe<Scalars['felt252']>;
  player_id?: InputMaybe<Scalars['ContractAddress']>;
  player_idEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idGT?: InputMaybe<Scalars['ContractAddress']>;
  player_idGTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idLT?: InputMaybe<Scalars['ContractAddress']>;
  player_idLTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idNEQ?: InputMaybe<Scalars['ContractAddress']>;
  value?: InputMaybe<Scalars['usize']>;
  valueEQ?: InputMaybe<Scalars['usize']>;
  valueGT?: InputMaybe<Scalars['usize']>;
  valueGTE?: InputMaybe<Scalars['usize']>;
  valueLT?: InputMaybe<Scalars['usize']>;
  valueLTE?: InputMaybe<Scalars['usize']>;
  valueNEQ?: InputMaybe<Scalars['usize']>;
};

export type Market = {
  __typename?: 'Market';
  cash?: Maybe<Scalars['u128']>;
  drug_id?: Maybe<Scalars['Enum']>;
  entity?: Maybe<Entity>;
  game_id?: Maybe<Scalars['u32']>;
  location_id?: Maybe<Scalars['Enum']>;
  quantity?: Maybe<Scalars['usize']>;
};

export type MarketConnection = {
  __typename?: 'MarketConnection';
  edges?: Maybe<Array<Maybe<MarketEdge>>>;
  total_count: Scalars['Int'];
};

export type MarketEdge = {
  __typename?: 'MarketEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Market>;
};

export type MarketOrder = {
  direction: OrderDirection;
  field: MarketOrderField;
};

export enum MarketOrderField {
  Cash = 'CASH',
  DrugId = 'DRUG_ID',
  GameId = 'GAME_ID',
  LocationId = 'LOCATION_ID',
  Quantity = 'QUANTITY'
}

export type MarketWhereInput = {
  cash?: InputMaybe<Scalars['u128']>;
  cashEQ?: InputMaybe<Scalars['u128']>;
  cashGT?: InputMaybe<Scalars['u128']>;
  cashGTE?: InputMaybe<Scalars['u128']>;
  cashLT?: InputMaybe<Scalars['u128']>;
  cashLTE?: InputMaybe<Scalars['u128']>;
  cashNEQ?: InputMaybe<Scalars['u128']>;
  drug_id?: InputMaybe<Scalars['Enum']>;
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  location_id?: InputMaybe<Scalars['Enum']>;
  quantity?: InputMaybe<Scalars['usize']>;
  quantityEQ?: InputMaybe<Scalars['usize']>;
  quantityGT?: InputMaybe<Scalars['usize']>;
  quantityGTE?: InputMaybe<Scalars['usize']>;
  quantityLT?: InputMaybe<Scalars['usize']>;
  quantityLTE?: InputMaybe<Scalars['usize']>;
  quantityNEQ?: InputMaybe<Scalars['usize']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  id?: Maybe<Scalars['ID']>;
  uri?: Maybe<Scalars['String']>;
};

export type MetadataConnection = {
  __typename?: 'MetadataConnection';
  edges?: Maybe<Array<Maybe<MetadataEdge>>>;
  total_count: Scalars['Int'];
};

export type MetadataEdge = {
  __typename?: 'MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Metadata>;
};

export type Model = {
  __typename?: 'Model';
  class_hash?: Maybe<Scalars['felt252']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['felt252']>;
};

export type ModelConnection = {
  __typename?: 'ModelConnection';
  edges?: Maybe<Array<Maybe<ModelEdge>>>;
  total_count: Scalars['Int'];
};

export type ModelEdge = {
  __typename?: 'ModelEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Model>;
};

export type ModelUnion = Drug | Game | Item | Market | Player;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Player = {
  __typename?: 'Player';
  attack?: Maybe<Scalars['usize']>;
  avatar_id?: Maybe<Scalars['u8']>;
  cash?: Maybe<Scalars['u128']>;
  defense?: Maybe<Scalars['usize']>;
  drug_count?: Maybe<Scalars['usize']>;
  entity?: Maybe<Entity>;
  game_id?: Maybe<Scalars['u32']>;
  health?: Maybe<Scalars['u8']>;
  location_id?: Maybe<Scalars['Enum']>;
  max_items?: Maybe<Scalars['u8']>;
  max_turns?: Maybe<Scalars['usize']>;
  name?: Maybe<Scalars['felt252']>;
  player_id?: Maybe<Scalars['ContractAddress']>;
  speed?: Maybe<Scalars['usize']>;
  status?: Maybe<Scalars['Enum']>;
  transport?: Maybe<Scalars['usize']>;
  turn?: Maybe<Scalars['usize']>;
  wanted?: Maybe<Scalars['u8']>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  edges?: Maybe<Array<Maybe<PlayerEdge>>>;
  total_count: Scalars['Int'];
};

export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Player>;
};

export type PlayerOrder = {
  direction: OrderDirection;
  field: PlayerOrderField;
};

export enum PlayerOrderField {
  Attack = 'ATTACK',
  AvatarId = 'AVATAR_ID',
  Cash = 'CASH',
  Defense = 'DEFENSE',
  DrugCount = 'DRUG_COUNT',
  GameId = 'GAME_ID',
  Health = 'HEALTH',
  LocationId = 'LOCATION_ID',
  MaxItems = 'MAX_ITEMS',
  MaxTurns = 'MAX_TURNS',
  Name = 'NAME',
  PlayerId = 'PLAYER_ID',
  Speed = 'SPEED',
  Status = 'STATUS',
  Transport = 'TRANSPORT',
  Turn = 'TURN',
  Wanted = 'WANTED'
}

export type PlayerWhereInput = {
  attack?: InputMaybe<Scalars['usize']>;
  attackEQ?: InputMaybe<Scalars['usize']>;
  attackGT?: InputMaybe<Scalars['usize']>;
  attackGTE?: InputMaybe<Scalars['usize']>;
  attackLT?: InputMaybe<Scalars['usize']>;
  attackLTE?: InputMaybe<Scalars['usize']>;
  attackNEQ?: InputMaybe<Scalars['usize']>;
  avatar_id?: InputMaybe<Scalars['u8']>;
  avatar_idEQ?: InputMaybe<Scalars['u8']>;
  avatar_idGT?: InputMaybe<Scalars['u8']>;
  avatar_idGTE?: InputMaybe<Scalars['u8']>;
  avatar_idLT?: InputMaybe<Scalars['u8']>;
  avatar_idLTE?: InputMaybe<Scalars['u8']>;
  avatar_idNEQ?: InputMaybe<Scalars['u8']>;
  cash?: InputMaybe<Scalars['u128']>;
  cashEQ?: InputMaybe<Scalars['u128']>;
  cashGT?: InputMaybe<Scalars['u128']>;
  cashGTE?: InputMaybe<Scalars['u128']>;
  cashLT?: InputMaybe<Scalars['u128']>;
  cashLTE?: InputMaybe<Scalars['u128']>;
  cashNEQ?: InputMaybe<Scalars['u128']>;
  defense?: InputMaybe<Scalars['usize']>;
  defenseEQ?: InputMaybe<Scalars['usize']>;
  defenseGT?: InputMaybe<Scalars['usize']>;
  defenseGTE?: InputMaybe<Scalars['usize']>;
  defenseLT?: InputMaybe<Scalars['usize']>;
  defenseLTE?: InputMaybe<Scalars['usize']>;
  defenseNEQ?: InputMaybe<Scalars['usize']>;
  drug_count?: InputMaybe<Scalars['usize']>;
  drug_countEQ?: InputMaybe<Scalars['usize']>;
  drug_countGT?: InputMaybe<Scalars['usize']>;
  drug_countGTE?: InputMaybe<Scalars['usize']>;
  drug_countLT?: InputMaybe<Scalars['usize']>;
  drug_countLTE?: InputMaybe<Scalars['usize']>;
  drug_countNEQ?: InputMaybe<Scalars['usize']>;
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  health?: InputMaybe<Scalars['u8']>;
  healthEQ?: InputMaybe<Scalars['u8']>;
  healthGT?: InputMaybe<Scalars['u8']>;
  healthGTE?: InputMaybe<Scalars['u8']>;
  healthLT?: InputMaybe<Scalars['u8']>;
  healthLTE?: InputMaybe<Scalars['u8']>;
  healthNEQ?: InputMaybe<Scalars['u8']>;
  location_id?: InputMaybe<Scalars['Enum']>;
  max_items?: InputMaybe<Scalars['u8']>;
  max_itemsEQ?: InputMaybe<Scalars['u8']>;
  max_itemsGT?: InputMaybe<Scalars['u8']>;
  max_itemsGTE?: InputMaybe<Scalars['u8']>;
  max_itemsLT?: InputMaybe<Scalars['u8']>;
  max_itemsLTE?: InputMaybe<Scalars['u8']>;
  max_itemsNEQ?: InputMaybe<Scalars['u8']>;
  max_turns?: InputMaybe<Scalars['usize']>;
  max_turnsEQ?: InputMaybe<Scalars['usize']>;
  max_turnsGT?: InputMaybe<Scalars['usize']>;
  max_turnsGTE?: InputMaybe<Scalars['usize']>;
  max_turnsLT?: InputMaybe<Scalars['usize']>;
  max_turnsLTE?: InputMaybe<Scalars['usize']>;
  max_turnsNEQ?: InputMaybe<Scalars['usize']>;
  name?: InputMaybe<Scalars['felt252']>;
  nameEQ?: InputMaybe<Scalars['felt252']>;
  nameGT?: InputMaybe<Scalars['felt252']>;
  nameGTE?: InputMaybe<Scalars['felt252']>;
  nameLT?: InputMaybe<Scalars['felt252']>;
  nameLTE?: InputMaybe<Scalars['felt252']>;
  nameNEQ?: InputMaybe<Scalars['felt252']>;
  player_id?: InputMaybe<Scalars['ContractAddress']>;
  player_idEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idGT?: InputMaybe<Scalars['ContractAddress']>;
  player_idGTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idLT?: InputMaybe<Scalars['ContractAddress']>;
  player_idLTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idNEQ?: InputMaybe<Scalars['ContractAddress']>;
  speed?: InputMaybe<Scalars['usize']>;
  speedEQ?: InputMaybe<Scalars['usize']>;
  speedGT?: InputMaybe<Scalars['usize']>;
  speedGTE?: InputMaybe<Scalars['usize']>;
  speedLT?: InputMaybe<Scalars['usize']>;
  speedLTE?: InputMaybe<Scalars['usize']>;
  speedNEQ?: InputMaybe<Scalars['usize']>;
  status?: InputMaybe<Scalars['Enum']>;
  transport?: InputMaybe<Scalars['usize']>;
  transportEQ?: InputMaybe<Scalars['usize']>;
  transportGT?: InputMaybe<Scalars['usize']>;
  transportGTE?: InputMaybe<Scalars['usize']>;
  transportLT?: InputMaybe<Scalars['usize']>;
  transportLTE?: InputMaybe<Scalars['usize']>;
  transportNEQ?: InputMaybe<Scalars['usize']>;
  turn?: InputMaybe<Scalars['usize']>;
  turnEQ?: InputMaybe<Scalars['usize']>;
  turnGT?: InputMaybe<Scalars['usize']>;
  turnGTE?: InputMaybe<Scalars['usize']>;
  turnLT?: InputMaybe<Scalars['usize']>;
  turnLTE?: InputMaybe<Scalars['usize']>;
  turnNEQ?: InputMaybe<Scalars['usize']>;
  wanted?: InputMaybe<Scalars['u8']>;
  wantedEQ?: InputMaybe<Scalars['u8']>;
  wantedGT?: InputMaybe<Scalars['u8']>;
  wantedGTE?: InputMaybe<Scalars['u8']>;
  wantedLT?: InputMaybe<Scalars['u8']>;
  wantedLTE?: InputMaybe<Scalars['u8']>;
  wantedNEQ?: InputMaybe<Scalars['u8']>;
};

export type Query = {
  __typename?: 'Query';
  drugModels?: Maybe<DrugConnection>;
  entities?: Maybe<EntityConnection>;
  entity: Entity;
  events?: Maybe<EventConnection>;
  gameModels?: Maybe<GameConnection>;
  itemModels?: Maybe<ItemConnection>;
  marketModels?: Maybe<MarketConnection>;
  metadata: Metadata;
  metadatas?: Maybe<MetadataConnection>;
  model: Model;
  models?: Maybe<ModelConnection>;
  playerModels?: Maybe<PlayerConnection>;
  system: System;
  systemCall: SystemCall;
  systemCalls?: Maybe<SystemCallConnection>;
  systems?: Maybe<SystemConnection>;
};


export type QueryDrugModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrugOrder>;
  where?: InputMaybe<DrugWhereInput>;
};


export type QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryGameModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
  where?: InputMaybe<GameWhereInput>;
};


export type QueryItemModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ItemOrder>;
  where?: InputMaybe<ItemWhereInput>;
};


export type QueryMarketModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<MarketOrder>;
  where?: InputMaybe<MarketWhereInput>;
};


export type QueryMetadataArgs = {
  id: Scalars['ID'];
};


export type QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryModelArgs = {
  id: Scalars['ID'];
};


export type QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPlayerModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<PlayerOrder>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QuerySystemArgs = {
  id: Scalars['ID'];
};


export type QuerySystemCallArgs = {
  id: Scalars['ID'];
};


export type QuerySystemCallsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerySystemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  entityUpdated: Entity;
  modelRegistered: Model;
};


export type SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type System = {
  __typename?: 'System';
  class_hash?: Maybe<Scalars['felt252']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  systemCalls: Array<SystemCall>;
  transaction_hash?: Maybe<Scalars['felt252']>;
};

export type SystemCall = {
  __typename?: 'SystemCall';
  created_at?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  system: System;
  system_id?: Maybe<Scalars['ID']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

export type SystemCallConnection = {
  __typename?: 'SystemCallConnection';
  edges?: Maybe<Array<Maybe<SystemCallEdge>>>;
  total_count: Scalars['Int'];
};

export type SystemCallEdge = {
  __typename?: 'SystemCallEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<SystemCall>;
};

export type SystemConnection = {
  __typename?: 'SystemConnection';
  edges?: Maybe<Array<Maybe<SystemEdge>>>;
  total_count: Scalars['Int'];
};

export type SystemEdge = {
  __typename?: 'SystemEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<System>;
};

export type AvailableGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableGamesQuery = { __typename?: 'Query', gameModels?: { __typename?: 'GameConnection', total_count: number, edges?: Array<{ __typename?: 'GameEdge', cursor?: any | null, node?: { __typename?: 'Game', creator?: any | null, num_players?: any | null, max_players?: any | null, max_turns?: any | null, start_time?: any | null } | null } | null> | null } | null };

export type GlobalScoresQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
}>;


export type GlobalScoresQuery = { __typename?: 'Query', playerModels?: { __typename?: 'PlayerConnection', total_count: number, edges?: Array<{ __typename?: 'PlayerEdge', cursor?: any | null, node?: { __typename?: 'Player', game_id?: any | null, player_id?: any | null, name?: any | null, avatar_id?: any | null, cash?: any | null, health?: any | null, turn?: any | null } | null } | null> | null } | null };

export type MarketPricesQueryVariables = Exact<{
  gameId?: InputMaybe<Scalars['u32']>;
}>;


export type MarketPricesQuery = { __typename?: 'Query', marketModels?: { __typename?: 'MarketConnection', edges?: Array<{ __typename?: 'MarketEdge', node?: { __typename?: 'Market', drug_id?: any | null, location_id?: any | null, quantity?: any | null, cash?: any | null } | null } | null> | null } | null };

export type GameEntityQueryVariables = Exact<{
  id: Scalars['u32'];
}>;


export type GameEntityQuery = { __typename?: 'Query', gameModels?: { __typename?: 'GameConnection', edges?: Array<{ __typename?: 'GameEdge', node?: { __typename?: 'Game', game_id?: any | null, game_mode?: any | null, creator?: any | null, is_finished?: any | null, max_players?: any | null, max_turns?: any | null, num_players?: any | null, start_time?: any | null } | null } | null> | null } | null };

export type PlayerPropsFragment = { __typename?: 'Player', name?: any | null, avatar_id?: any | null, cash?: any | null, status?: any | null, location_id?: any | null, drug_count?: any | null, health?: any | null, turn?: any | null, max_turns?: any | null, max_items?: any | null, attack?: any | null, defense?: any | null, transport?: any | null, speed?: any | null, wanted?: any | null };

export type PlayerEntityQueryVariables = Exact<{
  gameId: Scalars['String'];
  playerId: Scalars['String'];
}>;


export type PlayerEntityQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', total_count: number, edges?: Array<{ __typename?: 'EntityEdge', node?: { __typename?: 'Entity', id?: string | null, models?: Array<{ __typename: 'Drug', drug_id?: any | null, quantity?: any | null } | { __typename: 'Game' } | { __typename: 'Item', item_id?: any | null, level?: any | null, name?: any | null, value?: any | null } | { __typename: 'Market' } | { __typename: 'Player', name?: any | null, avatar_id?: any | null, cash?: any | null, status?: any | null, location_id?: any | null, drug_count?: any | null, health?: any | null, turn?: any | null, max_turns?: any | null, max_items?: any | null, attack?: any | null, defense?: any | null, transport?: any | null, speed?: any | null, wanted?: any | null } | null> | null } | null } | null> | null } | null };

export type PlayerEntitySubscriptionSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type PlayerEntitySubscriptionSubscription = { __typename?: 'Subscription', entityUpdated: { __typename?: 'Entity', id?: string | null, keys?: Array<string | null> | null, model_names?: string | null, models?: Array<{ __typename: 'Drug' } | { __typename: 'Game' } | { __typename: 'Item' } | { __typename: 'Market' } | { __typename: 'Player', name?: any | null, avatar_id?: any | null, cash?: any | null, status?: any | null, location_id?: any | null, drug_count?: any | null, health?: any | null, turn?: any | null, max_turns?: any | null, max_items?: any | null, attack?: any | null, defense?: any | null, transport?: any | null, speed?: any | null, wanted?: any | null } | null> | null } };

export type LocationEntitiesQueryVariables = Exact<{
  gameId: Scalars['String'];
  locationId: Scalars['String'];
}>;


export type LocationEntitiesQuery = { __typename?: 'Query', entities?: { __typename?: 'EntityConnection', total_count: number, edges?: Array<{ __typename?: 'EntityEdge', cursor?: any | null, node?: { __typename?: 'Entity', keys?: Array<string | null> | null, models?: Array<{ __typename: 'Drug' } | { __typename: 'Game' } | { __typename: 'Item' } | { __typename: 'Market', cash?: any | null, quantity?: any | null, location_id?: any | null, drug_id?: any | null } | { __typename: 'Player' } | null> | null } | null } | null> | null } | null };

export const PlayerPropsFragmentDoc = `
    fragment PlayerProps on Player {
  name
  avatar_id
  cash
  status
  location_id
  drug_count
  health
  turn
  max_turns
  max_items
  attack
  defense
  transport
  speed
  wanted
}
    `;
export const AvailableGamesDocument = `
    query AvailableGames {
  gameModels(first: 10) {
    total_count
    edges {
      node {
        creator
        num_players
        max_players
        max_turns
        start_time
      }
      cursor
    }
  }
}
    `;
export const useAvailableGamesQuery = <
      TData = AvailableGamesQuery,
      TError = unknown
    >(
      variables?: AvailableGamesQueryVariables,
      options?: UseQueryOptions<AvailableGamesQuery, TError, TData>
    ) =>
    useQuery<AvailableGamesQuery, TError, TData>(
      variables === undefined ? ['AvailableGames'] : ['AvailableGames', variables],
      useFetchData<AvailableGamesQuery, AvailableGamesQueryVariables>(AvailableGamesDocument).bind(null, variables),
      options
    );

useAvailableGamesQuery.getKey = (variables?: AvailableGamesQueryVariables) => variables === undefined ? ['AvailableGames'] : ['AvailableGames', variables];
;

export const useInfiniteAvailableGamesQuery = <
      TData = AvailableGamesQuery,
      TError = unknown
    >(
      variables?: AvailableGamesQueryVariables,
      options?: UseInfiniteQueryOptions<AvailableGamesQuery, TError, TData>
    ) =>{
    const query = useFetchData<AvailableGamesQuery, AvailableGamesQueryVariables>(AvailableGamesDocument)
    return useInfiniteQuery<AvailableGamesQuery, TError, TData>(
      variables === undefined ? ['AvailableGames.infinite'] : ['AvailableGames.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteAvailableGamesQuery.getKey = (variables?: AvailableGamesQueryVariables) => variables === undefined ? ['AvailableGames.infinite'] : ['AvailableGames.infinite', variables];
;

export const GlobalScoresDocument = `
    query GlobalScores($limit: Int, $cursor: Cursor) {
  playerModels(
    first: $limit
    after: $cursor
    order: {direction: DESC, field: CASH}
  ) {
    total_count
    edges {
      node {
        game_id
        player_id
        name
        avatar_id
        cash
        health
        turn
      }
      cursor
    }
  }
}
    `;
export const useGlobalScoresQuery = <
      TData = GlobalScoresQuery,
      TError = unknown
    >(
      variables?: GlobalScoresQueryVariables,
      options?: UseQueryOptions<GlobalScoresQuery, TError, TData>
    ) =>
    useQuery<GlobalScoresQuery, TError, TData>(
      variables === undefined ? ['GlobalScores'] : ['GlobalScores', variables],
      useFetchData<GlobalScoresQuery, GlobalScoresQueryVariables>(GlobalScoresDocument).bind(null, variables),
      options
    );

useGlobalScoresQuery.getKey = (variables?: GlobalScoresQueryVariables) => variables === undefined ? ['GlobalScores'] : ['GlobalScores', variables];
;

export const useInfiniteGlobalScoresQuery = <
      TData = GlobalScoresQuery,
      TError = unknown
    >(
      variables?: GlobalScoresQueryVariables,
      options?: UseInfiniteQueryOptions<GlobalScoresQuery, TError, TData>
    ) =>{
    const query = useFetchData<GlobalScoresQuery, GlobalScoresQueryVariables>(GlobalScoresDocument)
    return useInfiniteQuery<GlobalScoresQuery, TError, TData>(
      variables === undefined ? ['GlobalScores.infinite'] : ['GlobalScores.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGlobalScoresQuery.getKey = (variables?: GlobalScoresQueryVariables) => variables === undefined ? ['GlobalScores.infinite'] : ['GlobalScores.infinite', variables];
;

export const MarketPricesDocument = `
    query MarketPrices($gameId: u32) {
  marketModels(first: 36, where: {game_id: $gameId}) {
    edges {
      node {
        drug_id
        location_id
        quantity
        cash
      }
    }
  }
}
    `;
export const useMarketPricesQuery = <
      TData = MarketPricesQuery,
      TError = unknown
    >(
      variables?: MarketPricesQueryVariables,
      options?: UseQueryOptions<MarketPricesQuery, TError, TData>
    ) =>
    useQuery<MarketPricesQuery, TError, TData>(
      variables === undefined ? ['MarketPrices'] : ['MarketPrices', variables],
      useFetchData<MarketPricesQuery, MarketPricesQueryVariables>(MarketPricesDocument).bind(null, variables),
      options
    );

useMarketPricesQuery.getKey = (variables?: MarketPricesQueryVariables) => variables === undefined ? ['MarketPrices'] : ['MarketPrices', variables];
;

export const useInfiniteMarketPricesQuery = <
      TData = MarketPricesQuery,
      TError = unknown
    >(
      variables?: MarketPricesQueryVariables,
      options?: UseInfiniteQueryOptions<MarketPricesQuery, TError, TData>
    ) =>{
    const query = useFetchData<MarketPricesQuery, MarketPricesQueryVariables>(MarketPricesDocument)
    return useInfiniteQuery<MarketPricesQuery, TError, TData>(
      variables === undefined ? ['MarketPrices.infinite'] : ['MarketPrices.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteMarketPricesQuery.getKey = (variables?: MarketPricesQueryVariables) => variables === undefined ? ['MarketPrices.infinite'] : ['MarketPrices.infinite', variables];
;

export const GameEntityDocument = `
    query GameEntity($id: u32!) {
  gameModels(where: {game_id: $id}) {
    edges {
      node {
        game_id
        game_mode
        creator
        is_finished
        max_players
        max_turns
        num_players
        start_time
      }
    }
  }
}
    `;
export const useGameEntityQuery = <
      TData = GameEntityQuery,
      TError = unknown
    >(
      variables: GameEntityQueryVariables,
      options?: UseQueryOptions<GameEntityQuery, TError, TData>
    ) =>
    useQuery<GameEntityQuery, TError, TData>(
      ['GameEntity', variables],
      useFetchData<GameEntityQuery, GameEntityQueryVariables>(GameEntityDocument).bind(null, variables),
      options
    );

useGameEntityQuery.getKey = (variables: GameEntityQueryVariables) => ['GameEntity', variables];
;

export const useInfiniteGameEntityQuery = <
      TData = GameEntityQuery,
      TError = unknown
    >(
      variables: GameEntityQueryVariables,
      options?: UseInfiniteQueryOptions<GameEntityQuery, TError, TData>
    ) =>{
    const query = useFetchData<GameEntityQuery, GameEntityQueryVariables>(GameEntityDocument)
    return useInfiniteQuery<GameEntityQuery, TError, TData>(
      ['GameEntity.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGameEntityQuery.getKey = (variables: GameEntityQueryVariables) => ['GameEntity.infinite', variables];
;

export const PlayerEntityDocument = `
    query PlayerEntity($gameId: String!, $playerId: String!) {
  entities(keys: [$gameId, $playerId]) {
    total_count
    edges {
      node {
        id
        models {
          __typename
          ... on Player {
            ...PlayerProps
          }
          ... on Drug {
            drug_id
            quantity
          }
          ... on Item {
            item_id
            level
            name
            value
          }
        }
      }
    }
  }
}
    ${PlayerPropsFragmentDoc}`;
export const usePlayerEntityQuery = <
      TData = PlayerEntityQuery,
      TError = unknown
    >(
      variables: PlayerEntityQueryVariables,
      options?: UseQueryOptions<PlayerEntityQuery, TError, TData>
    ) =>
    useQuery<PlayerEntityQuery, TError, TData>(
      ['PlayerEntity', variables],
      useFetchData<PlayerEntityQuery, PlayerEntityQueryVariables>(PlayerEntityDocument).bind(null, variables),
      options
    );

usePlayerEntityQuery.getKey = (variables: PlayerEntityQueryVariables) => ['PlayerEntity', variables];
;

export const useInfinitePlayerEntityQuery = <
      TData = PlayerEntityQuery,
      TError = unknown
    >(
      variables: PlayerEntityQueryVariables,
      options?: UseInfiniteQueryOptions<PlayerEntityQuery, TError, TData>
    ) =>{
    const query = useFetchData<PlayerEntityQuery, PlayerEntityQueryVariables>(PlayerEntityDocument)
    return useInfiniteQuery<PlayerEntityQuery, TError, TData>(
      ['PlayerEntity.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfinitePlayerEntityQuery.getKey = (variables: PlayerEntityQueryVariables) => ['PlayerEntity.infinite', variables];
;

export const PlayerEntitySubscriptionDocument = `
    subscription PlayerEntitySubscription($id: ID) {
  entityUpdated(id: $id) {
    id
    keys
    model_names
    models {
      __typename
      ... on Player {
        ...PlayerProps
      }
    }
  }
}
    ${PlayerPropsFragmentDoc}`;
export const LocationEntitiesDocument = `
    query LocationEntities($gameId: String!, $locationId: String!) {
  entities(keys: [$gameId, $locationId]) {
    total_count
    edges {
      node {
        keys
        models {
          __typename
          ... on Market {
            cash
            quantity
            location_id
            drug_id
          }
        }
      }
      cursor
    }
  }
}
    `;
export const useLocationEntitiesQuery = <
      TData = LocationEntitiesQuery,
      TError = unknown
    >(
      variables: LocationEntitiesQueryVariables,
      options?: UseQueryOptions<LocationEntitiesQuery, TError, TData>
    ) =>
    useQuery<LocationEntitiesQuery, TError, TData>(
      ['LocationEntities', variables],
      useFetchData<LocationEntitiesQuery, LocationEntitiesQueryVariables>(LocationEntitiesDocument).bind(null, variables),
      options
    );

useLocationEntitiesQuery.getKey = (variables: LocationEntitiesQueryVariables) => ['LocationEntities', variables];
;

export const useInfiniteLocationEntitiesQuery = <
      TData = LocationEntitiesQuery,
      TError = unknown
    >(
      variables: LocationEntitiesQueryVariables,
      options?: UseInfiniteQueryOptions<LocationEntitiesQuery, TError, TData>
    ) =>{
    const query = useFetchData<LocationEntitiesQuery, LocationEntitiesQueryVariables>(LocationEntitiesDocument)
    return useInfiniteQuery<LocationEntitiesQuery, TError, TData>(
      ['LocationEntities.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteLocationEntitiesQuery.getKey = (variables: LocationEntitiesQueryVariables) => ['LocationEntities.infinite', variables];
;
