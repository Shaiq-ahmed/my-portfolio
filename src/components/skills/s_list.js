export const s_list = [
    // Backend Frameworks & Technologies
    {
        name: 'NestJS',
        icon: require('../../assests/nestjs-icon.png'), // You'll need to add this icon
        category: 'backend',
        level: 'advanced'
    },
    {
        name: 'Node.js',
        icon: require('../../assests/nodejs.png'),
        category: 'backend',
        level: 'expert'
    },
    {
        name: 'Express',
        icon: require('../../assests/express.png'),
        category: 'backend',
        level: 'expert'
    },
    
    // Databases
    {
        name: 'PostgreSQL',
        icon: require('../../assests/postgresql-icon.png'), // You'll need to add this icon
        category: 'database',
        level: 'advanced'
    },
    {
        name: 'Redis',
        icon: require('../../assests/redis-icon.png'), // You'll need to add this icon
        category: 'database',
        level: 'intermediate'
    },
    {
        name: 'MongoDB',
        icon: require('../../assests/MongoDB.png'),
        category: 'database',
        level: 'expert'
    },
    
    // Frontend Technologies
    {
        name: 'React',
        icon: require('../../assests/React (1).png'),
        category: 'frontend',
        level: 'expert'
    },
    {
        name: 'TypeScript',
        icon: require('../../assests/typescript-icon.png'), // You'll need to add this icon
        category: 'language',
        level: 'advanced'
    },
    {
        name: 'JavaScript',
        icon: require('../../assests/js.png'),
        category: 'language',
        level: 'expert'
    },
    {
        name: 'Redux',
        icon: require('../../assests/icons8-redux-96.png'),
        category: 'frontend',
        level: 'intermediate'
    },

    // DevOps & Tools
    {
        name: 'Docker',
        icon: require('../../assests/icons8-docker-96.png'),
        category: 'devops',
        level: 'intermediate'
    },
    {
        name: 'AWS',
        icon: require('../../assests/aws-icon.png'), // You'll need to add this icon
        category: 'cloud',
        level: 'intermediate'
    },
    {
        name: 'Git',
        icon: require('../../assests/icons8-git-96.png'),
        category: 'tools',
        level: 'expert'
    },
    
    // APIs & Architecture
    {
        name: 'GraphQL',
        icon: require('../../assests/graphql-icon.png'), // You'll need to add this icon
        category: 'api',
        level: 'intermediate'
    },
    {
        name: 'RESTful APIs',
        icon: require('../../assests/icons8-rest-api-50.png'),
        category: 'api',
        level: 'expert'
    },
    {
        name: 'Microservices',
        icon: require('../../assests/microservices-icon.png'), // You'll need to add this icon
        category: 'architecture',
        level: 'intermediate'
    },

    // Testing & Quality
    {
        name: 'Jest',
        icon: require('../../assests/Jest.png'),
        category: 'testing',
        level: 'advanced'
    },
    {
        name: 'Socket.io',
        icon: require('../../assests/Socket.io.png'),
        category: 'realtime',
        level: 'intermediate'
    },

    // Languages
    {
        name: 'Python',
        icon: require('../../assests/icons8-python-96.png'),
        category: 'language',
        level: 'intermediate'
    },

    // Documentation & Tools
    {
        name: 'Swagger',
        icon: require('../../assests/Swagger.png'),
        category: 'documentation',
        level: 'advanced'
    },
    {
        name: 'Postman',
        icon: require('../../assests/Postman.png'),
        category: 'tools',
        level: 'expert'
    }
];

// Organize skills by category for better display
export const skillCategories = {
    backend: 'Backend Development',
    frontend: 'Frontend Development', 
    database: 'Database Management',
    language: 'Programming Languages',
    devops: 'DevOps & Deployment',
    cloud: 'Cloud Platforms',
    api: 'API Development',
    architecture: 'System Architecture',
    testing: 'Testing & Quality',
    tools: 'Development Tools',
    documentation: 'Documentation',
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
