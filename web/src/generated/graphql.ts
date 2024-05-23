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
  u16: any;
  u32: any;
  u64: any;
  u128: any;
  u256: any;
};

export type DrugConfig = {
  __typename?: 'DrugConfig';
  base?: Maybe<Scalars['u16']>;
  drug?: Maybe<Scalars['Enum']>;
  drug_id?: Maybe<Scalars['u8']>;
  drugs_mode?: Maybe<Scalars['Enum']>;
  entity?: Maybe<World__Entity>;
  name?: Maybe<Scalars['u128']>;
  step?: Maybe<Scalars['u16']>;
  weight?: Maybe<Scalars['u16']>;
};

export type DrugConfigConnection = {
  __typename?: 'DrugConfigConnection';
  edges?: Maybe<Array<Maybe<DrugConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type DrugConfigEdge = {
  __typename?: 'DrugConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<DrugConfig>;
};

export type DrugConfigOrder = {
  direction: OrderDirection;
  field: DrugConfigOrderField;
};

export enum DrugConfigOrderField {
  Base = 'BASE',
  Drug = 'DRUG',
  DrugsMode = 'DRUGS_MODE',
  DrugId = 'DRUG_ID',
  Name = 'NAME',
  Step = 'STEP',
  Weight = 'WEIGHT'
}

export type DrugConfigWhereInput = {
  base?: InputMaybe<Scalars['u16']>;
  baseEQ?: InputMaybe<Scalars['u16']>;
  baseGT?: InputMaybe<Scalars['u16']>;
  baseGTE?: InputMaybe<Scalars['u16']>;
  baseIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  baseLIKE?: InputMaybe<Scalars['u16']>;
  baseLT?: InputMaybe<Scalars['u16']>;
  baseLTE?: InputMaybe<Scalars['u16']>;
  baseNEQ?: InputMaybe<Scalars['u16']>;
  baseNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  baseNOTLIKE?: InputMaybe<Scalars['u16']>;
  drug?: InputMaybe<Scalars['Enum']>;
  drug_id?: InputMaybe<Scalars['u8']>;
  drug_idEQ?: InputMaybe<Scalars['u8']>;
  drug_idGT?: InputMaybe<Scalars['u8']>;
  drug_idGTE?: InputMaybe<Scalars['u8']>;
  drug_idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  drug_idLIKE?: InputMaybe<Scalars['u8']>;
  drug_idLT?: InputMaybe<Scalars['u8']>;
  drug_idLTE?: InputMaybe<Scalars['u8']>;
  drug_idNEQ?: InputMaybe<Scalars['u8']>;
  drug_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  drug_idNOTLIKE?: InputMaybe<Scalars['u8']>;
  drugs_mode?: InputMaybe<Scalars['Enum']>;
  name?: InputMaybe<Scalars['u128']>;
  nameEQ?: InputMaybe<Scalars['u128']>;
  nameGT?: InputMaybe<Scalars['u128']>;
  nameGTE?: InputMaybe<Scalars['u128']>;
  nameIN?: InputMaybe<Array<InputMaybe<Scalars['u128']>>>;
  nameLIKE?: InputMaybe<Scalars['u128']>;
  nameLT?: InputMaybe<Scalars['u128']>;
  nameLTE?: InputMaybe<Scalars['u128']>;
  nameNEQ?: InputMaybe<Scalars['u128']>;
  nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']>>>;
  nameNOTLIKE?: InputMaybe<Scalars['u128']>;
  step?: InputMaybe<Scalars['u16']>;
  stepEQ?: InputMaybe<Scalars['u16']>;
  stepGT?: InputMaybe<Scalars['u16']>;
  stepGTE?: InputMaybe<Scalars['u16']>;
  stepIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  stepLIKE?: InputMaybe<Scalars['u16']>;
  stepLT?: InputMaybe<Scalars['u16']>;
  stepLTE?: InputMaybe<Scalars['u16']>;
  stepNEQ?: InputMaybe<Scalars['u16']>;
  stepNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  stepNOTLIKE?: InputMaybe<Scalars['u16']>;
  weight?: InputMaybe<Scalars['u16']>;
  weightEQ?: InputMaybe<Scalars['u16']>;
  weightGT?: InputMaybe<Scalars['u16']>;
  weightGTE?: InputMaybe<Scalars['u16']>;
  weightIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  weightLIKE?: InputMaybe<Scalars['u16']>;
  weightLT?: InputMaybe<Scalars['u16']>;
  weightLTE?: InputMaybe<Scalars['u16']>;
  weightNEQ?: InputMaybe<Scalars['u16']>;
  weightNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  weightNOTLIKE?: InputMaybe<Scalars['u16']>;
};

export type Erc20AllowanceModel = {
  __typename?: 'ERC20AllowanceModel';
  amount?: Maybe<Scalars['u256']>;
  entity?: Maybe<World__Entity>;
  owner?: Maybe<Scalars['ContractAddress']>;
  spender?: Maybe<Scalars['ContractAddress']>;
  token?: Maybe<Scalars['ContractAddress']>;
};

export type Erc20AllowanceModelConnection = {
  __typename?: 'ERC20AllowanceModelConnection';
  edges?: Maybe<Array<Maybe<Erc20AllowanceModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type Erc20AllowanceModelEdge = {
  __typename?: 'ERC20AllowanceModelEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Erc20AllowanceModel>;
};

export type Erc20AllowanceModelOrder = {
  direction: OrderDirection;
  field: Erc20AllowanceModelOrderField;
};

export enum Erc20AllowanceModelOrderField {
  Amount = 'AMOUNT',
  Owner = 'OWNER',
  Spender = 'SPENDER',
  Token = 'TOKEN'
}

export type Erc20AllowanceModelWhereInput = {
  amount?: InputMaybe<Scalars['u256']>;
  amountEQ?: InputMaybe<Scalars['u256']>;
  amountGT?: InputMaybe<Scalars['u256']>;
  amountGTE?: InputMaybe<Scalars['u256']>;
  amountIN?: InputMaybe<Array<InputMaybe<Scalars['u256']>>>;
  amountLIKE?: InputMaybe<Scalars['u256']>;
  amountLT?: InputMaybe<Scalars['u256']>;
  amountLTE?: InputMaybe<Scalars['u256']>;
  amountNEQ?: InputMaybe<Scalars['u256']>;
  amountNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u256']>>>;
  amountNOTLIKE?: InputMaybe<Scalars['u256']>;
  owner?: InputMaybe<Scalars['ContractAddress']>;
  ownerEQ?: InputMaybe<Scalars['ContractAddress']>;
  ownerGT?: InputMaybe<Scalars['ContractAddress']>;
  ownerGTE?: InputMaybe<Scalars['ContractAddress']>;
  ownerIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  ownerLIKE?: InputMaybe<Scalars['ContractAddress']>;
  ownerLT?: InputMaybe<Scalars['ContractAddress']>;
  ownerLTE?: InputMaybe<Scalars['ContractAddress']>;
  ownerNEQ?: InputMaybe<Scalars['ContractAddress']>;
  ownerNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  ownerNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  spender?: InputMaybe<Scalars['ContractAddress']>;
  spenderEQ?: InputMaybe<Scalars['ContractAddress']>;
  spenderGT?: InputMaybe<Scalars['ContractAddress']>;
  spenderGTE?: InputMaybe<Scalars['ContractAddress']>;
  spenderIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  spenderLIKE?: InputMaybe<Scalars['ContractAddress']>;
  spenderLT?: InputMaybe<Scalars['ContractAddress']>;
  spenderLTE?: InputMaybe<Scalars['ContractAddress']>;
  spenderNEQ?: InputMaybe<Scalars['ContractAddress']>;
  spenderNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  spenderNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  token?: InputMaybe<Scalars['ContractAddress']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenLIKE?: InputMaybe<Scalars['ContractAddress']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
};

export type Erc20BalanceModel = {
  __typename?: 'ERC20BalanceModel';
  account?: Maybe<Scalars['ContractAddress']>;
  amount?: Maybe<Scalars['u256']>;
  entity?: Maybe<World__Entity>;
  token?: Maybe<Scalars['ContractAddress']>;
};

export type Erc20BalanceModelConnection = {
  __typename?: 'ERC20BalanceModelConnection';
  edges?: Maybe<Array<Maybe<Erc20BalanceModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type Erc20BalanceModelEdge = {
  __typename?: 'ERC20BalanceModelEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Erc20BalanceModel>;
};

export type Erc20BalanceModelOrder = {
  direction: OrderDirection;
  field: Erc20BalanceModelOrderField;
};

export enum Erc20BalanceModelOrderField {
  Account = 'ACCOUNT',
  Amount = 'AMOUNT',
  Token = 'TOKEN'
}

export type Erc20BalanceModelWhereInput = {
  account?: InputMaybe<Scalars['ContractAddress']>;
  accountEQ?: InputMaybe<Scalars['ContractAddress']>;
  accountGT?: InputMaybe<Scalars['ContractAddress']>;
  accountGTE?: InputMaybe<Scalars['ContractAddress']>;
  accountIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  accountLIKE?: InputMaybe<Scalars['ContractAddress']>;
  accountLT?: InputMaybe<Scalars['ContractAddress']>;
  accountLTE?: InputMaybe<Scalars['ContractAddress']>;
  accountNEQ?: InputMaybe<Scalars['ContractAddress']>;
  accountNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  accountNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  amount?: InputMaybe<Scalars['u256']>;
  amountEQ?: InputMaybe<Scalars['u256']>;
  amountGT?: InputMaybe<Scalars['u256']>;
  amountGTE?: InputMaybe<Scalars['u256']>;
  amountIN?: InputMaybe<Array<InputMaybe<Scalars['u256']>>>;
  amountLIKE?: InputMaybe<Scalars['u256']>;
  amountLT?: InputMaybe<Scalars['u256']>;
  amountLTE?: InputMaybe<Scalars['u256']>;
  amountNEQ?: InputMaybe<Scalars['u256']>;
  amountNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u256']>>>;
  amountNOTLIKE?: InputMaybe<Scalars['u256']>;
  token?: InputMaybe<Scalars['ContractAddress']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenLIKE?: InputMaybe<Scalars['ContractAddress']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
};

export type Erc20MetadataModel = {
  __typename?: 'ERC20MetadataModel';
  decimals?: Maybe<Scalars['u8']>;
  entity?: Maybe<World__Entity>;
  name?: Maybe<Scalars['felt252']>;
  symbol?: Maybe<Scalars['felt252']>;
  token?: Maybe<Scalars['ContractAddress']>;
  total_supply?: Maybe<Scalars['u256']>;
};

export type Erc20MetadataModelConnection = {
  __typename?: 'ERC20MetadataModelConnection';
  edges?: Maybe<Array<Maybe<Erc20MetadataModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type Erc20MetadataModelEdge = {
  __typename?: 'ERC20MetadataModelEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Erc20MetadataModel>;
};

export type Erc20MetadataModelOrder = {
  direction: OrderDirection;
  field: Erc20MetadataModelOrderField;
};

export enum Erc20MetadataModelOrderField {
  Decimals = 'DECIMALS',
  Name = 'NAME',
  Symbol = 'SYMBOL',
  Token = 'TOKEN',
  TotalSupply = 'TOTAL_SUPPLY'
}

export type Erc20MetadataModelWhereInput = {
  decimals?: InputMaybe<Scalars['u8']>;
  decimalsEQ?: InputMaybe<Scalars['u8']>;
  decimalsGT?: InputMaybe<Scalars['u8']>;
  decimalsGTE?: InputMaybe<Scalars['u8']>;
  decimalsIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  decimalsLIKE?: InputMaybe<Scalars['u8']>;
  decimalsLT?: InputMaybe<Scalars['u8']>;
  decimalsLTE?: InputMaybe<Scalars['u8']>;
  decimalsNEQ?: InputMaybe<Scalars['u8']>;
  decimalsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  decimalsNOTLIKE?: InputMaybe<Scalars['u8']>;
  name?: InputMaybe<Scalars['felt252']>;
  nameEQ?: InputMaybe<Scalars['felt252']>;
  nameGT?: InputMaybe<Scalars['felt252']>;
  nameGTE?: InputMaybe<Scalars['felt252']>;
  nameIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  nameLIKE?: InputMaybe<Scalars['felt252']>;
  nameLT?: InputMaybe<Scalars['felt252']>;
  nameLTE?: InputMaybe<Scalars['felt252']>;
  nameNEQ?: InputMaybe<Scalars['felt252']>;
  nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  nameNOTLIKE?: InputMaybe<Scalars['felt252']>;
  symbol?: InputMaybe<Scalars['felt252']>;
  symbolEQ?: InputMaybe<Scalars['felt252']>;
  symbolGT?: InputMaybe<Scalars['felt252']>;
  symbolGTE?: InputMaybe<Scalars['felt252']>;
  symbolIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  symbolLIKE?: InputMaybe<Scalars['felt252']>;
  symbolLT?: InputMaybe<Scalars['felt252']>;
  symbolLTE?: InputMaybe<Scalars['felt252']>;
  symbolNEQ?: InputMaybe<Scalars['felt252']>;
  symbolNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  symbolNOTLIKE?: InputMaybe<Scalars['felt252']>;
  token?: InputMaybe<Scalars['ContractAddress']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenLIKE?: InputMaybe<Scalars['ContractAddress']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  total_supply?: InputMaybe<Scalars['u256']>;
  total_supplyEQ?: InputMaybe<Scalars['u256']>;
  total_supplyGT?: InputMaybe<Scalars['u256']>;
  total_supplyGTE?: InputMaybe<Scalars['u256']>;
  total_supplyIN?: InputMaybe<Array<InputMaybe<Scalars['u256']>>>;
  total_supplyLIKE?: InputMaybe<Scalars['u256']>;
  total_supplyLT?: InputMaybe<Scalars['u256']>;
  total_supplyLTE?: InputMaybe<Scalars['u256']>;
  total_supplyNEQ?: InputMaybe<Scalars['u256']>;
  total_supplyNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u256']>>>;
  total_supplyNOTLIKE?: InputMaybe<Scalars['u256']>;
};

export type EncounterConfig = {
  __typename?: 'EncounterConfig';
  attack?: Maybe<Scalars['u8']>;
  defense?: Maybe<Scalars['u8']>;
  encounter?: Maybe<Scalars['Enum']>;
  entity?: Maybe<World__Entity>;
  health?: Maybe<Scalars['u8']>;
  id?: Maybe<Scalars['u8']>;
  level?: Maybe<Scalars['u8']>;
  max_rep?: Maybe<Scalars['u8']>;
  min_rep?: Maybe<Scalars['u8']>;
  payout?: Maybe<Scalars['u32']>;
  rep_fight?: Maybe<Scalars['u8']>;
  rep_pay?: Maybe<Scalars['u8']>;
  rep_run?: Maybe<Scalars['u8']>;
  speed?: Maybe<Scalars['u8']>;
};

export type EncounterConfigConnection = {
  __typename?: 'EncounterConfigConnection';
  edges?: Maybe<Array<Maybe<EncounterConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type EncounterConfigEdge = {
  __typename?: 'EncounterConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<EncounterConfig>;
};

export type EncounterConfigOrder = {
  direction: OrderDirection;
  field: EncounterConfigOrderField;
};

export enum EncounterConfigOrderField {
  Attack = 'ATTACK',
  Defense = 'DEFENSE',
  Encounter = 'ENCOUNTER',
  Health = 'HEALTH',
  Id = 'ID',
  Level = 'LEVEL',
  MaxRep = 'MAX_REP',
  MinRep = 'MIN_REP',
  Payout = 'PAYOUT',
  RepFight = 'REP_FIGHT',
  RepPay = 'REP_PAY',
  RepRun = 'REP_RUN',
  Speed = 'SPEED'
}

export type EncounterConfigWhereInput = {
  attack?: InputMaybe<Scalars['u8']>;
  attackEQ?: InputMaybe<Scalars['u8']>;
  attackGT?: InputMaybe<Scalars['u8']>;
  attackGTE?: InputMaybe<Scalars['u8']>;
  attackIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  attackLIKE?: InputMaybe<Scalars['u8']>;
  attackLT?: InputMaybe<Scalars['u8']>;
  attackLTE?: InputMaybe<Scalars['u8']>;
  attackNEQ?: InputMaybe<Scalars['u8']>;
  attackNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  attackNOTLIKE?: InputMaybe<Scalars['u8']>;
  defense?: InputMaybe<Scalars['u8']>;
  defenseEQ?: InputMaybe<Scalars['u8']>;
  defenseGT?: InputMaybe<Scalars['u8']>;
  defenseGTE?: InputMaybe<Scalars['u8']>;
  defenseIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  defenseLIKE?: InputMaybe<Scalars['u8']>;
  defenseLT?: InputMaybe<Scalars['u8']>;
  defenseLTE?: InputMaybe<Scalars['u8']>;
  defenseNEQ?: InputMaybe<Scalars['u8']>;
  defenseNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  defenseNOTLIKE?: InputMaybe<Scalars['u8']>;
  encounter?: InputMaybe<Scalars['Enum']>;
  health?: InputMaybe<Scalars['u8']>;
  healthEQ?: InputMaybe<Scalars['u8']>;
  healthGT?: InputMaybe<Scalars['u8']>;
  healthGTE?: InputMaybe<Scalars['u8']>;
  healthIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  healthLIKE?: InputMaybe<Scalars['u8']>;
  healthLT?: InputMaybe<Scalars['u8']>;
  healthLTE?: InputMaybe<Scalars['u8']>;
  healthNEQ?: InputMaybe<Scalars['u8']>;
  healthNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  healthNOTLIKE?: InputMaybe<Scalars['u8']>;
  id?: InputMaybe<Scalars['u8']>;
  idEQ?: InputMaybe<Scalars['u8']>;
  idGT?: InputMaybe<Scalars['u8']>;
  idGTE?: InputMaybe<Scalars['u8']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  idLIKE?: InputMaybe<Scalars['u8']>;
  idLT?: InputMaybe<Scalars['u8']>;
  idLTE?: InputMaybe<Scalars['u8']>;
  idNEQ?: InputMaybe<Scalars['u8']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  idNOTLIKE?: InputMaybe<Scalars['u8']>;
  level?: InputMaybe<Scalars['u8']>;
  levelEQ?: InputMaybe<Scalars['u8']>;
  levelGT?: InputMaybe<Scalars['u8']>;
  levelGTE?: InputMaybe<Scalars['u8']>;
  levelIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  levelLIKE?: InputMaybe<Scalars['u8']>;
  levelLT?: InputMaybe<Scalars['u8']>;
  levelLTE?: InputMaybe<Scalars['u8']>;
  levelNEQ?: InputMaybe<Scalars['u8']>;
  levelNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  levelNOTLIKE?: InputMaybe<Scalars['u8']>;
  max_rep?: InputMaybe<Scalars['u8']>;
  max_repEQ?: InputMaybe<Scalars['u8']>;
  max_repGT?: InputMaybe<Scalars['u8']>;
  max_repGTE?: InputMaybe<Scalars['u8']>;
  max_repIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_repLIKE?: InputMaybe<Scalars['u8']>;
  max_repLT?: InputMaybe<Scalars['u8']>;
  max_repLTE?: InputMaybe<Scalars['u8']>;
  max_repNEQ?: InputMaybe<Scalars['u8']>;
  max_repNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_repNOTLIKE?: InputMaybe<Scalars['u8']>;
  min_rep?: InputMaybe<Scalars['u8']>;
  min_repEQ?: InputMaybe<Scalars['u8']>;
  min_repGT?: InputMaybe<Scalars['u8']>;
  min_repGTE?: InputMaybe<Scalars['u8']>;
  min_repIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  min_repLIKE?: InputMaybe<Scalars['u8']>;
  min_repLT?: InputMaybe<Scalars['u8']>;
  min_repLTE?: InputMaybe<Scalars['u8']>;
  min_repNEQ?: InputMaybe<Scalars['u8']>;
  min_repNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  min_repNOTLIKE?: InputMaybe<Scalars['u8']>;
  payout?: InputMaybe<Scalars['u32']>;
  payoutEQ?: InputMaybe<Scalars['u32']>;
  payoutGT?: InputMaybe<Scalars['u32']>;
  payoutGTE?: InputMaybe<Scalars['u32']>;
  payoutIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  payoutLIKE?: InputMaybe<Scalars['u32']>;
  payoutLT?: InputMaybe<Scalars['u32']>;
  payoutLTE?: InputMaybe<Scalars['u32']>;
  payoutNEQ?: InputMaybe<Scalars['u32']>;
  payoutNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  payoutNOTLIKE?: InputMaybe<Scalars['u32']>;
  rep_fight?: InputMaybe<Scalars['u8']>;
  rep_fightEQ?: InputMaybe<Scalars['u8']>;
  rep_fightGT?: InputMaybe<Scalars['u8']>;
  rep_fightGTE?: InputMaybe<Scalars['u8']>;
  rep_fightIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_fightLIKE?: InputMaybe<Scalars['u8']>;
  rep_fightLT?: InputMaybe<Scalars['u8']>;
  rep_fightLTE?: InputMaybe<Scalars['u8']>;
  rep_fightNEQ?: InputMaybe<Scalars['u8']>;
  rep_fightNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_fightNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_pay?: InputMaybe<Scalars['u8']>;
  rep_payEQ?: InputMaybe<Scalars['u8']>;
  rep_payGT?: InputMaybe<Scalars['u8']>;
  rep_payGTE?: InputMaybe<Scalars['u8']>;
  rep_payIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_payLIKE?: InputMaybe<Scalars['u8']>;
  rep_payLT?: InputMaybe<Scalars['u8']>;
  rep_payLTE?: InputMaybe<Scalars['u8']>;
  rep_payNEQ?: InputMaybe<Scalars['u8']>;
  rep_payNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_payNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_run?: InputMaybe<Scalars['u8']>;
  rep_runEQ?: InputMaybe<Scalars['u8']>;
  rep_runGT?: InputMaybe<Scalars['u8']>;
  rep_runGTE?: InputMaybe<Scalars['u8']>;
  rep_runIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_runLIKE?: InputMaybe<Scalars['u8']>;
  rep_runLT?: InputMaybe<Scalars['u8']>;
  rep_runLTE?: InputMaybe<Scalars['u8']>;
  rep_runNEQ?: InputMaybe<Scalars['u8']>;
  rep_runNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_runNOTLIKE?: InputMaybe<Scalars['u8']>;
  speed?: InputMaybe<Scalars['u8']>;
  speedEQ?: InputMaybe<Scalars['u8']>;
  speedGT?: InputMaybe<Scalars['u8']>;
  speedGTE?: InputMaybe<Scalars['u8']>;
  speedIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  speedLIKE?: InputMaybe<Scalars['u8']>;
  speedLT?: InputMaybe<Scalars['u8']>;
  speedLTE?: InputMaybe<Scalars['u8']>;
  speedNEQ?: InputMaybe<Scalars['u8']>;
  speedNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  speedNOTLIKE?: InputMaybe<Scalars['u8']>;
};

export type EncounterStatsConfig = {
  __typename?: 'EncounterStatsConfig';
  attack_base?: Maybe<Scalars['u8']>;
  attack_step?: Maybe<Scalars['u8']>;
  defense_base?: Maybe<Scalars['u8']>;
  defense_step?: Maybe<Scalars['u8']>;
  encounter?: Maybe<Scalars['Enum']>;
  encounters_mode?: Maybe<Scalars['Enum']>;
  entity?: Maybe<World__Entity>;
  health_base?: Maybe<Scalars['u8']>;
  health_step?: Maybe<Scalars['u8']>;
  speed_base?: Maybe<Scalars['u8']>;
  speed_step?: Maybe<Scalars['u8']>;
};

export type EncounterStatsConfigConnection = {
  __typename?: 'EncounterStatsConfigConnection';
  edges?: Maybe<Array<Maybe<EncounterStatsConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type EncounterStatsConfigEdge = {
  __typename?: 'EncounterStatsConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<EncounterStatsConfig>;
};

export type EncounterStatsConfigOrder = {
  direction: OrderDirection;
  field: EncounterStatsConfigOrderField;
};

export enum EncounterStatsConfigOrderField {
  AttackBase = 'ATTACK_BASE',
  AttackStep = 'ATTACK_STEP',
  DefenseBase = 'DEFENSE_BASE',
  DefenseStep = 'DEFENSE_STEP',
  Encounter = 'ENCOUNTER',
  EncountersMode = 'ENCOUNTERS_MODE',
  HealthBase = 'HEALTH_BASE',
  HealthStep = 'HEALTH_STEP',
  SpeedBase = 'SPEED_BASE',
  SpeedStep = 'SPEED_STEP'
}

export type EncounterStatsConfigWhereInput = {
  attack_base?: InputMaybe<Scalars['u8']>;
  attack_baseEQ?: InputMaybe<Scalars['u8']>;
  attack_baseGT?: InputMaybe<Scalars['u8']>;
  attack_baseGTE?: InputMaybe<Scalars['u8']>;
  attack_baseIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  attack_baseLIKE?: InputMaybe<Scalars['u8']>;
  attack_baseLT?: InputMaybe<Scalars['u8']>;
  attack_baseLTE?: InputMaybe<Scalars['u8']>;
  attack_baseNEQ?: InputMaybe<Scalars['u8']>;
  attack_baseNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  attack_baseNOTLIKE?: InputMaybe<Scalars['u8']>;
  attack_step?: InputMaybe<Scalars['u8']>;
  attack_stepEQ?: InputMaybe<Scalars['u8']>;
  attack_stepGT?: InputMaybe<Scalars['u8']>;
  attack_stepGTE?: InputMaybe<Scalars['u8']>;
  attack_stepIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  attack_stepLIKE?: InputMaybe<Scalars['u8']>;
  attack_stepLT?: InputMaybe<Scalars['u8']>;
  attack_stepLTE?: InputMaybe<Scalars['u8']>;
  attack_stepNEQ?: InputMaybe<Scalars['u8']>;
  attack_stepNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  attack_stepNOTLIKE?: InputMaybe<Scalars['u8']>;
  defense_base?: InputMaybe<Scalars['u8']>;
  defense_baseEQ?: InputMaybe<Scalars['u8']>;
  defense_baseGT?: InputMaybe<Scalars['u8']>;
  defense_baseGTE?: InputMaybe<Scalars['u8']>;
  defense_baseIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  defense_baseLIKE?: InputMaybe<Scalars['u8']>;
  defense_baseLT?: InputMaybe<Scalars['u8']>;
  defense_baseLTE?: InputMaybe<Scalars['u8']>;
  defense_baseNEQ?: InputMaybe<Scalars['u8']>;
  defense_baseNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  defense_baseNOTLIKE?: InputMaybe<Scalars['u8']>;
  defense_step?: InputMaybe<Scalars['u8']>;
  defense_stepEQ?: InputMaybe<Scalars['u8']>;
  defense_stepGT?: InputMaybe<Scalars['u8']>;
  defense_stepGTE?: InputMaybe<Scalars['u8']>;
  defense_stepIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  defense_stepLIKE?: InputMaybe<Scalars['u8']>;
  defense_stepLT?: InputMaybe<Scalars['u8']>;
  defense_stepLTE?: InputMaybe<Scalars['u8']>;
  defense_stepNEQ?: InputMaybe<Scalars['u8']>;
  defense_stepNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  defense_stepNOTLIKE?: InputMaybe<Scalars['u8']>;
  encounter?: InputMaybe<Scalars['Enum']>;
  encounters_mode?: InputMaybe<Scalars['Enum']>;
  health_base?: InputMaybe<Scalars['u8']>;
  health_baseEQ?: InputMaybe<Scalars['u8']>;
  health_baseGT?: InputMaybe<Scalars['u8']>;
  health_baseGTE?: InputMaybe<Scalars['u8']>;
  health_baseIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  health_baseLIKE?: InputMaybe<Scalars['u8']>;
  health_baseLT?: InputMaybe<Scalars['u8']>;
  health_baseLTE?: InputMaybe<Scalars['u8']>;
  health_baseNEQ?: InputMaybe<Scalars['u8']>;
  health_baseNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  health_baseNOTLIKE?: InputMaybe<Scalars['u8']>;
  health_step?: InputMaybe<Scalars['u8']>;
  health_stepEQ?: InputMaybe<Scalars['u8']>;
  health_stepGT?: InputMaybe<Scalars['u8']>;
  health_stepGTE?: InputMaybe<Scalars['u8']>;
  health_stepIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  health_stepLIKE?: InputMaybe<Scalars['u8']>;
  health_stepLT?: InputMaybe<Scalars['u8']>;
  health_stepLTE?: InputMaybe<Scalars['u8']>;
  health_stepNEQ?: InputMaybe<Scalars['u8']>;
  health_stepNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  health_stepNOTLIKE?: InputMaybe<Scalars['u8']>;
  speed_base?: InputMaybe<Scalars['u8']>;
  speed_baseEQ?: InputMaybe<Scalars['u8']>;
  speed_baseGT?: InputMaybe<Scalars['u8']>;
  speed_baseGTE?: InputMaybe<Scalars['u8']>;
  speed_baseIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  speed_baseLIKE?: InputMaybe<Scalars['u8']>;
  speed_baseLT?: InputMaybe<Scalars['u8']>;
  speed_baseLTE?: InputMaybe<Scalars['u8']>;
  speed_baseNEQ?: InputMaybe<Scalars['u8']>;
  speed_baseNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  speed_baseNOTLIKE?: InputMaybe<Scalars['u8']>;
  speed_step?: InputMaybe<Scalars['u8']>;
  speed_stepEQ?: InputMaybe<Scalars['u8']>;
  speed_stepGT?: InputMaybe<Scalars['u8']>;
  speed_stepGTE?: InputMaybe<Scalars['u8']>;
  speed_stepIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  speed_stepLIKE?: InputMaybe<Scalars['u8']>;
  speed_stepLT?: InputMaybe<Scalars['u8']>;
  speed_stepLTE?: InputMaybe<Scalars['u8']>;
  speed_stepNEQ?: InputMaybe<Scalars['u8']>;
  speed_stepNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  speed_stepNOTLIKE?: InputMaybe<Scalars['u8']>;
};

export type Game = {
  __typename?: 'Game';
  claimable?: Maybe<Scalars['u32']>;
  claimed?: Maybe<Scalars['bool']>;
  entity?: Maybe<World__Entity>;
  final_score?: Maybe<Scalars['u32']>;
  game_id?: Maybe<Scalars['u32']>;
  game_mode?: Maybe<Scalars['Enum']>;
  game_over?: Maybe<Scalars['bool']>;
  hustler_id?: Maybe<Scalars['u16']>;
  player_id?: Maybe<Scalars['ContractAddress']>;
  player_name?: Maybe<Scalars['u128']>;
  position?: Maybe<Scalars['u16']>;
  registered?: Maybe<Scalars['bool']>;
  season_version?: Maybe<Scalars['u16']>;
};

export type GameConfig = {
  __typename?: 'GameConfig';
  cash?: Maybe<Scalars['u32']>;
  entity?: Maybe<World__Entity>;
  health?: Maybe<Scalars['u8']>;
  max_rounds?: Maybe<Scalars['u8']>;
  max_turns?: Maybe<Scalars['u8']>;
  max_wanted_shopping?: Maybe<Scalars['u8']>;
  rep_buy_item?: Maybe<Scalars['u8']>;
  rep_carry_drugs?: Maybe<Scalars['u8']>;
  rep_drug_step?: Maybe<Scalars['u8']>;
  rep_hospitalized?: Maybe<Scalars['u8']>;
  rep_jailed?: Maybe<Scalars['u8']>;
  season_version?: Maybe<Scalars['u16']>;
};

export type GameConfigConnection = {
  __typename?: 'GameConfigConnection';
  edges?: Maybe<Array<Maybe<GameConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type GameConfigEdge = {
  __typename?: 'GameConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<GameConfig>;
};

export type GameConfigOrder = {
  direction: OrderDirection;
  field: GameConfigOrderField;
};

export enum GameConfigOrderField {
  Cash = 'CASH',
  Health = 'HEALTH',
  MaxRounds = 'MAX_ROUNDS',
  MaxTurns = 'MAX_TURNS',
  MaxWantedShopping = 'MAX_WANTED_SHOPPING',
  RepBuyItem = 'REP_BUY_ITEM',
  RepCarryDrugs = 'REP_CARRY_DRUGS',
  RepDrugStep = 'REP_DRUG_STEP',
  RepHospitalized = 'REP_HOSPITALIZED',
  RepJailed = 'REP_JAILED',
  SeasonVersion = 'SEASON_VERSION'
}

export type GameConfigWhereInput = {
  cash?: InputMaybe<Scalars['u32']>;
  cashEQ?: InputMaybe<Scalars['u32']>;
  cashGT?: InputMaybe<Scalars['u32']>;
  cashGTE?: InputMaybe<Scalars['u32']>;
  cashIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  cashLIKE?: InputMaybe<Scalars['u32']>;
  cashLT?: InputMaybe<Scalars['u32']>;
  cashLTE?: InputMaybe<Scalars['u32']>;
  cashNEQ?: InputMaybe<Scalars['u32']>;
  cashNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  cashNOTLIKE?: InputMaybe<Scalars['u32']>;
  health?: InputMaybe<Scalars['u8']>;
  healthEQ?: InputMaybe<Scalars['u8']>;
  healthGT?: InputMaybe<Scalars['u8']>;
  healthGTE?: InputMaybe<Scalars['u8']>;
  healthIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  healthLIKE?: InputMaybe<Scalars['u8']>;
  healthLT?: InputMaybe<Scalars['u8']>;
  healthLTE?: InputMaybe<Scalars['u8']>;
  healthNEQ?: InputMaybe<Scalars['u8']>;
  healthNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  healthNOTLIKE?: InputMaybe<Scalars['u8']>;
  max_rounds?: InputMaybe<Scalars['u8']>;
  max_roundsEQ?: InputMaybe<Scalars['u8']>;
  max_roundsGT?: InputMaybe<Scalars['u8']>;
  max_roundsGTE?: InputMaybe<Scalars['u8']>;
  max_roundsIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_roundsLIKE?: InputMaybe<Scalars['u8']>;
  max_roundsLT?: InputMaybe<Scalars['u8']>;
  max_roundsLTE?: InputMaybe<Scalars['u8']>;
  max_roundsNEQ?: InputMaybe<Scalars['u8']>;
  max_roundsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_roundsNOTLIKE?: InputMaybe<Scalars['u8']>;
  max_turns?: InputMaybe<Scalars['u8']>;
  max_turnsEQ?: InputMaybe<Scalars['u8']>;
  max_turnsGT?: InputMaybe<Scalars['u8']>;
  max_turnsGTE?: InputMaybe<Scalars['u8']>;
  max_turnsIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_turnsLIKE?: InputMaybe<Scalars['u8']>;
  max_turnsLT?: InputMaybe<Scalars['u8']>;
  max_turnsLTE?: InputMaybe<Scalars['u8']>;
  max_turnsNEQ?: InputMaybe<Scalars['u8']>;
  max_turnsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_turnsNOTLIKE?: InputMaybe<Scalars['u8']>;
  max_wanted_shopping?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingEQ?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingGT?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingGTE?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_wanted_shoppingLIKE?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingLT?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingLTE?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingNEQ?: InputMaybe<Scalars['u8']>;
  max_wanted_shoppingNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  max_wanted_shoppingNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_buy_item?: InputMaybe<Scalars['u8']>;
  rep_buy_itemEQ?: InputMaybe<Scalars['u8']>;
  rep_buy_itemGT?: InputMaybe<Scalars['u8']>;
  rep_buy_itemGTE?: InputMaybe<Scalars['u8']>;
  rep_buy_itemIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_buy_itemLIKE?: InputMaybe<Scalars['u8']>;
  rep_buy_itemLT?: InputMaybe<Scalars['u8']>;
  rep_buy_itemLTE?: InputMaybe<Scalars['u8']>;
  rep_buy_itemNEQ?: InputMaybe<Scalars['u8']>;
  rep_buy_itemNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_buy_itemNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_carry_drugs?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsEQ?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsGT?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsGTE?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_carry_drugsLIKE?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsLT?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsLTE?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsNEQ?: InputMaybe<Scalars['u8']>;
  rep_carry_drugsNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_carry_drugsNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_drug_step?: InputMaybe<Scalars['u8']>;
  rep_drug_stepEQ?: InputMaybe<Scalars['u8']>;
  rep_drug_stepGT?: InputMaybe<Scalars['u8']>;
  rep_drug_stepGTE?: InputMaybe<Scalars['u8']>;
  rep_drug_stepIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_drug_stepLIKE?: InputMaybe<Scalars['u8']>;
  rep_drug_stepLT?: InputMaybe<Scalars['u8']>;
  rep_drug_stepLTE?: InputMaybe<Scalars['u8']>;
  rep_drug_stepNEQ?: InputMaybe<Scalars['u8']>;
  rep_drug_stepNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_drug_stepNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_hospitalized?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedEQ?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedGT?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedGTE?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_hospitalizedLIKE?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedLT?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedLTE?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedNEQ?: InputMaybe<Scalars['u8']>;
  rep_hospitalizedNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_hospitalizedNOTLIKE?: InputMaybe<Scalars['u8']>;
  rep_jailed?: InputMaybe<Scalars['u8']>;
  rep_jailedEQ?: InputMaybe<Scalars['u8']>;
  rep_jailedGT?: InputMaybe<Scalars['u8']>;
  rep_jailedGTE?: InputMaybe<Scalars['u8']>;
  rep_jailedIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_jailedLIKE?: InputMaybe<Scalars['u8']>;
  rep_jailedLT?: InputMaybe<Scalars['u8']>;
  rep_jailedLTE?: InputMaybe<Scalars['u8']>;
  rep_jailedNEQ?: InputMaybe<Scalars['u8']>;
  rep_jailedNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  rep_jailedNOTLIKE?: InputMaybe<Scalars['u8']>;
  season_version?: InputMaybe<Scalars['u16']>;
  season_versionEQ?: InputMaybe<Scalars['u16']>;
  season_versionGT?: InputMaybe<Scalars['u16']>;
  season_versionGTE?: InputMaybe<Scalars['u16']>;
  season_versionIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionLIKE?: InputMaybe<Scalars['u16']>;
  season_versionLT?: InputMaybe<Scalars['u16']>;
  season_versionLTE?: InputMaybe<Scalars['u16']>;
  season_versionNEQ?: InputMaybe<Scalars['u16']>;
  season_versionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionNOTLIKE?: InputMaybe<Scalars['u16']>;
};

export type GameConnection = {
  __typename?: 'GameConnection';
  edges?: Maybe<Array<Maybe<GameEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
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
  Claimable = 'CLAIMABLE',
  Claimed = 'CLAIMED',
  FinalScore = 'FINAL_SCORE',
  GameId = 'GAME_ID',
  GameMode = 'GAME_MODE',
  GameOver = 'GAME_OVER',
  HustlerId = 'HUSTLER_ID',
  PlayerId = 'PLAYER_ID',
  PlayerName = 'PLAYER_NAME',
  Position = 'POSITION',
  Registered = 'REGISTERED',
  SeasonVersion = 'SEASON_VERSION'
}

export type GameStorePacked = {
  __typename?: 'GameStorePacked';
  entity?: Maybe<World__Entity>;
  game_id?: Maybe<Scalars['u32']>;
  packed?: Maybe<Scalars['felt252']>;
  player_id?: Maybe<Scalars['ContractAddress']>;
};

export type GameStorePackedConnection = {
  __typename?: 'GameStorePackedConnection';
  edges?: Maybe<Array<Maybe<GameStorePackedEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type GameStorePackedEdge = {
  __typename?: 'GameStorePackedEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<GameStorePacked>;
};

export type GameStorePackedOrder = {
  direction: OrderDirection;
  field: GameStorePackedOrderField;
};

export enum GameStorePackedOrderField {
  GameId = 'GAME_ID',
  Packed = 'PACKED',
  PlayerId = 'PLAYER_ID'
}

export type GameStorePackedWhereInput = {
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  game_idLIKE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u32']>;
  packed?: InputMaybe<Scalars['felt252']>;
  packedEQ?: InputMaybe<Scalars['felt252']>;
  packedGT?: InputMaybe<Scalars['felt252']>;
  packedGTE?: InputMaybe<Scalars['felt252']>;
  packedIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  packedLIKE?: InputMaybe<Scalars['felt252']>;
  packedLT?: InputMaybe<Scalars['felt252']>;
  packedLTE?: InputMaybe<Scalars['felt252']>;
  packedNEQ?: InputMaybe<Scalars['felt252']>;
  packedNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  packedNOTLIKE?: InputMaybe<Scalars['felt252']>;
  player_id?: InputMaybe<Scalars['ContractAddress']>;
  player_idEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idGT?: InputMaybe<Scalars['ContractAddress']>;
  player_idGTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  player_idLIKE?: InputMaybe<Scalars['ContractAddress']>;
  player_idLT?: InputMaybe<Scalars['ContractAddress']>;
  player_idLTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idNEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  player_idNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
};

export type GameWhereInput = {
  claimable?: InputMaybe<Scalars['u32']>;
  claimableEQ?: InputMaybe<Scalars['u32']>;
  claimableGT?: InputMaybe<Scalars['u32']>;
  claimableGTE?: InputMaybe<Scalars['u32']>;
  claimableIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  claimableLIKE?: InputMaybe<Scalars['u32']>;
  claimableLT?: InputMaybe<Scalars['u32']>;
  claimableLTE?: InputMaybe<Scalars['u32']>;
  claimableNEQ?: InputMaybe<Scalars['u32']>;
  claimableNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  claimableNOTLIKE?: InputMaybe<Scalars['u32']>;
  claimed?: InputMaybe<Scalars['bool']>;
  final_score?: InputMaybe<Scalars['u32']>;
  final_scoreEQ?: InputMaybe<Scalars['u32']>;
  final_scoreGT?: InputMaybe<Scalars['u32']>;
  final_scoreGTE?: InputMaybe<Scalars['u32']>;
  final_scoreIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  final_scoreLIKE?: InputMaybe<Scalars['u32']>;
  final_scoreLT?: InputMaybe<Scalars['u32']>;
  final_scoreLTE?: InputMaybe<Scalars['u32']>;
  final_scoreNEQ?: InputMaybe<Scalars['u32']>;
  final_scoreNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  final_scoreNOTLIKE?: InputMaybe<Scalars['u32']>;
  game_id?: InputMaybe<Scalars['u32']>;
  game_idEQ?: InputMaybe<Scalars['u32']>;
  game_idGT?: InputMaybe<Scalars['u32']>;
  game_idGTE?: InputMaybe<Scalars['u32']>;
  game_idIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  game_idLIKE?: InputMaybe<Scalars['u32']>;
  game_idLT?: InputMaybe<Scalars['u32']>;
  game_idLTE?: InputMaybe<Scalars['u32']>;
  game_idNEQ?: InputMaybe<Scalars['u32']>;
  game_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  game_idNOTLIKE?: InputMaybe<Scalars['u32']>;
  game_mode?: InputMaybe<Scalars['Enum']>;
  game_over?: InputMaybe<Scalars['bool']>;
  hustler_id?: InputMaybe<Scalars['u16']>;
  hustler_idEQ?: InputMaybe<Scalars['u16']>;
  hustler_idGT?: InputMaybe<Scalars['u16']>;
  hustler_idGTE?: InputMaybe<Scalars['u16']>;
  hustler_idIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  hustler_idLIKE?: InputMaybe<Scalars['u16']>;
  hustler_idLT?: InputMaybe<Scalars['u16']>;
  hustler_idLTE?: InputMaybe<Scalars['u16']>;
  hustler_idNEQ?: InputMaybe<Scalars['u16']>;
  hustler_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  hustler_idNOTLIKE?: InputMaybe<Scalars['u16']>;
  player_id?: InputMaybe<Scalars['ContractAddress']>;
  player_idEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idGT?: InputMaybe<Scalars['ContractAddress']>;
  player_idGTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  player_idLIKE?: InputMaybe<Scalars['ContractAddress']>;
  player_idLT?: InputMaybe<Scalars['ContractAddress']>;
  player_idLTE?: InputMaybe<Scalars['ContractAddress']>;
  player_idNEQ?: InputMaybe<Scalars['ContractAddress']>;
  player_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  player_idNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  player_name?: InputMaybe<Scalars['u128']>;
  player_nameEQ?: InputMaybe<Scalars['u128']>;
  player_nameGT?: InputMaybe<Scalars['u128']>;
  player_nameGTE?: InputMaybe<Scalars['u128']>;
  player_nameIN?: InputMaybe<Array<InputMaybe<Scalars['u128']>>>;
  player_nameLIKE?: InputMaybe<Scalars['u128']>;
  player_nameLT?: InputMaybe<Scalars['u128']>;
  player_nameLTE?: InputMaybe<Scalars['u128']>;
  player_nameNEQ?: InputMaybe<Scalars['u128']>;
  player_nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']>>>;
  player_nameNOTLIKE?: InputMaybe<Scalars['u128']>;
  position?: InputMaybe<Scalars['u16']>;
  positionEQ?: InputMaybe<Scalars['u16']>;
  positionGT?: InputMaybe<Scalars['u16']>;
  positionGTE?: InputMaybe<Scalars['u16']>;
  positionIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  positionLIKE?: InputMaybe<Scalars['u16']>;
  positionLT?: InputMaybe<Scalars['u16']>;
  positionLTE?: InputMaybe<Scalars['u16']>;
  positionNEQ?: InputMaybe<Scalars['u16']>;
  positionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  positionNOTLIKE?: InputMaybe<Scalars['u16']>;
  registered?: InputMaybe<Scalars['bool']>;
  season_version?: InputMaybe<Scalars['u16']>;
  season_versionEQ?: InputMaybe<Scalars['u16']>;
  season_versionGT?: InputMaybe<Scalars['u16']>;
  season_versionGTE?: InputMaybe<Scalars['u16']>;
  season_versionIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionLIKE?: InputMaybe<Scalars['u16']>;
  season_versionLT?: InputMaybe<Scalars['u16']>;
  season_versionLTE?: InputMaybe<Scalars['u16']>;
  season_versionNEQ?: InputMaybe<Scalars['u16']>;
  season_versionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionNOTLIKE?: InputMaybe<Scalars['u16']>;
};

export type HustlerItemBaseConfig = {
  __typename?: 'HustlerItemBaseConfig';
  entity?: Maybe<World__Entity>;
  id?: Maybe<Scalars['u32']>;
  initial_tier?: Maybe<Scalars['u8']>;
  name?: Maybe<Scalars['felt252']>;
  slot?: Maybe<Scalars['Enum']>;
  slot_id?: Maybe<Scalars['u8']>;
};

export type HustlerItemBaseConfigConnection = {
  __typename?: 'HustlerItemBaseConfigConnection';
  edges?: Maybe<Array<Maybe<HustlerItemBaseConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type HustlerItemBaseConfigEdge = {
  __typename?: 'HustlerItemBaseConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<HustlerItemBaseConfig>;
};

export type HustlerItemBaseConfigOrder = {
  direction: OrderDirection;
  field: HustlerItemBaseConfigOrderField;
};

export enum HustlerItemBaseConfigOrderField {
  Id = 'ID',
  InitialTier = 'INITIAL_TIER',
  Name = 'NAME',
  Slot = 'SLOT',
  SlotId = 'SLOT_ID'
}

export type HustlerItemBaseConfigWhereInput = {
  id?: InputMaybe<Scalars['u32']>;
  idEQ?: InputMaybe<Scalars['u32']>;
  idGT?: InputMaybe<Scalars['u32']>;
  idGTE?: InputMaybe<Scalars['u32']>;
  idIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  idLIKE?: InputMaybe<Scalars['u32']>;
  idLT?: InputMaybe<Scalars['u32']>;
  idLTE?: InputMaybe<Scalars['u32']>;
  idNEQ?: InputMaybe<Scalars['u32']>;
  idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  idNOTLIKE?: InputMaybe<Scalars['u32']>;
  initial_tier?: InputMaybe<Scalars['u8']>;
  initial_tierEQ?: InputMaybe<Scalars['u8']>;
  initial_tierGT?: InputMaybe<Scalars['u8']>;
  initial_tierGTE?: InputMaybe<Scalars['u8']>;
  initial_tierIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  initial_tierLIKE?: InputMaybe<Scalars['u8']>;
  initial_tierLT?: InputMaybe<Scalars['u8']>;
  initial_tierLTE?: InputMaybe<Scalars['u8']>;
  initial_tierNEQ?: InputMaybe<Scalars['u8']>;
  initial_tierNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  initial_tierNOTLIKE?: InputMaybe<Scalars['u8']>;
  name?: InputMaybe<Scalars['felt252']>;
  nameEQ?: InputMaybe<Scalars['felt252']>;
  nameGT?: InputMaybe<Scalars['felt252']>;
  nameGTE?: InputMaybe<Scalars['felt252']>;
  nameIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  nameLIKE?: InputMaybe<Scalars['felt252']>;
  nameLT?: InputMaybe<Scalars['felt252']>;
  nameLTE?: InputMaybe<Scalars['felt252']>;
  nameNEQ?: InputMaybe<Scalars['felt252']>;
  nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  nameNOTLIKE?: InputMaybe<Scalars['felt252']>;
  slot?: InputMaybe<Scalars['Enum']>;
  slot_id?: InputMaybe<Scalars['u8']>;
  slot_idEQ?: InputMaybe<Scalars['u8']>;
  slot_idGT?: InputMaybe<Scalars['u8']>;
  slot_idGTE?: InputMaybe<Scalars['u8']>;
  slot_idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  slot_idLIKE?: InputMaybe<Scalars['u8']>;
  slot_idLT?: InputMaybe<Scalars['u8']>;
  slot_idLTE?: InputMaybe<Scalars['u8']>;
  slot_idNEQ?: InputMaybe<Scalars['u8']>;
  slot_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  slot_idNOTLIKE?: InputMaybe<Scalars['u8']>;
};

export type HustlerItemTiersConfig = {
  __typename?: 'HustlerItemTiersConfig';
  cost?: Maybe<Scalars['u32']>;
  entity?: Maybe<World__Entity>;
  slot?: Maybe<Scalars['Enum']>;
  slot_id?: Maybe<Scalars['u8']>;
  stat?: Maybe<Scalars['u32']>;
  tier?: Maybe<Scalars['u8']>;
};

export type HustlerItemTiersConfigConnection = {
  __typename?: 'HustlerItemTiersConfigConnection';
  edges?: Maybe<Array<Maybe<HustlerItemTiersConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type HustlerItemTiersConfigEdge = {
  __typename?: 'HustlerItemTiersConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<HustlerItemTiersConfig>;
};

export type HustlerItemTiersConfigOrder = {
  direction: OrderDirection;
  field: HustlerItemTiersConfigOrderField;
};

export enum HustlerItemTiersConfigOrderField {
  Cost = 'COST',
  Slot = 'SLOT',
  SlotId = 'SLOT_ID',
  Stat = 'STAT',
  Tier = 'TIER'
}

export type HustlerItemTiersConfigWhereInput = {
  cost?: InputMaybe<Scalars['u32']>;
  costEQ?: InputMaybe<Scalars['u32']>;
  costGT?: InputMaybe<Scalars['u32']>;
  costGTE?: InputMaybe<Scalars['u32']>;
  costIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  costLIKE?: InputMaybe<Scalars['u32']>;
  costLT?: InputMaybe<Scalars['u32']>;
  costLTE?: InputMaybe<Scalars['u32']>;
  costNEQ?: InputMaybe<Scalars['u32']>;
  costNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  costNOTLIKE?: InputMaybe<Scalars['u32']>;
  slot?: InputMaybe<Scalars['Enum']>;
  slot_id?: InputMaybe<Scalars['u8']>;
  slot_idEQ?: InputMaybe<Scalars['u8']>;
  slot_idGT?: InputMaybe<Scalars['u8']>;
  slot_idGTE?: InputMaybe<Scalars['u8']>;
  slot_idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  slot_idLIKE?: InputMaybe<Scalars['u8']>;
  slot_idLT?: InputMaybe<Scalars['u8']>;
  slot_idLTE?: InputMaybe<Scalars['u8']>;
  slot_idNEQ?: InputMaybe<Scalars['u8']>;
  slot_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  slot_idNOTLIKE?: InputMaybe<Scalars['u8']>;
  stat?: InputMaybe<Scalars['u32']>;
  statEQ?: InputMaybe<Scalars['u32']>;
  statGT?: InputMaybe<Scalars['u32']>;
  statGTE?: InputMaybe<Scalars['u32']>;
  statIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  statLIKE?: InputMaybe<Scalars['u32']>;
  statLT?: InputMaybe<Scalars['u32']>;
  statLTE?: InputMaybe<Scalars['u32']>;
  statNEQ?: InputMaybe<Scalars['u32']>;
  statNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  statNOTLIKE?: InputMaybe<Scalars['u32']>;
  tier?: InputMaybe<Scalars['u8']>;
  tierEQ?: InputMaybe<Scalars['u8']>;
  tierGT?: InputMaybe<Scalars['u8']>;
  tierGTE?: InputMaybe<Scalars['u8']>;
  tierIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  tierLIKE?: InputMaybe<Scalars['u8']>;
  tierLT?: InputMaybe<Scalars['u8']>;
  tierLTE?: InputMaybe<Scalars['u8']>;
  tierNEQ?: InputMaybe<Scalars['u8']>;
  tierNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  tierNOTLIKE?: InputMaybe<Scalars['u8']>;
};

export type InitializableModel = {
  __typename?: 'InitializableModel';
  entity?: Maybe<World__Entity>;
  initialized?: Maybe<Scalars['bool']>;
  token?: Maybe<Scalars['ContractAddress']>;
};

export type InitializableModelConnection = {
  __typename?: 'InitializableModelConnection';
  edges?: Maybe<Array<Maybe<InitializableModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type InitializableModelEdge = {
  __typename?: 'InitializableModelEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<InitializableModel>;
};

export type InitializableModelOrder = {
  direction: OrderDirection;
  field: InitializableModelOrderField;
};

export enum InitializableModelOrderField {
  Initialized = 'INITIALIZED',
  Token = 'TOKEN'
}

export type InitializableModelWhereInput = {
  initialized?: InputMaybe<Scalars['bool']>;
  token?: InputMaybe<Scalars['ContractAddress']>;
  tokenEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenGT?: InputMaybe<Scalars['ContractAddress']>;
  tokenGTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenLIKE?: InputMaybe<Scalars['ContractAddress']>;
  tokenLT?: InputMaybe<Scalars['ContractAddress']>;
  tokenLTE?: InputMaybe<Scalars['ContractAddress']>;
  tokenNEQ?: InputMaybe<Scalars['ContractAddress']>;
  tokenNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  tokenNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
};

export type LocationConfig = {
  __typename?: 'LocationConfig';
  entity?: Maybe<World__Entity>;
  location?: Maybe<Scalars['Enum']>;
  location_id?: Maybe<Scalars['u8']>;
  name?: Maybe<Scalars['u128']>;
};

export type LocationConfigConnection = {
  __typename?: 'LocationConfigConnection';
  edges?: Maybe<Array<Maybe<LocationConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationConfigEdge = {
  __typename?: 'LocationConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<LocationConfig>;
};

export type LocationConfigOrder = {
  direction: OrderDirection;
  field: LocationConfigOrderField;
};

export enum LocationConfigOrderField {
  Location = 'LOCATION',
  LocationId = 'LOCATION_ID',
  Name = 'NAME'
}

export type LocationConfigWhereInput = {
  location?: InputMaybe<Scalars['Enum']>;
  location_id?: InputMaybe<Scalars['u8']>;
  location_idEQ?: InputMaybe<Scalars['u8']>;
  location_idGT?: InputMaybe<Scalars['u8']>;
  location_idGTE?: InputMaybe<Scalars['u8']>;
  location_idIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  location_idLIKE?: InputMaybe<Scalars['u8']>;
  location_idLT?: InputMaybe<Scalars['u8']>;
  location_idLTE?: InputMaybe<Scalars['u8']>;
  location_idNEQ?: InputMaybe<Scalars['u8']>;
  location_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  location_idNOTLIKE?: InputMaybe<Scalars['u8']>;
  name?: InputMaybe<Scalars['u128']>;
  nameEQ?: InputMaybe<Scalars['u128']>;
  nameGT?: InputMaybe<Scalars['u128']>;
  nameGTE?: InputMaybe<Scalars['u128']>;
  nameIN?: InputMaybe<Array<InputMaybe<Scalars['u128']>>>;
  nameLIKE?: InputMaybe<Scalars['u128']>;
  nameLT?: InputMaybe<Scalars['u128']>;
  nameLTE?: InputMaybe<Scalars['u128']>;
  nameNEQ?: InputMaybe<Scalars['u128']>;
  nameNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u128']>>>;
  nameNOTLIKE?: InputMaybe<Scalars['u128']>;
};

export type ModelUnion = DrugConfig | Erc20AllowanceModel | Erc20BalanceModel | Erc20MetadataModel | EncounterConfig | EncounterStatsConfig | Game | GameConfig | GameStorePacked | HustlerItemBaseConfig | HustlerItemTiersConfig | InitializableModel | LocationConfig | RyoAddress | RyoConfig | Season | SeasonSettings | SortedList | SortedListItem;

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type RyoAddress = {
  __typename?: 'RyoAddress';
  entity?: Maybe<World__Entity>;
  key?: Maybe<Scalars['u8']>;
  laundromat?: Maybe<Scalars['ContractAddress']>;
  paper?: Maybe<Scalars['ContractAddress']>;
  treasury?: Maybe<Scalars['ContractAddress']>;
};

export type RyoAddressConnection = {
  __typename?: 'RyoAddressConnection';
  edges?: Maybe<Array<Maybe<RyoAddressEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type RyoAddressEdge = {
  __typename?: 'RyoAddressEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<RyoAddress>;
};

export type RyoAddressOrder = {
  direction: OrderDirection;
  field: RyoAddressOrderField;
};

export enum RyoAddressOrderField {
  Key = 'KEY',
  Laundromat = 'LAUNDROMAT',
  Paper = 'PAPER',
  Treasury = 'TREASURY'
}

export type RyoAddressWhereInput = {
  key?: InputMaybe<Scalars['u8']>;
  keyEQ?: InputMaybe<Scalars['u8']>;
  keyGT?: InputMaybe<Scalars['u8']>;
  keyGTE?: InputMaybe<Scalars['u8']>;
  keyIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  keyLIKE?: InputMaybe<Scalars['u8']>;
  keyLT?: InputMaybe<Scalars['u8']>;
  keyLTE?: InputMaybe<Scalars['u8']>;
  keyNEQ?: InputMaybe<Scalars['u8']>;
  keyNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  keyNOTLIKE?: InputMaybe<Scalars['u8']>;
  laundromat?: InputMaybe<Scalars['ContractAddress']>;
  laundromatEQ?: InputMaybe<Scalars['ContractAddress']>;
  laundromatGT?: InputMaybe<Scalars['ContractAddress']>;
  laundromatGTE?: InputMaybe<Scalars['ContractAddress']>;
  laundromatIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  laundromatLIKE?: InputMaybe<Scalars['ContractAddress']>;
  laundromatLT?: InputMaybe<Scalars['ContractAddress']>;
  laundromatLTE?: InputMaybe<Scalars['ContractAddress']>;
  laundromatNEQ?: InputMaybe<Scalars['ContractAddress']>;
  laundromatNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  laundromatNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  paper?: InputMaybe<Scalars['ContractAddress']>;
  paperEQ?: InputMaybe<Scalars['ContractAddress']>;
  paperGT?: InputMaybe<Scalars['ContractAddress']>;
  paperGTE?: InputMaybe<Scalars['ContractAddress']>;
  paperIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  paperLIKE?: InputMaybe<Scalars['ContractAddress']>;
  paperLT?: InputMaybe<Scalars['ContractAddress']>;
  paperLTE?: InputMaybe<Scalars['ContractAddress']>;
  paperNEQ?: InputMaybe<Scalars['ContractAddress']>;
  paperNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  paperNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  treasury?: InputMaybe<Scalars['ContractAddress']>;
  treasuryEQ?: InputMaybe<Scalars['ContractAddress']>;
  treasuryGT?: InputMaybe<Scalars['ContractAddress']>;
  treasuryGTE?: InputMaybe<Scalars['ContractAddress']>;
  treasuryIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  treasuryLIKE?: InputMaybe<Scalars['ContractAddress']>;
  treasuryLT?: InputMaybe<Scalars['ContractAddress']>;
  treasuryLTE?: InputMaybe<Scalars['ContractAddress']>;
  treasuryNEQ?: InputMaybe<Scalars['ContractAddress']>;
  treasuryNOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  treasuryNOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
};

export type RyoConfig = {
  __typename?: 'RyoConfig';
  entity?: Maybe<World__Entity>;
  initialized?: Maybe<Scalars['bool']>;
  key?: Maybe<Scalars['u8']>;
  paper_fee?: Maybe<Scalars['u16']>;
  paper_reward_launderer?: Maybe<Scalars['u16']>;
  paused?: Maybe<Scalars['bool']>;
  season_duration?: Maybe<Scalars['u32']>;
  season_time_limit?: Maybe<Scalars['u16']>;
  season_version?: Maybe<Scalars['u16']>;
  treasury_balance?: Maybe<Scalars['u32']>;
  treasury_fee_pct?: Maybe<Scalars['u8']>;
};

export type RyoConfigConnection = {
  __typename?: 'RyoConfigConnection';
  edges?: Maybe<Array<Maybe<RyoConfigEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type RyoConfigEdge = {
  __typename?: 'RyoConfigEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<RyoConfig>;
};

export type RyoConfigOrder = {
  direction: OrderDirection;
  field: RyoConfigOrderField;
};

export enum RyoConfigOrderField {
  Initialized = 'INITIALIZED',
  Key = 'KEY',
  PaperFee = 'PAPER_FEE',
  PaperRewardLaunderer = 'PAPER_REWARD_LAUNDERER',
  Paused = 'PAUSED',
  SeasonDuration = 'SEASON_DURATION',
  SeasonTimeLimit = 'SEASON_TIME_LIMIT',
  SeasonVersion = 'SEASON_VERSION',
  TreasuryBalance = 'TREASURY_BALANCE',
  TreasuryFeePct = 'TREASURY_FEE_PCT'
}

export type RyoConfigWhereInput = {
  initialized?: InputMaybe<Scalars['bool']>;
  key?: InputMaybe<Scalars['u8']>;
  keyEQ?: InputMaybe<Scalars['u8']>;
  keyGT?: InputMaybe<Scalars['u8']>;
  keyGTE?: InputMaybe<Scalars['u8']>;
  keyIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  keyLIKE?: InputMaybe<Scalars['u8']>;
  keyLT?: InputMaybe<Scalars['u8']>;
  keyLTE?: InputMaybe<Scalars['u8']>;
  keyNEQ?: InputMaybe<Scalars['u8']>;
  keyNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  keyNOTLIKE?: InputMaybe<Scalars['u8']>;
  paper_fee?: InputMaybe<Scalars['u16']>;
  paper_feeEQ?: InputMaybe<Scalars['u16']>;
  paper_feeGT?: InputMaybe<Scalars['u16']>;
  paper_feeGTE?: InputMaybe<Scalars['u16']>;
  paper_feeIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  paper_feeLIKE?: InputMaybe<Scalars['u16']>;
  paper_feeLT?: InputMaybe<Scalars['u16']>;
  paper_feeLTE?: InputMaybe<Scalars['u16']>;
  paper_feeNEQ?: InputMaybe<Scalars['u16']>;
  paper_feeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  paper_feeNOTLIKE?: InputMaybe<Scalars['u16']>;
  paper_reward_launderer?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererEQ?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererGT?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererGTE?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  paper_reward_laundererLIKE?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererLT?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererLTE?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererNEQ?: InputMaybe<Scalars['u16']>;
  paper_reward_laundererNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  paper_reward_laundererNOTLIKE?: InputMaybe<Scalars['u16']>;
  paused?: InputMaybe<Scalars['bool']>;
  season_duration?: InputMaybe<Scalars['u32']>;
  season_durationEQ?: InputMaybe<Scalars['u32']>;
  season_durationGT?: InputMaybe<Scalars['u32']>;
  season_durationGTE?: InputMaybe<Scalars['u32']>;
  season_durationIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  season_durationLIKE?: InputMaybe<Scalars['u32']>;
  season_durationLT?: InputMaybe<Scalars['u32']>;
  season_durationLTE?: InputMaybe<Scalars['u32']>;
  season_durationNEQ?: InputMaybe<Scalars['u32']>;
  season_durationNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  season_durationNOTLIKE?: InputMaybe<Scalars['u32']>;
  season_time_limit?: InputMaybe<Scalars['u16']>;
  season_time_limitEQ?: InputMaybe<Scalars['u16']>;
  season_time_limitGT?: InputMaybe<Scalars['u16']>;
  season_time_limitGTE?: InputMaybe<Scalars['u16']>;
  season_time_limitIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_time_limitLIKE?: InputMaybe<Scalars['u16']>;
  season_time_limitLT?: InputMaybe<Scalars['u16']>;
  season_time_limitLTE?: InputMaybe<Scalars['u16']>;
  season_time_limitNEQ?: InputMaybe<Scalars['u16']>;
  season_time_limitNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_time_limitNOTLIKE?: InputMaybe<Scalars['u16']>;
  season_version?: InputMaybe<Scalars['u16']>;
  season_versionEQ?: InputMaybe<Scalars['u16']>;
  season_versionGT?: InputMaybe<Scalars['u16']>;
  season_versionGTE?: InputMaybe<Scalars['u16']>;
  season_versionIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionLIKE?: InputMaybe<Scalars['u16']>;
  season_versionLT?: InputMaybe<Scalars['u16']>;
  season_versionLTE?: InputMaybe<Scalars['u16']>;
  season_versionNEQ?: InputMaybe<Scalars['u16']>;
  season_versionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionNOTLIKE?: InputMaybe<Scalars['u16']>;
  treasury_balance?: InputMaybe<Scalars['u32']>;
  treasury_balanceEQ?: InputMaybe<Scalars['u32']>;
  treasury_balanceGT?: InputMaybe<Scalars['u32']>;
  treasury_balanceGTE?: InputMaybe<Scalars['u32']>;
  treasury_balanceIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  treasury_balanceLIKE?: InputMaybe<Scalars['u32']>;
  treasury_balanceLT?: InputMaybe<Scalars['u32']>;
  treasury_balanceLTE?: InputMaybe<Scalars['u32']>;
  treasury_balanceNEQ?: InputMaybe<Scalars['u32']>;
  treasury_balanceNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  treasury_balanceNOTLIKE?: InputMaybe<Scalars['u32']>;
  treasury_fee_pct?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctEQ?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctGT?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctGTE?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  treasury_fee_pctLIKE?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctLT?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctLTE?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctNEQ?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  treasury_fee_pctNOTLIKE?: InputMaybe<Scalars['u8']>;
};

export type Season = {
  __typename?: 'Season';
  entity?: Maybe<World__Entity>;
  high_score?: Maybe<Scalars['u32']>;
  next_version_timestamp?: Maybe<Scalars['u64']>;
  paper_balance?: Maybe<Scalars['u32']>;
  paper_fee?: Maybe<Scalars['u16']>;
  season_duration?: Maybe<Scalars['u32']>;
  season_time_limit?: Maybe<Scalars['u16']>;
  treasury_fee_pct?: Maybe<Scalars['u8']>;
  version?: Maybe<Scalars['u16']>;
};

export type SeasonConnection = {
  __typename?: 'SeasonConnection';
  edges?: Maybe<Array<Maybe<SeasonEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type SeasonEdge = {
  __typename?: 'SeasonEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Season>;
};

export type SeasonOrder = {
  direction: OrderDirection;
  field: SeasonOrderField;
};

export enum SeasonOrderField {
  HighScore = 'HIGH_SCORE',
  NextVersionTimestamp = 'NEXT_VERSION_TIMESTAMP',
  PaperBalance = 'PAPER_BALANCE',
  PaperFee = 'PAPER_FEE',
  SeasonDuration = 'SEASON_DURATION',
  SeasonTimeLimit = 'SEASON_TIME_LIMIT',
  TreasuryFeePct = 'TREASURY_FEE_PCT',
  Version = 'VERSION'
}

export type SeasonSettings = {
  __typename?: 'SeasonSettings';
  cash_mode?: Maybe<Scalars['Enum']>;
  drugs_mode?: Maybe<Scalars['Enum']>;
  encounters_mode?: Maybe<Scalars['Enum']>;
  encounters_odds_mode?: Maybe<Scalars['Enum']>;
  entity?: Maybe<World__Entity>;
  health_mode?: Maybe<Scalars['Enum']>;
  season_version?: Maybe<Scalars['u16']>;
  turns_mode?: Maybe<Scalars['Enum']>;
  wanted_mode?: Maybe<Scalars['Enum']>;
};

export type SeasonSettingsConnection = {
  __typename?: 'SeasonSettingsConnection';
  edges?: Maybe<Array<Maybe<SeasonSettingsEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type SeasonSettingsEdge = {
  __typename?: 'SeasonSettingsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<SeasonSettings>;
};

export type SeasonSettingsOrder = {
  direction: OrderDirection;
  field: SeasonSettingsOrderField;
};

export enum SeasonSettingsOrderField {
  CashMode = 'CASH_MODE',
  DrugsMode = 'DRUGS_MODE',
  EncountersMode = 'ENCOUNTERS_MODE',
  EncountersOddsMode = 'ENCOUNTERS_ODDS_MODE',
  HealthMode = 'HEALTH_MODE',
  SeasonVersion = 'SEASON_VERSION',
  TurnsMode = 'TURNS_MODE',
  WantedMode = 'WANTED_MODE'
}

export type SeasonSettingsWhereInput = {
  cash_mode?: InputMaybe<Scalars['Enum']>;
  drugs_mode?: InputMaybe<Scalars['Enum']>;
  encounters_mode?: InputMaybe<Scalars['Enum']>;
  encounters_odds_mode?: InputMaybe<Scalars['Enum']>;
  health_mode?: InputMaybe<Scalars['Enum']>;
  season_version?: InputMaybe<Scalars['u16']>;
  season_versionEQ?: InputMaybe<Scalars['u16']>;
  season_versionGT?: InputMaybe<Scalars['u16']>;
  season_versionGTE?: InputMaybe<Scalars['u16']>;
  season_versionIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionLIKE?: InputMaybe<Scalars['u16']>;
  season_versionLT?: InputMaybe<Scalars['u16']>;
  season_versionLTE?: InputMaybe<Scalars['u16']>;
  season_versionNEQ?: InputMaybe<Scalars['u16']>;
  season_versionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_versionNOTLIKE?: InputMaybe<Scalars['u16']>;
  turns_mode?: InputMaybe<Scalars['Enum']>;
  wanted_mode?: InputMaybe<Scalars['Enum']>;
};

export type SeasonWhereInput = {
  high_score?: InputMaybe<Scalars['u32']>;
  high_scoreEQ?: InputMaybe<Scalars['u32']>;
  high_scoreGT?: InputMaybe<Scalars['u32']>;
  high_scoreGTE?: InputMaybe<Scalars['u32']>;
  high_scoreIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  high_scoreLIKE?: InputMaybe<Scalars['u32']>;
  high_scoreLT?: InputMaybe<Scalars['u32']>;
  high_scoreLTE?: InputMaybe<Scalars['u32']>;
  high_scoreNEQ?: InputMaybe<Scalars['u32']>;
  high_scoreNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  high_scoreNOTLIKE?: InputMaybe<Scalars['u32']>;
  next_version_timestamp?: InputMaybe<Scalars['u64']>;
  next_version_timestampEQ?: InputMaybe<Scalars['u64']>;
  next_version_timestampGT?: InputMaybe<Scalars['u64']>;
  next_version_timestampGTE?: InputMaybe<Scalars['u64']>;
  next_version_timestampIN?: InputMaybe<Array<InputMaybe<Scalars['u64']>>>;
  next_version_timestampLIKE?: InputMaybe<Scalars['u64']>;
  next_version_timestampLT?: InputMaybe<Scalars['u64']>;
  next_version_timestampLTE?: InputMaybe<Scalars['u64']>;
  next_version_timestampNEQ?: InputMaybe<Scalars['u64']>;
  next_version_timestampNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u64']>>>;
  next_version_timestampNOTLIKE?: InputMaybe<Scalars['u64']>;
  paper_balance?: InputMaybe<Scalars['u32']>;
  paper_balanceEQ?: InputMaybe<Scalars['u32']>;
  paper_balanceGT?: InputMaybe<Scalars['u32']>;
  paper_balanceGTE?: InputMaybe<Scalars['u32']>;
  paper_balanceIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  paper_balanceLIKE?: InputMaybe<Scalars['u32']>;
  paper_balanceLT?: InputMaybe<Scalars['u32']>;
  paper_balanceLTE?: InputMaybe<Scalars['u32']>;
  paper_balanceNEQ?: InputMaybe<Scalars['u32']>;
  paper_balanceNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  paper_balanceNOTLIKE?: InputMaybe<Scalars['u32']>;
  paper_fee?: InputMaybe<Scalars['u16']>;
  paper_feeEQ?: InputMaybe<Scalars['u16']>;
  paper_feeGT?: InputMaybe<Scalars['u16']>;
  paper_feeGTE?: InputMaybe<Scalars['u16']>;
  paper_feeIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  paper_feeLIKE?: InputMaybe<Scalars['u16']>;
  paper_feeLT?: InputMaybe<Scalars['u16']>;
  paper_feeLTE?: InputMaybe<Scalars['u16']>;
  paper_feeNEQ?: InputMaybe<Scalars['u16']>;
  paper_feeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  paper_feeNOTLIKE?: InputMaybe<Scalars['u16']>;
  season_duration?: InputMaybe<Scalars['u32']>;
  season_durationEQ?: InputMaybe<Scalars['u32']>;
  season_durationGT?: InputMaybe<Scalars['u32']>;
  season_durationGTE?: InputMaybe<Scalars['u32']>;
  season_durationIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  season_durationLIKE?: InputMaybe<Scalars['u32']>;
  season_durationLT?: InputMaybe<Scalars['u32']>;
  season_durationLTE?: InputMaybe<Scalars['u32']>;
  season_durationNEQ?: InputMaybe<Scalars['u32']>;
  season_durationNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  season_durationNOTLIKE?: InputMaybe<Scalars['u32']>;
  season_time_limit?: InputMaybe<Scalars['u16']>;
  season_time_limitEQ?: InputMaybe<Scalars['u16']>;
  season_time_limitGT?: InputMaybe<Scalars['u16']>;
  season_time_limitGTE?: InputMaybe<Scalars['u16']>;
  season_time_limitIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_time_limitLIKE?: InputMaybe<Scalars['u16']>;
  season_time_limitLT?: InputMaybe<Scalars['u16']>;
  season_time_limitLTE?: InputMaybe<Scalars['u16']>;
  season_time_limitNEQ?: InputMaybe<Scalars['u16']>;
  season_time_limitNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  season_time_limitNOTLIKE?: InputMaybe<Scalars['u16']>;
  treasury_fee_pct?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctEQ?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctGT?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctGTE?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  treasury_fee_pctLIKE?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctLT?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctLTE?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctNEQ?: InputMaybe<Scalars['u8']>;
  treasury_fee_pctNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u8']>>>;
  treasury_fee_pctNOTLIKE?: InputMaybe<Scalars['u8']>;
  version?: InputMaybe<Scalars['u16']>;
  versionEQ?: InputMaybe<Scalars['u16']>;
  versionGT?: InputMaybe<Scalars['u16']>;
  versionGTE?: InputMaybe<Scalars['u16']>;
  versionIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  versionLIKE?: InputMaybe<Scalars['u16']>;
  versionLT?: InputMaybe<Scalars['u16']>;
  versionLTE?: InputMaybe<Scalars['u16']>;
  versionNEQ?: InputMaybe<Scalars['u16']>;
  versionNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u16']>>>;
  versionNOTLIKE?: InputMaybe<Scalars['u16']>;
};

export type SortedList = {
  __typename?: 'SortedList';
  entity?: Maybe<World__Entity>;
  list_id?: Maybe<Scalars['felt252']>;
  locked?: Maybe<Scalars['bool']>;
  process_cursor_k0?: Maybe<Scalars['u32']>;
  process_cursor_k1?: Maybe<Scalars['ContractAddress']>;
  process_max_size?: Maybe<Scalars['u32']>;
  process_size?: Maybe<Scalars['u32']>;
  processed?: Maybe<Scalars['bool']>;
  size?: Maybe<Scalars['u32']>;
};

export type SortedListConnection = {
  __typename?: 'SortedListConnection';
  edges?: Maybe<Array<Maybe<SortedListEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type SortedListEdge = {
  __typename?: 'SortedListEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<SortedList>;
};

export type SortedListItem = {
  __typename?: 'SortedListItem';
  entity?: Maybe<World__Entity>;
  item_k0?: Maybe<Scalars['u32']>;
  item_k1?: Maybe<Scalars['ContractAddress']>;
  list_id?: Maybe<Scalars['felt252']>;
  next_k0?: Maybe<Scalars['u32']>;
  next_k1?: Maybe<Scalars['ContractAddress']>;
};

export type SortedListItemConnection = {
  __typename?: 'SortedListItemConnection';
  edges?: Maybe<Array<Maybe<SortedListItemEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type SortedListItemEdge = {
  __typename?: 'SortedListItemEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<SortedListItem>;
};

export type SortedListItemOrder = {
  direction: OrderDirection;
  field: SortedListItemOrderField;
};

export enum SortedListItemOrderField {
  ItemK0 = 'ITEM_K0',
  ItemK1 = 'ITEM_K1',
  ListId = 'LIST_ID',
  NextK0 = 'NEXT_K0',
  NextK1 = 'NEXT_K1'
}

export type SortedListItemWhereInput = {
  item_k0?: InputMaybe<Scalars['u32']>;
  item_k0EQ?: InputMaybe<Scalars['u32']>;
  item_k0GT?: InputMaybe<Scalars['u32']>;
  item_k0GTE?: InputMaybe<Scalars['u32']>;
  item_k0IN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  item_k0LIKE?: InputMaybe<Scalars['u32']>;
  item_k0LT?: InputMaybe<Scalars['u32']>;
  item_k0LTE?: InputMaybe<Scalars['u32']>;
  item_k0NEQ?: InputMaybe<Scalars['u32']>;
  item_k0NOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  item_k0NOTLIKE?: InputMaybe<Scalars['u32']>;
  item_k1?: InputMaybe<Scalars['ContractAddress']>;
  item_k1EQ?: InputMaybe<Scalars['ContractAddress']>;
  item_k1GT?: InputMaybe<Scalars['ContractAddress']>;
  item_k1GTE?: InputMaybe<Scalars['ContractAddress']>;
  item_k1IN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  item_k1LIKE?: InputMaybe<Scalars['ContractAddress']>;
  item_k1LT?: InputMaybe<Scalars['ContractAddress']>;
  item_k1LTE?: InputMaybe<Scalars['ContractAddress']>;
  item_k1NEQ?: InputMaybe<Scalars['ContractAddress']>;
  item_k1NOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  item_k1NOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  list_id?: InputMaybe<Scalars['felt252']>;
  list_idEQ?: InputMaybe<Scalars['felt252']>;
  list_idGT?: InputMaybe<Scalars['felt252']>;
  list_idGTE?: InputMaybe<Scalars['felt252']>;
  list_idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  list_idLIKE?: InputMaybe<Scalars['felt252']>;
  list_idLT?: InputMaybe<Scalars['felt252']>;
  list_idLTE?: InputMaybe<Scalars['felt252']>;
  list_idNEQ?: InputMaybe<Scalars['felt252']>;
  list_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  list_idNOTLIKE?: InputMaybe<Scalars['felt252']>;
  next_k0?: InputMaybe<Scalars['u32']>;
  next_k0EQ?: InputMaybe<Scalars['u32']>;
  next_k0GT?: InputMaybe<Scalars['u32']>;
  next_k0GTE?: InputMaybe<Scalars['u32']>;
  next_k0IN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  next_k0LIKE?: InputMaybe<Scalars['u32']>;
  next_k0LT?: InputMaybe<Scalars['u32']>;
  next_k0LTE?: InputMaybe<Scalars['u32']>;
  next_k0NEQ?: InputMaybe<Scalars['u32']>;
  next_k0NOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  next_k0NOTLIKE?: InputMaybe<Scalars['u32']>;
  next_k1?: InputMaybe<Scalars['ContractAddress']>;
  next_k1EQ?: InputMaybe<Scalars['ContractAddress']>;
  next_k1GT?: InputMaybe<Scalars['ContractAddress']>;
  next_k1GTE?: InputMaybe<Scalars['ContractAddress']>;
  next_k1IN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  next_k1LIKE?: InputMaybe<Scalars['ContractAddress']>;
  next_k1LT?: InputMaybe<Scalars['ContractAddress']>;
  next_k1LTE?: InputMaybe<Scalars['ContractAddress']>;
  next_k1NEQ?: InputMaybe<Scalars['ContractAddress']>;
  next_k1NOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  next_k1NOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
};

export type SortedListOrder = {
  direction: OrderDirection;
  field: SortedListOrderField;
};

export enum SortedListOrderField {
  ListId = 'LIST_ID',
  Locked = 'LOCKED',
  Processed = 'PROCESSED',
  ProcessCursorK0 = 'PROCESS_CURSOR_K0',
  ProcessCursorK1 = 'PROCESS_CURSOR_K1',
  ProcessMaxSize = 'PROCESS_MAX_SIZE',
  ProcessSize = 'PROCESS_SIZE',
  Size = 'SIZE'
}

export type SortedListWhereInput = {
  list_id?: InputMaybe<Scalars['felt252']>;
  list_idEQ?: InputMaybe<Scalars['felt252']>;
  list_idGT?: InputMaybe<Scalars['felt252']>;
  list_idGTE?: InputMaybe<Scalars['felt252']>;
  list_idIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  list_idLIKE?: InputMaybe<Scalars['felt252']>;
  list_idLT?: InputMaybe<Scalars['felt252']>;
  list_idLTE?: InputMaybe<Scalars['felt252']>;
  list_idNEQ?: InputMaybe<Scalars['felt252']>;
  list_idNOTIN?: InputMaybe<Array<InputMaybe<Scalars['felt252']>>>;
  list_idNOTLIKE?: InputMaybe<Scalars['felt252']>;
  locked?: InputMaybe<Scalars['bool']>;
  process_cursor_k0?: InputMaybe<Scalars['u32']>;
  process_cursor_k0EQ?: InputMaybe<Scalars['u32']>;
  process_cursor_k0GT?: InputMaybe<Scalars['u32']>;
  process_cursor_k0GTE?: InputMaybe<Scalars['u32']>;
  process_cursor_k0IN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  process_cursor_k0LIKE?: InputMaybe<Scalars['u32']>;
  process_cursor_k0LT?: InputMaybe<Scalars['u32']>;
  process_cursor_k0LTE?: InputMaybe<Scalars['u32']>;
  process_cursor_k0NEQ?: InputMaybe<Scalars['u32']>;
  process_cursor_k0NOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  process_cursor_k0NOTLIKE?: InputMaybe<Scalars['u32']>;
  process_cursor_k1?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1EQ?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1GT?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1GTE?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1IN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  process_cursor_k1LIKE?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1LT?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1LTE?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1NEQ?: InputMaybe<Scalars['ContractAddress']>;
  process_cursor_k1NOTIN?: InputMaybe<Array<InputMaybe<Scalars['ContractAddress']>>>;
  process_cursor_k1NOTLIKE?: InputMaybe<Scalars['ContractAddress']>;
  process_max_size?: InputMaybe<Scalars['u32']>;
  process_max_sizeEQ?: InputMaybe<Scalars['u32']>;
  process_max_sizeGT?: InputMaybe<Scalars['u32']>;
  process_max_sizeGTE?: InputMaybe<Scalars['u32']>;
  process_max_sizeIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  process_max_sizeLIKE?: InputMaybe<Scalars['u32']>;
  process_max_sizeLT?: InputMaybe<Scalars['u32']>;
  process_max_sizeLTE?: InputMaybe<Scalars['u32']>;
  process_max_sizeNEQ?: InputMaybe<Scalars['u32']>;
  process_max_sizeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  process_max_sizeNOTLIKE?: InputMaybe<Scalars['u32']>;
  process_size?: InputMaybe<Scalars['u32']>;
  process_sizeEQ?: InputMaybe<Scalars['u32']>;
  process_sizeGT?: InputMaybe<Scalars['u32']>;
  process_sizeGTE?: InputMaybe<Scalars['u32']>;
  process_sizeIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  process_sizeLIKE?: InputMaybe<Scalars['u32']>;
  process_sizeLT?: InputMaybe<Scalars['u32']>;
  process_sizeLTE?: InputMaybe<Scalars['u32']>;
  process_sizeNEQ?: InputMaybe<Scalars['u32']>;
  process_sizeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  process_sizeNOTLIKE?: InputMaybe<Scalars['u32']>;
  processed?: InputMaybe<Scalars['bool']>;
  size?: InputMaybe<Scalars['u32']>;
  sizeEQ?: InputMaybe<Scalars['u32']>;
  sizeGT?: InputMaybe<Scalars['u32']>;
  sizeGTE?: InputMaybe<Scalars['u32']>;
  sizeIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  sizeLIKE?: InputMaybe<Scalars['u32']>;
  sizeLT?: InputMaybe<Scalars['u32']>;
  sizeLTE?: InputMaybe<Scalars['u32']>;
  sizeNEQ?: InputMaybe<Scalars['u32']>;
  sizeNOTIN?: InputMaybe<Array<InputMaybe<Scalars['u32']>>>;
  sizeNOTLIKE?: InputMaybe<Scalars['u32']>;
};

export type World__Content = {
  __typename?: 'World__Content';
  coverUri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  iconUri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<World__Social>>>;
  website?: Maybe<Scalars['String']>;
};

export type World__Entity = {
  __typename?: 'World__Entity';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  executedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type World__EntityConnection = {
  __typename?: 'World__EntityConnection';
  edges?: Maybe<Array<Maybe<World__EntityEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type World__EntityEdge = {
  __typename?: 'World__EntityEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<World__Entity>;
};

export type World__Event = {
  __typename?: 'World__Event';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
  executedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type World__EventConnection = {
  __typename?: 'World__EventConnection';
  edges?: Maybe<Array<Maybe<World__EventEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type World__EventEdge = {
  __typename?: 'World__EventEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<World__Event>;
};

export type World__EventMessage = {
  __typename?: 'World__EventMessage';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  executedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  models?: Maybe<Array<Maybe<ModelUnion>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type World__EventMessageConnection = {
  __typename?: 'World__EventMessageConnection';
  edges?: Maybe<Array<Maybe<World__EventMessageEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type World__EventMessageEdge = {
  __typename?: 'World__EventMessageEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<World__EventMessage>;
};

export type World__Metadata = {
  __typename?: 'World__Metadata';
  content?: Maybe<World__Content>;
  coverImg?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  executedAt?: Maybe<Scalars['DateTime']>;
  iconImg?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uri?: Maybe<Scalars['String']>;
  worldAddress: Scalars['String'];
};

export type World__MetadataConnection = {
  __typename?: 'World__MetadataConnection';
  edges?: Maybe<Array<Maybe<World__MetadataEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type World__MetadataEdge = {
  __typename?: 'World__MetadataEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<World__Metadata>;
};

export type World__Model = {
  __typename?: 'World__Model';
  classHash?: Maybe<Scalars['felt252']>;
  contractAddress?: Maybe<Scalars['felt252']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  executedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  transactionHash?: Maybe<Scalars['felt252']>;
};

export type World__ModelConnection = {
  __typename?: 'World__ModelConnection';
  edges?: Maybe<Array<Maybe<World__ModelEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type World__ModelEdge = {
  __typename?: 'World__ModelEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<World__Model>;
};

export type World__ModelOrder = {
  direction: OrderDirection;
  field: World__ModelOrderField;
};

export enum World__ModelOrderField {
  ClassHash = 'CLASS_HASH',
  Name = 'NAME'
}

export type World__PageInfo = {
  __typename?: 'World__PageInfo';
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type World__Query = {
  __typename?: 'World__Query';
  drugConfigModels?: Maybe<DrugConfigConnection>;
  encounterConfigModels?: Maybe<EncounterConfigConnection>;
  encounterStatsConfigModels?: Maybe<EncounterStatsConfigConnection>;
  entities?: Maybe<World__EntityConnection>;
  entity: World__Entity;
  erc20AllowanceModelModels?: Maybe<Erc20AllowanceModelConnection>;
  erc20BalanceModelModels?: Maybe<Erc20BalanceModelConnection>;
  erc20MetadataModelModels?: Maybe<Erc20MetadataModelConnection>;
  eventMessage: World__EventMessage;
  eventMessages?: Maybe<World__EventMessageConnection>;
  events?: Maybe<World__EventConnection>;
  gameConfigModels?: Maybe<GameConfigConnection>;
  gameModels?: Maybe<GameConnection>;
  gameStorePackedModels?: Maybe<GameStorePackedConnection>;
  hustlerItemBaseConfigModels?: Maybe<HustlerItemBaseConfigConnection>;
  hustlerItemTiersConfigModels?: Maybe<HustlerItemTiersConfigConnection>;
  initializableModelModels?: Maybe<InitializableModelConnection>;
  locationConfigModels?: Maybe<LocationConfigConnection>;
  metadatas?: Maybe<World__MetadataConnection>;
  model: World__Model;
  models?: Maybe<World__ModelConnection>;
  ryoAddressModels?: Maybe<RyoAddressConnection>;
  ryoConfigModels?: Maybe<RyoConfigConnection>;
  seasonModels?: Maybe<SeasonConnection>;
  seasonSettingsModels?: Maybe<SeasonSettingsConnection>;
  sortedListItemModels?: Maybe<SortedListItemConnection>;
  sortedListModels?: Maybe<SortedListConnection>;
  transaction: World__Transaction;
  transactions?: Maybe<World__TransactionConnection>;
};


export type World__QueryDrugConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<DrugConfigOrder>;
  where?: InputMaybe<DrugConfigWhereInput>;
};


export type World__QueryEncounterConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EncounterConfigOrder>;
  where?: InputMaybe<EncounterConfigWhereInput>;
};


export type World__QueryEncounterStatsConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<EncounterStatsConfigOrder>;
  where?: InputMaybe<EncounterStatsConfigWhereInput>;
};


export type World__QueryEntitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type World__QueryEntityArgs = {
  id: Scalars['ID'];
};


export type World__QueryErc20AllowanceModelModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Erc20AllowanceModelOrder>;
  where?: InputMaybe<Erc20AllowanceModelWhereInput>;
};


export type World__QueryErc20BalanceModelModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Erc20BalanceModelOrder>;
  where?: InputMaybe<Erc20BalanceModelWhereInput>;
};


export type World__QueryErc20MetadataModelModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Erc20MetadataModelOrder>;
  where?: InputMaybe<Erc20MetadataModelWhereInput>;
};


export type World__QueryEventMessageArgs = {
  id: Scalars['ID'];
};


export type World__QueryEventMessagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type World__QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type World__QueryGameConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameConfigOrder>;
  where?: InputMaybe<GameConfigWhereInput>;
};


export type World__QueryGameModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameOrder>;
  where?: InputMaybe<GameWhereInput>;
};


export type World__QueryGameStorePackedModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GameStorePackedOrder>;
  where?: InputMaybe<GameStorePackedWhereInput>;
};


export type World__QueryHustlerItemBaseConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<HustlerItemBaseConfigOrder>;
  where?: InputMaybe<HustlerItemBaseConfigWhereInput>;
};


export type World__QueryHustlerItemTiersConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<HustlerItemTiersConfigOrder>;
  where?: InputMaybe<HustlerItemTiersConfigWhereInput>;
};


export type World__QueryInitializableModelModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<InitializableModelOrder>;
  where?: InputMaybe<InitializableModelWhereInput>;
};


export type World__QueryLocationConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<LocationConfigOrder>;
  where?: InputMaybe<LocationConfigWhereInput>;
};


export type World__QueryMetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type World__QueryModelArgs = {
  id: Scalars['ID'];
};


export type World__QueryModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<World__ModelOrder>;
};


export type World__QueryRyoAddressModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RyoAddressOrder>;
  where?: InputMaybe<RyoAddressWhereInput>;
};


export type World__QueryRyoConfigModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<RyoConfigOrder>;
  where?: InputMaybe<RyoConfigWhereInput>;
};


export type World__QuerySeasonModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SeasonOrder>;
  where?: InputMaybe<SeasonWhereInput>;
};


export type World__QuerySeasonSettingsModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SeasonSettingsOrder>;
  where?: InputMaybe<SeasonSettingsWhereInput>;
};


export type World__QuerySortedListItemModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SortedListItemOrder>;
  where?: InputMaybe<SortedListItemWhereInput>;
};


export type World__QuerySortedListModelsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<SortedListOrder>;
  where?: InputMaybe<SortedListWhereInput>;
};


export type World__QueryTransactionArgs = {
  transactionHash: Scalars['ID'];
};


export type World__QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type World__Social = {
  __typename?: 'World__Social';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type World__Subscription = {
  __typename?: 'World__Subscription';
  entityUpdated: World__Entity;
  eventEmitted: World__Event;
  eventMessageUpdated: World__EventMessage;
  modelRegistered: World__Model;
};


export type World__SubscriptionEntityUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type World__SubscriptionEventEmittedArgs = {
  keys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type World__SubscriptionEventMessageUpdatedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type World__SubscriptionModelRegisteredArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type World__Transaction = {
  __typename?: 'World__Transaction';
  calldata?: Maybe<Array<Maybe<Scalars['felt252']>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  executedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  maxFee?: Maybe<Scalars['felt252']>;
  nonce?: Maybe<Scalars['felt252']>;
  senderAddress?: Maybe<Scalars['felt252']>;
  signature?: Maybe<Array<Maybe<Scalars['felt252']>>>;
  transactionHash?: Maybe<Scalars['felt252']>;
};

export type World__TransactionConnection = {
  __typename?: 'World__TransactionConnection';
  edges?: Maybe<Array<Maybe<World__TransactionEdge>>>;
  pageInfo: World__PageInfo;
  totalCount: Scalars['Int'];
};

export type World__TransactionEdge = {
  __typename?: 'World__TransactionEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<World__Transaction>;
};

export type ConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfigQuery = { __typename?: 'World__Query', ryoAddressModels?: { __typename?: 'RyoAddressConnection', edges?: Array<{ __typename?: 'RyoAddressEdge', node?: { __typename?: 'RyoAddress', key?: any | null, paper?: any | null, treasury?: any | null, laundromat?: any | null } | null } | null> | null } | null, ryoConfigModels?: { __typename?: 'RyoConfigConnection', edges?: Array<{ __typename?: 'RyoConfigEdge', node?: { __typename?: 'RyoConfig', key?: any | null, initialized?: any | null, paused?: any | null, season_version?: any | null, season_duration?: any | null, season_time_limit?: any | null, paper_fee?: any | null, paper_reward_launderer?: any | null, treasury_fee_pct?: any | null, treasury_balance?: any | null } | null } | null> | null } | null, drugConfigModels?: { __typename?: 'DrugConfigConnection', edges?: Array<{ __typename?: 'DrugConfigEdge', node?: { __typename?: 'DrugConfig', drugs_mode?: any | null, drug?: any | null, drug_id?: any | null, base?: any | null, step?: any | null, weight?: any | null, name?: any | null } | null } | null> | null } | null, locationConfigModels?: { __typename?: 'LocationConfigConnection', edges?: Array<{ __typename?: 'LocationConfigEdge', node?: { __typename?: 'LocationConfig', location?: any | null, location_id?: any | null, name?: any | null } | null } | null> | null } | null, hustlerItemBaseConfigModels?: { __typename?: 'HustlerItemBaseConfigConnection', edges?: Array<{ __typename?: 'HustlerItemBaseConfigEdge', node?: { __typename?: 'HustlerItemBaseConfig', slot?: any | null, id?: any | null, slot_id?: any | null, name?: any | null, initial_tier?: any | null } | null } | null> | null } | null, hustlerItemTiersConfigModels?: { __typename?: 'HustlerItemTiersConfigConnection', edges?: Array<{ __typename?: 'HustlerItemTiersConfigEdge', node?: { __typename?: 'HustlerItemTiersConfig', slot?: any | null, slot_id?: any | null, tier?: any | null, cost?: any | null, stat?: any | null } | null } | null> | null } | null, encounterStatsConfigModels?: { __typename?: 'EncounterStatsConfigConnection', edges?: Array<{ __typename?: 'EncounterStatsConfigEdge', node?: { __typename?: 'EncounterStatsConfig', encounters_mode?: any | null, encounter?: any | null, health_base?: any | null, health_step?: any | null, attack_base?: any | null, attack_step?: any | null, defense_base?: any | null, defense_step?: any | null, speed_base?: any | null, speed_step?: any | null } | null } | null> | null } | null };

export type GameConfigQueryVariables = Exact<{
  version?: InputMaybe<Scalars['u16']>;
}>;


export type GameConfigQuery = { __typename?: 'World__Query', gameConfigModels?: { __typename?: 'GameConfigConnection', edges?: Array<{ __typename?: 'GameConfigEdge', node?: { __typename?: 'GameConfig', season_version?: any | null, cash?: any | null, health?: any | null, max_turns?: any | null, max_wanted_shopping?: any | null, rep_drug_step?: any | null, rep_buy_item?: any | null, rep_carry_drugs?: any | null, rep_hospitalized?: any | null, rep_jailed?: any | null } | null } | null> | null } | null };

export type AllGameConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGameConfigQuery = { __typename?: 'World__Query', gameConfigModels?: { __typename?: 'GameConfigConnection', edges?: Array<{ __typename?: 'GameConfigEdge', node?: { __typename?: 'GameConfig', season_version?: any | null, cash?: any | null, health?: any | null, max_turns?: any | null, max_wanted_shopping?: any | null, rep_drug_step?: any | null, rep_buy_item?: any | null, rep_carry_drugs?: any | null, rep_hospitalized?: any | null, rep_jailed?: any | null } | null } | null> | null } | null };

export type GameEventsQueryVariables = Exact<{
  gameId: Scalars['String'];
}>;


export type GameEventsQuery = { __typename?: 'World__Query', events?: { __typename?: 'World__EventConnection', totalCount: number, edges?: Array<{ __typename?: 'World__EventEdge', node?: { __typename?: 'World__Event', id?: string | null, keys?: Array<string | null> | null, data?: Array<string | null> | null, createdAt?: any | null } | null } | null> | null } | null };

export type GameEventsSubscriptionSubscriptionVariables = Exact<{
  gameId?: InputMaybe<Scalars['String']>;
}>;


export type GameEventsSubscriptionSubscription = { __typename?: 'World__Subscription', eventEmitted: { __typename?: 'World__Event', id?: string | null, keys?: Array<string | null> | null, data?: Array<string | null> | null, createdAt?: any | null } };

export type GameByIdQueryVariables = Exact<{
  gameId?: InputMaybe<Scalars['u32']>;
}>;


export type GameByIdQuery = { __typename?: 'World__Query', gameModels?: { __typename?: 'GameConnection', edges?: Array<{ __typename?: 'GameEdge', node?: { __typename?: 'Game', season_version?: any | null, game_id?: any | null, game_mode?: any | null, hustler_id?: any | null, player_name?: any | null, player_id?: any | null, game_over?: any | null, final_score?: any | null, registered?: any | null, claimed?: any | null, claimable?: any | null, position?: any | null } | null } | null> | null } | null };

export type RegisteredGamesBySeasonQueryVariables = Exact<{
  version?: InputMaybe<Scalars['u16']>;
}>;


export type RegisteredGamesBySeasonQuery = { __typename?: 'World__Query', gameModels?: { __typename?: 'GameConnection', edges?: Array<{ __typename?: 'GameEdge', node?: { __typename?: 'Game', season_version?: any | null, game_id?: any | null, player_id?: any | null, player_name?: any | null, hustler_id?: any | null, final_score?: any | null, registered?: any | null, claimed?: any | null, claimable?: any | null, position?: any | null } | null } | null> | null } | null };

export type GamesByPlayerQueryVariables = Exact<{
  playerId?: InputMaybe<Scalars['String']>;
}>;


export type GamesByPlayerQuery = { __typename?: 'World__Query', entities?: { __typename?: 'World__EntityConnection', edges?: Array<{ __typename?: 'World__EntityEdge', node?: { __typename?: 'World__Entity', id?: string | null, keys?: Array<string | null> | null, models?: Array<{ __typename: 'DrugConfig' } | { __typename: 'ERC20AllowanceModel' } | { __typename: 'ERC20BalanceModel' } | { __typename: 'ERC20MetadataModel' } | { __typename: 'EncounterConfig' } | { __typename: 'EncounterStatsConfig' } | { __typename: 'Game', game_id?: any | null, player_id?: any | null, season_version?: any | null, game_mode?: any | null, hustler_id?: any | null, player_name?: any | null, game_over?: any | null, final_score?: any | null, registered?: any | null, claimed?: any | null, claimable?: any | null, position?: any | null } | { __typename: 'GameConfig' } | { __typename: 'GameStorePacked', game_id?: any | null, player_id?: any | null, packed?: any | null } | { __typename: 'HustlerItemBaseConfig' } | { __typename: 'HustlerItemTiersConfig' } | { __typename: 'InitializableModel' } | { __typename: 'LocationConfig' } | { __typename: 'RyoAddress' } | { __typename: 'RyoConfig' } | { __typename: 'Season' } | { __typename: 'SeasonSettings' } | { __typename: 'SortedList' } | { __typename: 'SortedListItem' } | null> | null } | null } | null> | null } | null };

export type GameStorePackedQueryVariables = Exact<{
  gameId: Scalars['String'];
  playerId: Scalars['String'];
}>;


export type GameStorePackedQuery = { __typename?: 'World__Query', entities?: { __typename?: 'World__EntityConnection', totalCount: number, edges?: Array<{ __typename?: 'World__EntityEdge', node?: { __typename?: 'World__Entity', id?: string | null, models?: Array<{ __typename: 'DrugConfig' } | { __typename: 'ERC20AllowanceModel' } | { __typename: 'ERC20BalanceModel' } | { __typename: 'ERC20MetadataModel' } | { __typename: 'EncounterConfig' } | { __typename: 'EncounterStatsConfig' } | { __typename: 'Game' } | { __typename: 'GameConfig' } | { __typename: 'GameStorePacked', game_id?: any | null, player_id?: any | null, packed?: any | null } | { __typename: 'HustlerItemBaseConfig' } | { __typename: 'HustlerItemTiersConfig' } | { __typename: 'InitializableModel' } | { __typename: 'LocationConfig' } | { __typename: 'RyoAddress' } | { __typename: 'RyoConfig' } | { __typename: 'Season' } | { __typename: 'SeasonSettings' } | { __typename: 'SortedList' } | { __typename: 'SortedListItem' } | null> | null } | null } | null> | null } | null };

export type GameStorePackedSubscriptionSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GameStorePackedSubscriptionSubscription = { __typename?: 'World__Subscription', entityUpdated: { __typename?: 'World__Entity', id?: string | null, keys?: Array<string | null> | null, models?: Array<{ __typename: 'DrugConfig' } | { __typename: 'ERC20AllowanceModel' } | { __typename: 'ERC20BalanceModel' } | { __typename: 'ERC20MetadataModel' } | { __typename: 'EncounterConfig' } | { __typename: 'EncounterStatsConfig' } | { __typename: 'Game' } | { __typename: 'GameConfig' } | { __typename: 'GameStorePacked', game_id?: any | null, player_id?: any | null, packed?: any | null } | { __typename: 'HustlerItemBaseConfig' } | { __typename: 'HustlerItemTiersConfig' } | { __typename: 'InitializableModel' } | { __typename: 'LocationConfig' } | { __typename: 'RyoAddress' } | { __typename: 'RyoConfig' } | { __typename: 'Season' } | { __typename: 'SeasonSettings' } | { __typename: 'SortedList' } | { __typename: 'SortedListItem' } | null> | null } };

export type SeasonByVersionQueryVariables = Exact<{
  version?: InputMaybe<Scalars['u16']>;
  listId?: InputMaybe<Scalars['felt252']>;
}>;


export type SeasonByVersionQuery = { __typename?: 'World__Query', seasonModels?: { __typename?: 'SeasonConnection', edges?: Array<{ __typename?: 'SeasonEdge', node?: { __typename?: 'Season', version?: any | null, season_duration?: any | null, season_time_limit?: any | null, paper_fee?: any | null, treasury_fee_pct?: any | null, next_version_timestamp?: any | null, paper_balance?: any | null } | null } | null> | null } | null, seasonSettingsModels?: { __typename?: 'SeasonSettingsConnection', edges?: Array<{ __typename?: 'SeasonSettingsEdge', node?: { __typename?: 'SeasonSettings', season_version?: any | null, cash_mode?: any | null, health_mode?: any | null, turns_mode?: any | null, drugs_mode?: any | null, encounters_mode?: any | null, encounters_odds_mode?: any | null, wanted_mode?: any | null } | null } | null> | null } | null, sortedListModels?: { __typename?: 'SortedListConnection', edges?: Array<{ __typename?: 'SortedListEdge', node?: { __typename?: 'SortedList', list_id?: any | null, size?: any | null, locked?: any | null, processed?: any | null, process_size?: any | null, process_max_size?: any | null } | null } | null> | null } | null };

export type SeasonsQueryVariables = Exact<{ [key: string]: never; }>;


export type SeasonsQuery = { __typename?: 'World__Query', seasonModels?: { __typename?: 'SeasonConnection', edges?: Array<{ __typename?: 'SeasonEdge', node?: { __typename?: 'Season', version?: any | null, season_duration?: any | null, season_time_limit?: any | null, paper_fee?: any | null, treasury_fee_pct?: any | null, next_version_timestamp?: any | null, paper_balance?: any | null } | null } | null> | null } | null, seasonSettingsModels?: { __typename?: 'SeasonSettingsConnection', edges?: Array<{ __typename?: 'SeasonSettingsEdge', node?: { __typename?: 'SeasonSettings', season_version?: any | null, cash_mode?: any | null, health_mode?: any | null, turns_mode?: any | null, drugs_mode?: any | null, encounters_mode?: any | null, encounters_odds_mode?: any | null } | null } | null> | null } | null, sortedListModels?: { __typename?: 'SortedListConnection', edges?: Array<{ __typename?: 'SortedListEdge', node?: { __typename?: 'SortedList', list_id?: any | null, size?: any | null, locked?: any | null, processed?: any | null, process_size?: any | null, process_max_size?: any | null } | null } | null> | null } | null };

export type SeasonSettingsQueryVariables = Exact<{
  version?: InputMaybe<Scalars['u16']>;
}>;


export type SeasonSettingsQuery = { __typename?: 'World__Query', seasonSettingsModels?: { __typename?: 'SeasonSettingsConnection', edges?: Array<{ __typename?: 'SeasonSettingsEdge', node?: { __typename?: 'SeasonSettings', season_version?: any | null, cash_mode?: any | null, health_mode?: any | null, turns_mode?: any | null, drugs_mode?: any | null, encounters_mode?: any | null, encounters_odds_mode?: any | null } | null } | null> | null } | null };

export type AllSeasonSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSeasonSettingsQuery = { __typename?: 'World__Query', seasonSettingsModels?: { __typename?: 'SeasonSettingsConnection', edges?: Array<{ __typename?: 'SeasonSettingsEdge', node?: { __typename?: 'SeasonSettings', season_version?: any | null, cash_mode?: any | null, health_mode?: any | null, turns_mode?: any | null, drugs_mode?: any | null, encounters_mode?: any | null, encounters_odds_mode?: any | null } | null } | null> | null } | null };

export type HallOfFameQueryVariables = Exact<{ [key: string]: never; }>;


export type HallOfFameQuery = { __typename?: 'World__Query', gameModels?: { __typename?: 'GameConnection', edges?: Array<{ __typename?: 'GameEdge', node?: { __typename?: 'Game', game_id?: any | null, player_id?: any | null, player_name?: any | null, hustler_id?: any | null, season_version?: any | null, final_score?: any | null, position?: any | null, claimable?: any | null } | null } | null> | null } | null };

export type ClaimableQueryVariables = Exact<{
  playerId?: InputMaybe<Scalars['ContractAddress']>;
}>;


export type ClaimableQuery = { __typename?: 'World__Query', gameModels?: { __typename?: 'GameConnection', edges?: Array<{ __typename?: 'GameEdge', node?: { __typename?: 'Game', game_id?: any | null, season_version?: any | null, player_id?: any | null, player_name?: any | null, hustler_id?: any | null, claimed?: any | null, claimable?: any | null, final_score?: any | null, position?: any | null } | null } | null> | null } | null };

export type GameOverEventsQueryVariables = Exact<{
  gameOverSelector?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
}>;


export type GameOverEventsQuery = { __typename?: 'World__Query', events?: { __typename?: 'World__EventConnection', totalCount: number, edges?: Array<{ __typename?: 'World__EventEdge', node?: { __typename?: 'World__Event', id?: string | null, transactionHash?: string | null, keys?: Array<string | null> | null, data?: Array<string | null> | null, createdAt?: any | null } | null } | null> | null } | null };


export const ConfigDocument = `
    query Config {
  ryoAddressModels(limit: 1) {
    edges {
      node {
        key
        paper
        treasury
        laundromat
      }
    }
  }
  ryoConfigModels(limit: 1) {
    edges {
      node {
        key
        initialized
        paused
        season_version
        season_duration
        season_time_limit
        paper_fee
        paper_reward_launderer
        treasury_fee_pct
        treasury_balance
      }
    }
  }
  drugConfigModels(limit: 24, order: {field: DRUG_ID, direction: ASC}) {
    edges {
      node {
        drugs_mode
        drug
        drug_id
        base
        step
        weight
        name
      }
    }
  }
  locationConfigModels(order: {field: LOCATION_ID, direction: ASC}) {
    edges {
      node {
        location
        location_id
        name
      }
    }
  }
  hustlerItemBaseConfigModels {
    edges {
      node {
        slot
        id
        slot_id
        name
        initial_tier
      }
    }
  }
  hustlerItemTiersConfigModels(limit: 24) {
    edges {
      node {
        slot
        slot_id
        tier
        cost
        stat
      }
    }
  }
  encounterStatsConfigModels(limit: 100) {
    edges {
      node {
        encounters_mode
        encounter
        health_base
        health_step
        attack_base
        attack_step
        defense_base
        defense_step
        speed_base
        speed_step
      }
    }
  }
}
    `;
export const useConfigQuery = <
      TData = ConfigQuery,
      TError = unknown
    >(
      variables?: ConfigQueryVariables,
      options?: UseQueryOptions<ConfigQuery, TError, TData>
    ) =>
    useQuery<ConfigQuery, TError, TData>(
      variables === undefined ? ['Config'] : ['Config', variables],
      useFetchData<ConfigQuery, ConfigQueryVariables>(ConfigDocument).bind(null, variables),
      options
    );

useConfigQuery.getKey = (variables?: ConfigQueryVariables) => variables === undefined ? ['Config'] : ['Config', variables];
;

export const useInfiniteConfigQuery = <
      TData = ConfigQuery,
      TError = unknown
    >(
      variables?: ConfigQueryVariables,
      options?: UseInfiniteQueryOptions<ConfigQuery, TError, TData>
    ) =>{
    const query = useFetchData<ConfigQuery, ConfigQueryVariables>(ConfigDocument)
    return useInfiniteQuery<ConfigQuery, TError, TData>(
      variables === undefined ? ['Config.infinite'] : ['Config.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteConfigQuery.getKey = (variables?: ConfigQueryVariables) => variables === undefined ? ['Config.infinite'] : ['Config.infinite', variables];
;

export const GameConfigDocument = `
    query GameConfig($version: u16) {
  gameConfigModels(where: {season_version: $version}) {
    edges {
      node {
        season_version
        cash
        health
        max_turns
        max_wanted_shopping
        rep_drug_step
        rep_buy_item
        rep_carry_drugs
        rep_hospitalized
        rep_jailed
      }
    }
  }
}
    `;
export const useGameConfigQuery = <
      TData = GameConfigQuery,
      TError = unknown
    >(
      variables?: GameConfigQueryVariables,
      options?: UseQueryOptions<GameConfigQuery, TError, TData>
    ) =>
    useQuery<GameConfigQuery, TError, TData>(
      variables === undefined ? ['GameConfig'] : ['GameConfig', variables],
      useFetchData<GameConfigQuery, GameConfigQueryVariables>(GameConfigDocument).bind(null, variables),
      options
    );

useGameConfigQuery.getKey = (variables?: GameConfigQueryVariables) => variables === undefined ? ['GameConfig'] : ['GameConfig', variables];
;

export const useInfiniteGameConfigQuery = <
      TData = GameConfigQuery,
      TError = unknown
    >(
      variables?: GameConfigQueryVariables,
      options?: UseInfiniteQueryOptions<GameConfigQuery, TError, TData>
    ) =>{
    const query = useFetchData<GameConfigQuery, GameConfigQueryVariables>(GameConfigDocument)
    return useInfiniteQuery<GameConfigQuery, TError, TData>(
      variables === undefined ? ['GameConfig.infinite'] : ['GameConfig.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGameConfigQuery.getKey = (variables?: GameConfigQueryVariables) => variables === undefined ? ['GameConfig.infinite'] : ['GameConfig.infinite', variables];
;

export const AllGameConfigDocument = `
    query AllGameConfig {
  gameConfigModels(limit: 420) {
    edges {
      node {
        season_version
        cash
        health
        max_turns
        max_wanted_shopping
        rep_drug_step
        rep_buy_item
        rep_carry_drugs
        rep_hospitalized
        rep_jailed
      }
    }
  }
}
    `;
export const useAllGameConfigQuery = <
      TData = AllGameConfigQuery,
      TError = unknown
    >(
      variables?: AllGameConfigQueryVariables,
      options?: UseQueryOptions<AllGameConfigQuery, TError, TData>
    ) =>
    useQuery<AllGameConfigQuery, TError, TData>(
      variables === undefined ? ['AllGameConfig'] : ['AllGameConfig', variables],
      useFetchData<AllGameConfigQuery, AllGameConfigQueryVariables>(AllGameConfigDocument).bind(null, variables),
      options
    );

useAllGameConfigQuery.getKey = (variables?: AllGameConfigQueryVariables) => variables === undefined ? ['AllGameConfig'] : ['AllGameConfig', variables];
;

export const useInfiniteAllGameConfigQuery = <
      TData = AllGameConfigQuery,
      TError = unknown
    >(
      variables?: AllGameConfigQueryVariables,
      options?: UseInfiniteQueryOptions<AllGameConfigQuery, TError, TData>
    ) =>{
    const query = useFetchData<AllGameConfigQuery, AllGameConfigQueryVariables>(AllGameConfigDocument)
    return useInfiniteQuery<AllGameConfigQuery, TError, TData>(
      variables === undefined ? ['AllGameConfig.infinite'] : ['AllGameConfig.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteAllGameConfigQuery.getKey = (variables?: AllGameConfigQueryVariables) => variables === undefined ? ['AllGameConfig.infinite'] : ['AllGameConfig.infinite', variables];
;

export const GameEventsDocument = `
    query GameEvents($gameId: String!) {
  events(last: 1000, keys: ["*", $gameId]) {
    totalCount
    edges {
      node {
        id
        keys
        data
        createdAt
      }
    }
  }
}
    `;
export const useGameEventsQuery = <
      TData = GameEventsQuery,
      TError = unknown
    >(
      variables: GameEventsQueryVariables,
      options?: UseQueryOptions<GameEventsQuery, TError, TData>
    ) =>
    useQuery<GameEventsQuery, TError, TData>(
      ['GameEvents', variables],
      useFetchData<GameEventsQuery, GameEventsQueryVariables>(GameEventsDocument).bind(null, variables),
      options
    );

useGameEventsQuery.getKey = (variables: GameEventsQueryVariables) => ['GameEvents', variables];
;

export const useInfiniteGameEventsQuery = <
      TData = GameEventsQuery,
      TError = unknown
    >(
      variables: GameEventsQueryVariables,
      options?: UseInfiniteQueryOptions<GameEventsQuery, TError, TData>
    ) =>{
    const query = useFetchData<GameEventsQuery, GameEventsQueryVariables>(GameEventsDocument)
    return useInfiniteQuery<GameEventsQuery, TError, TData>(
      ['GameEvents.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGameEventsQuery.getKey = (variables: GameEventsQueryVariables) => ['GameEvents.infinite', variables];
;

export const GameEventsSubscriptionDocument = `
    subscription GameEventsSubscription($gameId: String) {
  eventEmitted(keys: ["*", $gameId]) {
    id
    keys
    data
    createdAt
  }
}
    `;
export const GameByIdDocument = `
    query GameById($gameId: u32) {
  gameModels(where: {game_id: $gameId}) {
    edges {
      node {
        season_version
        game_id
        game_mode
        hustler_id
        player_name
        player_id
        game_over
        final_score
        registered
        claimed
        claimable
        position
      }
    }
  }
}
    `;
export const useGameByIdQuery = <
      TData = GameByIdQuery,
      TError = unknown
    >(
      variables?: GameByIdQueryVariables,
      options?: UseQueryOptions<GameByIdQuery, TError, TData>
    ) =>
    useQuery<GameByIdQuery, TError, TData>(
      variables === undefined ? ['GameById'] : ['GameById', variables],
      useFetchData<GameByIdQuery, GameByIdQueryVariables>(GameByIdDocument).bind(null, variables),
      options
    );

useGameByIdQuery.getKey = (variables?: GameByIdQueryVariables) => variables === undefined ? ['GameById'] : ['GameById', variables];
;

export const useInfiniteGameByIdQuery = <
      TData = GameByIdQuery,
      TError = unknown
    >(
      variables?: GameByIdQueryVariables,
      options?: UseInfiniteQueryOptions<GameByIdQuery, TError, TData>
    ) =>{
    const query = useFetchData<GameByIdQuery, GameByIdQueryVariables>(GameByIdDocument)
    return useInfiniteQuery<GameByIdQuery, TError, TData>(
      variables === undefined ? ['GameById.infinite'] : ['GameById.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGameByIdQuery.getKey = (variables?: GameByIdQueryVariables) => variables === undefined ? ['GameById.infinite'] : ['GameById.infinite', variables];
;

export const RegisteredGamesBySeasonDocument = `
    query RegisteredGamesBySeason($version: u16) {
  gameModels(
    limit: 9001
    where: {season_version: $version, registered: true}
    order: {field: FINAL_SCORE, direction: DESC}
  ) {
    edges {
      node {
        season_version
        game_id
        player_id
        player_name
        hustler_id
        final_score
        registered
        claimed
        claimable
        position
      }
    }
  }
}
    `;
export const useRegisteredGamesBySeasonQuery = <
      TData = RegisteredGamesBySeasonQuery,
      TError = unknown
    >(
      variables?: RegisteredGamesBySeasonQueryVariables,
      options?: UseQueryOptions<RegisteredGamesBySeasonQuery, TError, TData>
    ) =>
    useQuery<RegisteredGamesBySeasonQuery, TError, TData>(
      variables === undefined ? ['RegisteredGamesBySeason'] : ['RegisteredGamesBySeason', variables],
      useFetchData<RegisteredGamesBySeasonQuery, RegisteredGamesBySeasonQueryVariables>(RegisteredGamesBySeasonDocument).bind(null, variables),
      options
    );

useRegisteredGamesBySeasonQuery.getKey = (variables?: RegisteredGamesBySeasonQueryVariables) => variables === undefined ? ['RegisteredGamesBySeason'] : ['RegisteredGamesBySeason', variables];
;

export const useInfiniteRegisteredGamesBySeasonQuery = <
      TData = RegisteredGamesBySeasonQuery,
      TError = unknown
    >(
      variables?: RegisteredGamesBySeasonQueryVariables,
      options?: UseInfiniteQueryOptions<RegisteredGamesBySeasonQuery, TError, TData>
    ) =>{
    const query = useFetchData<RegisteredGamesBySeasonQuery, RegisteredGamesBySeasonQueryVariables>(RegisteredGamesBySeasonDocument)
    return useInfiniteQuery<RegisteredGamesBySeasonQuery, TError, TData>(
      variables === undefined ? ['RegisteredGamesBySeason.infinite'] : ['RegisteredGamesBySeason.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteRegisteredGamesBySeasonQuery.getKey = (variables?: RegisteredGamesBySeasonQueryVariables) => variables === undefined ? ['RegisteredGamesBySeason.infinite'] : ['RegisteredGamesBySeason.infinite', variables];
;

export const GamesByPlayerDocument = `
    query GamesByPlayer($playerId: String) {
  entities(limit: 9001, keys: ["*", $playerId]) {
    edges {
      node {
        id
        keys
        models {
          __typename
          ... on Game {
            game_id
            player_id
            season_version
            game_mode
            hustler_id
            player_name
            game_over
            final_score
            registered
            claimed
            claimable
            position
          }
          ... on GameStorePacked {
            game_id
            player_id
            packed
          }
        }
      }
    }
  }
}
    `;
export const useGamesByPlayerQuery = <
      TData = GamesByPlayerQuery,
      TError = unknown
    >(
      variables?: GamesByPlayerQueryVariables,
      options?: UseQueryOptions<GamesByPlayerQuery, TError, TData>
    ) =>
    useQuery<GamesByPlayerQuery, TError, TData>(
      variables === undefined ? ['GamesByPlayer'] : ['GamesByPlayer', variables],
      useFetchData<GamesByPlayerQuery, GamesByPlayerQueryVariables>(GamesByPlayerDocument).bind(null, variables),
      options
    );

useGamesByPlayerQuery.getKey = (variables?: GamesByPlayerQueryVariables) => variables === undefined ? ['GamesByPlayer'] : ['GamesByPlayer', variables];
;

export const useInfiniteGamesByPlayerQuery = <
      TData = GamesByPlayerQuery,
      TError = unknown
    >(
      variables?: GamesByPlayerQueryVariables,
      options?: UseInfiniteQueryOptions<GamesByPlayerQuery, TError, TData>
    ) =>{
    const query = useFetchData<GamesByPlayerQuery, GamesByPlayerQueryVariables>(GamesByPlayerDocument)
    return useInfiniteQuery<GamesByPlayerQuery, TError, TData>(
      variables === undefined ? ['GamesByPlayer.infinite'] : ['GamesByPlayer.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGamesByPlayerQuery.getKey = (variables?: GamesByPlayerQueryVariables) => variables === undefined ? ['GamesByPlayer.infinite'] : ['GamesByPlayer.infinite', variables];
;

export const GameStorePackedDocument = `
    query GameStorePacked($gameId: String!, $playerId: String!) {
  entities(keys: [$gameId, $playerId]) {
    totalCount
    edges {
      node {
        id
        models {
          __typename
          ... on GameStorePacked {
            game_id
            player_id
            packed
          }
        }
      }
    }
  }
}
    `;
export const useGameStorePackedQuery = <
      TData = GameStorePackedQuery,
      TError = unknown
    >(
      variables: GameStorePackedQueryVariables,
      options?: UseQueryOptions<GameStorePackedQuery, TError, TData>
    ) =>
    useQuery<GameStorePackedQuery, TError, TData>(
      ['GameStorePacked', variables],
      useFetchData<GameStorePackedQuery, GameStorePackedQueryVariables>(GameStorePackedDocument).bind(null, variables),
      options
    );

useGameStorePackedQuery.getKey = (variables: GameStorePackedQueryVariables) => ['GameStorePacked', variables];
;

export const useInfiniteGameStorePackedQuery = <
      TData = GameStorePackedQuery,
      TError = unknown
    >(
      variables: GameStorePackedQueryVariables,
      options?: UseInfiniteQueryOptions<GameStorePackedQuery, TError, TData>
    ) =>{
    const query = useFetchData<GameStorePackedQuery, GameStorePackedQueryVariables>(GameStorePackedDocument)
    return useInfiniteQuery<GameStorePackedQuery, TError, TData>(
      ['GameStorePacked.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGameStorePackedQuery.getKey = (variables: GameStorePackedQueryVariables) => ['GameStorePacked.infinite', variables];
;

export const GameStorePackedSubscriptionDocument = `
    subscription GameStorePackedSubscription($id: ID) {
  entityUpdated(id: $id) {
    id
    keys
    models {
      __typename
      ... on GameStorePacked {
        game_id
        player_id
        packed
      }
    }
  }
}
    `;
export const SeasonByVersionDocument = `
    query SeasonByVersion($version: u16, $listId: felt252) {
  seasonModels(where: {version: $version}) {
    edges {
      node {
        version
        season_duration
        season_time_limit
        paper_fee
        treasury_fee_pct
        next_version_timestamp
        paper_balance
      }
    }
  }
  seasonSettingsModels(where: {season_version: $version}) {
    edges {
      node {
        season_version
        cash_mode
        health_mode
        turns_mode
        drugs_mode
        encounters_mode
        encounters_odds_mode
        wanted_mode
      }
    }
  }
  sortedListModels(where: {list_id: $listId}) {
    edges {
      node {
        list_id
        size
        locked
        processed
        process_size
        process_max_size
      }
    }
  }
}
    `;
export const useSeasonByVersionQuery = <
      TData = SeasonByVersionQuery,
      TError = unknown
    >(
      variables?: SeasonByVersionQueryVariables,
      options?: UseQueryOptions<SeasonByVersionQuery, TError, TData>
    ) =>
    useQuery<SeasonByVersionQuery, TError, TData>(
      variables === undefined ? ['SeasonByVersion'] : ['SeasonByVersion', variables],
      useFetchData<SeasonByVersionQuery, SeasonByVersionQueryVariables>(SeasonByVersionDocument).bind(null, variables),
      options
    );

useSeasonByVersionQuery.getKey = (variables?: SeasonByVersionQueryVariables) => variables === undefined ? ['SeasonByVersion'] : ['SeasonByVersion', variables];
;

export const useInfiniteSeasonByVersionQuery = <
      TData = SeasonByVersionQuery,
      TError = unknown
    >(
      variables?: SeasonByVersionQueryVariables,
      options?: UseInfiniteQueryOptions<SeasonByVersionQuery, TError, TData>
    ) =>{
    const query = useFetchData<SeasonByVersionQuery, SeasonByVersionQueryVariables>(SeasonByVersionDocument)
    return useInfiniteQuery<SeasonByVersionQuery, TError, TData>(
      variables === undefined ? ['SeasonByVersion.infinite'] : ['SeasonByVersion.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteSeasonByVersionQuery.getKey = (variables?: SeasonByVersionQueryVariables) => variables === undefined ? ['SeasonByVersion.infinite'] : ['SeasonByVersion.infinite', variables];
;

export const SeasonsDocument = `
    query Seasons {
  seasonModels(limit: 420, order: {field: VERSION, direction: DESC}) {
    edges {
      node {
        version
        season_duration
        season_time_limit
        paper_fee
        treasury_fee_pct
        next_version_timestamp
        paper_balance
      }
    }
  }
  seasonSettingsModels(limit: 420) {
    edges {
      node {
        season_version
        cash_mode
        health_mode
        turns_mode
        drugs_mode
        encounters_mode
        encounters_odds_mode
      }
    }
  }
  sortedListModels(limit: 420) {
    edges {
      node {
        list_id
        size
        locked
        processed
        process_size
        process_max_size
      }
    }
  }
}
    `;
export const useSeasonsQuery = <
      TData = SeasonsQuery,
      TError = unknown
    >(
      variables?: SeasonsQueryVariables,
      options?: UseQueryOptions<SeasonsQuery, TError, TData>
    ) =>
    useQuery<SeasonsQuery, TError, TData>(
      variables === undefined ? ['Seasons'] : ['Seasons', variables],
      useFetchData<SeasonsQuery, SeasonsQueryVariables>(SeasonsDocument).bind(null, variables),
      options
    );

useSeasonsQuery.getKey = (variables?: SeasonsQueryVariables) => variables === undefined ? ['Seasons'] : ['Seasons', variables];
;

export const useInfiniteSeasonsQuery = <
      TData = SeasonsQuery,
      TError = unknown
    >(
      variables?: SeasonsQueryVariables,
      options?: UseInfiniteQueryOptions<SeasonsQuery, TError, TData>
    ) =>{
    const query = useFetchData<SeasonsQuery, SeasonsQueryVariables>(SeasonsDocument)
    return useInfiniteQuery<SeasonsQuery, TError, TData>(
      variables === undefined ? ['Seasons.infinite'] : ['Seasons.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteSeasonsQuery.getKey = (variables?: SeasonsQueryVariables) => variables === undefined ? ['Seasons.infinite'] : ['Seasons.infinite', variables];
;

export const SeasonSettingsDocument = `
    query SeasonSettings($version: u16) {
  seasonSettingsModels(where: {season_version: $version}) {
    edges {
      node {
        season_version
        cash_mode
        health_mode
        turns_mode
        drugs_mode
        encounters_mode
        encounters_odds_mode
      }
    }
  }
}
    `;
export const useSeasonSettingsQuery = <
      TData = SeasonSettingsQuery,
      TError = unknown
    >(
      variables?: SeasonSettingsQueryVariables,
      options?: UseQueryOptions<SeasonSettingsQuery, TError, TData>
    ) =>
    useQuery<SeasonSettingsQuery, TError, TData>(
      variables === undefined ? ['SeasonSettings'] : ['SeasonSettings', variables],
      useFetchData<SeasonSettingsQuery, SeasonSettingsQueryVariables>(SeasonSettingsDocument).bind(null, variables),
      options
    );

useSeasonSettingsQuery.getKey = (variables?: SeasonSettingsQueryVariables) => variables === undefined ? ['SeasonSettings'] : ['SeasonSettings', variables];
;

export const useInfiniteSeasonSettingsQuery = <
      TData = SeasonSettingsQuery,
      TError = unknown
    >(
      variables?: SeasonSettingsQueryVariables,
      options?: UseInfiniteQueryOptions<SeasonSettingsQuery, TError, TData>
    ) =>{
    const query = useFetchData<SeasonSettingsQuery, SeasonSettingsQueryVariables>(SeasonSettingsDocument)
    return useInfiniteQuery<SeasonSettingsQuery, TError, TData>(
      variables === undefined ? ['SeasonSettings.infinite'] : ['SeasonSettings.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteSeasonSettingsQuery.getKey = (variables?: SeasonSettingsQueryVariables) => variables === undefined ? ['SeasonSettings.infinite'] : ['SeasonSettings.infinite', variables];
;

export const AllSeasonSettingsDocument = `
    query AllSeasonSettings {
  seasonSettingsModels(limit: 420) {
    edges {
      node {
        season_version
        cash_mode
        health_mode
        turns_mode
        drugs_mode
        encounters_mode
        encounters_odds_mode
      }
    }
  }
}
    `;
export const useAllSeasonSettingsQuery = <
      TData = AllSeasonSettingsQuery,
      TError = unknown
    >(
      variables?: AllSeasonSettingsQueryVariables,
      options?: UseQueryOptions<AllSeasonSettingsQuery, TError, TData>
    ) =>
    useQuery<AllSeasonSettingsQuery, TError, TData>(
      variables === undefined ? ['AllSeasonSettings'] : ['AllSeasonSettings', variables],
      useFetchData<AllSeasonSettingsQuery, AllSeasonSettingsQueryVariables>(AllSeasonSettingsDocument).bind(null, variables),
      options
    );

useAllSeasonSettingsQuery.getKey = (variables?: AllSeasonSettingsQueryVariables) => variables === undefined ? ['AllSeasonSettings'] : ['AllSeasonSettings', variables];
;

export const useInfiniteAllSeasonSettingsQuery = <
      TData = AllSeasonSettingsQuery,
      TError = unknown
    >(
      variables?: AllSeasonSettingsQueryVariables,
      options?: UseInfiniteQueryOptions<AllSeasonSettingsQuery, TError, TData>
    ) =>{
    const query = useFetchData<AllSeasonSettingsQuery, AllSeasonSettingsQueryVariables>(AllSeasonSettingsDocument)
    return useInfiniteQuery<AllSeasonSettingsQuery, TError, TData>(
      variables === undefined ? ['AllSeasonSettings.infinite'] : ['AllSeasonSettings.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteAllSeasonSettingsQuery.getKey = (variables?: AllSeasonSettingsQueryVariables) => variables === undefined ? ['AllSeasonSettings.infinite'] : ['AllSeasonSettings.infinite', variables];
;

export const HallOfFameDocument = `
    query HallOfFame {
  gameModels(
    limit: 420
    where: {position: 1}
    order: {field: SEASON_VERSION, direction: DESC}
  ) {
    edges {
      node {
        game_id
        player_id
        player_name
        hustler_id
        season_version
        final_score
        position
        claimable
      }
    }
  }
}
    `;
export const useHallOfFameQuery = <
      TData = HallOfFameQuery,
      TError = unknown
    >(
      variables?: HallOfFameQueryVariables,
      options?: UseQueryOptions<HallOfFameQuery, TError, TData>
    ) =>
    useQuery<HallOfFameQuery, TError, TData>(
      variables === undefined ? ['HallOfFame'] : ['HallOfFame', variables],
      useFetchData<HallOfFameQuery, HallOfFameQueryVariables>(HallOfFameDocument).bind(null, variables),
      options
    );

useHallOfFameQuery.getKey = (variables?: HallOfFameQueryVariables) => variables === undefined ? ['HallOfFame'] : ['HallOfFame', variables];
;

export const useInfiniteHallOfFameQuery = <
      TData = HallOfFameQuery,
      TError = unknown
    >(
      variables?: HallOfFameQueryVariables,
      options?: UseInfiniteQueryOptions<HallOfFameQuery, TError, TData>
    ) =>{
    const query = useFetchData<HallOfFameQuery, HallOfFameQueryVariables>(HallOfFameDocument)
    return useInfiniteQuery<HallOfFameQuery, TError, TData>(
      variables === undefined ? ['HallOfFame.infinite'] : ['HallOfFame.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteHallOfFameQuery.getKey = (variables?: HallOfFameQueryVariables) => variables === undefined ? ['HallOfFame.infinite'] : ['HallOfFame.infinite', variables];
;

export const ClaimableDocument = `
    query Claimable($playerId: ContractAddress) {
  gameModels(where: {player_id: $playerId, claimed: false, claimableGT: 0}) {
    edges {
      node {
        game_id
        season_version
        player_id
        player_name
        hustler_id
        claimed
        claimable
        final_score
        position
      }
    }
  }
}
    `;
export const useClaimableQuery = <
      TData = ClaimableQuery,
      TError = unknown
    >(
      variables?: ClaimableQueryVariables,
      options?: UseQueryOptions<ClaimableQuery, TError, TData>
    ) =>
    useQuery<ClaimableQuery, TError, TData>(
      variables === undefined ? ['Claimable'] : ['Claimable', variables],
      useFetchData<ClaimableQuery, ClaimableQueryVariables>(ClaimableDocument).bind(null, variables),
      options
    );

useClaimableQuery.getKey = (variables?: ClaimableQueryVariables) => variables === undefined ? ['Claimable'] : ['Claimable', variables];
;

export const useInfiniteClaimableQuery = <
      TData = ClaimableQuery,
      TError = unknown
    >(
      variables?: ClaimableQueryVariables,
      options?: UseInfiniteQueryOptions<ClaimableQuery, TError, TData>
    ) =>{
    const query = useFetchData<ClaimableQuery, ClaimableQueryVariables>(ClaimableDocument)
    return useInfiniteQuery<ClaimableQuery, TError, TData>(
      variables === undefined ? ['Claimable.infinite'] : ['Claimable.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteClaimableQuery.getKey = (variables?: ClaimableQueryVariables) => variables === undefined ? ['Claimable.infinite'] : ['Claimable.infinite', variables];
;

export const GameOverEventsDocument = `
    query GameOverEvents($gameOverSelector: String, $version: String) {
  events(last: 1000, keys: [$gameOverSelector, "*", "*", $version]) {
    totalCount
    edges {
      node {
        id
        transactionHash
        keys
        data
        createdAt
      }
    }
  }
}
    `;
export const useGameOverEventsQuery = <
      TData = GameOverEventsQuery,
      TError = unknown
    >(
      variables?: GameOverEventsQueryVariables,
      options?: UseQueryOptions<GameOverEventsQuery, TError, TData>
    ) =>
    useQuery<GameOverEventsQuery, TError, TData>(
      variables === undefined ? ['GameOverEvents'] : ['GameOverEvents', variables],
      useFetchData<GameOverEventsQuery, GameOverEventsQueryVariables>(GameOverEventsDocument).bind(null, variables),
      options
    );

useGameOverEventsQuery.getKey = (variables?: GameOverEventsQueryVariables) => variables === undefined ? ['GameOverEvents'] : ['GameOverEvents', variables];
;

export const useInfiniteGameOverEventsQuery = <
      TData = GameOverEventsQuery,
      TError = unknown
    >(
      variables?: GameOverEventsQueryVariables,
      options?: UseInfiniteQueryOptions<GameOverEventsQuery, TError, TData>
    ) =>{
    const query = useFetchData<GameOverEventsQuery, GameOverEventsQueryVariables>(GameOverEventsDocument)
    return useInfiniteQuery<GameOverEventsQuery, TError, TData>(
      variables === undefined ? ['GameOverEvents.infinite'] : ['GameOverEvents.infinite', variables],
      (metaData) => query({...variables, ...(metaData.pageParam ?? {})}),
      options
    )};


useInfiniteGameOverEventsQuery.getKey = (variables?: GameOverEventsQueryVariables) => variables === undefined ? ['GameOverEvents.infinite'] : ['GameOverEvents.infinite', variables];
;
