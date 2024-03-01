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
    replies: []
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

        timestamp: '2024-02-03 12:15:00',
        likes: 4
      }
    ]
  }
  // Add more comments as needed
]

export const SubmitResultDict = {
  题目Id: 1,
  题目: 1001,
  用户: '虚无void',
  提交时间: '2024/01/23 16:06:09',
  编译器: 'C (gcc)',
  内存: '0 / 65536 KB',
  用时: '0 / 2000 ms',
  状态: '编译错误',
  评测时间: '2024/01/23 16:06:10'
}
export const historyRecords = [
  {
    submittime: '2023/05/12 07:33:26',
    state: 'Accepted',
    titleId: 137,
    title: 'Title 10',
    user: 'User 14',
    compiler: 'C',
    memory: 4461,
    runtime: 7.14
  },
  {
    submittime: '2022/02/19 16:40:09',
    state: 'Rejected',
    titleId: 600,
    title: 'Title 71',
    user: 'User 28',
    compiler: 'Python',
    memory: 2560,
    runtime: 1.33
  },
  {
    submittime: '2023/03/01 21:32:14',
    state: 'Rejected',
    titleId: 745,
    title: 'Title 46',
    user: 'User 36',
    compiler: 'C',
    memory: 3323,
    runtime: 10.59
  },
  {
    submittime: '2022/03/24 18:02:25',
    state: 'Accepted',
    titleId: 427,
    title: 'Title 75',
    user: 'User 12',
    compiler: 'Python',
    memory: 688,
    runtime: 2.34
  },
  {
    submittime: '2022/12/03 15:48:55',
    state: 'Accepted',
    titleId: 782,
    title: 'Title 46',
    user: 'User 8',
    compiler: 'Java',
    memory: 3421,
    runtime: 5.09
  },
  {
    submittime: '2023/10/19 22:13:42',
    state: 'Rejected',
    titleId: 495,
    title: 'Title 54',
    user: 'User 22',
    compiler: 'Java',
    memory: 523,
    runtime: 8.24
  },
  {
    submittime: '2022/12/24 11:20:19',
    state: 'Accepted',
    titleId: 912,
    title: 'Title 36',
    user: 'User 12',
    compiler: 'C',
    memory: 1766,
    runtime: 10.97
  },
  {
    submittime: '2023/01/31 07:10:27',
    state: 'Pending',
    titleId: 240,
    title: 'Title 76',
    user: 'User 32',
    compiler: 'C++',
    memory: 603,
    runtime: 5.88
  },
  {
    submittime: '2023/04/30 20:12:01',
    state: 'Rejected',
    titleId: 480,
    title: 'Title 71',
    user: 'User 35',
    compiler: 'Python',
    memory: 2518,
    runtime: 6.02
  },
  {
    submittime: '2022/10/31 11:31:19',
    state: 'Accepted',
    titleId: 366,
    title: 'Title 78',
    user: 'User 28',
    compiler: 'Python',
    memory: 872,
    runtime: 4.35
  }
]

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
export const PostInfo = {
  Id: 1,
  user: '虚无void',
  time: '2024/02/07 14:45:18',
  like: 20,
  title: '实验二: 分治法算法的设计与实现'
}
export const classdata = [
  {
    name: 'JavaScript基础入门',
    chapterCount: 10,
    tag: ['JavaScript', '编程基础'],
    Introduction:
      '这门课程旨在帮助初学者建立对JavaScript编程的基本理解。通过十个章节，学生将学到JavaScript的基础语法、变量、数据类型、控制流等内容，为进一步学习打下坚实基础。'
  },
  {
    name: '前端开发实战入门',
    chapterCount: 15,
    tag: ['JavaScript', '前端开发'],
    Introduction:
      '本课程将深入介绍JavaScript在前端开发中的应用。学生将学到DOM操作、事件处理、Ajax等前端开发基础知识，并通过实际项目实战演练，提升实际编码能力。'
  },
  {
    name: 'Node.js后端开发入门',
    chapterCount: 12,
    tag: ['JavaScript', '后端开发', 'Node.js'],
    Introduction:
      '这门课程专注于使用JavaScript进行后端开发，介绍Node.js的基本概念、Express框架、数据库连接等内容。学生将通过构建简单的后端应用，了解全栈开发的基本流程。'
  },
  {
    name: 'React框架深入解析',
    chapterCount: 20,
    tag: ['JavaScript', '前端开发', 'React'],
    Introduction:
      '本课程将深入探讨React框架，包括组件、状态管理、路由等高级主题。学生将通过实际项目实践，掌握React在现代前端开发中的核心概念和最佳实践。'
  },
  {
    name: 'Python编程基础',
    chapterCount: 12,
    tag: ['Python', '编程基础'],
    Introduction:
      '这门课程旨在帮助初学者建立对Python编程的基本理解。通过十二个章节，学生将学到Python的基础语法、数据类型、函数等内容，为编写简单脚本和应用程序打下基础。'
  },
  {
    name: 'Java面向对象编程',
    chapterCount: 15,
    tag: ['Java', '面向对象'],
    Introduction:
      '本课程将深入介绍Java编程中的面向对象概念。学生将学到类、继承、多态等面向对象编程的基础知识，并通过实际案例进行实践，提升对Java编程的理解和应用能力。'
  },
  {
    name: 'C++高级编程技术',
    chapterCount: 18,
    tag: ['C++', '高级编程'],
    Introduction:
      '这门课程专注于C++编程语言的高级主题。学生将学到模板、多线程编程、异常处理等高级技术，并通过实际项目演练，深入理解C++在系统级和应用级编程中的应用。'
  }
]
export const classoutline = [
  {
    courseId: 1,
    title: '介绍编程和学习路径',
    chapterNumber: 1,
    subchapters: [
      {
        title: '为什么学习编程',
        chapterNumber: 1.1
      },
      {
        title: '选择编程语言',
        chapterNumber: 1.2
      }
    ]
  },
  {
    title: '安装和设置开发环境',
    chapterNumber: 2,
    subchapters: [
      {
        title: '选择开发工具',
        chapterNumber: 2.1
      },
      {
        title: '配置编辑器',
        chapterNumber: 2.2
      }
    ]
  },
  {
    title: '编写并运行你的第一个程序',
    chapterNumber: 3,
    subchapters: [
      {
        title: '编写简单的Hello World程序',
        chapterNumber: 3.1
      },
      {
        title: '运行程序并查看输出',
        chapterNumber: 3.2
      }
    ]
  },
  {
    title: '理解变量和不同的数据类型',
    chapterNumber: 4,
    subchapters: [
      {
        title: '声明和使用变量',
        chapterNumber: 4.1
      },
      {
        title: '学习不同的数据类型',
        chapterNumber: 4.2
      }
    ]
  },
  {
    title: '探索条件语句和循环结构',
    chapterNumber: 5,
    subchapters: [
      {
        title: '使用if语句进行条件判断',
        chapterNumber: 5.1
      },
      {
        title: '学习for和while循环',
        chapterNumber: 5.2
      }
    ]
  },
  {
    title: '学习如何创建和使用函数',
    chapterNumber: 6,
    subchapters: [
      {
        title: '定义和调用函数',
        chapterNumber: 6.1
      },
      {
        title: '函数参数和返回值',
        chapterNumber: 6.2
      }
    ]
  },
  {
    title: '使用数组和列表进行数据处理',
    chapterNumber: 7,
    subchapters: [
      {
        title: '创建和操作数组',
        chapterNumber: 7.1
      },
      {
        title: '使用列表进行数据处理',
        chapterNumber: 7.2
      }
    ]
  },
  {
    title: '掌握面向对象编程的基础概念',
    chapterNumber: 8,
    subchapters: [
      {
        title: '了解类和对象',
        chapterNumber: 8.1
      },
      {
        title: '继承和多态',
        chapterNumber: 8.2
      }
    ]
  },
  {
    title: '解决错误和异常的处理技巧',
    chapterNumber: 9,
    subchapters: [
      {
        title: '常见错误类型',
        chapterNumber: 9.1
      },
      {
        title: '异常处理方法',
        chapterNumber: 9.2
      }
    ]
  },
  {
    title: '应用所学知识进行实际项目开发',
    chapterNumber: 10,
    subchapters: [
      {
        title: '选择项目和制定计划',
        chapterNumber: 10.1
      },
      {
        title: '项目开发和测试',
        chapterNumber: 10.2
      }
    ]
  }
]
export const userList = [
  {
    userId: 1,
    username: 'user1',
    avatar: 'https://example.com/avatar1.jpg',
    role: '管理员',
    password: 'secure_password1',
    account: 'account_user1'
  },
  {
    userId: 2,
    username: 'user2',
    avatar: 'https://example.com/avatar2.jpg',
    role: '教师',
    password: 'secure_password2',
    account: 'account_user2'
  },
  {
    userId: 3,
    username: 'user3',
    avatar: 'https://example.com/avatar3.jpg',
    role: '学生',
    password: 'secure_password3',
    account: 'account_user3'
  },
  {
    userId: 4,
    username: 'user4',
    avatar: 'https://example.com/avatar4.jpg',
    role: '学生',
    password: 'secure_password4',
    account: 'account_user4'
  },
  {
    userId: 5,
    username: 'user5',
    avatar: 'https://example.com/avatar5.jpg',
    role: '学生',
    password: 'secure_password5',
    account: 'account_user5'
  },
  {
    userId: 6,
    username: 'user6',
    avatar: 'https://example.com/avatar6.jpg',
    role: '学生',
    password: 'secure_password6',
    account: 'account_user6'
  },
  {
    userId: 7,
    username: 'user7',
    avatar: 'https://example.com/avatar7.jpg',
    role: '学生',
    password: 'secure_password7',
    account: 'account_user7'
  },
  {
    userId: 8,
    username: 'user8',
    avatar: 'https://example.com/avatar8.jpg',
    role: '学生',
    password: 'secure_password8',
    account: 'account_user8'
  },
  {
    userId: 9,
    username: 'user9',
    avatar: 'https://example.com/avatar9.jpg',
    role: '学生',
    password: 'secure_password9',
    account: 'account_user9'
  },
  {
    userId: 10,
    username: 'user10',
    avatar: 'https://example.com/avatar10.jpg',
    role: '学生',
    password: 'secure_password10',
    account: 'account_user10'
  }
]

export default { tableData, classInfo, languageList }
