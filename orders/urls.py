from rest_framework import routers
from .apis import (
		ItemViewSet
	)



router = routers.DefaultRouter()

router.register(r'products', ItemViewSet)

urlpatterns = router.urls


