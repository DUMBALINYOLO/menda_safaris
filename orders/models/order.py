import uuid
from django.db import models
from setup.models import SoftDeletionModel
from setup.constants import  CATEGORY_CHOICES, LABEL_CHOICES
from django.db.models import Sum
from django_countries.fields import CountryField



class OrderItem(models.Model):
    user = models.ForeignKey(
                    'accounts.User',
                    on_delete=models.SET_NULL,
                    null=True,
                )
    ordered = models.BooleanField(default=False)
    item = models.ForeignKey(
                    'orders.Item', 
                    on_delete=models.SET_NULL,
                    null=True,
                    )
    item_variations = models.ManyToManyField('orders.ItemVariation')
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.item.title}"

    def get_total_item_price(self):
        return self.quantity * self.item.price

    def get_total_discount_item_price(self):
        return self.quantity * self.item.discount_price

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_total_discount_item_price()

    def get_final_price(self):
        if self.item.discount_price:
            return self.get_total_discount_item_price()
        return self.get_total_item_price()

        

class Order(models.Model):
    user = models.ForeignKey(
                    'accounts.User',
                    on_delete=models.SET_NULL,
                    null=True,
                )
    order_number = models.CharField(max_length=20, blank=True, null=True)
    items = models.ManyToManyField('OrderItem')
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    shipping_address = models.ForeignKey(
                            'accounts.Address', 
                            related_name='shipping_address', 
                            on_delete=models.SET_NULL, 
                            blank=True, 
                            null=True
                        )
    billing_address = models.ForeignKey(
                                'accounts.Address', 
                                related_name='billing_address', 
                                on_delete=models.SET_NULL, 
                                blank=True, 
                                null=True
                            )
    # payment = models.ForeignKey(
    #     'Payment', on_delete=models.SET_NULL, blank=True, null=True)
    coupon = models.ForeignKey(
        'orders.Coupon', on_delete=models.SET_NULL, blank=True, null=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)

    '''
    1. Item added to cart
    2. Adding a billing address
    (Failed checkout)
    3. Payment
    (Preprocessing, processing, packaging etc.)
    4. Being delivered
    5. Received
    6. Refunds
    '''

    def save(self, *args, **kwargs):
        if not self.order_number:
            self.order_number = str(uuid.uuid4()).replace("-", '').upper()[:20]
        super(Order, self).save(*args, **kwargs)

    def __str__(self):
        return self.user.username

    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_final_price()
        if self.coupon:
            total -= self.coupon.amount
        return total




