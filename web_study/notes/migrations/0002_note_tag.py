# Generated by Django 3.2.13 on 2022-08-19 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='tag',
            field=models.TextField(default=True),
        ),
    ]
