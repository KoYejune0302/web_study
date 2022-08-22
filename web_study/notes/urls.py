from django.urls import path
from django.conf.urls import include, url
from notes.views import NoteCreateView, NoteRetrieveUpdateDestroyAPIView

# Note_list = NoteViewSet.as_view({
#     'get': 'list',
#     'post': 'create',
# })

# Note_detail = NoteViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'delete': 'destroy',
# })

urlpatterns = [
    # path('note/', Note_list, name='Note-list'),
    # path('note/<int:pk>/', Note_detail, name='Note-detail'),
    url(r'^note/$', NoteCreateView.as_view(), name=NoteCreateView.name),
    url(r'^note/(?P<pk>[0-9]+)/$', NoteRetrieveUpdateDestroyAPIView.as_view(), name=NoteRetrieveUpdateDestroyAPIView.name),

]