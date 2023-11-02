export type Twitter = {
  "version": "0.1.0",
  "name": "twitter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "tweetAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "topic",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "likeTweet",
      "accounts": [
        {
          "name": "reactionAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweetReaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "dislikeTweet",
      "accounts": [
        {
          "name": "reactionAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweetReaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "reactionRemove",
      "accounts": [
        {
          "name": "reactionAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweetReaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "commentTweet",
      "accounts": [
        {
          "name": "commentAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "commentContent",
          "type": "string"
        }
      ]
    },
    {
      "name": "commentRemove",
      "accounts": [
        {
          "name": "commentAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "tweet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tweetAuthor",
            "type": "publicKey"
          },
          {
            "name": "topic",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "topicLength",
            "type": "u8"
          },
          {
            "name": "content",
            "type": {
              "array": [
                "u8",
                500
              ]
            }
          },
          {
            "name": "likes",
            "type": "u64"
          },
          {
            "name": "dislikes",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reactionAuthor",
            "type": "publicKey"
          },
          {
            "name": "parentTweet",
            "type": "publicKey"
          },
          {
            "name": "reaction",
            "type": {
              "defined": "ReactionType"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "comment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commentAuthor",
            "type": "publicKey"
          },
          {
            "name": "parentTweet",
            "type": "publicKey"
          },
          {
            "name": "content",
            "type": {
              "array": [
                "u8",
                500
              ]
            }
          },
          {
            "name": "contentLength",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ReactionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Like"
          },
          {
            "name": "Dislike"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TopicTooLong",
      "msg": "Cannot initialize, topic too long"
    },
    {
      "code": 6001,
      "name": "ContentTooLong",
      "msg": "Cannot initialize, content too long"
    },
    {
      "code": 6002,
      "name": "MaxLikesReached",
      "msg": "Maximum number of Likes Reached"
    },
    {
      "code": 6003,
      "name": "MaxDislikesReached",
      "msg": "Maximum number of Dislikes Reached"
    },
    {
      "code": 6004,
      "name": "MinLikesReached",
      "msg": "Minimum number of Likes Reached"
    },
    {
      "code": 6005,
      "name": "MinDislikesReached",
      "msg": "Minimum number of Dislikes Reached"
    },
    {
      "code": 6006,
      "name": "CommentTooLong",
      "msg": "Comment too Long"
    }
  ]
};

export const IDL: Twitter = {
  "version": "0.1.0",
  "name": "twitter",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "tweetAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "topic",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "likeTweet",
      "accounts": [
        {
          "name": "reactionAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweetReaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "dislikeTweet",
      "accounts": [
        {
          "name": "reactionAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweetReaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "reactionRemove",
      "accounts": [
        {
          "name": "reactionAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tweetReaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "commentTweet",
      "accounts": [
        {
          "name": "commentAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tweet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "commentContent",
          "type": "string"
        }
      ]
    },
    {
      "name": "commentRemove",
      "accounts": [
        {
          "name": "commentAuthor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "comment",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "tweet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tweetAuthor",
            "type": "publicKey"
          },
          {
            "name": "topic",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "topicLength",
            "type": "u8"
          },
          {
            "name": "content",
            "type": {
              "array": [
                "u8",
                500
              ]
            }
          },
          {
            "name": "likes",
            "type": "u64"
          },
          {
            "name": "dislikes",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reactionAuthor",
            "type": "publicKey"
          },
          {
            "name": "parentTweet",
            "type": "publicKey"
          },
          {
            "name": "reaction",
            "type": {
              "defined": "ReactionType"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "comment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commentAuthor",
            "type": "publicKey"
          },
          {
            "name": "parentTweet",
            "type": "publicKey"
          },
          {
            "name": "content",
            "type": {
              "array": [
                "u8",
                500
              ]
            }
          },
          {
            "name": "contentLength",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ReactionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Like"
          },
          {
            "name": "Dislike"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TopicTooLong",
      "msg": "Cannot initialize, topic too long"
    },
    {
      "code": 6001,
      "name": "ContentTooLong",
      "msg": "Cannot initialize, content too long"
    },
    {
      "code": 6002,
      "name": "MaxLikesReached",
      "msg": "Maximum number of Likes Reached"
    },
    {
      "code": 6003,
      "name": "MaxDislikesReached",
      "msg": "Maximum number of Dislikes Reached"
    },
    {
      "code": 6004,
      "name": "MinLikesReached",
      "msg": "Minimum number of Likes Reached"
    },
    {
      "code": 6005,
      "name": "MinDislikesReached",
      "msg": "Minimum number of Dislikes Reached"
    },
    {
      "code": 6006,
      "name": "CommentTooLong",
      "msg": "Comment too Long"
    }
  ]
};
