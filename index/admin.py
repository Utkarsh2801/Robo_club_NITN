from django.contrib import admin

from . import models
# Register your models here.

admin.site.register(models.project)
admin.site.register(models.Team)
admin.site.register(models.event)