from rest_framework import viewsets, pagination
from django.db.models import Q
from orders.models import (
				Item

			)
from orders.serializers import (
					ItemSerializer
				)


class ItemViewSet(viewsets.ModelViewSet):

	queryset = Item.objects.all().order_by('id')
	serializer_class = ItemSerializer

	

