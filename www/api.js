const users = [
  {
    'comment_karma': 190,
    'created': 1405828618.0,
    'email': 'None',
    'id': 'hh8mr',
    'link_karma': 335,
    'name': 'batman_jr'
  },
  {
    'comment_karma': 25418,
    'created': 1331171212.0,
    'email': 'poizan@poizan.dk',
    'id': '74344',
    'link_karma': 768,
    'name': 'poizan42'
  },
  {
    'comment_karma': 56846,
    'created': 1287044616.0,
    'email': 'ooer@live.com',
    'id': '4fer6',
    'link_karma': 18834,
    'name': 'Ooer'
  }
]

const subreddits = [
  {
    'accounts_active': 921,
    'created': 1484806197.0,
    'display_name': 'FireEmblemHeroes',
    'id': '3imv0',
    'subscribers': 52790,
    'title': "Fire Emblem Heroes - Nintendo's Latest Mobile Game"
  },
  {
    'accounts_active': 603,
    'created': 1327266711.0,
    'display_name': 'ProgrammerHumor',
    'id': '2tex6',
    'subscribers': 199848,
    'title': 'Programmer Humor'
  },
  {
    'accounts_active': 1338,
    'created': 1201275191.0,
    'display_name': 'food',
    'id': '2qh55',
    'subscribers': 10979227,
    'title': 'food'
  }
]

const posts = [
  {
    'author': 'batman_jr',
    'id': '5th7sz',
    'over_18': false,
    'score': 1,
    'title': 'Test',
    'url': 'https://www.reddit.com/r/FireEmblemHeroesTest/comments/5th7sz/test/'
  },
  {
    'author': 'FallBlue',
    'id': '60h6ga',
    'over_18': false,
    'score': 637,
    'title': 'TIL that Greenland is actually part of North America, is ruled by Denmark, and is icier than Iceland.',
    'url': 'https://www.britannica.com/place/Greenland'
  },
  {
    'author': 'bigfatlittlefat',
    'id': '60nyom',
    'over_18': false,
    'score': 55,
    'title': 'What is the worst thing someone did to your boardgame?',
    'url': 'https://www.reddit.com/r/boardgames/comments/60nyom/what_is_the_worst_thing_someone_did_to_your/'
  }
]

const comments = [
  {
    'author': 'hh8mr',
    'body': 'comment 2',
    'created': 1488274311.0,
    'edited': false,
    'gilded': 0,
    'id': 'deaw2vi',
    'link_id': 't3_5th7sz',
    'score': 1,
    'subreddit_id': '3imxi'
  },
  {
    'author': '74344',
    'body': 'Your submission has been removed.\n\nViolation of Rules #2: \n\nNo rehosting allowed without explicit permission, unless it is obvious that the host allows it. Rehosting for the purposes of offering a direct link to an image is allowed in the comments.\n\n\n\nIf you feel that it has been removed in error, please [message us](http://www.reddit.com/message/compose?to=%2Fr%2Fprogrammerhumor) so that we may review it.',
    'created': 1490217634.0,
    'edited': false,
    'gilded': 0,
    'id': 'df9c4sc',
    'link_id': 't3_60on5c',
    'score': 2,
    'subreddit_id': '2tex6'
  },
  {
    'author': '4fer6',
    'body': 'Some random advice for running a good first game with 8 players.\n\n* As /u/raiden001 has stated, add the house rule that Captains must clearly state "Heading X" for every command. They must also wait for an OK from Engineer and First Mate before issuing another order.\n\n* Sit the players so the Captain is sat near or opposite the enemy Radio Operator. This will give the Radio Op a chance.\n\n* Double check all players are using the correct board and correct site of board. This seems obvious, but a little mistake like this will break the game and cause great frustration.\n\n* I would rate difficulty of each role in the following order (from most challenging to least challenging); Radio Op, Captain, Engineer, First Mate. Try to assign roles based on peoples comfort, and make sure the Radio Ops can hear the enemy Captain okay.\n\nCommonly missed rules;\n\n* You can\'t cross over your own path (like snake).\n\n* You can\'t use a system if any of the corresponding symbols are currently broken by engineer\n\n* You must check that you can use a system before calling stop\n',
    'created': 1490218064.0,
    'edited': false,
    'gilded': 0,
    'id': 'df9cfop',
    'link_id': 't3_60tlfl',
    'score': 5,
    'subreddit_id': '2qmjp'
  }
]

export function getUsers () {
  return users
}

export function getComments () {
  return comments
}

export function getPosts () {
  return comments
}

export function getSubreddits () {
  return comments
}
