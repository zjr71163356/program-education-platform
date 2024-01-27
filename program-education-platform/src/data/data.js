const tableData = [
  {
    problemId: '1001',
    title: '两数之和',
    tag: ['数组', '哈希表'],
    acceptRate: 80,
    difficulty: '简单'
  },
  {
    problemId: '1002',
    title: '反转链表',
    tag: ['链表'],
    acceptRate: 75,
    difficulty: '简单'
  },
  {
    problemId: '1003',
    title: '合并区间',
    tag: ['排序', '数组'],
    acceptRate: 90,
    difficulty: '中等'
  },
  {
    problemId: '1004',
    title: '二分查找',
    tag: ['二分查找'],
    acceptRate: 85,
    difficulty: '简单'
  },
  {
    problemId: '1005',
    title: '最长递增子序列',
    tag: ['动态规划', '二分查找'],
    acceptRate: 95,
    difficulty: '中等'
  },
  {
    problemId: '1006',
    title: '括号生成',
    tag: ['字符串', '回溯算法'],
    acceptRate: 88,
    difficulty: '中等'
  },
  {
    problemId: '1007',
    title: '最小生成树',
    tag: ['图论', '最小生成树'],
    acceptRate: 82,
    difficulty: '中等'
  },
  {
    problemId: '1008',
    title: '最短路径',
    tag: ['图论', '最短路径'],
    acceptRate: 91,
    difficulty: '中等'
  }
]

const classInfo = [
  {
    id: 1,
    title: 'Category 1',
    links: [
      {
        id: 1,
        title: 'Link 1',
        url: '#'
      },
      {
        id: 2,
        title: 'Link 2',
        url: '#'
      },
      {
        id: 3,
        title: 'Link 3',
        url: '#'
      }
    ]
  },
  {
    id: 2,
    title: 'Category 2',
    links: [
      {
        id: 4,
        title: 'Link 1',
        url: '#'
      }
    ]
  },
  {
    id: 3,
    title: 'Category 3',
    links: [
      {
        id: 5,
        title: 'Link 1',
        url: '#'
      },
      {
        id: 6,
        title: 'Link 2',
        url: '#'
      }
    ]
  }
]
const languageList = ['cpp', 'python', 'java', 'javascript']
export const comments = [
  {
    Id: 1,
    postId: 456,
    from_userId: 123,
    from_username: 'JohnDoe',
    content: '这是一条评论。',
    timestamp: '2024-01-27 12:30:00',
    likes: 0,
    replies: [
      {
        Id: 1,
        commentId: 1,
        from_userId: 456,
        from_username: 'JaneDoe',
        content: '回复内容1。',
        to_userId: 123,
        to_username: 'JohnDoe',
        timestamp: '2024-01-27 13:00:00',
        likes: 5
      },
      {
        Id: 2,
        commentId: 1,
        from_userId: 789,
        from_username: 'Alice',
        content: '回复内容2。',
        to_userId: 456,
        to_username: 'JaneDoe',
        timestamp: '2024-01-27 13:15:00',
        likes: 5
      }
    ]
  },
  {
    Id: 2,
    postId: 789,
    from_userId: 456,
    from_username: 'JaneDoe',
    content: '另一条评论。',
    timestamp: '2024-01-28 09:45:00',
    likes: 6,
    replies: [
      {
        Id: 3,
        commentId: 2,
        from_userId: 789,
        from_username: 'Alice',
        content: '这是一条回复。',
        to_userId: 456,
        to_username: 'JaneDoe',
        timestamp: '2024-01-28 10:00:00',
        likes: 7
      },
      {
        Id: 4,
        commentId: 2,
        from_userId: 123,
        from_username: 'JohnDoe',
        content: '感谢你的回复。',
        to_userId: 789,
        to_username: 'Alice',
        timestamp: '2024-01-28 10:30:00',
        likes: 8
      }
    ]
  },
  {
    Id: 3,
    postId: 123,
    from_userId: 789,
    from_username: 'Alice',
    content: '这是另一条评论。',
    timestamp: '2024-01-29 14:20:00',
    likes: 9,
    replies: [
      {
        Id: 5,
        commentId: 3,
        from_userId: 123,
        from_username: 'JohnDoe',
        content: '我有一个问题。',
        to_userId: 789,
        to_username: 'Alice',
        timestamp: '2024-01-29 14:45:00',
        likes: 8
      }
    ]
  },
  // Additional comments
  {
    Id: 4,
    postId: 789,
    from_userId: 456,
    from_username: 'JaneDoe',
    content: '又一条评论。',
    timestamp: '2024-01-30 08:30:00',
    likes: 8,
    replies: [
      {
        Id: 6,
        commentId: 4,
        from_userId: 789,
        from_username: 'Alice',
        content: '回复内容3。',
        to_userId: 456,
        to_username: 'JaneDoe',
        timestamp: '2024-01-30 09:00:00',
        likes: 0
      }
    ]
  },
  {
    Id: 5,
    postId: 123,
    from_userId: 123,
    from_username: 'JohnDoe',
    content: '另外一条评论。',
    timestamp: '2024-01-31 11:15:00',
    likes: 0,
    replies: [
      {
        Id: 7,
        commentId: 5,
        from_userId: 456,
        from_username: 'JaneDoe',
        content: '回复内容4。',
        to_userId: 123,
        to_username: 'JohnDoe',
        timestamp: '2024-01-31 11:30:00',
        likes: 8
      }
    ]
  },
  {
    Id: 6,
    postId: 456,
    from_userId: 789,
    from_username: 'Alice',
    content: '再一条评论。',
    timestamp: '2024-02-01 15:45:00',
    likes: 0,
    replies: [
      {
        Id: 8,
        commentId: 6,
        from_userId: 123,
        from_username: 'JohnDoe',
        content: '回复内容5。',
        to_userId: 789,
        to_username: 'Alice',
        timestamp: '2024-02-01 16:00:00',
        likes: 7
      }
    ]
  },
  {
    Id: 7,
    postId: 123,
    from_userId: 456,
    from_username: 'JaneDoe',
    content: '一条评论。',
    timestamp: '2024-02-02 09:30:00',
    likes: 7,
    replies: [
      {
        Id: 9,
        commentId: 7,
        from_userId: 789,
        from_username: 'Alice',
        content: '回复内容6。',
        to_userId: 456,
        to_username: 'JaneDoe',
        timestamp: '2024-02-02 10:00:00',
        likes: 5
      }
    ]
  },
  {
    Id: 8,
    postId: 789,
    from_userId: 123,
    from_username: 'JohnDoe',
    content: '这是最后一条评论。',
    timestamp: '2024-02-03 12:00:00',
    likes: 7,
    replies: [
      {
        Id: 10,
        commentId: 8,
        from_userId: 456,
        from_username: 'JaneDoe',
        content: '回复内容7。',
        to_userId: 123,
        to_username: 'JohnDoe',
        timestamp: '2024-02-03 12:15:00',
        likes: 4
      }
    ]
  }
  // Add more comments as needed
]

export const SubmitResultDict = {
  题目: 1001,
  用户: '虚无void',
  提交时间: '2024/01/23 16:06:09',
  编译器: 'C (gcc)',
  内存: '0 / 65536 KB',
  用时: '0 / 2000 ms',
  状态: '编译错误',
  评测时间: '2024/01/23 16:06:10'
}

export const PostsList = [
  {
    title: '这是第一个帖子',
    user: '虚无void',
    time: '2024/01/23 16:06:09',
    like: 10,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '算法解析：如何优化快速排序算法？',
    user: 'CodeMaster',
    time: '2024/01/25 10:15:30',
    like: 22,
    avatar: 'https://img.zcool.cn/community/011d125bada9dda801213deae4ed54.jpg?'
  },
  {
    title: '动态规划应用实例分享',
    user: 'DynamicCoder',
    time: '2024/01/26 14:20:45',
    like: 18,
    avatar: 'https://cn.gravatar.com/avatar/tyrfly5'
  },
  {
    title: '深度学习入门：神经网络基础',
    user: 'AIExplorer',
    time: '2024/01/27 18:30:12',
    like: 30,
    avatar:
      'https://images.unsplash.com/photo-1484249170766-998fa6efe3f3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '动态规划入门：斐波那契数列解析',
    user: 'DPExplorer',
    time: '2024/02/05 11:20:30',
    like: 15,
    avatar:
      'https://images.unsplash.com/photo-1508001184411-99a654ada4c2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '最长公共子序列问题详解',
    user: 'LongestSeqSolver',
    time: '2024/02/07 14:45:18',
    like: 20,
    avatar:
      'https://images.unsplash.com/photo-1484249170766-998fa6efe3f3?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '背包问题求解思路分享',
    user: 'KnapsackMaster',
    time: '2024/02/10 16:30:12',
    like: 25,
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '动态规划优化技巧总结',
    user: 'OptimizationGuru',
    time: '2024/02/12 19:10:24',
    like: 18,
    avatar:
      'https://images.unsplash.com/photo-1532009324734-20a7a5813719?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    title: '动态规划算法实战：编辑距离问题',
    user: 'EditDistanceMaster',
    time: '2024/02/15 10:45:30',
    like: 22,
    avatar:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]

export default { tableData, classInfo, languageList }
