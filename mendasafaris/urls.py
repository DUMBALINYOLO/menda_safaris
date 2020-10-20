from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
# from pages.views import index


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', TemplateView.as_view(template_name='react.html')),
    # path('', index),
    path('api/orders/', include('orders.urls')),
    # path('', TemplateView.as_view(template_name='walking.html')),
    # re_path(r'^posts/', TemplateView.as_view(template_name='react.html')),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)