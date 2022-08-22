from django.shortcuts import render
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.filters import SearchFilter

from notes.serializers import NoteSerializer
from notes.models import Note
# Create your views here.

# class NoteViewSet(viewsets.ModelViewSet):
#     serializer_class = NoteSerializer
#     queryset = Note.objects.all()


class NoteCreateView(ListCreateAPIView):
    name = "Note-create"
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

    filter_backends = [SearchFilter, DjangoFilterBackend]

    filter_fields = ['content']
    search_fields = ['tag']
    

class NoteRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    name = "Note-retrieve-update-destroy"
    serializer_class = NoteSerializer
    queryset = Note.objects.all()