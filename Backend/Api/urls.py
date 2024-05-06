from rest_framework import routers
from .views import ProductoView
from django.urls import path, include

# Nuevo módulo para la documentación.
from rest_framework.documentation import include_docs_urls

# Se crea un objeto instanciando a la clase de routers.
router = routers.DefaultRouter()

# Se crea una lista de rutas válidas registradas para devolver la información de las vistas.
router.register(r'products', ProductoView, 'products')

urlpatterns = [
    path('', include(router.urls)),
    path('documents/', include_docs_urls(title='API Products'))
]


