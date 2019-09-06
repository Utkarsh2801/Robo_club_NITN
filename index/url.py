from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('projects', views.projects, name="projects"),
    path('team', views.team, name="team"),
    path('events', views.events, name="events"),
    path('about', views.about, name="about"),
    path('projects/<str:project_title>', views.project, name="project"),
    path('faculty', views.faculty, name="faculty"),
]
