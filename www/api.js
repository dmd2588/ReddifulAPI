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

const moderators = [
  {'user_id': 'hh8mr', 'sr_id': '3imv0'},
  {'user_id': '74344', 'sr_id': '2tex6'},
  {'user_id': '4fer6', 'sr_id': '2qh55'}
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
      "subreddit_id":"3imxi",
      "selftext":"Test Text",
      "is_self":true,
      "id":"5th7sz",
      "gilded":0,
      "title":"Test",
      "url":"https://www.reddit.com/r/FireEmblemHeroesTest/comments/5th7sz/test/",
      "author":"hh8mr",
      "created":1486872624.0,
      "score":1,
      "over_18":false
   },
   {
      "subreddit_id":"2tex6",
      "selftext":"",
      "is_self":false,
      "id":"60on5c",
      "gilded":0,
      "title":"existentialSort",
      "url":"https://i.redd.it/gdoviw37hsmy.jpg",
      "author":"74344",
      "created":1490143051.0,
      "score":760,
      "over_18":false
   },
   {
      "subreddit_id":"2qmjp",
      "selftext":"Hey everyone!\\n\\nThis Friday there will be 8 people at my place including me, all of us have played board games before, and i am excited to introduce **Captain Sonar**. This will be my first play as well, but i think i know the rules. The thing is, 8 people is a lot to manage. Im worried that i might mess up some rules. I want the game to run as smoothly as possible since its not often that i get 8 players. Are there any commonly missed rules or any advice that you guys can give me?\\n\\nAlso did you all enjoy the game? What did you think about it? How was your experience?",
      "is_self":true,
      "id":"60tlfl",
      "gilded":0,
      "title":"Planning on getting Captain Sonar to the table with the full 8-players. Would love some advice",
      "url":"https://www.reddit.com/r/boardgames/comments/60tlfl/planning_on_getting_captain_sonar_to_the_table/",
      "author":"4fer6",
      "created":1490203502.0,
      "score":15,
      "over_18":false
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
    'link_id': '5th7sz',
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
    'link_id': '60on5c',
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
    'link_id': '60tlfl',
    'score': 5,
    'subreddit_id': '2qmjp'
  }
]

export function getUsers () {
  return users
}

export function getUserRelated(user_id) {
  var dat = {'subreddits': [],
             'posts': [],
             'comments': []}
  for (var i in moderators) {
    if (moderators[i].user_id == user_id) {
      for (var j in subreddits) {
        if (subreddits[j].id == moderators[i].sr_id) {
          dat.subreddits.push(subreddits[j]);
        }
      }
    }
  }
  for (var i in posts) {
    if (posts[i].author == user_id) {
      dat.posts.push(posts[i]);
    }
  }
  for (var i in comments) {
    if (comments[i].author == user_id) {
      dat.comments.push(comments[i]);
    }
  }
  return dat;
}

export function getComments () {
  return comments
}

export function getCommentRelated(comment_id) {
  var dat = {'subreddits': [],
             'posts': [],
             'users': []}
  var user_id = '';
  var post_id = '';
  var subreddit_id = '';
  for (var i in comments) {
    if (comments[i].id == comment_id) {
      user_id = comment[i].author;
      post_id = comment[i].link_id;
      subreddit_id = comment[i].subreddit_id;
      break;
    }
  }
  for (var i in users) {
    if (users[i].id == user_id) {
      dat.users.push(users[i]);
      break;
    }
  }
  for (var i in posts) {
    if (posts[i].id == post_id) {
      dat.posts.push(posts[i]);
      break;
    }
  }
  for (var i in subreddits) {
    if (subreddits[i].id == subreddit_id) {
      dat.subreddits.push(subreddits[i]);
      break;
    }
  }
  return dat;
}

export function getPosts () {
  return comments
}

export function getPostRelated(post_id) {
  var dat = {'subreddits': [],
             'comments': [],
             'users': []}
  var user_id = '';
  var subreddit_id = '';
  for (var i in posts) {
    if (posts[i].id == post_id) {
      user_id = posts[i].author;
      subreddit_id = posts[i].subreddit_id;
      break;
    }
  }
  for (var i in users) {
    if (users[i].id == user_id) {
      dat.users.push(users[i]);
      break;
    }
  }
  for (var i in comments) {
    if (comments[i].link_id == post_id) {
      dat.comments.push(comments[i]);
    }
  }
  for (var i in subreddits) {
    if (subreddits[i].id == subreddit_id) {
      dat.subreddits.push(subreddits[i]);
      break;
    }
  }
  return dat;
}

export function getSubreddits () {
  return comments
}

export function getSubredditRelated(subreddit_id) {
  var dat = {'posts': [],
             'comments': [],
             'users': []}
  var user_id = '';
  var subreddit_id = '';
  for (var i in moderators) {
    if (moderators[i].sr_id == subreddit_id) {
      for (var j in users) {
        if (users[j].id == moderators[i].user_id) {
          dat.users.push(users[j]);
        }
      }
    }
  }
  for (var i in comments) {
    if (comments[i].subreddit_id == subreddit_id) {
      dat.comments.push(comments[i]);
    }
  }
  for (var i in posts) {
    if (posts[i].subreddit_id == subreddit_id) {
      dat.posts.push(posts[i]);
    }
  }
  return dat;
}
