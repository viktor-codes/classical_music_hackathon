from django.db import models


class Lesson(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = (
        models.TextField()
    )  # You can use RichTextField from django-ckeditor if needed
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
