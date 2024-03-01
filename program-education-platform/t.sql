CREATE TABLE courses (
    courseId INT  PRIMARY KEY ,
    name VARCHAR(255) NOT NULL,
    chapterCount INT NOT NULL,
    Introduction TEXT,
    -- 其他可能的字段根据实际需要添加
    -- 创建外键，关联tag表格
    CONSTRAINT fk_course_tag FOREIGN KEY (courseId) REFERENCES course_tags(courseId)
);

-- 创建tag表格
CREATE TABLE course_tags (
    tagId INT PRIMARY KEY AUTO_INCREMENT,
    courseId INT NOT NULL,
    tag_name VARCHAR(50) ,
    -- 创建外键，确保tag与courses表格关联
    CONSTRAINT fk_tag_course FOREIGN KEY (courseId) REFERENCES courses(courseId)
);

CREATE TABLE course_chapters (
    chapterId INT PRIMARY KEY,
    title NVARCHAR(255),
    chapterNumber INT 
);

CREATE TABLE subchapters (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(255),
    ChapterNumber FLOAT,
    MarkdownContent NVARCHAR(MAX),
    CourseId INT,
    FOREIGN KEY (CourseId) REFERENCES Courses(CourseId)
);

CREATE TABLE user_courses (
    user_course_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    course_id INT,
    progress DECIMAL(5,2), -- 课程进度，可根据需求添加其他字段
    is_favorite BIT, -- 是否收藏
    -- 其他可能的字段根据实际需要添加

    CONSTRAINT fk_user_courses_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT fk_user_courses_course_id FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
