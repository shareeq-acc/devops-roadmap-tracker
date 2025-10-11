const roadmapData = {
    phases: [
        {
            id: 'phase1',
            title: 'Phase 1: Foundation & Containerization',
            duration: '4-5 weeks',
            weeks: [
                {
                    id: 'week1-2',
                    title: 'Week 1-2: Advanced Git & Version Control',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'git-workflows',
                            title: 'Advanced Git Workflows',
                            description: 'Master Git Flow, feature branches, and collaborative development strategies used in professional environments.',
                            whatYouLearn: [
                                'Git Flow branching model (master, develop, feature, release, hotfix)',
                                'Feature branch workflows for team collaboration',
                                'Merge strategies (merge, rebase, squash)',
                                'Conflict resolution techniques',
                                'Best practices for commit messages'
                            ],
                            resources: [
                                { title: 'Pro Git Book - Chapters 3-7', url: 'https://git-scm.com/book', type: 'doc' },
                                { title: 'Git Branching Interactive', url: 'https://learngitbranching.js.org/', type: 'doc' },
                                { title: 'Git Tutorial - freeCodeCamp', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'youtube' }
                            ],
                            alternatives: 'Alternative VCS: Mercurial (less common), Perforce (enterprise)',
                            handson: 'Set up a multi-branch workflow for one of your existing projects, practice resolving merge conflicts'
                        },
                        {
                            id: 'git-hooks',
                            title: 'Git Hooks & Automation',
                            description: 'Automate code quality checks and workflows using Git hooks for pre-commit, pre-push validation.',
                            whatYouLearn: [
                                'Understanding Git hooks lifecycle',
                                'Pre-commit hooks for linting and formatting',
                                'Pre-push hooks for running tests',
                                'Husky for managing Git hooks in Node.js projects',
                                'Custom shell scripts for automation'
                            ],
                            resources: [
                                { title: 'Git Hooks Documentation', url: 'https://git-scm.com/docs/githooks', type: 'doc' },
                                { title: 'Git Hooks - The Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hUBd9wh4GwHBXhh2YSFS4V', type: 'youtube' }
                            ],
                            alternatives: 'CI/CD pipelines can also handle pre-commit checks',
                            handson: 'Create pre-commit hooks for code formatting/linting in your projects'
                        }
                    ]
                },
                {
                    id: 'week3-4',
                    title: 'Week 3-4: Docker Fundamentals',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'docker-basics',
                            title: 'Docker Basics & Containerization',
                            description: 'Understand container technology, Docker architecture, and how to containerize applications.',
                            whatYouLearn: [
                                'Container vs VM differences',
                                'Docker architecture (daemon, client, registry)',
                                'Docker commands (run, build, push, pull)',
                                'Container lifecycle management',
                                'Image layers and caching'
                            ],
                            resources: [
                                { title: 'Docker Official Tutorial', url: 'https://docs.docker.com/get-started/', type: 'doc' },
                                { title: 'Docker Tutorial - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', type: 'youtube' },
                                { title: 'Play with Docker', url: 'https://labs.play-with-docker.com/', type: 'doc' }
                            ],
                            alternatives: 'Podman (Docker alternative), containerd, CRI-O',
                            handson: 'Run containers, explore Docker Hub, understand container isolation'
                        },
                        {
                            id: 'dockerfile',
                            title: 'Writing Efficient Dockerfiles',
                            description: 'Create optimized Dockerfiles with multi-stage builds for production-ready containers.',
                            whatYouLearn: [
                                'Dockerfile syntax and instructions',
                                'Multi-stage builds for smaller images',
                                'Layer optimization techniques',
                                'Best practices for caching',
                                'Security considerations in Dockerfiles'
                            ],
                            resources: [
                                { title: 'Dockerfile Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', type: 'doc' },
                                { title: 'Docker Crash Course - Traversy', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo', type: 'youtube' }
                            ],
                            alternatives: 'Buildpacks, Jib (for Java), Kaniko',
                            handson: 'Containerize your Express.js and Spring Boot applications with optimized Dockerfiles'
                        },
                        {
                            id: 'docker-networking',
                            title: 'Docker Networking & Volumes',
                            description: 'Connect containers and persist data using Docker networks and volumes.',
                            whatYouLearn: [
                                'Docker network types (bridge, host, overlay)',
                                'Container communication',
                                'Port mapping and exposure',
                                'Volume types (named, bind mounts)',
                                'Data persistence strategies'
                            ],
                            resources: [
                                { title: 'Docker Networking', url: 'https://docs.docker.com/network/', type: 'doc' },
                                { title: 'Docker Volumes', url: 'https://docs.docker.com/storage/volumes/', type: 'doc' }
                            ],
                            alternatives: 'External storage solutions (NFS, EBS)',
                            handson: 'Create multi-container apps with database connections and persistent storage'
                        }
                    ]
                },
                {
                    id: 'week5',
                    title: 'Week 5: Docker Compose',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'docker-compose',
                            title: 'Docker Compose Fundamentals',
                            description: 'Orchestrate multi-container applications using Docker Compose for development environments.',
                            whatYouLearn: [
                                'Docker Compose YAML syntax',
                                'Service definitions and dependencies',
                                'Environment variable management',
                                'Network and volume configuration',
                                'Scaling services with Compose'
                            ],
                            resources: [
                                { title: 'Docker Compose Docs', url: 'https://docs.docker.com/compose/', type: 'doc' },
                                { title: 'Docker Compose - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=MVIcrmeV_6c', type: 'youtube' },
                                { title: 'Awesome Compose Examples', url: 'https://github.com/docker/awesome-compose', type: 'doc' }
                            ],
                            alternatives: 'Kubernetes for production, Docker Swarm',
                            handson: 'Create full-stack app with Docker Compose (frontend, backend, database, cache)'
                        }
                    ]
                }
            ]
        },
        {
            id: 'phase2',
            title: 'Phase 2: CI/CD & Testing',
            duration: '6-7 weeks',
            weeks: [
                {
                    id: 'week6-7',
                    title: 'Week 6-7: Testing Fundamentals',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'unit-testing',
                            title: 'Unit Testing Best Practices',
                            description: 'Write comprehensive unit tests for backend services using modern testing frameworks.',
                            whatYouLearn: [
                                'Unit testing principles and patterns',
                                'Mocking and stubbing dependencies',
                                'Test coverage and quality metrics',
                                'TDD (Test-Driven Development) approach',
                                'Testing asynchronous code'
                            ],
                            resources: [
                                { title: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started', type: 'doc' },
                                { title: 'JUnit 5 Guide', url: 'https://junit.org/junit5/docs/current/user-guide/', type: 'doc' },
                                { title: 'Testing JavaScript - Fun Fun Function', url: 'https://www.youtube.com/playlist?list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr', type: 'youtube' }
                            ],
                            alternatives: 'Mocha, Jasmine (JS); TestNG (Java)',
                            handson: 'Add unit tests to existing apps, aim for 70%+ coverage'
                        },
                        {
                            id: 'integration-testing',
                            title: 'Integration & API Testing',
                            description: 'Test service interactions and API endpoints to ensure system reliability.',
                            whatYouLearn: [
                                'Integration testing strategies',
                                'API testing with RestAssured/httpx',
                                'Database testing with TestContainers',
                                'End-to-end testing concepts',
                                'Test data management'
                            ],
                            resources: [
                                { title: 'Postman Learning Center', url: 'https://learning.postman.com/', type: 'doc' },
                                { title: 'API Testing - freeCodeCamp', url: 'https://www.youtube.com/watch?v=VywxIQ2ZXw4', type: 'youtube' },
                                { title: 'Spring Boot Testing', url: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTbx8p2oCgcAQGQyqN8XeA1x', type: 'youtube' }
                            ],
                            alternatives: 'Supertest (Node.js), REST-assured (Java)',
                            handson: 'Create integration tests for API endpoints and database operations'
                        }
                    ]
                },
                {
                    id: 'week8-10',
                    title: 'Week 8-10: GitHub Actions CI/CD',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'cicd-concepts',
                            title: 'CI/CD Concepts & Principles',
                            description: 'Understand continuous integration and deployment principles for automated software delivery.',
                            whatYouLearn: [
                                'CI/CD pipeline stages',
                                'Build automation principles',
                                'Artifact management',
                                'Deployment strategies (blue-green, canary, rolling)',
                                'Pipeline as Code concepts'
                            ],
                            resources: [
                                { title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', type: 'doc' },
                                { title: 'CI/CD - Fireship', url: 'https://www.youtube.com/watch?v=eB0nUzAI7M8', type: 'youtube' }
                            ],
                            alternatives: 'Jenkins, GitLab CI, CircleCI, Travis CI',
                            handson: 'Understand pipeline stages: build, test, deploy'
                        },
                        {
                            id: 'github-actions',
                            title: 'GitHub Actions Implementation',
                            description: 'Build automated CI/CD pipelines using GitHub Actions for testing and deployment.',
                            whatYouLearn: [
                                'GitHub Actions YAML syntax',
                                'Workflows, jobs, and steps',
                                'GitHub-hosted vs self-hosted runners',
                                'Secrets and environment variables',
                                'Matrix builds for multiple environments'
                            ],
                            resources: [
                                { title: 'GitHub Actions Tutorial - Nana', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI', type: 'youtube' },
                                { title: 'Complete GitHub Actions - freeCodeCamp', url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4', type: 'youtube' },
                                { title: 'Awesome Actions', url: 'https://github.com/sdras/awesome-actions', type: 'doc' }
                            ],
                            alternatives: 'GitLab CI/CD, Jenkins, Azure Pipelines',
                            handson: 'Create CI pipeline with automated testing and Docker image building'
                        },
                        {
                            id: 'automated-deployment',
                            title: 'Automated Deployment Pipelines',
                            description: 'Deploy applications automatically to staging and production environments.',
                            whatYouLearn: [
                                'Deployment automation strategies',
                                'Environment-specific configurations',
                                'Rollback mechanisms',
                                'Deployment notifications',
                                'Branch-based deployments'
                            ],
                            resources: [
                                { title: 'GitHub Actions Deployment', url: 'https://docs.github.com/en/actions/deployment', type: 'doc' },
                                { title: 'CD Pipeline - Traversy', url: 'https://www.youtube.com/watch?v=O5F-5uVouxw', type: 'youtube' }
                            ],
                            alternatives: 'ArgoCD (GitOps), Spinnaker, Flux',
                            handson: 'Deploy containerized apps to staging/production environments'
                        }
                    ]
                },
                {
                    id: 'week11-12',
                    title: 'Week 11-12: Alternative CI/CD Tools',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'gitlab-ci',
                            title: 'GitLab CI/CD',
                            description: 'Explore GitLab\'s integrated CI/CD platform and compare with GitHub Actions.',
                            whatYouLearn: [
                                'GitLab CI/CD YAML syntax',
                                'GitLab runners and executors',
                                'Pipeline stages and dependencies',
                                'GitLab Container Registry',
                                'Auto DevOps features'
                            ],
                            resources: [
                                { title: 'GitLab CI/CD Docs', url: 'https://docs.gitlab.com/ee/ci/', type: 'doc' },
                                { title: 'GitLab CI/CD - TechWorld with Nana', url: 'https://www.youtube.com/watch?v=qP8kir_GUgo', type: 'youtube' }
                            ],
                            alternatives: 'GitHub Actions, Jenkins, CircleCI',
                            handson: 'Migrate one pipeline from GitHub Actions to GitLab CI'
                        },
                        {
                            id: 'jenkins',
                            title: 'Jenkins Fundamentals',
                            description: 'Set up Jenkins for CI/CD automation and understand its plugin ecosystem.',
                            whatYouLearn: [
                                'Jenkins installation and configuration',
                                'Jenkins pipeline syntax (Declarative & Scripted)',
                                'Jenkins plugins ecosystem',
                                'Building and deploying with Jenkins',
                                'Jenkins security and user management'
                            ],
                            resources: [
                                { title: 'Jenkins User Docs', url: 'https://www.jenkins.io/doc/', type: 'doc' },
                                { title: 'Jenkins Tutorial - Edureka', url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOE8EvOGXOWaGBIqEUhNgfLq', type: 'youtube' }
                            ],
                            alternatives: 'GitHub Actions, GitLab CI, TeamCity',
                            handson: 'Set up Jenkins locally, create basic pipeline for your project'
                        }
                    ]
                }
            ]
        },
        {
            id: 'phase3',
            title: 'Phase 3: Cloud Platforms & Infrastructure',
            duration: '8-9 weeks',
            weeks: [
                {
                    id: 'week13-15',
                    title: 'Week 13-15: AWS Fundamentals',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'aws-basics',
                            title: 'AWS Core Services',
                            description: 'Master fundamental AWS services for compute, storage, and networking.',
                            whatYouLearn: [
                                'AWS global infrastructure (regions, AZs)',
                                'EC2 instances and security groups',
                                'S3 storage and bucket policies',
                                'VPC, subnets, and routing',
                                'IAM users, roles, and policies'
                            ],
                            resources: [
                                { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free/', type: 'doc' },
                                { title: 'AWS Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=3hLmDS179YE', type: 'youtube' },
                                { title: 'AWS Skill Builder', url: 'https://skillbuilder.aws/', type: 'doc' }
                            ],
                            alternatives: 'Google Cloud Platform, Microsoft Azure, DigitalOcean',
                            handson: 'Launch EC2 instances, create S3 buckets, configure VPC'
                        },
                        {
                            id: 'aws-databases',
                            title: 'AWS RDS & Database Services',
                            description: 'Deploy and manage relational databases on AWS with RDS.',
                            whatYouLearn: [
                                'RDS setup and configuration',
                                'Multi-AZ deployments for high availability',
                                'Read replicas and scaling',
                                'Backup and restore strategies',
                                'Database security and encryption'
                            ],
                            resources: [
                                { title: 'AWS RDS Documentation', url: 'https://docs.aws.amazon.com/rds/', type: 'doc' },
                                { title: 'AWS RDS Tutorial', url: 'https://www.youtube.com/watch?v=eMzCI7S1P9M', type: 'youtube' }
                            ],
                            alternatives: 'Azure Database, Google Cloud SQL, self-managed databases',
                            handson: 'Deploy PostgreSQL on RDS, connect from EC2 instances'
                        },
                        {
                            id: 'aws-loadbalancing',
                            title: 'Load Balancing & Auto Scaling',
                            description: 'Implement high availability and automatic scaling for applications.',
                            whatYouLearn: [
                                'Application Load Balancer (ALB) configuration',
                                'Target groups and health checks',
                                'Auto Scaling Groups (ASG)',
                                'Scaling policies (target tracking, step)',
                                'CloudWatch metrics and alarms'
                            ],
                            resources: [
                                { title: 'AWS ELB Documentation', url: 'https://docs.aws.amazon.com/elasticloadbalancing/', type: 'doc' },
                                { title: 'AWS Auto Scaling', url: 'https://docs.aws.amazon.com/autoscaling/', type: 'doc' }
                            ],
                            alternatives: 'NGINX, HAProxy, Cloud provider load balancers',
                            handson: 'Set up ALB with auto-scaling for your application'
                        }
                    ]
                },
                {
                    id: 'week16-18',
                    title: 'Week 16-18: Kubernetes Fundamentals',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'k8s-architecture',
                            title: 'Kubernetes Architecture & Concepts',
                            description: 'Understand Kubernetes architecture and core concepts for container orchestration.',
                            whatYouLearn: [
                                'Kubernetes architecture (control plane, nodes)',
                                'Pods, ReplicaSets, and Deployments',
                                'Services and networking',
                                'ConfigMaps and Secrets',
                                'Namespaces and resource quotas'
                            ],
                            resources: [
                                { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/tutorials/', type: 'doc' },
                                { title: 'Kubernetes Tutorial - Nana', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', type: 'youtube' },
                                { title: 'Play with Kubernetes', url: 'https://labs.play-with-k8s.com/', type: 'doc' }
                            ],
                            alternatives: 'Docker Swarm, Nomad, ECS',
                            handson: 'Install minikube/kind, deploy first application'
                        },
                        {
                            id: 'k8s-deployments',
                            title: 'Kubernetes Deployments & Services',
                            description: 'Deploy and expose applications using Kubernetes resources.',
                            whatYouLearn: [
                                'Writing Kubernetes manifests (YAML)',
                                'Deployment strategies (rolling, recreate)',
                                'Service types (ClusterIP, NodePort, LoadBalancer)',
                                'Ingress controllers and rules',
                                'Pod health checks (liveness, readiness)'
                            ],
                            resources: [
                                { title: 'Kubernetes Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=d6WC5n9G_sM', type: 'youtube' },
                                { title: 'Kubernetes by Example', url: 'https://kubernetesbyexample.com/', type: 'doc' }
                            ],
                            alternatives: 'Helm charts for templating',
                            handson: 'Deploy microservices to Kubernetes with service discovery'
                        },
                        {
                            id: 'k8s-storage',
                            title: 'Kubernetes Storage & StatefulSets',
                            description: 'Manage persistent data and stateful applications in Kubernetes.',
                            whatYouLearn: [
                                'Persistent Volumes and Claims',
                                'Storage Classes and dynamic provisioning',
                                'StatefulSets for stateful applications',
                                'Volume types and access modes',
                                'Database deployment on Kubernetes'
                            ],
                            resources: [
                                { title: 'Kubernetes Storage Docs', url: 'https://kubernetes.io/docs/concepts/storage/', type: 'doc' },
                                { title: 'K8s Concepts - Just me and Opensource', url: 'https://www.youtube.com/playlist?list=PL34sAs7_26wNBRWM6BDhnonoA5FMERax0', type: 'youtube' }
                            ],
                            alternatives: 'External storage solutions (Rook, Longhorn)',
                            handson: 'Deploy database with persistent storage on Kubernetes'
                        }
                    ]
                },
                {
                    id: 'week19-21',
                    title: 'Week 19-21: Infrastructure as Code',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'iac-concepts',
                            title: 'Infrastructure as Code Principles',
                            description: 'Learn to manage infrastructure through code for consistency and automation.',
                            whatYouLearn: [
                                'IaC benefits and principles',
                                'Declarative vs imperative approaches',
                                'State management concepts',
                                'Infrastructure versioning',
                                'Idempotency and immutability'
                            ],
                            resources: [
                                { title: 'Terraform Documentation', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'doc' },
                                { title: 'IaC - DevOps Directive', url: 'https://www.youtube.com/playlist?list=PLy7NrYWoggjzSIlwxeBbcgfAdYoxCIrM2', type: 'youtube' }
                            ],
                            alternatives: 'Pulumi, AWS CDK, CloudFormation',
                            handson: 'Understand IaC workflow: write, plan, apply'
                        },
                        {
                            id: 'terraform-basics',
                            title: 'Terraform Fundamentals',
                            description: 'Use Terraform to provision and manage cloud infrastructure declaratively.',
                            whatYouLearn: [
                                'HCL (HashiCorp Configuration Language) syntax',
                                'Terraform providers and resources',
                                'Variables, outputs, and data sources',
                                'State files and remote backends',
                                'Terraform commands (init, plan, apply, destroy)'
                            ],
                            resources: [
                                { title: 'Terraform Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo', type: 'youtube' },
                                { title: 'Terraform Tutorial - Nana', url: 'https://www.youtube.com/watch?v=l5k1ai_GBDE', type: 'youtube' },
                                { title: 'Terraform AWS Provider', url: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs', type: 'doc' }
                            ],
                            alternatives: 'Pulumi, OpenTofu (Terraform fork)',
                            handson: 'Provision AWS infrastructure (VPC, EC2, RDS) with Terraform'
                        },
                        {
                            id: 'terraform-modules',
                            title: 'Terraform Modules & Best Practices',
                            description: 'Create reusable infrastructure components and follow Terraform best practices.',
                            whatYouLearn: [
                                'Creating and using Terraform modules',
                                'Module composition and dependencies',
                                'Workspaces for multiple environments',
                                'Remote state management (S3, Terraform Cloud)',
                                'Security best practices and secrets management'
                            ],
                            resources: [
                                { title: 'Terraform Modules', url: 'https://developer.hashicorp.com/terraform/language/modules', type: 'doc' },
                                { title: 'Terraform AWS - Derek Banas', url: 'https://www.youtube.com/watch?v=nvNqfgojocs', type: 'youtube' }
                            ],
                            alternatives: 'Terragrunt for DRY Terraform code',
                            handson: 'Build reusable modules for common infrastructure patterns'
                        }
                    ]
                }
            ]
        },
        {
            id: 'phase4',
            title: 'Phase 4: Monitoring, Security & Advanced Topics',
            duration: '6-7 weeks',
            weeks: [
                {
                    id: 'week22-24',
                    title: 'Week 22-24: Monitoring & Observability',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'logging',
                            title: 'Centralized Logging with ELK Stack',
                            description: 'Implement centralized logging using Elasticsearch, Logstash, and Kibana.',
                            whatYouLearn: [
                                'Log aggregation patterns',
                                'Elasticsearch indexing and searching',
                                'Logstash pipelines and filters',
                                'Kibana dashboards and visualizations',
                                'Log levels and structured logging'
                            ],
                            resources: [
                                { title: 'Elastic Stack Documentation', url: 'https://www.elastic.co/guide/index.html', type: 'doc' },
                                { title: 'ELK Stack Tutorial - Edureka', url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGpQMApV_9e8_6PqP8fAMgx', type: 'youtube' }
                            ],
                            alternatives: 'Loki (Grafana), Splunk, AWS CloudWatch Logs',
                            handson: 'Set up ELK stack, send application logs, create dashboards'
                        },
                        {
                            id: 'metrics',
                            title: 'Metrics with Prometheus & Grafana',
                            description: 'Monitor application and infrastructure metrics with Prometheus and visualize in Grafana.',
                            whatYouLearn: [
                                'Prometheus architecture and data model',
                                'PromQL query language',
                                'Exporters for different systems',
                                'Grafana dashboard creation',
                                'Alert rules and notification channels'
                            ],
                            resources: [
                                { title: 'Prometheus Documentation', url: 'https://prometheus.io/docs/', type: 'doc' },
                                { title: 'Complete Monitoring - Nana', url: 'https://www.youtube.com/watch?v=9TJx7QTrTyo', type: 'youtube' },
                                { title: 'Prometheus Tutorial', url: 'https://www.youtube.com/playlist?list=PL34sAs7_26wMuEIsmFyiDDl-JlDTRJDH9', type: 'youtube' }
                            ],
                            alternatives: 'Datadog, New Relic, AWS CloudWatch',
                            handson: 'Monitor your applications with Prometheus, create Grafana dashboards'
                        },
                        {
                            id: 'apm',
                            title: 'Application Performance Monitoring',
                            description: 'Implement distributed tracing and APM for microservices.',
                            whatYouLearn: [
                                'Distributed tracing concepts',
                                'OpenTelemetry instrumentation',
                                'Span and trace analysis',
                                'Performance bottleneck identification',
                                'Service dependency mapping'
                            ],
                            resources: [
                                { title: 'OpenTelemetry Docs', url: 'https://opentelemetry.io/docs/', type: 'doc' },
                                { title: 'Grafana Complete Course', url: 'https://www.youtube.com/playlist?list=PLxzKY3wu0_FKklSEC4p8VSy4lStmJPJv9', type: 'youtube' }
                            ],
                            alternatives: 'Jaeger, Zipkin, AWS X-Ray, Datadog APM',
                            handson: 'Add distributed tracing to microservices application'
                        }
                    ]
                },
                {
                    id: 'week25-27',
                    title: 'Week 25-27: Security & Compliance',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'devsecops',
                            title: 'DevSecOps Principles',
                            description: 'Integrate security practices throughout the DevOps lifecycle.',
                            whatYouLearn: [
                                'Shift-left security approach',
                                'Security in CI/CD pipelines',
                                'OWASP Top 10 vulnerabilities',
                                'Security scanning tools',
                                'Compliance and audit requirements'
                            ],
                            resources: [
                                { title: 'OWASP DevSecOps Guideline', url: 'https://owasp.org/www-project-devsecops-guideline/', type: 'doc' },
                                { title: 'DevSecOps Tutorial - Nana', url: 'https://www.youtube.com/watch?v=F5NBOUEFr6A', type: 'youtube' }
                            ],
                            alternatives: 'Traditional security approaches (slower)',
                            handson: 'Identify security gaps in your current pipeline'
                        },
                        {
                            id: 'container-security',
                            title: 'Container & Kubernetes Security',
                            description: 'Secure containers and Kubernetes clusters following best practices.',
                            whatYouLearn: [
                                'Image scanning with Trivy/Clair',
                                'Container runtime security',
                                'Kubernetes RBAC and network policies',
                                'Pod security standards',
                                'Secret management best practices'
                            ],
                            resources: [
                                { title: 'Docker Security Docs', url: 'https://docs.docker.com/engine/security/', type: 'doc' },
                                { title: 'Container Security - Aqua', url: 'https://www.youtube.com/playlist?list=PLrU9-xw4b_lv4X6-Y9YjB8hOHSNhFrABK', type: 'youtube' },
                                { title: 'Kubernetes Security', url: 'https://www.youtube.com/playlist?list=PLHq1uqvAteVvUEdqaBeMK2awVThNujwMd', type: 'youtube' }
                            ],
                            alternatives: 'Snyk, Anchore, Falco',
                            handson: 'Implement vulnerability scanning in CI/CD, configure K8s RBAC'
                        },
                        {
                            id: 'secrets-management',
                            title: 'Secrets Management',
                            description: 'Securely manage sensitive data and credentials in DevOps workflows.',
                            whatYouLearn: [
                                'Secrets management patterns',
                                'AWS Secrets Manager/Parameter Store',
                                'HashiCorp Vault basics',
                                'Encryption at rest and in transit',
                                'Secret rotation strategies'
                            ],
                            resources: [
                                { title: 'AWS Secrets Manager', url: 'https://docs.aws.amazon.com/secretsmanager/', type: 'doc' },
                                { title: 'AWS Security Best Practices', url: 'https://www.youtube.com/watch?v=MY1w7sWW5ms', type: 'youtube' }
                            ],
                            alternatives: 'HashiCorp Vault, Azure Key Vault, Sealed Secrets',
                            handson: 'Migrate hardcoded secrets to AWS Secrets Manager'
                        }
                    ]
                },
                {
                    id: 'week28',
                    title: 'Week 28: Advanced Topics',
                    time: '6-7 hours/week',
                    topics: [
                        {
                            id: 'service-mesh',
                            title: 'Service Mesh with Istio',
                            description: 'Manage microservices communication with service mesh technology.',
                            whatYouLearn: [
                                'Service mesh concepts',
                                'Traffic management and routing',
                                'Observability and tracing',
                                'Security (mTLS, authorization)',
                                'Circuit breaking and retries'
                            ],
                            resources: [
                                { title: 'Istio Documentation', url: 'https://istio.io/latest/docs/', type: 'doc' },
                                { title: 'Service Mesh - Nana', url: 'https://www.youtube.com/watch?v=16fgzklcF7Y', type: 'youtube' }
                            ],
                            alternatives: 'Linkerd, Consul, AWS App Mesh',
                            handson: 'Deploy Istio to Kubernetes, configure traffic routing'
                        },
                        {
                            id: 'gitops',
                            title: 'GitOps with ArgoCD',
                            description: 'Implement GitOps methodology for declarative continuous delivery.',
                            whatYouLearn: [
                                'GitOps principles and benefits',
                                'ArgoCD installation and configuration',
                                'Application deployment with ArgoCD',
                                'Sync strategies and health checks',
                                'Multi-environment management'
                            ],
                            resources: [
                                { title: 'Argo CD Documentation', url: 'https://argo-cd.readthedocs.io/', type: 'doc' },
                                { title: 'GitOps with ArgoCD', url: 'https://www.youtube.com/watch?v=MeU5_k9ssrs', type: 'youtube' }
                            ],
                            alternatives: 'Flux, Jenkins X, Spinnaker',
                            handson: 'Set up ArgoCD, deploy applications using GitOps'
                        }
                    ]
                }
            ]
        }
    ]
};