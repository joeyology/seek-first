---
title: Home
sections:
- type: heroblock
  template: heroblock
  title: SeekFirst is
  section_id: hero
  component: HeroBlock
  content: "✍ writing daily devotions \U0001F4CA works with data \U0001F4BB makes
    no-code apps"
  actions:
  - label: "Get weekly updates \U0001F48C"
    url: https://seekfirst.substack.com/
- type: postsblock
  template: postsblock
  title: "#DailyDevotions"
  section_id: latest-posts
  component: PostsBlock
  subtitle: Latest Blog Posts
  num_posts_displayed: 4
  actions:
  - label: "Read more \U0001F4DA"
    url: blog/index.html
- template: servicesblock
  component: ServicesBlock
  type: servicesblock
  title: Data Architecture
  section_id: services-section
  serviceslist:
  - title: Data Integration
    content: |-
      ![Data Integration](/images/data-integration.png "Data Integration")

      Design, develop & deploy automated data integration strategy for your business.
  - title: Data Visualization
    content: |-
      ![Data Visualization](/images/data-visualization-1.png "Data Visualization")

      Design, develop & deploy automated data visualization that unlocks hidden insights for your business.
  subtitle: Professional Services
  actions:
  - label: "Contact Us \U0001F4E7"
    url: https://www.seekfirst.ltd/contact/
- template: portfolioblock
  component: PortfolioBlock
  layout_style: tiles
  type: portfolioblock
  title: "#NoCode Apps"
  subtitle: Latest Projects
  num_projects_displayed: 4
  section_id: latest-projects
  view_all_text: "View All \U0001F4BB"
  view_all_url: https://www.seekfirst.ltd/portfolio/
menus:
  main:
    title: Home
    weight: 1
template: home

---
