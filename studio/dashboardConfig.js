export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612d3f5d6423b93ac3a6a8a1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zcb7g881',
                  apiId: 'a7d89d2b-1d01-44af-b2ea-618ffca1ae62'
                },
                {
                  buildHookId: '612d3f5de4c24034e539833f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7xanppt7',
                  apiId: 'fd2a3a85-e365-4ae1-97a8-f4a39ee6197f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fuzzybuzz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7xanppt7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
