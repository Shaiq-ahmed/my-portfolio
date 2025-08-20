export const s_list = [
    // Frontend Technologies
    {
        name: 'React',
        icon: require('../../assests/React (1).png'),
        category: 'frontend'
    },
    {
        name: 'JavaScript',
        icon: require('../../assests/js.png'),
        category: 'frontend'
    },
    {
        name: 'TypeScript',
        icon: 'typescript-fallback',
        category: 'frontend'
    },
    {
        name: 'HTML5',
        icon: require('../../assests/icons8-html-96.png'),
        category: 'frontend'
    },
    {
        name: 'CSS3',
        icon: require('../../assests/icons8-css3-96.png'),
        category: 'frontend'
    },
    {
        name: 'Bootstrap',
        icon: require('../../assests/icons8-bootstrap-96.png'),
        category: 'frontend'
    },
    {
        name: 'Sass/Scss',
        icon: require('../../assests/icons8-sass-96.png'),
        category: 'frontend'
    },
    {
        name: 'Redux',
        icon: require('../../assests/icons8-redux-96.png'),
        category: 'frontend'
    },

    // Backend Technologies
    {
        name: 'Node.js',
        icon: require('../../assests/nodejs.png'),
        category: 'backend'
    },
    {
        name: 'Express',
        icon: require('../../assests/express.png'),
        category: 'backend'
    },
    {
        name: 'NestJS',
        icon: 'nestjs-fallback',
        category: 'backend'
    },
    
    // Databases
    {
        name: 'MongoDB',
        icon: require('../../assests/MongoDB.png'),
        category: 'database'
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql-fallback',
        category: 'database'
    },
    {
        name: 'MySQL',
        icon: require('../../assests/icons8-my-sql-96.png'),
        category: 'database'
    },
    {
        name: 'Redis',
        icon: 'redis-fallback',
        category: 'database'
    },

    // Cloud & DevOps
    {
        name: 'AWS S3',
        icon: 'aws-fallback',
        category: 'cloud'
    },
    {
        name: 'AWS EC2',
        icon: 'aws-fallback',
        category: 'cloud'
    },
    {
        name: 'Docker',
        icon: require('../../assests/icons8-docker-96.png'),
        category: 'devops'
    },
    
    // APIs & Tools
    {
        name: 'RESTful APIs',
        icon: require('../../assests/icons8-rest-api-50.png'),
        category: 'api'
    },
    {
        name: 'GraphQL',
        icon: 'graphql-fallback',
        category: 'api'
    },
    {
        name: 'Socket.io',
        icon: require('../../assests/Socket.io.png'),
        category: 'realtime'
    },

    // Testing & Quality
    {
        name: 'Jest',
        icon: require('../../assests/Jest.png'),
        category: 'testing'
    },

    // Languages
    {
        name: 'Python',
        icon: require('../../assests/icons8-python-96.png'),
        category: 'language'
    },

    // Tools
    {
        name: 'Git',
        icon: require('../../assests/icons8-git-96.png'),
        category: 'tools'
    },
    {
        name: 'Postman',
        icon: require('../../assests/Postman.png'),
        category: 'tools'
    },
    {
        name: 'Swagger',
        icon: require('../../assests/Swagger.png'),
        category: 'tools'
    }
];

// Organize skills by category for better display
export const skillCategories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development', 
    database: 'Database Management',
    language: 'Programming Languages',
    devops: 'DevOps & Deployment',
    cloud: 'Cloud Services',
    api: 'API Development',
    testing: 'Testing',
    tools: 'Development Tools',
    realtime: 'Real-time Technologies'
};

export const getSkillsByCategory = () => {
    const categorized = {};
    
    s_list.forEach(skill => {
        if (!categorized[skill.category]) {
            categorized[skill.category] = [];
        }
        categorized[skill.category].push(skill);
    });
    
    return categorized;
};
