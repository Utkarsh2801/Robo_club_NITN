from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from . import models

# Create your views here.

def index(request):
    return render(request, 'pages/index.html')



def projects(request):
    projects = models.project.objects.order_by('-date')

    context  = {
        'projects' : projects,
    }
    
    return render(request, 'pages/projects.html', context)



def team(request):
    return render(request, 'pages/team.html')



def events(request):
    event = models.event.objects.order_by('-date')
    context  = {
        'event' : event,
    }

    return render(request, 'pages/events.html', context)



def about(request):
    return render(request, 'pages/about.html')



def project(request, project_title):
    data = get_object_or_404(models.project, project_title = project_title)
    return render(request, 'pages/project.html', {
        'project' : data
    })

def faculty(request):
    return render(request, 'pages/faculty.html')