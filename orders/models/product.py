from django.db import models
from setup.models import SoftDeletionModel
from setup.constants import  CATEGORY_CHOICES, LABEL_CHOICES, STOCK_STATUS_CHOICES


class Item(SoftDeletionModel):
    title = models.CharField(max_length=100)
    price = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
    avaliability_status = models.CharField(choices=STOCK_STATUS_CHOICES, max_length=290, default='IN')
    label = models.CharField(choices=LABEL_CHOICES, max_length=1)
    slug = models.SlugField()
    description = models.TextField()
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)

    def __str__(self):
        return self.title

    # def get_absolute_url(self):
    #     return reverse("core:product", kwargs={
    #         'slug': self.slug
    #     })

    # def get_add_to_cart_url(self):
    #     return reverse("core:add-to-cart", kwargs={
    #         'slug': self.slug
    #     })

    # def get_remove_from_cart_url(self):
    #     return reverse("core:remove-from-cart", kwargs={
    #         'slug': self.slug
    #     })


class Variation(SoftDeletionModel):
    item = models.ForeignKey(
                        Item, 
                        on_delete=models.SET_NULL,
                        null = True
                    )
    name = models.CharField(max_length=50)  # size

    class Meta:
        unique_together = (
            ('item', 'name')
        )

    def __str__(self):
        return self.name


class ItemVariation(SoftDeletionModel):
    variation = models.ForeignKey(
						Variation, 
						on_delete=models.SET_NULL,
                        null = True
                    )
    value = models.CharField(max_length=50)  # S, M, L
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', null=True, blank=True)

    class Meta:
        unique_together = (
            ('variation', 'value')
        )

    def __str__(self):
        return self.value
