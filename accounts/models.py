import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from django.core.validators import RegexValidator
from django.contrib.auth.models import (
        BaseUserManager, 
        AbstractBaseUser,
        PermissionsMixin
    )
from django.db.models import Sum
from django.shortcuts import reverse
from django_countries.fields import CountryField
from setup.constants import USER_CATEGORY_CHOICES, ADDRESS_CHOICES




class UserManager(BaseUserManager):
    

    def create_user(self, email, is_superuser=False, password=None, is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("Enter Valid Email")
        user_obj = self.model(
                email=self.normalize_email(email)
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)
        return user_obj


    def create_superuser(self, email, password=None, **extra_fields):
        user=self.create_user(
            email,
            password = password,
            is_staff = True,
            is_admin =True,
            is_superuser=True, 
            **extra_fields
        )
        return user





class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, max_length=355)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    category = models.CharField(max_length=341, choices=USER_CATEGORY_CHOICES, default='customer')
    number = models.CharField(max_length=255, null=True, unique=True, default=None)
    phone = models.CharField(max_length =16, unique=True, blank=True, default="")
    first_name = models.CharField(max_length =32, blank=True, null=True)
    middle_name = models.CharField(max_length =32, blank=True, null=True)
    last_name = models.CharField(max_length =32)
    is_superuser = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)

  

    objects = UserManager()

    
    USERNAME_FIELD = 'email'
    REQUIRE_FIELDS = ['category', 'first_name', 'last_name']


    def save(self, *args, **kwargs):
        if not self.number:
            self.number = str(uuid.uuid4()).replace("-", '').upper()[:20]
        super(User, self).save(*args, **kwargs)



    def get_full_name(self):
        return f'{self.first_name} {self.first_name}'

    def get_short_name(self):
        return f'{self.first_name} {self.first_name}'


    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


    @property
    def is_staff(self):
        return self.staff


    @property
    def is_admin(self):
        return self.admin

    @property
    def shipping_addresses(self):
        return self.shipping_addresses.filter(address_type='S')


    @property
    def billing_addresses(self):
        return self.shipping_addresses.exclude(address_type='S')


    @property
    def active_coupons(self):
        return self.coupons.exclude(status='used')


    @property
    def expired_coupons(self):
        return self.coupons.filter(status='used')


class UserProfile(models.Model):
    user = models.ForeignKey(
                    'accounts.User',
                    on_delete=models.SET_NULL,
                    null=True,
                )
    phone = models.CharField(max_length =16, unique=True, blank=True, default="")
    one_click_ordering = models.BooleanField(default=False)

    def __str__(self):
        return self.user.__str__()


class Address(models.Model):
    user = models.ForeignKey(
                    'accounts.User',
                    on_delete=models.SET_NULL,
                    null=True,
                )
    street_address = models.CharField(max_length=100)
    apartment_address = models.CharField(max_length=100)
    country = CountryField(multiple=False)
    zip = models.CharField(max_length=100)
    address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.user.__str__()

    class Meta:
        verbose_name_plural = 'Addresses'


