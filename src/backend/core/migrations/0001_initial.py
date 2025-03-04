# Generated by Django 5.1.6 on 2025-03-04 13:54

import django.contrib.auth.models
import django.contrib.auth.validators
import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='AnalyticsData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('new_users', models.IntegerField(default=0)),
                ('active_users', models.IntegerField(default=0)),
                ('total_investments', models.DecimalField(decimal_places=2, default=0, max_digits=15)),
                ('total_commissions', models.DecimalField(decimal_places=2, default=0, max_digits=15)),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
        migrations.CreateModel(
            name='CustomToken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('symbol', models.CharField(max_length=10)),
                ('total_supply', models.DecimalField(decimal_places=8, max_digits=25)),
                ('decimals', models.IntegerField(default=18)),
                ('contract_address', models.CharField(blank=True, max_length=42, null=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('key', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField()),
                ('is_enabled', models.BooleanField(default=False)),
                ('requires_subscription', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='InvestmentPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('minimum_amount', models.DecimalField(decimal_places=2, max_digits=15)),
                ('maximum_amount', models.DecimalField(decimal_places=2, max_digits=15)),
                ('duration_days', models.IntegerField()),
                ('roi_percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('total_amount', models.DecimalField(decimal_places=2, default=0, max_digits=15)),
                ('distribution_percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('is_active', models.BooleanField(default=True)),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Rank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('required_direct_referrals', models.IntegerField()),
                ('required_team_volume', models.DecimalField(decimal_places=2, max_digits=15)),
                ('commission_rate', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='WebsiteTemplate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('is_active', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('sponsor_id', models.CharField(blank=True, max_length=10, unique=True)),
                ('level', models.IntegerField(default=1)),
                ('wallet_balance', models.DecimalField(decimal_places=2, default=0, max_digits=15)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('left_leg', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='left_children', to=settings.AUTH_USER_MODEL)),
                ('right_leg', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='right_children', to=settings.AUTH_USER_MODEL)),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
                ('rank', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.rank')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Achievement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('badge_image', models.ImageField(upload_to='badges/')),
                ('achieved_at', models.DateTimeField(auto_now_add=True)),
                ('points', models.IntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='BinaryTree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.CharField(choices=[('left', 'Left'), ('right', 'Right')], max_length=10)),
                ('level', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='core.binarytree')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Commission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=15)),
                ('commission_type', models.CharField(choices=[('referral', 'Referral'), ('binary', 'Binary'), ('rank', 'Rank'), ('pool', 'Pool')], max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('source_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='generated_commissions', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Investment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=15)),
                ('start_date', models.DateTimeField(auto_now_add=True)),
                ('end_date', models.DateTimeField()),
                ('status', models.CharField(choices=[('active', 'Active'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='active', max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.investmentplan')),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('due_date', models.DateTimeField()),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('in_progress', 'In Progress'), ('completed', 'Completed'), ('cancelled', 'Cancelled')], default='pending', max_length=20)),
                ('priority', models.CharField(choices=[('low', 'Low'), ('medium', 'Medium'), ('high', 'High'), ('urgent', 'Urgent')], default='medium', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('assigned_to', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='assigned_tasks', to=settings.AUTH_USER_MODEL)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_tasks', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TokenTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=8, max_digits=25)),
                ('transaction_hash', models.CharField(blank=True, max_length=66, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('from_user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sent_transactions', to=settings.AUTH_USER_MODEL)),
                ('to_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_transactions', to=settings.AUTH_USER_MODEL)),
                ('token', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.customtoken')),
            ],
        ),
        migrations.CreateModel(
            name='UserActivity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity_type', models.CharField(choices=[('login', 'Login'), ('signup', 'Sign Up'), ('investment', 'Investment'), ('withdrawal', 'Withdrawal'), ('referral', 'Referral'), ('profile_update', 'Profile Update'), ('other', 'Other')], max_length=50)),
                ('ip_address', models.GenericIPAddressField(blank=True, null=True)),
                ('user_agent', models.TextField(blank=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('details', models.JSONField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'User Activities',
                'ordering': ['-timestamp'],
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to='profile_pictures/')),
                ('phone_number', models.CharField(blank=True, max_length=20)),
                ('address', models.TextField(blank=True)),
                ('date_of_birth', models.DateField(blank=True, null=True)),
                ('two_factor_enabled', models.BooleanField(default=False)),
                ('two_factor_secret', models.CharField(blank=True, max_length=32)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WebsiteSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('section_type', models.CharField(choices=[('header', 'Header'), ('footer', 'Footer'), ('hero', 'Hero'), ('features', 'Features'), ('testimonials', 'Testimonials'), ('pricing', 'Pricing'), ('contact', 'Contact'), ('custom', 'Custom')], max_length=50)),
                ('content', models.JSONField()),
                ('order', models.IntegerField()),
                ('template', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sections', to='core.websitetemplate')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='PoolParticipant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contribution_amount', models.DecimalField(decimal_places=2, max_digits=15)),
                ('share_percentage', models.DecimalField(decimal_places=2, max_digits=5)),
                ('joined_at', models.DateTimeField(auto_now_add=True)),
                ('pool', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='participants', to='core.pool')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('pool', 'user')},
            },
        ),
        migrations.CreateModel(
            name='UserToken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('balance', models.DecimalField(decimal_places=8, default=0, max_digits=25)),
                ('token', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.customtoken')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tokens', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'token')},
            },
        ),
    ]
