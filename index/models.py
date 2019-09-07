from django.db import models
from datetime import datetime

# Create your models here.

class project(models.Model):
    id = models.AutoField(primary_key=True)
    project_title = models.CharField(max_length = 20,  blank=False)
    project_img1 = models.ImageField(upload_to='photos/')
    project_img2 = models.ImageField(upload_to='photos/')
    project_team = models.ImageField(upload_to='photos/')
    project_description = models.TextField(blank=True)
    circuit_design1 = models.ImageField(upload_to='photos/', blank=True)
    circuit_design2 = models.ImageField(upload_to='photos/', blank=True)
    circuit_design3 = models.ImageField(upload_to='photos/', blank=True)
    circuit_design4 = models.ImageField(upload_to='photos/', blank=True)
    des_spec1 = models.TextField(blank=True)
    des_spec2 = models.TextField(blank=True)
    des_spec3 = models.TextField(blank=True)
    des_spec4 = models.TextField(blank=True)
    des_spec5 = models.TextField(blank=True)
    youtube_vid = models.URLField(max_length=100)
    date = models.DateTimeField(default = datetime.now, blank=False)

    def __str__(self):
        return self.project_title

class event(models.Model):
    event_title = models.CharField(max_length = 20,  blank=False)
    year = models.IntegerField()
    small_des = models.TextField()
    event_image = models.ImageField(upload_to='photos/')
    big_des1 = models.TextField()
    big_des2 = models.TextField()
    big_des3 = models.TextField()
    event_image1 = models.ImageField(upload_to='photos/', blank=True)
    event_image2 = models.ImageField(upload_to='photos/', blank=True)
    event_image3 = models.ImageField(upload_to='photos/', blank=True)
    event_image4 = models.ImageField(upload_to='photos/', blank=True)
    event_image5 = models.ImageField(upload_to='photos/', blank=True)
    event_image6 = models.ImageField(upload_to='photos/', blank=True)
    event_image7 = models.ImageField(upload_to='photos/', blank=True)
    event_image8 = models.ImageField(upload_to='photos/', blank=True)
    event_image9 = models.ImageField(upload_to='photos/', blank=True)
    event_image10 = models.ImageField(upload_to='photos/', blank=True)
    date = models.DateTimeField(default = datetime.now, blank=False)

    def __str__(self):
        return self.event_title
