import { BigInt } from "@graphprotocol/graph-ts"
import {
  _GovernmentTransfered,
  _Application,
  _Challenge,
  _Deposit,
  _Withdrawal,
  _ApplicationWhitelisted,
  _ApplicationRemoved,
  _ListingRemoved,
  _ListingWithdrawn,
  _TouchAndRemoved,
  _ChallengeFailed,
  _ChallengeSucceeded,
  _RewardClaimed
} from "../generated/Contract/Contract"
import { 
  Application, 
  Deposit, 
  Withdrawal, 
  ApplicationsWhiteListed, 
  ApplicationsRemoved,
  ListingsRemoved,
  ListingsWithdrawal,
  GovernmentTransfer,
  Challenge,
  ChallengeFail,
  ChallengeSuccess,
  RewardClaim
} from "../generated/schema"

export function handle_GovernmentTransfered(
  event: _GovernmentTransfered
): void {
  let govtTransffered = GovernmentTransfer.load(event.transaction.from.toHex())
  if (govtTransffered == null) {
    govtTransffered = new GovernmentTransfer(event.transaction.from.toHex())
  }
  govtTransffered.newAddress = event.params.newGovernment
  govtTransffered.save()
}

export function handle_Application(event: _Application): void {

  let application = Application.load(event.transaction.from.toHex())

  if (application == null) {
    application = new Application(event.transaction.from.toHex())
    application.applicationData = "Null Application"
  }

  application.listingAddress = event.params.listingAddress
  application.applicantAddress = event.params.applicant
  application.applicationEndDate = event.params.appEndDate
  application.depositPaid = event.params.deposit
  // application.depositPaidShortForm =  event.params.deposit.div(new BigInt(10000000000000000000))
  application.applicationData = event.params.data

  application.save()
}


export function handle_Deposit(event: _Deposit): void {

  let deposit = Deposit.load(event.transaction.from.toHex())

  if (deposit == null) {
    deposit = new Deposit(event.transaction.from.toHex())
    deposit.count =  deposit.count.plus(BigInt.fromI32(1))
  }

  deposit.owner = event.params.owner
  deposit.newTotal = event.params.newTotal
  deposit.listingAddress = event.params.listingAddress
  deposit.amountAdded = event.params.added

  deposit.save()

}

export function handle_Withdrawal(event: _Withdrawal): void {

  let withdrawal = Withdrawal.load(event.transaction.from.toHex())

  if (withdrawal == null) {
    withdrawal = new Withdrawal(event.transaction.from.toHex())
    withdrawal.count =  withdrawal.count.plus(BigInt.fromI32(1))
  }

  withdrawal.owner = event.params.owner
  withdrawal.newTotal = event.params.newTotal
  withdrawal.listingAddress = event.params.listingAddress
  withdrawal.amountWithdrawn = event.params.withdrew

  withdrawal.save()
}

export function handle_ApplicationWhitelisted(
  event: _ApplicationWhitelisted
): void {
  let appsWhitelisted = ApplicationsWhiteListed.load(event.transaction.from.toHex())

  if (appsWhitelisted == null) {
    appsWhitelisted = new ApplicationsWhiteListed(event.transaction.from.toHex())
  }
  appsWhitelisted.listingAddress = event.params.listingAddress

  appsWhitelisted.save()
}

export function handle_ApplicationRemoved(event: _ApplicationRemoved): void {
  let appsRemoved = ApplicationsRemoved.load(event.transaction.from.toHex())

  if (appsRemoved == null) {
    appsRemoved = new ApplicationsRemoved(event.transaction.from.toHex())
  }

  appsRemoved.listingAddress = event.params.listingAddress

  appsRemoved.save()
}

export function handle_ListingRemoved(event: _ListingRemoved): void {

  let listingsRemoved = ListingsRemoved.load(event.transaction.from.toHex())

  if (listingsRemoved == null) {
    listingsRemoved = new ListingsRemoved(event.transaction.from.toHex())
  }
  listingsRemoved.listingAddress = event.params.listingAddress

  listingsRemoved.save()
}

export function handle_ListingWithdrawn(event: _ListingWithdrawn): void {

  let listingsWithdrawn = ListingsWithdrawal.load(event.transaction.from.toHex())

  if (listingsWithdrawn == null) {
    listingsWithdrawn = new ListingsWithdrawal(event.transaction.from.toHex())
  }

  listingsWithdrawn.listingAddress = event.params.listingAddress

  listingsWithdrawn.save()
}

export function handle_Challenge(event: _Challenge): void {

  let challenge = Challenge.load(event.transaction.from.toHex())

  if (challenge == null) {
    challenge = new Challenge(event.transaction.from.toHex())
  }

  challenge.listingAddress = event.params.listingAddress
  challenge.challengeID = event.params.challengeID
  challenge.challengeData = event.params.data
  challenge.commitEndDate = event.params.commitEndDate
  challenge.revealEndDate = event.params.revealEndDate
  challenge.challenger = event.params.challenger

  challenge.save()
}

export function handle_ChallengeFailed(event: _ChallengeFailed): void {

  let challengeFail = ChallengeFail.load(event.transaction.from.toHex())

  if (challengeFail == null) {
    challengeFail = new ChallengeFail(event.transaction.from.toHex())
  }

  challengeFail.listingAddress = event.params.listingAddress
  challengeFail.challengeID = event.params.challengeID
  challengeFail.rewardPool = event.params.rewardPool
  challengeFail.totalTokens = event.params.totalTokens

  challengeFail.save()

}

export function handle_ChallengeSucceeded(event: _ChallengeSucceeded): void {

  let challengeSuccess = ChallengeSuccess.load(event.transaction.from.toHex())

  if (challengeSuccess == null) {
    challengeSuccess= new ChallengeSuccess(event.transaction.from.toHex())
  }

  challengeSuccess.listingAddress = event.params.listingAddress
  challengeSuccess.challengeID = event.params.challengeID
  challengeSuccess.rewardPool = event.params.rewardPool
  challengeSuccess.totalTokens = event.params.totalTokens

  challengeSuccess.save()
}

export function handle_RewardClaimed(event: _RewardClaimed): void {

  let rewardClaim = RewardClaim.load(event.transaction.from.toHex())

  if (rewardClaim == null) {
    rewardClaim = new RewardClaim(event.transaction.from.toHex())
  }

  rewardClaim.challengeID = event.params.challengeID
  rewardClaim.reward = event.params.reward
  rewardClaim.voter = event.params.voter

  rewardClaim.save()

}
