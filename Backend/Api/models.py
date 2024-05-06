from django.db import models

# Create your models here.
class Producto(models.Model):
    
    nombre = models.CharField(max_length=50)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    descripcion = models.TextField(null=True)
    fecha = models.DateTimeField(auto_now=True)
    
    def __str__(self) -> str:
        return f'Producto: {self.nombre} | Precio: {self.precio}'