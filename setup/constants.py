
CATEGORY_CHOICES = (
    ('P', 'PRODUCT'),
    ('T', 'TOUR'),

)

LABEL_CHOICES = (
    ('P', 'primary'),
    ('S', 'secondary'),
    ('D', 'danger')
)

ADDRESS_CHOICES = (
    ('B', 'Billing'),
    ('S', 'Shipping'),
)

STOCK_STATUS_CHOICES = [
			('IN', 'IN STOCK'),
		    ('OUT', 'OUT OF STOCK'),
		]


USER_CATEGORY_CHOICES = [
            ('admin', 'ADMIN'),
            ('customer', 'CUSTOMERS'),
        ]

COUPON_STATUS_CHOICES = [
            ('active', 'NOT USED'),
            ('used', 'EXPIRED'),
        ]


