/**
 * @file Top level enums used all over the place.
 */

export enum EducationalQualification {
  MATRICULATION,
  SENIOR_SECONDARY,
  UNDER_GRADUATE,
  POST_GRADUATE,
}

export enum Gender {
  MALE,
  FEMALE,
  TRANS_GENDER,
  CHOOSE_NOT_TO_SPECIFY,
}

export enum MaritalStatus {
  MARRIED,
  UNMARRIED,
  CHOOSE_NOT_TO_SPECIFY,
}

export enum StartupStage {
  CONCEPT_DESIGN,
  PROTOTYPE,
  BUILDING_MVP,
  MVP_IN_MARKET,
  ESTABLISHED_MARKET,
}

export enum FundingStage {
  NO_FUNDING,
  ANGEL,
  SEED,
  SERIES_A,
  SERIES_B,
  SERIES_C,
  'SERIES_D+',
}

export enum BusinessSolutionType {
  Hardware,
  SOFTWARE,
  BOTH_HARDWARE_AND_SOFTWARE,
  OTHER,
}

export enum BusinessModelTransactionType {
  B2C,
  B2B,
  B2G,
  B2B2C,
}

export enum RevenueModel {
  AFFILIATE,
  COMMISSION,
  CONSULTING,
  DIRECT_SALES,
  EVENTS,
  FREEMIUM,
  LEAD_GENERATION,
  MARKET_PLACE,
  SAAS,
  SUBSCRIPTION,
  OTHER,
}
