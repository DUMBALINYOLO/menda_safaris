import uuid
from django.db import models
from setup.models import SoftDeletionModel
from setup.constants import  COUPON_STATUS_CHOICES



class Coupon(models.Model):
    code = models.CharField(max_length=15)
    amount = models.FloatField()
    owner =  models.ForeignKey(
                    'accounts.User',
                    on_delete=models.SET_NULL,
                    null=True,
                    related_name='coupons'
                )
    status = models.CharField(max_length=15, choices=COUPON_STATUS_CHOICES, default='active')

    def __str__(self):
        return self.code

    def save(self, *args, **kwargs):
        if not self.code:
            self.code = str(uuid.uuid4()).replace("-", '').upper()[:20]
        super(Order, self).save(*args, **kwargs)

