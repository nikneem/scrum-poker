| Service                |                                                                                                                                                                                     Status |
| ---------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Single Page Front-End  |  [![Build Status](https://dev.azure.com/ekeilholz/PlanningPoker/_apis/build/status/PlanningPoker%20Spa%20CI)](https://dev.azure.com/ekeilholz/PlanningPoker/_build/latest?definitionId=10) |
| Backend API            |   [![Build Status](https://dev.azure.com/ekeilholz/PlanningPoker/_apis/build/status/PlanningPoker%20Api%20CI)](https://dev.azure.com/ekeilholz/PlanningPoker/_build/latest?definitionId=9) |
| Poker Microservice     | [![Build Status](https://dev.azure.com/ekeilholz/PlanningPoker/_apis/build/status/PlanningPoker%20Poker%20CI)](https://dev.azure.com/ekeilholz/PlanningPoker/_build/latest?definitionId=7) |
| Real-time Microservice |  [![Build Status](https://dev.azure.com/ekeilholz/PlanningPoker/_apis/build/status/PlanningPoker%20Live%20CI)](https://dev.azure.com/ekeilholz/PlanningPoker/_build/latest?definitionId=8) |

# Planning Poker on containers

This project started off as a hobby project, trying to learn and understand docker containers
and effectively control a production environment running Kubernetes (k8s).

Like a lot of these projects, you run into a situation in which your demo becomes pretty useful
and with some tiny tweaks here and there, one may learn or benefit from this project in whatever
way which sounds as music in my ears.

## So here's the big picture

I needed a microservices solution, running several microservices in docker containers hosted in
a k8s environment (in my case Azure Kubernetes Service (AKS)). Why are this requirements? Because
I wanted to learn how to do it. So basically I tried to find a project which I could run in such
an environment. Obviously, the project architecture is a huge overkill for such a small project
but the point is that the architecture was the goal :)

## What does it do then?

Well, basically... very simple... the project allows you to perform planning poker sessions (or
scrum poker if you like) online. Either one, or everyone is in the lead and can start a session.
Once a session is started, a code is generated which can be used by other individuals, so they
can join that session. In case the session is started, participants can estimate work by selecting
a card value in a fibonacci sequence. Once all participants estimated the work, all cards values
are revealed so you can discuss whether you agree or need some extra refinements to estimate the
work.
