enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart
console.log(membership)
const membershipReverse = Membership[2]
console.log(membershipReverse)

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK'
}

const social = SocialMedia.FACEBOOK
console.log(social)