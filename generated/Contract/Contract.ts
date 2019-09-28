// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class _AppealRequested extends EthereumEvent {
  get params(): _AppealRequested__Params {
    return new _AppealRequested__Params(this);
  }
}

export class _AppealRequested__Params {
  _event: _AppealRequested;

  constructor(event: _AppealRequested) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get appealFeePaid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get requester(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get data(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class _AppealGranted extends EthereumEvent {
  get params(): _AppealGranted__Params {
    return new _AppealGranted__Params(this);
  }
}

export class _AppealGranted__Params {
  _event: _AppealGranted;

  constructor(event: _AppealGranted) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get data(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class _FailedChallengeOverturned extends EthereumEvent {
  get params(): _FailedChallengeOverturned__Params {
    return new _FailedChallengeOverturned__Params(this);
  }
}

export class _FailedChallengeOverturned__Params {
  _event: _FailedChallengeOverturned;

  constructor(event: _FailedChallengeOverturned) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewardPool(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class _SuccessfulChallengeOverturned extends EthereumEvent {
  get params(): _SuccessfulChallengeOverturned__Params {
    return new _SuccessfulChallengeOverturned__Params(this);
  }
}

export class _SuccessfulChallengeOverturned__Params {
  _event: _SuccessfulChallengeOverturned;

  constructor(event: _SuccessfulChallengeOverturned) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewardPool(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class _GrantedAppealChallenged extends EthereumEvent {
  get params(): _GrantedAppealChallenged__Params {
    return new _GrantedAppealChallenged__Params(this);
  }
}

export class _GrantedAppealChallenged__Params {
  _event: _GrantedAppealChallenged;

  constructor(event: _GrantedAppealChallenged) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get appealChallengeID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get data(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class _GrantedAppealOverturned extends EthereumEvent {
  get params(): _GrantedAppealOverturned__Params {
    return new _GrantedAppealOverturned__Params(this);
  }
}

export class _GrantedAppealOverturned__Params {
  _event: _GrantedAppealOverturned;

  constructor(event: _GrantedAppealOverturned) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get appealChallengeID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardPool(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get totalTokens(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class _GrantedAppealConfirmed extends EthereumEvent {
  get params(): _GrantedAppealConfirmed__Params {
    return new _GrantedAppealConfirmed__Params(this);
  }
}

export class _GrantedAppealConfirmed__Params {
  _event: _GrantedAppealConfirmed;

  constructor(event: _GrantedAppealConfirmed) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get appealChallengeID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rewardPool(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get totalTokens(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class _GovernmentTransfered extends EthereumEvent {
  get params(): _GovernmentTransfered__Params {
    return new _GovernmentTransfered__Params(this);
  }
}

export class _GovernmentTransfered__Params {
  _event: _GovernmentTransfered;

  constructor(event: _GovernmentTransfered) {
    this._event = event;
  }

  get newGovernment(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class _Application extends EthereumEvent {
  get params(): _Application__Params {
    return new _Application__Params(this);
  }
}

export class _Application__Params {
  _event: _Application;

  constructor(event: _Application) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get deposit(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get appEndDate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get data(): string {
    return this._event.parameters[3].value.toString();
  }

  get applicant(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class _Challenge extends EthereumEvent {
  get params(): _Challenge__Params {
    return new _Challenge__Params(this);
  }
}

export class _Challenge__Params {
  _event: _Challenge;

  constructor(event: _Challenge) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get data(): string {
    return this._event.parameters[2].value.toString();
  }

  get commitEndDate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get revealEndDate(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get challenger(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class _Deposit extends EthereumEvent {
  get params(): _Deposit__Params {
    return new _Deposit__Params(this);
  }
}

export class _Deposit__Params {
  _event: _Deposit;

  constructor(event: _Deposit) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get added(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newTotal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class _Withdrawal extends EthereumEvent {
  get params(): _Withdrawal__Params {
    return new _Withdrawal__Params(this);
  }
}

export class _Withdrawal__Params {
  _event: _Withdrawal;

  constructor(event: _Withdrawal) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrew(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newTotal(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class _ApplicationWhitelisted extends EthereumEvent {
  get params(): _ApplicationWhitelisted__Params {
    return new _ApplicationWhitelisted__Params(this);
  }
}

export class _ApplicationWhitelisted__Params {
  _event: _ApplicationWhitelisted;

  constructor(event: _ApplicationWhitelisted) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class _ApplicationRemoved extends EthereumEvent {
  get params(): _ApplicationRemoved__Params {
    return new _ApplicationRemoved__Params(this);
  }
}

export class _ApplicationRemoved__Params {
  _event: _ApplicationRemoved;

  constructor(event: _ApplicationRemoved) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class _ListingRemoved extends EthereumEvent {
  get params(): _ListingRemoved__Params {
    return new _ListingRemoved__Params(this);
  }
}

export class _ListingRemoved__Params {
  _event: _ListingRemoved;

  constructor(event: _ListingRemoved) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class _ListingWithdrawn extends EthereumEvent {
  get params(): _ListingWithdrawn__Params {
    return new _ListingWithdrawn__Params(this);
  }
}

export class _ListingWithdrawn__Params {
  _event: _ListingWithdrawn;

  constructor(event: _ListingWithdrawn) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class _TouchAndRemoved extends EthereumEvent {
  get params(): _TouchAndRemoved__Params {
    return new _TouchAndRemoved__Params(this);
  }
}

export class _TouchAndRemoved__Params {
  _event: _TouchAndRemoved;

  constructor(event: _TouchAndRemoved) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class _ChallengeFailed extends EthereumEvent {
  get params(): _ChallengeFailed__Params {
    return new _ChallengeFailed__Params(this);
  }
}

export class _ChallengeFailed__Params {
  _event: _ChallengeFailed;

  constructor(event: _ChallengeFailed) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewardPool(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class _ChallengeSucceeded extends EthereumEvent {
  get params(): _ChallengeSucceeded__Params {
    return new _ChallengeSucceeded__Params(this);
  }
}

export class _ChallengeSucceeded__Params {
  _event: _ChallengeSucceeded;

  constructor(event: _ChallengeSucceeded) {
    this._event = event;
  }

  get listingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get challengeID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewardPool(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class _RewardClaimed extends EthereumEvent {
  get params(): _RewardClaimed__Params {
    return new _RewardClaimed__Params(this);
  }
}

export class _RewardClaimed__Params {
  _event: _RewardClaimed;

  constructor(event: _RewardClaimed) {
    this._event = event;
  }

  get challengeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Contract__listingsResult {
  value0: BigInt;
  value1: boolean;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: boolean,
    value2: Address,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromBoolean(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Contract__challengesResult {
  value0: BigInt;
  value1: Address;
  value2: boolean;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: boolean,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromBoolean(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Contract__appealsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: boolean,
    value4: BigInt,
    value5: BigInt,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromBoolean(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromBoolean(this.value6));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  name(): string {
    let result = super.call("name", []);

    return result[0].toString();
  }

  try_name(): CallResult<string> {
    let result = super.tryCall("name", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  appealChallengeCanBeResolved(listingAddress: Address): boolean {
    let result = super.call("appealChallengeCanBeResolved", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_appealChallengeCanBeResolved(
    listingAddress: Address
  ): CallResult<boolean> {
    let result = super.tryCall("appealChallengeCanBeResolved", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  challengeGrantedAppeal(listingAddress: Address, data: string): BigInt {
    let result = super.call("challengeGrantedAppeal", [
      EthereumValue.fromAddress(listingAddress),
      EthereumValue.fromString(data)
    ]);

    return result[0].toBigInt();
  }

  try_challengeGrantedAppeal(
    listingAddress: Address,
    data: string
  ): CallResult<BigInt> {
    let result = super.tryCall("challengeGrantedAppeal", [
      EthereumValue.fromAddress(listingAddress),
      EthereumValue.fromString(data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  civilVoting(): Address {
    let result = super.call("civilVoting", []);

    return result[0].toAddress();
  }

  try_civilVoting(): CallResult<Address> {
    let result = super.tryCall("civilVoting", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  appealCanBeResolved(listingAddress: Address): boolean {
    let result = super.call("appealCanBeResolved", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_appealCanBeResolved(listingAddress: Address): CallResult<boolean> {
    let result = super.tryCall("appealCanBeResolved", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  government(): Address {
    let result = super.call("government", []);

    return result[0].toAddress();
  }

  try_government(): CallResult<Address> {
    let result = super.tryCall("government", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  challengeCanBeResolved(listingAddress: Address): boolean {
    let result = super.call("challengeCanBeResolved", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_challengeCanBeResolved(listingAddress: Address): CallResult<boolean> {
    let result = super.tryCall("challengeCanBeResolved", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  isWhitelisted(listingAddress: Address): boolean {
    let result = super.call("isWhitelisted", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_isWhitelisted(listingAddress: Address): CallResult<boolean> {
    let result = super.tryCall("isWhitelisted", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  appWasMade(listingAddress: Address): boolean {
    let result = super.call("appWasMade", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_appWasMade(listingAddress: Address): CallResult<boolean> {
    let result = super.tryCall("appWasMade", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  challengeRequestAppealExpiries(param0: BigInt): BigInt {
    let result = super.call("challengeRequestAppealExpiries", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_challengeRequestAppealExpiries(param0: BigInt): CallResult<BigInt> {
    let result = super.tryCall("challengeRequestAppealExpiries", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  listings(param0: Address): Contract__listingsResult {
    let result = super.call("listings", [EthereumValue.fromAddress(param0)]);

    return new Contract__listingsResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_listings(param0: Address): CallResult<Contract__listingsResult> {
    let result = super.tryCall("listings", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__listingsResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  challengeExists(listingAddress: Address): boolean {
    let result = super.call("challengeExists", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_challengeExists(listingAddress: Address): CallResult<boolean> {
    let result = super.tryCall("challengeExists", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  challenges(param0: BigInt): Contract__challengesResult {
    let result = super.call("challenges", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new Contract__challengesResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBoolean(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_challenges(param0: BigInt): CallResult<Contract__challengesResult> {
    let result = super.tryCall("challenges", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__challengesResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBoolean(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  tokenClaims(_challengeID: BigInt, _voter: Address): boolean {
    let result = super.call("tokenClaims", [
      EthereumValue.fromUnsignedBigInt(_challengeID),
      EthereumValue.fromAddress(_voter)
    ]);

    return result[0].toBoolean();
  }

  try_tokenClaims(_challengeID: BigInt, _voter: Address): CallResult<boolean> {
    let result = super.tryCall("tokenClaims", [
      EthereumValue.fromUnsignedBigInt(_challengeID),
      EthereumValue.fromAddress(_voter)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  voterReward(voter: Address, challengeID: BigInt, salt: BigInt): BigInt {
    let result = super.call("voterReward", [
      EthereumValue.fromAddress(voter),
      EthereumValue.fromUnsignedBigInt(challengeID),
      EthereumValue.fromUnsignedBigInt(salt)
    ]);

    return result[0].toBigInt();
  }

  try_voterReward(
    voter: Address,
    challengeID: BigInt,
    salt: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("voterReward", [
      EthereumValue.fromAddress(voter),
      EthereumValue.fromUnsignedBigInt(challengeID),
      EthereumValue.fromUnsignedBigInt(salt)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  appeals(param0: BigInt): Contract__appealsResult {
    let result = super.call("appeals", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new Contract__appealsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean()
    );
  }

  try_appeals(param0: BigInt): CallResult<Contract__appealsResult> {
    let result = super.tryCall("appeals", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Contract__appealsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean()
      )
    );
  }

  challenge(listingAddress: Address, data: string): BigInt {
    let result = super.call("challenge", [
      EthereumValue.fromAddress(listingAddress),
      EthereumValue.fromString(data)
    ]);

    return result[0].toBigInt();
  }

  try_challenge(listingAddress: Address, data: string): CallResult<BigInt> {
    let result = super.tryCall("challenge", [
      EthereumValue.fromAddress(listingAddress),
      EthereumValue.fromString(data)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  determineReward(challengeID: BigInt): BigInt {
    let result = super.call("determineReward", [
      EthereumValue.fromUnsignedBigInt(challengeID)
    ]);

    return result[0].toBigInt();
  }

  try_determineReward(challengeID: BigInt): CallResult<BigInt> {
    let result = super.tryCall("determineReward", [
      EthereumValue.fromUnsignedBigInt(challengeID)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  canBeWhitelisted(listingAddress: Address): boolean {
    let result = super.call("canBeWhitelisted", [
      EthereumValue.fromAddress(listingAddress)
    ]);

    return result[0].toBoolean();
  }

  try_canBeWhitelisted(listingAddress: Address): CallResult<boolean> {
    let result = super.tryCall("canBeWhitelisted", [
      EthereumValue.fromAddress(listingAddress)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  parameterizer(): Address {
    let result = super.call("parameterizer", []);

    return result[0].toAddress();
  }

  try_parameterizer(): CallResult<Address> {
    let result = super.tryCall("parameterizer", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  token(): Address {
    let result = super.call("token", []);

    return result[0].toAddress();
  }

  try_token(): CallResult<Address> {
    let result = super.tryCall("token", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  voting(): Address {
    let result = super.call("voting", []);

    return result[0].toAddress();
  }

  try_voting(): CallResult<Address> {
    let result = super.tryCall("voting", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class UpdateStatusCall extends EthereumCall {
  get inputs(): UpdateStatusCall__Inputs {
    return new UpdateStatusCall__Inputs(this);
  }

  get outputs(): UpdateStatusCall__Outputs {
    return new UpdateStatusCall__Outputs(this);
  }
}

export class UpdateStatusCall__Inputs {
  _call: UpdateStatusCall;

  constructor(call: UpdateStatusCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateStatusCall__Outputs {
  _call: UpdateStatusCall;

  constructor(call: UpdateStatusCall) {
    this._call = call;
  }
}

export class ChallengeGrantedAppealCall extends EthereumCall {
  get inputs(): ChallengeGrantedAppealCall__Inputs {
    return new ChallengeGrantedAppealCall__Inputs(this);
  }

  get outputs(): ChallengeGrantedAppealCall__Outputs {
    return new ChallengeGrantedAppealCall__Outputs(this);
  }
}

export class ChallengeGrantedAppealCall__Inputs {
  _call: ChallengeGrantedAppealCall;

  constructor(call: ChallengeGrantedAppealCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ChallengeGrantedAppealCall__Outputs {
  _call: ChallengeGrantedAppealCall;

  constructor(call: ChallengeGrantedAppealCall) {
    this._call = call;
  }

  get challengeID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositCall extends EthereumCall {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class ApplyCall extends EthereumCall {
  get inputs(): ApplyCall__Inputs {
    return new ApplyCall__Inputs(this);
  }

  get outputs(): ApplyCall__Outputs {
    return new ApplyCall__Outputs(this);
  }
}

export class ApplyCall__Inputs {
  _call: ApplyCall;

  constructor(call: ApplyCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ApplyCall__Outputs {
  _call: ApplyCall;

  constructor(call: ApplyCall) {
    this._call = call;
  }
}

export class TransferGovernmentCall extends EthereumCall {
  get inputs(): TransferGovernmentCall__Inputs {
    return new TransferGovernmentCall__Inputs(this);
  }

  get outputs(): TransferGovernmentCall__Outputs {
    return new TransferGovernmentCall__Outputs(this);
  }
}

export class TransferGovernmentCall__Inputs {
  _call: TransferGovernmentCall;

  constructor(call: TransferGovernmentCall) {
    this._call = call;
  }

  get newGovernment(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferGovernmentCall__Outputs {
  _call: TransferGovernmentCall;

  constructor(call: TransferGovernmentCall) {
    this._call = call;
  }
}

export class ClaimRewardsCall extends EthereumCall {
  get inputs(): ClaimRewardsCall__Inputs {
    return new ClaimRewardsCall__Inputs(this);
  }

  get outputs(): ClaimRewardsCall__Outputs {
    return new ClaimRewardsCall__Outputs(this);
  }
}

export class ClaimRewardsCall__Inputs {
  _call: ClaimRewardsCall;

  constructor(call: ClaimRewardsCall) {
    this._call = call;
  }

  get _challengeIDs(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _salts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ClaimRewardsCall__Outputs {
  _call: ClaimRewardsCall;

  constructor(call: ClaimRewardsCall) {
    this._call = call;
  }
}

export class ClaimRewardCall extends EthereumCall {
  get inputs(): ClaimRewardCall__Inputs {
    return new ClaimRewardCall__Inputs(this);
  }

  get outputs(): ClaimRewardCall__Outputs {
    return new ClaimRewardCall__Outputs(this);
  }
}

export class ClaimRewardCall__Inputs {
  _call: ClaimRewardCall;

  constructor(call: ClaimRewardCall) {
    this._call = call;
  }

  get _challengeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _salt(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimRewardCall__Outputs {
  _call: ClaimRewardCall;

  constructor(call: ClaimRewardCall) {
    this._call = call;
  }
}

export class ExitCall extends EthereumCall {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class ChallengeCall extends EthereumCall {
  get inputs(): ChallengeCall__Inputs {
    return new ChallengeCall__Inputs(this);
  }

  get outputs(): ChallengeCall__Outputs {
    return new ChallengeCall__Outputs(this);
  }
}

export class ChallengeCall__Inputs {
  _call: ChallengeCall;

  constructor(call: ChallengeCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ChallengeCall__Outputs {
  _call: ChallengeCall;

  constructor(call: ChallengeCall) {
    this._call = call;
  }

  get challengeID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class GrantAppealCall extends EthereumCall {
  get inputs(): GrantAppealCall__Inputs {
    return new GrantAppealCall__Inputs(this);
  }

  get outputs(): GrantAppealCall__Outputs {
    return new GrantAppealCall__Outputs(this);
  }
}

export class GrantAppealCall__Inputs {
  _call: GrantAppealCall;

  constructor(call: GrantAppealCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class GrantAppealCall__Outputs {
  _call: GrantAppealCall;

  constructor(call: GrantAppealCall) {
    this._call = call;
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class RequestAppealCall extends EthereumCall {
  get inputs(): RequestAppealCall__Inputs {
    return new RequestAppealCall__Inputs(this);
  }

  get outputs(): RequestAppealCall__Outputs {
    return new RequestAppealCall__Outputs(this);
  }
}

export class RequestAppealCall__Inputs {
  _call: RequestAppealCall;

  constructor(call: RequestAppealCall) {
    this._call = call;
  }

  get listingAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RequestAppealCall__Outputs {
  _call: RequestAppealCall;

  constructor(call: RequestAppealCall) {
    this._call = call;
  }
}

export class UpdateStatusesCall extends EthereumCall {
  get inputs(): UpdateStatusesCall__Inputs {
    return new UpdateStatusesCall__Inputs(this);
  }

  get outputs(): UpdateStatusesCall__Outputs {
    return new UpdateStatusesCall__Outputs(this);
  }
}

export class UpdateStatusesCall__Inputs {
  _call: UpdateStatusesCall;

  constructor(call: UpdateStatusesCall) {
    this._call = call;
  }

  get listingAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class UpdateStatusesCall__Outputs {
  _call: UpdateStatusesCall;

  constructor(call: UpdateStatusesCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get plcr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get param(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get govt(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}